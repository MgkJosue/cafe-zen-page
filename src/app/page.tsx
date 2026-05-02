import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CheckerDivider from '@/components/CheckerDivider'
import IgIcon from '@/components/IgIcon'
import Reviews from '@/components/Reviews'
import OpenStatus from '@/components/OpenStatus'
import FoodGallery from '@/components/FoodGallery'

export const metadata: Metadata = {
  title: 'Cafe Zen on Yew — Brunch & Lunch in Kitsilano, Vancouver',
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">
        <Image
          src="/img/hero.png"
          alt="Cafe Zen signature brunch"
          fill
          priority
          unoptimized
          style={{ objectFit: 'cover', objectPosition: '65% center' }}
        />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="container hero-content">
          <span className="hero-eyebrow fade-in">Kitsilano, Vancouver · Est. 1989</span>

          <h1 className="fade-in delay-1">
            Good food.<br />
            <em>Warm mornings.</em>
          </h1>

          <p className="hero-sub fade-in delay-2">
            Brunch <span>·</span> Lunch <span>·</span> Kitsilano
          </p>

          <div className="hero-cta fade-in delay-3">
            <Link href="/menu" className="btn btn--primary">View Menus</Link>
            <Link href="/contact" className="btn btn--outline">Find Us</Link>
          </div>
        </div>

        <span className="hero-tagline" aria-hidden="true">1631 Yew St · Vancouver · BC</span>
      </section>

      <CheckerDivider />

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-grid">

            <div className="about-visual fade-in-left">
              <div className="about-zen-box" aria-hidden="true">
                <span className="about-zen-char">禅</span>
                <span className="about-zen-label">Peace · Nourishment · Community</span>
              </div>
              <div className="about-year-pill" aria-label="Since 1989">
                <span className="year-num">1989</span>
                <span className="year-label">Est.</span>
              </div>
            </div>

            <div className="fade-in-right">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">A cozy corner of Kits,<br />going strong since 1989</h2>

              <p>Cafe Zen has been a Kitsilano favourite for over 35 years — a place where the food is honest, the prices are fair, and you always feel at home. We believe a great meal doesn&rsquo;t need to be complicated or expensive.</p>

              <p>Warm floors, chalkboard specials, and real food made with care. The neighbourhood spot that&rsquo;s been here through all of it.</p>

              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon" aria-hidden="true">🍳</div>
                  <p><strong>Fresh brunch &amp; lunch daily</strong> — open 8 AM to 4 PM, seven days a week.</p>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon" aria-hidden="true">🌿</div>
                  <p><strong>Honest, approachable prices</strong> — good food shouldn&rsquo;t cost a fortune.</p>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon" aria-hidden="true">📍</div>
                  <p><strong>1631 Yew St</strong> — steps from Kitsilano Beach, heart of the neighbourhood.</p>
                </div>
              </div>

              <div style={{ marginTop: 40 }}>
                <Link href="/menu" className="btn btn--primary">See What&rsquo;s Cooking</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOD GALLERY ───────────────────────────────────── */}
      <FoodGallery />

      <CheckerDivider />

      {/* ── HOURS & LOCATION ───────────────────────────────── */}
      <section id="hours" className="section section--alt" aria-label="Hours and location">
        <div className="container">

          <div className="fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Come Find Us</span>
            <h2 className="section-title">Hours &amp; Location</h2>
            <p className="section-intro" style={{ margin: '0 auto' }}>
              Open every day — rain or shine. This is Vancouver and you&rsquo;re hungry.
            </p>
          </div>

          <div className="hours-grid">

            <div className="info-card fade-in delay-1">
              <h3 style={{ justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="card-icon" aria-hidden="true">🕗</span> Hours
                </span>
                <OpenStatus />
              </h3>

              <div className="hours-row">
                <span className="hours-day">Monday – Friday</span>
                <span className="hours-time">8 AM – 4 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Saturday &amp; Sunday</span>
                <span className="hours-time">8 AM – 4 PM</span>
              </div>
              <p className="hours-note">Kitchen closes at 3:30 PM. Last seating 30 min before close.</p>

              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--cream-dark)' }}>
                <p className="script" style={{ marginBottom: 14 }}>
                  Daily specials on our chalkboard &amp; Instagram
                </p>
                <a
                  href="https://www.instagram.com/cafezenonyew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--yellow"
                >
                  Follow Daily Specials
                </a>
              </div>
            </div>

            <div className="info-card fade-in delay-2">
              <h3><span className="card-icon" aria-hidden="true">📍</span> Find Us</h3>

              <div className="location-item">
                <span className="location-icon" aria-hidden="true">🏠</span>
                <div>
                  <strong style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 4 }}>Address</strong>
                  <span>1631 Yew St, Vancouver, BC</span>
                </div>
              </div>

              <div className="location-item">
                <span className="location-icon" aria-hidden="true">📞</span>
                <div>
                  <strong style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 4 }}>Phone</strong>
                  <a href="tel:6047314018">604-731-4018</a>
                </div>
              </div>

              <div className="location-item">
                <span className="location-icon" aria-hidden="true">🚗</span>
                <div>
                  <strong style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 4 }}>Getting Here</strong>
                  <span style={{ fontSize: '0.9rem', color: '#888' }}>Street parking on Yew St. Steps from Kitsilano Beach Park.</span>
                </div>
              </div>

              <div className="map-placeholder" aria-label="Map showing Cafe Zen location">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.153!3d49.2737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673e3b3b3b3b3%3A0x0!2s1631+Yew+St%2C+Vancouver%2C+BC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  title="Cafe Zen on Yew location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <CheckerDivider />

      {/* ── REVIEWS ────────────────────────────────────────── */}
      <Reviews />

      <CheckerDivider />

      {/* ── INSTAGRAM CTA ──────────────────────────────────── */}
      <section className="instagram-section" aria-label="Follow us on Instagram">
        <div className="container instagram-inner">
          <div className="fade-in">
            <span className="section-label" style={{ justifyContent: 'center', color: 'var(--green-pale)', marginBottom: 24 }}>
              What&rsquo;s fresh today
            </span>
            <h2>Follow Us on Instagram</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 420, margin: '16px auto 0', fontSize: '0.95rem', lineHeight: 1.8 }}>
              Our chalkboard changes every morning. See what&rsquo;s fresh before you come in.
            </p>
            <a
              href="https://www.instagram.com/cafezenonyew/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-handle"
            >
              <IgIcon size={16} />
              @cafezenonyew
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
