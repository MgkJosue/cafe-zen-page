import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <p className="footer-brand-name">Café Zen on Yew</p>
            <p className="footer-tagline">Kitsilano, Vancouver · Est. 1989</p>
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
            <div className="footer-hours-row" style={{ marginBottom: 16 }}>
              <span className="days">Mon – Sun</span>
              <span className="time">8 AM – 4 PM</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.7 }}>
              1631 Yew St<br />Vancouver, BC
            </p>
            <a
              href="tel:6047314018"
              style={{ display: 'inline-block', marginTop: 12, fontSize: '0.88rem', color: 'var(--green-pale)', fontWeight: 700, letterSpacing: '0.04em' }}
            >
              604-731-4018
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            &copy; 2026 Café Zen on Yew &nbsp;·&nbsp;
            <a href="https://www.instagram.com/cafezenonyew/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
          <p className="footer-built">
            Built by{' '}
            <a href="https://aj-digital-studio.vercel.app" target="_blank" rel="noopener noreferrer">
              AJ Digital Studio
            </a>{' '}
            2026
          </p>
        </div>
      </div>
    </footer>
  )
}
