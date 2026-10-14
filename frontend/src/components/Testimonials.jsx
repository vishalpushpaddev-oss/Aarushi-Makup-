import { useEffect, useState } from 'react'
import { testimonials, IMG } from '../data/site'
import { Icon, Eyebrow } from './ui'

const faces = [IMG.bride1, IMG.bride6, IMG.face, IMG.bride2, IMG.bride3]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length
  const go = (d) => setI((v) => (v + d + n) % n)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 6500)
    return () => clearInterval(t)
  }, [i, n])

  const t = testimonials[i]
  return (
    <section className="testi">
      <div className="container testi__grid">
        <div className="testi__media">
          {faces.map((src, k) => (
            <img key={src} src={src} alt="" className={k === i ? 'is-on' : ''} />
          ))}
          <span className="testi__count">
            {String(i + 1).padStart(2, '0')} <i>/</i> {String(n).padStart(2, '0')}
          </span>
        </div>
        <div className="testi__body">
          <Eyebrow light>Kind words</Eyebrow>
          <div className="testi__stars" aria-label="5 stars">★★★★★</div>
          <blockquote key={i} className="testi__quote">“{t.text}”</blockquote>
          <div className="testi__who">
            <strong>{t.name}</strong>
            <span>{t.role}</span>
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
        </div>
      </div>
    </section>
  )
}
