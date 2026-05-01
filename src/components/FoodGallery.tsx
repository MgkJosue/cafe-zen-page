import Image from 'next/image'
import Link from 'next/link'

const PHOTOS = [
  { src: '/img/food1.png', alt: 'Fluffy pancakes with blueberries, eggs and sausage' },
  { src: '/img/food2.png', alt: 'Avocado toast with poached egg and runny yolk' },
  { src: '/img/food3.png', alt: 'Eggs benedict with hollandaise and home fries' },
  { src: '/img/food7.png', alt: 'Full breakfast plate with eggs, sausage and toast' },
  { src: '/img/food4.png', alt: 'Omelette with avocado, tomatoes and green onions' },
  { src: '/img/food9.png', alt: 'Open-faced egg dish with melted cheese' },
]

export default function FoodGallery() {
  return (
    <section className="section gallery-section" aria-label="Food gallery">
      <div className="container">
        <div className="gallery-header fade-in">
          <span className="section-label">Fresh Every Morning</span>
          <h2 className="section-title">From Our Kitchen</h2>
        </div>

        <div className="gallery-grid">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className={`gallery-item fade-in delay-${Math.min(i % 3 + 1, 4)}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        <div className="gallery-cta fade-in">
          <Link href="/menu" className="btn btn--primary">See Our Full Menu</Link>
          <a
            href="https://www.instagram.com/cafezenonyew/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wood"
          >
            More on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
