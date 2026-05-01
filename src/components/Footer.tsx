import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <Image src="/img/logo.png" alt="Cafe Zen logo" width={56} height={56} style={{ borderRadius: 4, marginBottom: 16 }} />
            <p className="footer-brand-name">Café Zen on Yew</p>
            <p className="footer-tagline">A cozy corner of Kitsilano since 1989</p>
            <p className="footer-desc">Good food, warm space, honest prices. 35 years and still going strong in the heart of Kits.</p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/menu">Our Menus</Link></li>
              <li><Link href="/contact">Hours &amp; Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Visit Us</h4>
            <div className="footer-hours-row" style={{ marginBottom: 14 }}>
              <span className="days">Mon – Sun</span>
              <span className="time">8 AM – 4 PM</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)' }}>
              1631 Yew St<br />Vancouver, BC
            </p>
            <a
              href="tel:6047314018"
              style={{ display: 'inline-block', marginTop: 10, fontSize: '0.9rem', color: 'var(--yellow)', fontWeight: 700 }}
            >
              604-731-4018
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            &copy; 2025 Café Zen on Yew &nbsp;·&nbsp;
            <a href="https://www.instagram.com/cafezenonyew/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
          <p className="footer-built">
            Built by{' '}
            <a href="https://aj-digital-studio.vercel.app" target="_blank" rel="noopener noreferrer">
              AJ Digital Studio
            </a>{' '}
            2025
          </p>
        </div>
      </div>
    </footer>
  )
}
