import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CheckerDivider from '@/components/CheckerDivider'
import IgIcon from '@/components/IgIcon'

export const metadata: Metadata = {
  title: 'Our Menus',
  description:
    'Brunch and lunch menus at Cafe Zen on Yew, Kitsilano. Fresh, honest food served daily 8 AM – 4 PM at 1631 Yew St, Vancouver.',
}

export default function MenuPage() {
  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <section className="page-hero" aria-label="Page header">
        <div className="container">
          <span className="page-hero-eyebrow fade-in">Café Zen on Yew · Kitsilano</span>
          <h1 className="fade-in delay-1" style={{ color: 'var(--white)', position: 'relative', zIndex: 1 }}>Our Menus</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: 16, fontSize: '0.95rem', letterSpacing: '0.02em', position: 'relative', zIndex: 1 }} className="fade-in delay-2">
            Good ingredients, fair prices, food that fills you up.
          </p>
        </div>
      </section>

      <CheckerDivider />

      {/* ── MENU SECTION ───────────────────────────────────── */}
      <section className="section" aria-label="Food menus">
        <div className="container">

          <div className="menu-intro fade-in">
            <p>
              Our menus change with the seasons and the chalkboard. What stays the same: good ingredients,
              fair prices, and food that actually fills you up. Come hungry. Leave happy.
            </p>
          </div>

          <div className="menu-note fade-in">
            <strong>📋 Heads up:</strong> We rotate our specials daily. The images below show our regular menu.
            For today&rsquo;s specials, check our{' '}
            <a href="https://www.instagram.com/cafezenonyew/" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--red)', fontWeight: 700 }}>
              Instagram
            </a>{' '}
            or ask your server.
          </div>

          <div className="menu-cards">

            {/* BRUNCH CARD */}
            <article className="menu-card fade-in-left" aria-label="Brunch menu">
              <div className="menu-card-header">
                <span className="card-eyebrow">Served daily · 8 AM – 4 PM</span>
                <h2>Brunch Menu</h2>
              </div>
              <div className="menu-card-body">
                <p>
                  Eggs done every way you want them. Pancakes that mean business. French toast that&rsquo;ll
                  make you stay a second hour. Our brunch is the kind that becomes a ritual.
                </p>

                <div className="menu-images">
                  <div className="menu-img-placeholder">
                    <Image src="/img/food3.png" alt="Eggs benedict with hollandaise and home fries" fill unoptimized style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="menu-img-placeholder">
                    <Image src="/img/food1.png" alt="Pancakes with blueberries, eggs and sausages" fill unoptimized style={{ objectFit: 'cover' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:6047314018" className="btn btn--primary">Reserve a Table</a>
                  <Link href="/contact" className="btn btn--wood">Hours &amp; Location</Link>
                </div>
              </div>
            </article>

            {/* LUNCH CARD */}
            <article className="menu-card fade-in-right" aria-label="Lunch menu">
              <div className="menu-card-header wood-header">
                <span className="card-eyebrow">Served daily · 11 AM – 4 PM</span>
                <h2>Lunch Menu</h2>
              </div>
              <div className="menu-card-body">
                <p>
                  Soups that warm you up. Sandwiches you&rsquo;ll want to eat outside. Salads with actual substance.
                  Lunch at Cafe Zen is casual, quick if you need it, unhurried if you don&rsquo;t.
                </p>

                <div className="menu-images">
                  <div className="menu-img-placeholder">
                    <Image src="/img/food4.png" alt="Omelette with avocado, tomatoes and fresh toppings" fill unoptimized style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="menu-img-placeholder">
                    <Image src="/img/food2.png" alt="Avocado toast with poached egg and runny yolk" fill unoptimized style={{ objectFit: 'cover' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a href="tel:6047314018" className="btn btn--primary">Call to Order</a>
                  <Link href="/contact" className="btn btn--wood">Hours &amp; Location</Link>
                </div>
              </div>
            </article>

          </div>

          {/* Features — editorial numbered grid */}
          <div className="menu-features fade-in">
            {[
              { n: '01', title: 'Vegetarian Options', desc: 'Clearly marked on the menu for every dish.' },
              { n: '02', title: 'Made Fresh Daily', desc: 'No reheating. No shortcuts. Ever.' },
              { n: '03', title: 'Fair Prices', desc: "Great food shouldn't cost a fortune." },
              { n: '04', title: 'Allergy Friendly', desc: 'Our staff are happy to help with any questions.' },
            ].map(item => (
              <div key={item.title} className="menu-feature-item">
                <span className="menu-feature-num">{item.n}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CheckerDivider small />

      {/* ── INSTAGRAM STRIP ────────────────────────────────── */}
      <section className="instagram-section" style={{ padding: '60px 0' }} aria-label="Instagram">
        <div className="container instagram-inner">
          <div className="fade-in">
            <h2>Today&rsquo;s Specials Are on Instagram</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 420, margin: '12px auto 24px', fontSize: '0.95rem' }}>
              The chalkboard changes every morning. Follow us to see what&rsquo;s fresh before you make the trip.
            </p>
            <a href="https://www.instagram.com/cafezenonyew/" target="_blank" rel="noopener noreferrer" className="instagram-handle">
              <IgIcon size={22} />
              @cafezenonyew
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
