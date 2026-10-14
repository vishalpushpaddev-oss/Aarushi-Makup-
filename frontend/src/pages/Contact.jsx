import { useState } from 'react'
import { IMG, brand } from '../data/site'
import { PageHero, Reveal, Eyebrow, Icon } from '../components/ui'
import BookingForm from '../components/BookingForm'
import Ratings from '../components/Ratings'

const MAP_QUERY = `Aarushi Makeup Studio & Academy, ${brand.address}`
const mapViews = [
  { key: 'h', label: 'Satellite' },
  { key: 'm', label: 'Map' },
]

export default function Contact() {
  const [mapView, setMapView] = useState('h')
  const tel = brand.phone.replace(/\s/g, '')
  const cards = [
    { icon: 'phone', label: 'Call', value: brand.phone, href: `tel:${tel}` },
    brand.email && { icon: 'mail', label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
    { icon: 'pin', label: 'Directions', value: 'Open in Google Maps', href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}` },
    { icon: 'clock', label: 'Hours', value: brand.hours },
  ].filter(Boolean)
  return (
    <>
      <PageHero eyebrow="Book your makeup artist in Mhow" title="Let's talk about <em>your day</em>" text="Share your date and a few details. We'll confirm availability and help you choose the right look." img={IMG.bride1} />
      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <Reveal>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="display-2">Dates fill fast in <em>wedding season.</em></h2>
              <p className="lead">The quickest way to reach us is WhatsApp. For Nov–Feb weddings, we suggest booking 4–6 months ahead.</p>
            </Reveal>
            <div className="contact__cards">
              {cards.map((c, i) => {
                const Tag = c.href ? 'a' : 'div'
                return (
                  <Reveal key={c.label} delay={i * 70}>
                    <Tag className="contact__card" {...(c.href ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})}>
                      <span className="contact__ic"><Icon name={c.icon} /></span>
                      <small>{c.label}</small>
                      <strong>{c.value}</strong>
                    </Tag>
                  </Reveal>
                )
              })}
            </div>
            <Reveal className="contact__addr">
              <Icon name="pin" />
              <span>{brand.address}</span>
            </Reveal>
            <Reveal className="contact__ratings">
              <Ratings />
            </Reveal>
          </div>
          <Reveal delay={120} className="contact__form" id="enquiry">
            <h3>Booking enquiry</h3>
            <BookingForm />
          </Reveal>
        </div>
      </section>
      <section className="map">
        {/* t=h: satellite + labels, t=m: normal map */}
        <iframe
          key={mapView}
          title="Aarushi Makeup Studio location on Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=${mapView}&z=18&output=embed`}
        />
        <div className="map__bar">
          <div className="map__toggle" role="tablist" aria-label="Map view">
            {mapViews.map((v) => (
              <button key={v.key} role="tab" aria-selected={mapView === v.key} className={mapView === v.key ? 'is-on' : ''} onClick={() => setMapView(v.key)}>
                {v.label}
              </button>
            ))}
          </div>
          <a className="map__dir" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`} target="_blank" rel="noreferrer">
            <Icon name="pin" size={16} /> Get directions
          </a>
        </div>
      </section>
    </>
  )
}
