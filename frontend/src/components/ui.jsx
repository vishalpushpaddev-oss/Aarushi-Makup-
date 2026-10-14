import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { openEnquiry } from './enquiry'

/** Scroll par fade/slide-in animation. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

export function Eyebrow({ children, light }) {
  return <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{children}</span>
}

export function SectionHead({ eyebrow, title, text, light, center, action }) {
  return (
    <div className={`section-head ${center ? 'section-head--center' : ''} ${light ? 'is-light' : ''}`}>
      <Reveal>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
        <h2 className="display-2" dangerouslySetInnerHTML={{ __html: title }} />
      </Reveal>
      {(text || action) && (
        <Reveal delay={120} className="section-head__aside">
          {text && <p className="lead">{text}</p>}
          {action}
        </Reveal>
      )}
    </div>
  )
}

export function Button({ to, href, variant = 'solid', children, icon = true, enquiry, ...rest }) {
  const cls = `btn btn--${variant}`
  const inner = (
    <>
      <span>{children}</span>
      {icon && <Icon name="arrow" />}
    </>
  )
  if (to) {
    const onClick = to.startsWith('/contact') ? (e) => openEnquiry(e, enquiry) : undefined
    return <Link to={to} className={cls} onClick={onClick} {...rest}>{inner}</Link>
  }
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer" {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}

export function PageHero({ eyebrow, title, text, img }) {
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <img src={img} alt="" />
      </div>
      <div className="container page-hero__inner">
        <Reveal>
          <h1 className="eyebrow eyebrow--light">{eyebrow}</h1>
          <p className="display-1" dangerouslySetInnerHTML={{ __html: title }} />
          {text && <p className="lead page-hero__text">{text}</p>}
        </Reveal>
      </div>
    </section>
  )
}

export function Marquee({ items, dark }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee ${dark ? 'marquee--dark' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span key={i} className="marquee__item">
            {t}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}

const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  instagram: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></>,
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  youtube: <><path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.8 4 12 4 12 4s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.6 2.8 2.8 0 0 0 2 2C5.2 20 12 20 12 20s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.6z" /><path d="m9.8 15.3 5.7-3.3-5.7-3.3z" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  left: <path d="M15 18l-6-6 6-6" />,
  right: <path d="M9 18l6-6-6-6" />,
  sparkle: <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z" />,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  award: <><circle cx="12" cy="8" r="6" /><path d="M15.5 13 17 22l-5-3-5 3 1.5-9" /></>,
  muted: <><path d="M11 5 6 9H2v6h4l5 4z" /><path d="m23 9-6 6M17 9l6 6" /></>,
  sound: <><path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" /></>,
  play: <path d="M6 4l14 8-14 8z" />,
}

export function Icon({ name, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
