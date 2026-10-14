import { useEffect, useState } from 'react'
import { testimonials, IMG } from '../data/site'
import { Icon, Eyebrow } from './ui'
import Ratings from './Ratings'


export default function Testimonials({ id }) {
  const [i, setI] = useState(0)
  const n = testimonials.length
  const go = (d) => setI((v) => (v + d + n) % n)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 6500)
    return () => clearInterval(t)
  }, [i, n])

  const t = testimonials[i]
  return (
    <section className="testi" id={id}>
      <div className="container testi__grid">
        <div className="testi__media">
          <img src={IMG.realBride2} alt="Bridal makeup by Aarushi Makeup Studio, Mhow" className="is-on" />
          <span className="testi__count">
            {String(i + 1).padStart(2, '0')} <i>/</i> {String(n).padStart(2, '0')}
          </span>
        </div>
        <div className="testi__body">
          <Eyebrow light>Real reviews · Justdial</Eyebrow>
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
        </div>
      </div>
    </section>
  )
}
