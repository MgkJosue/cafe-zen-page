import type { Metadata } from 'next'
import CheckerDivider from '@/components/CheckerDivider'
import IgIcon from '@/components/IgIcon'

export const metadata: Metadata = {
  title: 'Our Menu',
  description:
    'Breakfast, lunch and drinks at Cafe Zen on Yew, Kitsilano. Fresh food served daily 8 AM – 4 PM at 1631 Yew St, Vancouver.',
}

function Item({ name, price, desc }: { name: string; price: string; desc?: string }) {
  return (
    <div className="menu-row">
      <div className="menu-row-top">
        <span className="menu-row-name">{name}</span>
        <span className="menu-row-price">${price}</span>
      </div>
      {desc && <p className="menu-row-desc">{desc}</p>}
    </div>
  )
}

function CatLabel({ children, note }: { children: React.ReactNode; note?: string }) {
  return (
    <div className="menu-cat-header">
      <p className="menu-cat-title">{children}</p>
      {note && <p className="menu-cat-note">{note}</p>}
    </div>
  )
}

export default function MenuPage() {
  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────────── */}
      <section className="page-hero" aria-label="Page header">
        <div className="container">
          <span className="page-hero-eyebrow fade-in">Café Zen on Yew · Kitsilano</span>
          <h1 className="fade-in delay-1" style={{ color: 'var(--white)', position: 'relative', zIndex: 1 }}>
            Our Menu
          </h1>
          <p
            className="fade-in delay-2"
            style={{ color: 'rgba(255,255,255,0.55)', marginTop: 16, fontSize: '0.95rem', letterSpacing: '0.02em', position: 'relative', zIndex: 1 }}
          >
            Good ingredients, fair prices, food that fills you up.
          </p>
        </div>
      </section>

      {/* ── ANCHOR NAV ────────────────────────────────────────── */}
      <nav className="menu-anchor-nav" aria-label="Menu sections">
        <div className="container menu-anchor-inner">
          <a href="#breakfast" className="menu-anchor-link">Breakfast</a>
          <a href="#lunch" className="menu-anchor-link">Lunch</a>
          <a href="#drinks" className="menu-anchor-link">Drinks</a>
        </div>
      </nav>

      {/* ── BREAKFAST ─────────────────────────────────────────── */}
      <section id="breakfast" className="menu-section-block section" aria-label="Breakfast menu">
        <div className="container">

          <div className="menu-section-header fade-in">
            <span className="section-label">Served daily · 8 AM – 4 PM</span>
            <h2>Breakfast</h2>
          </div>

          {/* Zen Classic */}
          <div className="menu-cat fade-in">
            <CatLabel>Zen Classic</CatLabel>
            <Item
              name="The Classic"
              price="13"
              desc="Two eggs (any style), hashbrowns, toast & salad."
            />
            <div className="menu-extras">
              <span className="menu-extras-label">Add to your plate</span>
              <span>
                Protein — Ham / Bacon / Sausage / Turkey Sausage / Chorizo +$5 &nbsp;·&nbsp;
                Veg — Roast Mushroom / Avocado / Fried Beans / Grilled Tomato +$4 &nbsp;·&nbsp;
                Something Sweet — Waffle / Pancake / French Toast +$6
              </span>
            </div>
            <div className="menu-extras" style={{ marginTop: 6 }}>
              <span className="menu-extras-label">Extras</span>
              <span>
                Hollandaise Sauce $3 &nbsp;·&nbsp; Extra Egg $2 &nbsp;·&nbsp; Sub Egg Whites $2 &nbsp;·&nbsp; Hashbrowns $3 &nbsp;·&nbsp; Toast $3
              </span>
            </div>
          </div>

          {/* Signature */}
          <div className="menu-cat fade-in">
            <CatLabel>Signature</CatLabel>
            <div className="menu-items-cols">
              <Item name="Lumberjack Breakfast" price="24" desc="Pancake, waffles or French toast with two eggs, hashbrowns and bacon / ham / sausage. Make it blueberry crumble! +$2" />
              <Item name="Tapatíos" price="23" desc="Scrambled eggs, chorizo sausage, avocado, green onions, cilantro, feta & pico de gallo, flour tortilla. Hashbrowns." />
              <Item name="Rancheros" price="22" desc="Scrambled eggs, bell peppers, tomato, onion, jalapeño, refried beans, cheddar. Hashbrowns. Sub tofu – no charge." />
              <Item name="Breakfast Poutine" price="19" desc="Hashbrowns, bacon, gravy, cheese curds, two eggs, hollandaise, scallions." />
              <Item name="Mini Munchwich" price="14" desc="Bacon, egg, cheddar, English muffin. Hashbrowns and salad." />
              <Item name="Avocado Toast" price="21" desc="Cream cheese, pumpkin seeds, everything bagel seasoning, avocado, alfalfa sprouts, poached egg, sourdough toast. Hashbrowns and salad." />
              <Item name="Chicken 'n' Waffles" price="24" desc="Crispy chicken breast, waffles, hot honey drizzle, organic maple syrup. Hashbrowns and salad." />
            </div>
          </div>

          {/* Sweets */}
          <div className="menu-cat fade-in">
            <CatLabel note="Served with organic maple syrup & berry compote">Sweets</CatLabel>
            <div className="menu-items-cols">
              <Item name="Signature Blueberry Crumble Pancakes" price="20" />
              <Item name="2 Buttermilk Pancakes" price="15.50" />
              <Item name="French Toast" price="18.50" />
              <Item name="House-made Waffles" price="18.50" />
            </div>
            <div className="menu-extras">
              <span className="menu-extras-label">Add-ons</span>
              <span>Whipped Cream $2 &nbsp;·&nbsp; Hazelnut Spread $2.25 &nbsp;·&nbsp; Fresh Strawberries $3 &nbsp;·&nbsp; Chocolate Chips $1</span>
            </div>
          </div>

          {/* Eggs Benedict */}
          <div className="menu-cat fade-in">
            <CatLabel>Eggs Benedict</CatLabel>
            <div className="menu-items-cols">
              <Item name="Traditional" price="20" desc="Ham or bacon." />
              <Item name="Roast Mushroom Pesto" price="21" desc="Herb roasted mushrooms, pesto." />
              <Item name="Chorizo" price="21" desc="Mild chorizo sausage, bell peppers." />
              <Item name="B.C." price="23" desc="Smoked salmon, crispy capers, dill." />
              <Item name="Cali" price="21" desc="Avocado & tomato." />
              <Item name="Crab Avocado" price="24" desc="Avocado & tomato." />
            </div>
          </div>

          {/* Omelettes & Scrambles */}
          <div className="menu-cat fade-in">
            <CatLabel note="All served with hashbrowns and house salad">Omelettes &amp; Scrambles</CatLabel>
            <div className="menu-items-cols">
              <Item name="Zen Some" price="21" desc="Bacon, roast mushrooms, cheddar, caramelized onion, toast." />
              <Item name="West Coast" price="23" desc="Smoked salmon, dill cream cheese, red onion, toast." />
              <Item name="Avocado" price="20" desc="Avocado, feta, dill, toast." />
              <Item name="Garden" price="21" desc="Avocado, cheddar, bell peppers, tomato, caramelized onions, arugula, roasted mushrooms, toast." />
            </div>
          </div>

        </div>
      </section>

      <CheckerDivider />

      {/* ── LUNCH ─────────────────────────────────────────────── */}
      <section id="lunch" className="menu-section-block section section--alt" aria-label="Lunch menu">
        <div className="container">

          <div className="menu-section-header fade-in">
            <span className="section-label">Served daily · 11 AM – 4 PM</span>
            <h2>Lunch</h2>
          </div>

          <div className="menu-cat fade-in" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
            <p className="menu-cat-note" style={{ marginBottom: 24 }}>
              All sandwiches and burgers served with fries &amp; house salad.
            </p>
            <div className="menu-items-cols">
              <Item name="Yummy Wrap" price="23" desc="Pesto chicken, cheddar, bacon, avocado, lettuce, tomato, red onion, garlic confit aioli, wheat tortilla." />
              <Item name="B.E.L.T.C.H" price="19" desc="Bacon, egg, lettuce, tomato, cheddar, hot honey aioli, sourdough." />
              <Item name="Zen Burger" price="22" desc="5 oz beef patty, bacon, pickles, cheddar, lettuce, tomato, sautéed onion, Zen sauce." />
              <Item name="Spicy Chicken Burger" price="23" desc="Spicy chicken breast, bacon, lettuce, hot honey aioli, pickles." />
              <Item name="Club Sandwich" price="23" desc="Toasted sourdough, chicken breast, lettuce, tomato, cheddar, avocado, mayo, bacon." />
              <Item name="Meatball Sub" price="22" desc="House-made meatballs, tomato sauce, provolone, toasted hoagie." />
              <Item name="Zen Some Salad" price="23" desc="Chicken breast, mixed greens, avocado, chickpeas, bell peppers, tomato, red onion, cucumber, feta, quinoa, almonds, chia, Zen dressing, garlic bread." />
            </div>
          </div>

        </div>
      </section>

      <CheckerDivider />

      {/* ── DRINKS ────────────────────────────────────────────── */}
      <section id="drinks" className="menu-section-block section" aria-label="Drinks menu">
        <div className="container">

          <div className="menu-section-header fade-in">
            <span className="section-label">Available all day</span>
            <h2>Drinks</h2>
          </div>

          <div className="menu-drinks-grid fade-in">

            {/* Hot */}
            <div className="menu-drinks-col">
              <CatLabel>Hot</CatLabel>
              <Item name="Drip Coffee" price="4.25" />
              <Item name="Organic Loose-Leaf Tea" price="4.50" desc="Earl Grey, English Breakfast, Green Sencha." />
              <Item name="Latte / Cappuccino" price="6.25" />
              <Item name="London Fog" price="6.50" />
              <Item name="House Chai Latte" price="6.50" />
              <Item name="Gourmet Hot Chocolate" price="5.50" />
              <Item name="Americano / Espresso" price="4" />
              <div className="menu-extras">
                <span className="menu-extras-label">Add-ons</span>
                <span>Flavour Shot $1 &nbsp;·&nbsp; Almond / Oat Milk $1</span>
              </div>
            </div>

            {/* Cold */}
            <div className="menu-drinks-col">
              <CatLabel>Cold</CatLabel>
              <Item name="Orange / Grapefruit Juice" price="5.85" />
              <Item name="Apple / Cranberry Juice" price="3.50" />
              <Item name="Homemade Organic Iced Tea" price="4" />
              <Item name="Pop" price="3" />
              <Item name="Sparkling Lemonade" price="4" desc="Ask us about flavours!" />
            </div>

            {/* Liquor */}
            <div className="menu-drinks-col">
              <CatLabel>Bottles &amp; Cans (473 ml)</CatLabel>
              <Item name="Red Truck Lager" price="7" />
              <Item name="Monster Jam IPA" price="8" />
              <Item name="Corona" price="8" />
              <Item name="Pilsner" price="8" />
              <Item name="Cider" price="8" />
              <div className="menu-drinks-subcol">
                <CatLabel>Cocktails</CatLabel>
                <Item name="Aperol Spritz (6 oz)" price="7.50" />
                <Item name="Mimosa (6 oz)" price="7.50" desc="Orange, Mango, or Grapefruit." />
                <Item name="Caesar (1 oz)" price="7.50" />
                <Item name="Baileys Coffee (1 oz)" price="7.50" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <CheckerDivider small />

      {/* ── INSTAGRAM STRIP ───────────────────────────────────── */}
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
