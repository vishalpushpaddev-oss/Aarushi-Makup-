import { useCallback, useEffect, useMemo, useState } from 'react'
import { IMG, portfolio } from '../data/site'
import { PageHero, Reveal, Icon, Button } from '../components/ui'

const cats = ['All', ...new Set(portfolio.map((p) => p.cat))]

export default function Portfolio() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(-1)
  const items = useMemo(() => (cat === 'All' ? portfolio : portfolio.filter((p) => p.cat === cat)), [cat])

  const step = useCallback((d) => setOpen((v) => (v + d + items.length) % items.length), [items.length])

  useEffect(() => {
    if (open < 0) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(-1)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, step])

  return (
    <>
      <PageHero eyebrow="Bridal makeup portfolio · Mhow" title="A gallery of <em>real</em> brides" text="Real brides and real looks from our studio in Mhow — every photo here is our own work." img={IMG.bride3} />

      <section className="section">
        <div className="container">
          <div className="filters" role="tablist">
            {cats.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} className={`filter ${cat === c ? 'is-on' : ''}`} onClick={() => setCat(c)}>
                {c}
                <sup>{c === 'All' ? portfolio.length : portfolio.filter((p) => p.cat === c).length}</sup>
              </button>
            ))}
          </div>

          <div className="masonry" key={cat}>
            {items.map((p, i) => (
              <Reveal key={p.src + p.title} delay={(i % 3) * 70} className="masonry__item">
                <button onClick={() => setOpen(i)} aria-label={`Open ${p.title}`} data-cursor="View">
                  <img src={p.src} alt={p.title} loading="lazy" />
                  <span className="masonry__cap">
                    <small>{p.cat}{p.real ? (p.cat === 'Our studio' ? ' · Real' : ' · Real client') : ''}</small>
                    {p.title}
                    <Icon name="plus" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="center-cta">
            <p>Love what you see?</p>
            <Button to="/contact">Book your trial</Button>
          </div>
        </div>
      </section>

      {open >= 0 && items[open] && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(-1)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setOpen(-1)}><Icon name="close" size={26} /></button>
          <button className="lightbox__nav lightbox__nav--l" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1) }}><Icon name="left" size={28} /></button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img key={items[open].src} src={items[open].src} alt={items[open].title} />
            <figcaption>
              <small>{items[open].cat}</small> {items[open].title}
              <span>{open + 1} / {items.length}</span>
            </figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--r" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1) }}><Icon name="right" size={28} /></button>
        </div>
      )}
    </>
  )
}
