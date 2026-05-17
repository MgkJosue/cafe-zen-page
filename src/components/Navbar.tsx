'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)
  const isActive = (href: string) => pathname === href ? 'active' : ''

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''} aria-label="Main navigation">
        <div className="container nav-inner">

          {/* Left links */}
          <ul className="nav-links nav-links--left" role="list">
            <li><Link href="/#about" className={isActive('/')}>About</Link></li>
            <li><Link href="/menu" className={isActive('/menu')}>Menus</Link></li>
          </ul>

          {/* Center — logo */}
          <Link href="/" className="nav-logo" aria-label="Café Zen on Yew — Home" onClick={close}>
            <Image
              src="/img/logo-zen.png"
              alt="Café Zen on Yew"
              width={96}
              height={96}
              priority
              className="nav-logo-img"
            />
          </Link>

          {/* Right links + hamburger */}
          <div className="nav-right">
            <ul className="nav-links nav-links--right" role="list">
              <li><Link href="/contact" className={isActive('/contact')}>Hours &amp; Contact</Link></li>
              <li><a href="tel:6047314018" className="nav-phone">604-731-4018</a></li>
            </ul>
            <button
              className={`hamburger${open ? ' open' : ''}`}
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile overlay */}
      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-logo">
          <Image src="/img/logo-zen.png" alt="Café Zen on Yew" width={80} height={80} />
        </div>
        <Link href="/#about" onClick={close}>About</Link>
        <Link href="/menu" onClick={close}>Menus</Link>
        <Link href="/contact" onClick={close}>Hours &amp; Contact</Link>
        <a href="tel:6047314018" className="mobile-phone" onClick={close}>604-731-4018</a>
      </nav>
    </>
  )
}
