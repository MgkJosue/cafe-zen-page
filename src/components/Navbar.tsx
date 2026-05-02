'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const isActive = (href: string) => pathname === href ? 'active' : ''

  return (
    <>
      <nav id="navbar" aria-label="Main navigation">
        <div className="container nav-inner">

          <Link href="/" className="nav-logo" aria-label="Café Zen on Yew — Home" onClick={close}>
            <Image src="/img/logo.png" alt="Café Zen on Yew" width={60} height={60} priority />
          </Link>

          <ul className="nav-links" role="list">
            <li><Link href="/#about" className={isActive('/')}>About</Link></li>
            <li><Link href="/menu" className={isActive('/menu')}>Menus</Link></li>
            <li><Link href="/contact" className={isActive('/contact')}>Hours &amp; Contact</Link></li>
            <li>
              <a href="tel:6047314018" className="nav-phone">604-731-4018</a>
            </li>
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
      </nav>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        <Link href="/#about" onClick={close}>About</Link>
        <Link href="/menu" onClick={close}>Menus</Link>
        <Link href="/contact" onClick={close}>Hours &amp; Contact</Link>
        <a href="tel:6047314018" className="mobile-phone" onClick={close}>604-731-4018</a>
      </nav>
    </>
  )
}
