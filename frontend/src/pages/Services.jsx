import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IMG, services, packages, priceList, faqs } from '../data/site'
import { PageHero, Reveal, SectionHead, Button, Icon } from '../components/ui'
import { SectionNav } from '../components/ScrollNav'

const serviceSections = [
  { id: 'services', label: 'Services' },
  { id: 'rates', label: 'Rate card' },
  { id: 'packages', label: 'Packages' },
  { id: 'faq', label: 'FAQ' },
]

export default function Services() {
  const [tab, setTab] = useState(0)
  const [faq, setFaq] = useState(0)

  return (
    <>
      <SectionNav items={serviceSections} />
      <PageHero eyebrow="Makeup services & prices in Mhow" title="Looks for <em>every</em> moment" text="Transparent pricing, luxury products and a team that shows up early. Here's everything we offer." img={IMG.bride7} />

      <section className="section" id="services">
        <div className="container">
          {services.map((s, i) => (
            <Reveal key={s.slug} className={`svc-row ${i % 2 ? 'svc-row--flip' : ''}`}>
              <div className="svc-row__img"><img src={s.img} alt={s.title} loading="lazy" /></div>
              <div className="svc-row__body">
                <span className="svc-row__n">0{i + 1}</span>
                <h2 className="display-3">{s.title}</h2>
                <p className="lead">{s.text}</p>
                <div className="svc-row__foot">
                  <span className="svc-row__price">{s.price}</span>
                  <Button to="/contact" variant="ghost">Enquire</Button>
                  {s.page && <Link to={s.page} className="link-arrow">Details <Icon name="arrow" /></Link>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--dark" id="rates">
        <div className="container">
          <SectionHead light center eyebrow="Rate card" title="Simple, <em>honest</em> pricing" text="Prices are for the city studio or venue. Outstation and destination bookings are quoted separately." />
          <div className="tabs" role="tablist">
            {priceList.map((g, i) => (
              <button key={g.group} role="tab" aria-selected={tab === i} className={`tab ${tab === i ? 'is-on' : ''}`} onClick={() => setTab(i)}>
                {g.group}
              </button>
            ))}
          </div>
          <Reveal key={tab} className="rate">
            {priceList[tab].items.map(([n, p]) => (
              <div key={n} className="rate__row">
                <span>{n}</span>
                <i />
                <strong>{p}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="container">
          <SectionHead center eyebrow="Bridal packages" title="Compare <em>packages</em>" />
          <div className="compare">
            {packages.map((p, i) => (
              <Reveal key={p.id} delay={i * 100} className={`compare__col ${p.featured ? 'is-featured' : ''}`}>
                {p.featured && <span className="pkg__tag">Most loved</span>}
                <h3>{p.name}</h3>
                <strong className="compare__price">{p.price}</strong>
                <p>{p.blurb}</p>
                <ul>
                  {p.includes.map((x) => <li key={x}><Icon name="check" size={15} />{x}</li>)}
                </ul>
                <Button to="/contact" variant={p.featured ? 'gold' : 'ghost'}>Book {p.name}</Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="faq">
        <div className="container faq-wrap">
          <SectionHead eyebrow="FAQ" title="Good to <em>know</em>" text="Still have questions? Message us on WhatsApp — we're happy to help." />
          <div className="faq">
            {faqs.map((f, i) => (
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
    </>
  )
}
