import { useState } from 'react'
import { Link } from 'react-router-dom'
import { landingBySlug } from '../data/landing'
import { brand } from '../data/site'
import { PageHero, Reveal, Eyebrow, SectionHead, Button, Icon } from '../components/ui'
import Ratings from '../components/Ratings'

export default function Landing({ slug }) {
  const page = landingBySlug[slug]
  const [faq, setFaq] = useState(0)

  return (
    <>
      <PageHero eyebrow={page.h1} title={page.hero} text={page.heroText} img={page.img} />

      <section className="section">
        <div className="container lp">
          <div className="lp__copy">
            <Reveal>
              <Eyebrow>{brand.name} {brand.suffix}</Eyebrow>
              {page.intro.map((p) => (
                <p key={p.slice(0, 24)} className="lp__p">{p}</p>
              ))}
            </Reveal>
            <Reveal className="lp__cta">
              <Button to="/contact#enquiry" variant="gold" enquiry={page.enquiry}>Enquire Now</Button>
              <Button href={`https://wa.me/${brand.whatsapp}`} variant="ghost">WhatsApp us</Button>
            </Reveal>
            <Ratings />
          </div>

          <Reveal delay={120} className="lp__card">
            <span className="lp__price-label">Starting price</span>
            <strong className="lp__price">{page.price}</strong>
            <h2>What's included</h2>
            <ul>
              {page.includes.map((x) => (
                <li key={x}><Icon name="check" size={15} />{x}</li>
              ))}
            </ul>
            <Link to="/services" className="link-arrow">Full price list <Icon name="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="lp-gallery">
        {page.gallery.map((src, i) => (
          <Reveal key={src} delay={i * 80} className="lp-gallery__item">
            <Link to="/portfolio" data-cursor="View">
              <img src={src} alt={`${page.nav} — Aarushi Makeup Studio, Mhow`} loading="lazy" />
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="section section--tint">
        <div className="container faq-wrap">
          <SectionHead eyebrow="FAQ" title="Your <em>questions</em>, answered" text={`Call or WhatsApp ${brand.phone} for anything else.`} />
          <div className="faq">
            {page.faqs.map((f, i) => (
              <div key={f.q} className={`faq__item ${faq === i ? 'is-open' : ''}`}>
                <button onClick={() => setFaq(faq === i ? -1 : i)} aria-expanded={faq === i}>
                  {f.q}
                  <Icon name="plus" />
                </button>
                <div className="faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Explore more" title="Other <em>services</em> in Mhow" />
          <div className="lp-related">
            {page.related.map((r) => (
              <Link key={r} to={r} className="lp-related__item">
                <img src={landingBySlug[r].img} alt="" loading="lazy" />
                <span>{landingBySlug[r].nav}</span>
                <Icon name="arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
