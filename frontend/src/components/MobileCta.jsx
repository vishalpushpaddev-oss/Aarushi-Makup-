import { Link } from 'react-router-dom'
import { brand } from '../data/site'
import { Icon } from './ui'

// Mobile par hamesha neeche dikhne wali bar — call / WhatsApp / booking ek tap me.
export default function MobileCta() {
  const msg = encodeURIComponent(`Hi ${brand.name}! I'd like to check availability for my event.`)
  return (
    <nav className="mcta" aria-label="Quick contact">
      <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>
        <Icon name="phone" size={18} />
        Call
      </a>
      <a href={`https://wa.me/${brand.whatsapp}?text=${msg}`} target="_blank" rel="noreferrer" className="mcta__wa">
        <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.5.7 4.8 2 6.8L3.2 29l6.8-2.1c1.9 1.1 4 1.6 6.1 1.6 7 0 12.7-5.6 12.7-12.6S23 3 16 3zm5.8 15.3c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
        </svg>
        WhatsApp
      </a>
      <Link to="/contact" className="mcta__book">
        <Icon name="calendar" size={18} />
        Enquire Now
      </Link>
    </nav>
  )
}
