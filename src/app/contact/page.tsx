import type { Metadata } from 'next'
import Link from 'next/link'
import CheckerDivider from '@/components/CheckerDivider'
import IgIcon from '@/components/IgIcon'
import OpenStatus from '@/components/OpenStatus'

export const metadata: Metadata = {
  title: 'Hours & Contact',
  description:
    'Find Cafe Zen on Yew in Kitsilano, Vancouver. Open daily 8 AM – 4 PM at 1631 Yew St. Call 604-731-4018.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <section className="page-hero" aria-label="Page header">
        <div className="container">
          <span className="script fade-in" style={{ color: 'rgba(255,255,255,0.80)' }}>
            We&rsquo;re right in the heart of Kits
          </span>
          <h1 className="fade-in delay-1">Hours &amp; Contact</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: 12, fontSize: '1.05rem' }} className="fade-in delay-2">
            We&rsquo;re easy to find — and even easier to love.
          </p>
        </div>
      </section>

      <CheckerDivider />

      {/* ── CONTACT DETAILS ────────────────────────────────── */}
      <section className="section" aria-label="Contact information">
        <div className="container">

          {/* Quick strip */}
          <div className="quick-strip fade-in">
            <div>
              <div className="quick-strip-label">Open Daily</div>
              <div className="quick-strip-value">8 AM – 4 PM</div>
            </div>
            <div className="quick-strip-divider">
              <div className="quick-strip-label">Address</div>
              <div className="quick-strip-value quick-strip-value--sm">1631 Yew St, Vancouver</div>
            </div>
            <div className="quick-strip-divider">
              <div className="quick-strip-label">Phone</div>
              <a href="tel:6047314018" style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--white)' }}>
                604-731-4018
              </a>
            </div>
          </div>

          <div className="contact-grid">

            {/* Hours Card */}
            <div className="contact-card fade-in-left">
              <h3 style={{ justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '1.4rem' }} aria-hidden="true">🕗</span>
                  Hours of Operation
                </span>
                <OpenStatus />
              </h3>

              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">☀️</span>
                <div className="contact-detail-text">
                  <strong>Monday – Friday</strong>
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--red)' }}>
                    8:00 AM – 4:00 PM
                  </span>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">🌅</span>
                <div className="contact-detail-text">
                  <strong>Saturday &amp; Sunday</strong>
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--red)' }}>
                    8:00 AM – 4:00 PM
                  </span>
                </div>
              </div>

              <div style={{ marginTop: 20, padding: '16px 20px', background: 'var(--cream-dark)', borderRadius: 6, borderLeft: '3px solid var(--red)' }}>
                <p style={{ fontSize: '0.88rem', color: '#666', fontStyle: 'italic', margin: 0 }}>
                  Kitchen closes at 3:30 PM. Last seating 30 minutes before closing.
                  We recommend arriving by 3:15 PM for a full meal.
                </p>
              </div>

              <div style={{ marginTop: 28 }}>
                <span className="script" style={{ display: 'block', marginBottom: 12, color: 'var(--wood)' }}>
                  Check today&rsquo;s specials before you come
                </span>
                <a
                  href="https://www.instagram.com/cafezenonyew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--yellow"
                  style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}
                >
                  <IgIcon size={18} />
                  @cafezenonyew
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card fade-in-right">
              <h3>
                <span style={{ fontSize: '1.4rem' }} aria-hidden="true">📍</span>
                Location &amp; Contact
              </h3>

              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">🏠</span>
                <div className="contact-detail-text">
                  <strong>Address</strong>
                  <address style={{ fontStyle: 'normal', fontSize: '1.05rem', color: 'var(--charcoal)', lineHeight: 1.5 }}>
                    1631 Yew Street<br />
                    Vancouver, BC V6K 3E5<br />
                    Canada
                  </address>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">📞</span>
                <div className="contact-detail-text">
                  <strong>Phone</strong>
                  <a href="tel:6047314018">604-731-4018</a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">📸</span>
                <div className="contact-detail-text">
                  <strong>Instagram</strong>
                  <a href="https://www.instagram.com/cafezenonyew/" target="_blank" rel="noopener noreferrer">
                    @cafezenonyew
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">🚌</span>
                <div className="contact-detail-text">
                  <strong>Getting Here</strong>
                  <span style={{ fontSize: '0.93rem', color: '#666', display: 'block', marginTop: 4 }}>
                    Street parking on Yew St. Steps from Kitsilano Beach Park.
                    Bus routes nearby on Cornwall Ave.
                  </span>
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <a
                  href="https://www.google.com/maps?cid=3001594824255629885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Map — Full Width */}
            <div className="contact-card contact-card--full fade-in" aria-label="Map">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5835456001!2d-123.15583168432598!3d49.27372457932802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673e3b3b3b3b3%3A0x0!2s1631+Yew+St%2C+Vancouver%2C+BC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  title="Map showing Cafe Zen on Yew at 1631 Yew St, Vancouver, BC"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Instagram Card */}
            <div className="contact-card instagram-card fade-in-left">
              <h3>
                <span style={{ fontSize: '1.4rem' }} aria-hidden="true">📸</span>
                Follow Us on Instagram
              </h3>

              <p className="ig-desc">
                Our daily specials live on Instagram. Before you come in, check what&rsquo;s on
                the chalkboard — we post every morning.
              </p>
              <p className="ig-desc" style={{ fontStyle: 'italic', fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>
                &ldquo;The best way to know what&rsquo;s fresh before the walk over.&rdquo;
              </p>

              <a
                href="https://www.instagram.com/cafezenonyew/"
                target="_blank"
                rel="noopener noreferrer"
                className="ig-follow-btn"
              >
                <IgIcon size={20} />
                Follow @cafezenonyew
              </a>
            </div>

            {/* Menu CTA Card */}
            <div className="contact-card fade-in-right" style={{ background: 'var(--cream-dark)', borderTop: '3px solid var(--red)' }}>
              <h3>
                <span style={{ fontSize: '1.4rem' }} aria-hidden="true">🍽</span>
                Ready to Eat?
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: 24 }}>
                Take a look at our brunch and lunch menus. Rotating specials every day — the full
                menu is always available in-house on our chalkboard.
              </p>

              <Link href="/menu" className="btn btn--primary" style={{ display: 'block', textAlign: 'center', marginBottom: 12 }}>
                View Our Menus
              </Link>
              <a href="tel:6047314018" className="btn btn--wood" style={{ display: 'block', textAlign: 'center' }}>
                Call Us · 604-731-4018
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
