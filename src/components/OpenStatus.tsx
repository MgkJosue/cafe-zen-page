'use client'

import { useEffect, useState } from 'react'

// Hours:
//   Weekdays              8:00 AM – 2:30 PM
//   Weekends & holidays   8:00 AM – 4:00 PM
// Kitchen closes 30 min before closing.
const OPEN_TIME = 8 * 60                 // 480
const WEEKDAY_CLOSE = 14 * 60 + 30       // 870
const WEEKEND_CLOSE = 16 * 60            // 960
const KITCHEN_BUFFER = 30

function nthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): number {
  const firstDay = new Date(year, month, 1).getDay()
  return 1 + ((weekday - firstDay + 7) % 7) + (n - 1) * 7
}

function easterSunday(year: number): Date {
  // Anonymous Gregorian algorithm
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(year, month, day)
}

// British Columbia statutory holidays
function isHoliday(date: Date): boolean {
  const y = date.getFullYear()
  const m = date.getMonth()
  const d = date.getDate()
  const is = (month: number, day: number) => m === month && d === day

  const goodFriday = easterSunday(y)
  goodFriday.setDate(goodFriday.getDate() - 2)

  // Victoria Day: last Monday before May 25
  const may24 = new Date(y, 4, 24).getDay()
  const victoriaDay = 24 - ((may24 + 6) % 7)

  return (
    is(0, 1) ||                                          // New Year's Day
    is(1, nthWeekdayOfMonth(y, 1, 1, 3)) ||              // Family Day
    is(goodFriday.getMonth(), goodFriday.getDate()) ||   // Good Friday
    is(4, victoriaDay) ||                                // Victoria Day
    is(6, 1) ||                                          // Canada Day
    is(7, nthWeekdayOfMonth(y, 7, 1, 1)) ||              // B.C. Day
    is(8, nthWeekdayOfMonth(y, 8, 1, 1)) ||              // Labour Day
    is(8, 30) ||                                         // Truth and Reconciliation
    is(9, nthWeekdayOfMonth(y, 9, 1, 2)) ||              // Thanksgiving
    is(10, 11) ||                                        // Remembrance Day
    is(11, 25)                                           // Christmas Day
  )
}

function closeTimeFor(date: Date): number {
  const day = date.getDay()
  const weekend = day === 0 || day === 6
  return weekend || isHoliday(date) ? WEEKEND_CLOSE : WEEKDAY_CLOSE
}

function formatTime(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  const suffix = h >= 12 ? 'PM' : 'AM'
  const h12 = h % 12 === 0 ? 12 : h % 12
  return m === 0 ? `${h12} ${suffix}` : `${h12}:${String(m).padStart(2, '0')} ${suffix}`
}

function getVancouverStatus(): { open: boolean; label: string } {
  // Vancouver is America/Vancouver — UTC-8 (PST) or UTC-7 (PDT)
  const now = new Date()
  const vancouver = new Date(now.toLocaleString('en-US', { timeZone: 'America/Vancouver' }))
  const totalMinutes = vancouver.getHours() * 60 + vancouver.getMinutes()

  const closeTime = closeTimeFor(vancouver)
  const kitchenClose = closeTime - KITCHEN_BUFFER

  if (totalMinutes >= OPEN_TIME && totalMinutes < kitchenClose) {
    // Closing within the hour?
    const minutesLeft = kitchenClose - totalMinutes
    if (minutesLeft <= 60) {
      return { open: true, label: `Kitchen closes in ${minutesLeft} min` }
    }
    return { open: true, label: `Open now · Closes at ${formatTime(closeTime)}` }
  }

  if (totalMinutes >= kitchenClose && totalMinutes < closeTime) {
    return { open: true, label: 'Open · Kitchen closing soon' }
  }

  // Closed — show when we open next
  if (totalMinutes < OPEN_TIME) {
    const minutesUntil = OPEN_TIME - totalMinutes
    if (minutesUntil <= 60) {
      return { open: false, label: `Opens in ${minutesUntil} min` }
    }
    return { open: false, label: 'Closed · Opens at 8 AM' }
  }

  return { open: false, label: 'Closed · Opens at 8 AM tomorrow' }
}

export default function OpenStatus() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null)

  useEffect(() => {
    setStatus(getVancouverStatus())
    const interval = setInterval(() => setStatus(getVancouverStatus()), 60_000)
    return () => clearInterval(interval)
  }, [])

  if (!status) return null

  return (
    <span className={`open-status ${status.open ? 'open-status--open' : 'open-status--closed'}`}>
      <span className="open-status-dot" aria-hidden="true" />
      {status.label}
    </span>
  )
}
