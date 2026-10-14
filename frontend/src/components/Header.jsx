import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand, nav } from '../data/site'
import { Icon } from './ui'
import { ScrollProgress } from './motion'
import { openEnquiry } from './enquiry'

export function Logo({ light }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label={`${brand.name} ${brand.suffix} home`}>
      <span className="logo__mark">{brand.name}</span>
      <span className="logo__sub">{brand.suffix}</span>
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <ScrollProgress />
      <div className="container">
        <div className="header__bar">
          <span onClick={() => setOpen(false)}><Logo light={!scrolled && !open} /></span>
          <nav className="header__nav" aria-label="Main">
            {nav.slice(1).map((n) => (
              <NavLink key={n.to} to={n.to} className="header__link">
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="header__cta">
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="header__phone">
              <Icon name="phone" size={15} />
              {brand.phone}
            </a>
            <Link to="/contact#enquiry" className="btn btn--solid btn--sm" onClick={(e) => { setOpen(false); openEnquiry(e) }}>
              <span>Enquire Now</span>
            </Link>
            <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div className="drawer" aria-hidden={!open}>
        <nav className="drawer__nav">
          {nav.map((n, i) => (
            <NavLink key={n.to} to={n.to} end className="drawer__link" style={{ '--i': i }} onClick={() => setOpen(false)}>
              <small>0{i + 1}</small>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="drawer__foot">
          <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
          {brand.email && <a href={`mailto:${brand.email}`}>{brand.email}</a>}
        </div>
      </div>
    </header>
  )
}
