import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { testimonials, IMG } from '../data/site'
import { Icon, Eyebrow } from './ui'
import Ratings from './Ratings'


export default function Testimonials({ id }) {
  const [i, setI] = useState(0)
  const n = testimonials.length
  const go = (d) => setI((v) => (v + d + n) % n)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 6500)
    return () => clearInterval(t)
  }, [i, n])

  // Background video sirf tab chale jab section screen par ho
  useEffect(() => {
    const v = videoRef.current
    const sec = sectionRef.current
    if (!v || !sec) return
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.2 },
    )
    io.observe(sec)
    return () => io.disconnect()
  }, [])

  const t = testimonials[i]
  return (
    <section className="testi" id={id} ref={sectionRef}>
      <video
        ref={videoRef}
        className="testi__bg"
        src="/videos/reviews-bg.mp4"
        poster="/images/reviews-bg.webp"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      />
      <div className="testi__overlay" aria-hidden="true" />
      <div className="container testi__head">
        <Eyebrow light>Real reviews · Justdial &amp; Google</Eyebrow>
        <h2 className="display-2">Loved by our <em>clients</em></h2>
      </div>
      <div className="container testi__grid">
        <div className="testi__media">
          <img src={IMG.realBride2} alt="Bridal makeup by Aarushi Makeup Studio, Mhow" className="is-on" />
          <span className="testi__count">
            {String(i + 1).padStart(2, '0')} <i>/</i> {String(n).padStart(2, '0')}
          </span>
        </div>
        <div className="testi__body">
          <div className="testi__stars" aria-label="5 stars">★★★★★</div>
          <blockquote key={i} className="testi__quote">“{t.text}”</blockquote>
          <div className="testi__who">
            <span className="testi__avatar" aria-hidden="true">{t.name.charAt(0)}</span>
            <div>
              <strong>{t.name}</strong>
              <span>{t.date} · {t.source} review</span>
            </div>
          </div>
          <div className="testi__tags">
            {t.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="testi__nav">
            <button onClick={() => go(-1)} aria-label="Previous"><Icon name="left" /></button>
            <div className="testi__dots">
              {testimonials.map((_, k) => (
                <button key={k} className={k === i ? 'is-on' : ''} onClick={() => setI(k)} aria-label={`Review ${k + 1}`} />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next"><Icon name="right" /></button>
          </div>
          <Ratings light />
          <Link to="/reviews" className="link-arrow testi__all">Read all reviews <Icon name="arrow" /></Link>
        </div>
      </div>
    </section>
  )
}
