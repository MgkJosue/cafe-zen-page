'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset all animated elements on every route change before observing
    const els = document.querySelectorAll<HTMLElement>('.fade-in, .fade-in-left, .fade-in-right')

    els.forEach(el => el.classList.remove('visible'))

    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach(el => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
