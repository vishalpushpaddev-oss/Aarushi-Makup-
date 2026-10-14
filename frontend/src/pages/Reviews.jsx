import { IMG, brand, testimonials, ratings } from '../data/site'
import { PageHero, Reveal, SectionHead, Button } from '../components/ui'
import Ratings from '../components/Ratings'

const total = ratings.reduce((n, r) => n + r.count, 0)

export default function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews of Aarushi Makeup Studio, Mhow"
        title="Loved by our <em>clients</em>"
        text={`Rated 5.0★ from ${total} ratings on Justdial and Google. Here's what our clients wrote — in their own words.`}
        img={IMG.realBride1}
      />

      <section className="section">
        <div className="container">
          <div className="rv-summary">
            <Reveal className="rv-score">
              <strong>5.0</strong>
              <span className="rv-score__stars" aria-label="5 out of 5 stars">★★★★★</span>
              <small>{total} ratings across Justdial &amp; Google</small>
            </Reveal>
            <Reveal delay={100} className="rv-summary__side">
              <p className="lead">Every review below is copied as written by the client on Justdial, with the date it was posted.</p>
              <Ratings />
            </Reveal>
          </div>

          <div className="rv-grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 80} className="rv-card">
                <span className="rv-card__stars" aria-label="5 stars">★★★★★</span>
                <p className="rv-card__text">{t.text}</p>
                <div className="rv-card__tags">
                  {t.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="rv-card__who">
                  <span className="testi__avatar" aria-hidden="true">{t.name.charAt(0)}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <small>{t.date} · {t.source} review</small>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container rv-cta">
          <SectionHead center eyebrow="Visited us?" title="Share your <em>experience</em>" text="Your review helps other brides find us. It takes less than a minute." />
          <div className="rv-cta__btns">
            {ratings.map((r) => (
              <Button key={r.source} href={r.url} variant={r.source === 'Google' ? 'gold' : 'ghost'}>
                Review us on {r.source}
              </Button>
            ))}
            <Button to="/contact#enquiry" variant="solid">Enquire Now</Button>
          </div>
          <p className="rv-cta__note">Questions? Call or WhatsApp {brand.phone}.</p>
        </div>
      </section>
    </>
  )
}
