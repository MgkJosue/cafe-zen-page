'use client'

import { useEffect, useState } from 'react'

function getVancouverStatus(): { open: boolean; label: string } {
  // Vancouver is America/Vancouver — UTC-8 (PST) or UTC-7 (PDT)
  const now = new Date()
  const vancouver = new Date(now.toLocaleString('en-US', { timeZone: 'America/Vancouver' }))
  const hour = vancouver.getHours()
  const minute = vancouver.getMinutes()
  const totalMinutes = hour * 60 + minute

  // Open 8:00 AM – 4:00 PM, kitchen closes 3:30 PM
  const openTime = 8 * 60       // 480
  const closeTime = 16 * 60     // 960
  const kitchenClose = 15 * 60 + 30  // 930

  if (totalMinutes >= openTime && totalMinutes < kitchenClose) {
    // Closing within the hour?
    const minutesLeft = kitchenClose - totalMinutes
    if (minutesLeft <= 60) {
      return { open: true, label: `Kitchen closes in ${minutesLeft} min` }
    }
    return { open: true, label: 'Open now · Closes at 4 PM' }
  }

  if (totalMinutes >= kitchenClose && totalMinutes < closeTime) {
    return { open: true, label: 'Open · Kitchen closing soon' }
  }

  // Closed — show when we open next
  if (totalMinutes < openTime) {
    const minutesUntil = openTime - totalMinutes
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
