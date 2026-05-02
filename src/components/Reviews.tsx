import Link from 'next/link'

const REVIEWS = [
  {
    name: 'Doug Giordano',
    rating: 5,
    source: 'Google',
    date: '2026',
    quote: 'My favourite breakfast place in Vancouver and best eggs Benny anywhere. Period.',
  },
  {
    name: 'Bella M.',
    rating: 5,
    source: 'Google',
    date: '2025',
    quote:
      'What a lovely spot! Cafe Zen offers a variety of nutritious, delicious, and reasonably priced dishes. The staff are warm and friendly. A lovely walk up from the beach — Cafe Zen is worth every visit.',
  },
  {
    name: 'NauticalNeilP',
    rating: 5,
    source: 'TripAdvisor',
    date: 'Feb 2024',
    quote:
      'What a find!! Had brunch on Saturday and are we ever happy we got the table. Coffee was excellent, as were my club sandwich and my wife\'s avocado toast. Highly recommend.',
  },
  {
    name: 'bjc360',
    rating: 5,
    source: 'TripAdvisor',
    date: 'Aug 2023',
    quote:
      'The bun was just perfect and the sauce really delicious. I would put this into the Must Visit category. One of the best brunches I\'ve had in Vancouver.',
  },
  {
    name: 'Emiliano P.',
    rating: 5,
    source: 'Google',
    date: '2025',
    quote:
      'Fantastic morning spot — get the caesar, you won\'t regret it. Friendly service, seated quickly on a busy Sunday at noon. Potatoes perfectly cooked. Already planning my next visit.',
  },
  {
    name: 'drpetr68',
    rating: 4,
    source: 'TripAdvisor',
    date: 'Sep 2023',
    quote:
      'Never disappoints! Old fashioned eggs, toast, waffles, pancakes, juice and coffee done right. A proper neighbourhood spot that\'s stayed consistent for years.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="review-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'star filled' : 'star empty'}>★</span>
      ))}
    </div>
  )
}

function SourceBadge({ source }: { source: string }) {
  const isGoogle = source === 'Google'
  return (
    <span className={`review-source-badge ${isGoogle ? 'badge--google' : 'badge--tripadvisor'}`}>
      {isGoogle ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#34E0A1" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 15l-3.75 2.7 1.5-4.5L6 10.5h4.5z" fill="white"/>
        </svg>
      )}
      {source}
    </span>
  )
}

export default function Reviews() {
  return (
    <section className="section reviews-section" aria-label="Customer reviews">
      <div className="container">

        <div className="reviews-header fade-in" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>What Kitsilano Says</span>
          <h2 className="section-title">35 Years of Happy Regulars</h2>

          <div className="reviews-overall">
            <div className="reviews-overall-score">
              <span className="score-number">4.4</span>
              <div className="score-right">
                <div className="score-stars">★★★★★</div>
                <span className="score-count">Based on 728+ Google reviews</span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?cid=3001594824255629885"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-dark"
            >
              See All Reviews
            </a>
          </div>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <article
              key={review.name}
              className={`review-card fade-in delay-${Math.min(i % 3 + 1, 4)}`}
              aria-label={`Review by ${review.name}`}
            >
              <div className="review-card-top">
                <Stars count={review.rating} />
                <SourceBadge source={review.source} />
              </div>
              <blockquote className="review-quote">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="review-footer">
                <div className="review-avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="review-name">{review.name}</p>
                  <p className="review-date">{review.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews-cta fade-in">
          <a
            href="https://www.google.com/maps?cid=3001594824255629885"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Read All Reviews on Google
          </a>
        </div>

      </div>
    </section>
  )
}
