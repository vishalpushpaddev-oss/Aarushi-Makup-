import { Link } from 'react-router-dom'
import { brand, nav, IMG } from '../data/site'
import { Icon, Button } from './ui'
import { Logo } from './Header'
import { landingPages } from '../data/landing'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cta">
        <img src={IMG.bride7} alt="" className="footer__cta-bg" />
        <div className="container footer__cta-inner">
          <p className="eyebrow eyebrow--light">Now booking · Wedding season 2026–27</p>
          <h2 className="display-1">
            Let's create your <em>forever</em> look.
          </h2>
          <div className="footer__cta-actions">
            <Button to="/contact#enquiry" variant="gold">Enquire Now</Button>
            <Button href={`https://wa.me/${brand.whatsapp}`} variant="ghost-light">Chat on WhatsApp</Button>
          </div>
        </div>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            {brand.tagline} by {brand.owner}, based in {brand.city}, with home service across Mhow & Indore.
          </p>
          <div className="socials">
            <a href={brand.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
            <a href={brand.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
            <a href={brand.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Icon name="youtube" /></a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Popular searches</h4>
          <ul>
            {landingPages.map((p) => (
              <li key={p.slug}><Link to={p.slug}>{p.nav}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Studio</h4>
          <ul className="footer__contact">
            <li><Icon name="pin" size={16} />{brand.address}</li>
            <li><Icon name="phone" size={16} /><a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a></li>
            {brand.email && <li><Icon name="mail" size={16} /><a href={`mailto:${brand.email}`}>{brand.email}</a></li>}
            <li><Icon name="clock" size={16} />{brand.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {YEAR} {brand.name} {brand.suffix}. All rights reserved.</span>
        <span className="footer__giant" aria-hidden="true">{brand.name}</span>
      </div>
    </footer>
  )
}
