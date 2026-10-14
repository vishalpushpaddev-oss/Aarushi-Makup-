import { useState } from 'react'
import { IMG, posts } from '../data/site'
import { PageHero, Reveal, Icon } from '../components/ui'

const cats = ['All', ...new Set(posts.map((p) => p.cat))]

export default function Journal() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? posts : posts.filter((p) => p.cat === cat)
  const [lead, ...rest] = list

  return (
    <>
      <PageHero eyebrow="Journal" title="Makeup <em>diaries</em>" text="Tips, trends and honest advice for brides, makeup lovers and aspiring artists." img={IMG.bride2} />
      <section className="section">
        <div className="container">
          <div className="filters">
            {cats.map((c) => (
              <button key={c} className={`filter ${cat === c ? 'is-on' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>

          {lead && (
            <Reveal key={lead.slug} className="post-lead">
              <div className="post-lead__img"><img src={lead.img} alt="" /></div>
              <div className="post-lead__body">
                <span className="post-card__meta">{lead.cat} · {lead.date} · {lead.read} read</span>
                <h2 className="display-3">{lead.title}</h2>
                <p className="lead">{lead.excerpt}</p>
                <span className="link-arrow">Read article <Icon name="arrow" /></span>
              </div>
            </Reveal>
          )}

          <div className="post-grid">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90} className="post-card">
                <a href="#" onClick={(e) => e.preventDefault()} data-cursor="Read">
                  <div className="post-card__img"><img src={p.img} alt="" loading="lazy" /></div>
                  <span className="post-card__meta">{p.cat} · {p.date}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
