import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IMG, brand, brands, stats, whyUs, packages, services, portfolio, courses, posts } from '../data/site'
import { Reveal, Eyebrow, SectionHead, Button, Marquee, Icon } from '../components/ui'
import Testimonials from '../components/Testimonials'
import { SectionNav } from '../components/ScrollNav'
import { CountUp, Parallax } from '../components/motion'
import { Divider, Particles } from '../components/premium'
import { areasServed } from '../data/seo'

const slides = [
  { src: IMG.realBride2, pos: '50% 22%', label: 'Kundan bridal glam' },
  { src: IMG.realBride1, pos: '50% 30%', label: 'Red lehenga bride' },
  { src: IMG.hero, pos: '62% 20%', label: 'Kundan bridal' },
  { src: IMG.bride5, pos: '50% 30%', label: 'HD close-up' },
  { src: IMG.bride1, pos: '50% 25%', label: 'Rani pink bride' },
]

function Hero() {
  const [i, setI] = useState(0)
  const next = (i + 1) % slides.length

  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % slides.length), 6000)
    return () => clearTimeout(t)
  }, [i])

  return (
    <section className="hero">
      <div className="hero__bg">
        <Particles />
        <video
          className="hero__video"
          src="/videos/bride-2.mp4"
          poster="/images/reel-1.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__kicker">
            <span className="dot" /> Bridal Makeup Artist & Makeup Academy in Mhow, Indore
          </h1>
          <p className="hero__title">
            <span className="line"><span>Bridal beauty,</span></span>
            <span className="line"><span><em>quietly</em> unforgettable.</span></span>
          </p>
          <p className="hero__text">
            Skin-first HD & airbrush makeup for brides who want to look like themselves — only more radiant, in every photo and every hour of the day.
          </p>
          <div className="hero__actions">
            <Button to="/contact#enquiry" variant="gold">Enquire Now</Button>
            <Button to="/portfolio" variant="ghost-light">View portfolio</Button>
          </div>
        </div>

        <div className="hero__side">
          <button className="hero__card" onClick={() => setI(next)} data-cursor="Next" aria-label="Next photo">
            {slides.map((s, k) => (
              <img key={s.src} src={s.src} alt="" className={k === next ? 'is-on' : ''} style={{ objectPosition: s.pos }} />
            ))}
            <span className="hero__card-label">Next look <Icon name="arrow" size={14} /></span>
          </button>
          <div className="hero__badge" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <text>
                <textPath href="#circ">studio & academy · mhow · since 2019 ·</textPath>
              </text>
            </svg>
            <span>✦</span>
          </div>
        </div>
      </div>

      <div className="container hero__foot">
        <div className="hero__stats">
          {stats.map((s, k) => (
            <div key={s.label} className="hero__stat" style={{ '--i': k }}>
              <strong><CountUp value={s.value} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="hero__dots">
          {slides.map((s, k) => (
            <button key={s.src} className={k === i ? 'is-on' : ''} onClick={() => setI(k)} aria-label={`Show ${s.label}`}>
              <span key={k === i ? i : 'off'} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="section intro">
      <div className="container intro__grid">
        <Reveal className="intro__media">
          <div className="intro__img-a reveal-img">
            <Parallax speed={0.06}>
              <img src={IMG.aarushi} alt="Aarushi Piplodiya, luxury makeup artist in Mhow" style={{ objectPosition: 'center 18%' }} />
            </Parallax>
          </div>
          <img className="intro__img-b" src={IMG.realBride2} alt="Bridal makeup by Aarushi Piplodiya" />
          <span className="intro__sign">Aarushi</span>
        </Reveal>
        <div className="intro__copy">
          <Reveal>
            <Eyebrow>Meet the artist</Eyebrow>
            <h2 className="display-2">
              Makeup that <em>feels</em> like you, and photographs like a dream.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead">
              Hi, I'm {brand.owner}. Since opening my studio in Mhow in 2019, I've done one thing obsessively: understanding skin, light and faces so every bride walks
              into her wedding feeling completely herself.
            </p>
            <p>
              My studio blends modern technique with the richness of Indian bridal tradition — from the weightless finish of airbrush
              to the precision of a perfect winged liner under a heavy dupatta.
            </p>
          </Reveal>
          <Reveal delay={180} className="intro__points">
            <div><Icon name="award" /> 5.0★ rated on Google &amp; Justdial</div>
            <div><Icon name="sparkle" /> Studio, academy & home service in Mhow</div>
          </Reveal>
          <Reveal delay={240}>
            <Button to="/about" variant="ghost">My story</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ServicesStrip() {
  return (
    <section className="section section--tint" id="services">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          title="Every function, <em>one signature</em> finish."
          text="From the haldi morning to the reception night — looks designed together so your whole wedding feels like one story."
          action={<Button to="/services" variant="ghost">All services & prices</Button>}
        />
        <div className="svc-grid">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90} className="svc-card">
              <Link to={s.page || '/services'} data-cursor="Explore">
                <div className="svc-card__img">
                  <img src={s.img} alt={`${s.title} in Mhow`} loading="lazy" />
                </div>
                <div className="svc-card__body">
                  <span className="svc-card__num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="svc-card__price">{s.price} <Icon name="arrow" size={16} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Packages() {
  return (
    <section className="section" id="packages">
      <div className="container">
        <SectionHead center eyebrow="Bridal packages" title="Choose your <em>bridal</em> finish" text="Every package includes a consultation, hairstyling and draping. Trial sessions are available on request." />
        <div className="pkg-grid">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 110} className={`pkg ${p.featured ? 'pkg--featured' : ''}`}>
              <div className="pkg__img">
                <img src={p.img} alt={`${p.name} makeup package — Aarushi Makeup Studio, Mhow`} loading="lazy" />
                {p.featured && <span className="pkg__tag">Most loved</span>}
              </div>
              <div className="pkg__body">
                <h3>{p.name}</h3>
                <p className="pkg__blurb">{p.blurb}</p>
                <div className="pkg__price">
                  {p.price !== 'On request' && <small>starting at</small>}
                  <strong>{p.price}</strong>
                </div>
                <ul>
                  {p.includes.map((x) => (
                    <li key={x}><Icon name="check" size={15} />{x}</li>
                  ))}
                </ul>
                <Button to="/contact" variant={p.featured ? 'gold' : 'solid'}>Reserve this package</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const whyIcons = ['sparkle', 'award', 'calendar', 'clock', 'pin', 'check']

function Why() {
  return (
    <section className="section why" id="why-us">
      <div className="container">
        <SectionHead light eyebrow="Why brides choose us" title="Six promises we keep, <em>every single time.</em>" text="From the first consultation to the last touch-up, here is what every bride can count on." />
        <div className="bento">
          <Reveal className="bento__img">
            <Parallax speed={0.08}>
              <img src={IMG.bride6} alt="" loading="lazy" />
            </Parallax>
            <div className="bento__img-cap">
              <strong><CountUp value="5.0★" /></strong>
              <span>Client rating on Justdial</span>
            </div>
          </Reveal>
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 80} className={`bento__card ${i === 0 ? 'bento__card--accent' : ''}`}>
              <span className="bento__ic"><Icon name={whyIcons[i]} size={20} /></span>
              <span className="bento__n">0{i + 1}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const picks = portfolio.slice(0, 8)
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <SectionHead eyebrow="Portfolio" title="Real brides. <em>Real</em> glow." action={<Button to="/portfolio" variant="ghost">See full portfolio</Button>} />
      </div>
      <div className="work-grid">
        {picks.map((p, i) => (
          <Reveal key={p.src} delay={(i % 4) * 80} className={`work-item work-item--${i}`}>
            <Link to="/portfolio" data-cursor="View">
              <img src={p.src} alt={p.title} loading="lazy" />
              <span className="work-item__cap">
                <small>{p.cat}</small>
                {p.title}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function AcademyTeaser() {
  const c = courses[0]
  return (
    <section className="section section--tint" id="academy">
      <div className="container academy-teaser">
        <Reveal className="academy-teaser__media">
          <div className="reveal-img academy-teaser__frame">
            <Parallax speed={0.07}>
              <img src={c.img} alt="Makeup studio" loading="lazy" />
            </Parallax>
          </div>
          <div className="academy-teaser__chip">
            <strong>1,200+</strong>
            <span>artists trained</span>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>{brand.name} Academy</Eyebrow>
            <h2 className="display-2">Learn the craft from a <em>working</em> bridal artist.</h2>
            <p className="lead">Small batches, real models and a portfolio shoot at the end. Leave with skills, a certificate and the confidence to take your first bride.</p>
          </Reveal>
          <div className="course-mini">
            {courses.map((k, i) => (
              <Reveal key={k.slug} delay={i * 70} className="course-mini__row">
                <Link to="/academy">
                  <span className="course-mini__t">{k.title}</span>
                  <span className="course-mini__m">{k.duration} · {k.mode}</span>
                  <Icon name="arrow" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Journal() {
  return (
    <section className="section" id="journal">
      <div className="container">
        <SectionHead eyebrow="The journal" title="Beauty notes for <em>brides&#8209;to&#8209;be</em>" action={<Button to="/journal" variant="ghost">Read the journal</Button>} />
        <div className="post-grid">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className="post-card">
              <Link to="/journal" data-cursor="Read">
                <div className="post-card__img"><img src={p.img} alt="" loading="lazy" /></div>
                <span className="post-card__meta">{p.cat} · {p.read} read</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Areas() {
  return (
    <section className="section areas" id="areas">
      <div className="container areas__grid">
        <Reveal>
          <Eyebrow>Areas we serve</Eyebrow>
          <h2 className="display-2">Your makeup artist in <em>Mhow</em> &amp; Indore</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="lead">
            Looking for a bridal makeup artist near you? Visit our studio in Shanti Nagar, Mhow (above HDFC Bank, opposite the petrol pump), or book our home service —
            we travel to homes, hotels and wedding venues across Mhow, Indore and nearby towns. Our makeup academy in Mhow also
            welcomes students from Indore, Pithampur and Dhar.
          </p>
          <ul className="areas__list">
            {areasServed.map((a) => (
              <li key={a}><Icon name="pin" size={14} />{a}</li>
            ))}
          </ul>
          <div className="areas__cta">
            <Button to="/contact">Check availability</Button>
            <Button href={`https://wa.me/${brand.whatsapp}`} variant="ghost">WhatsApp us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Insta() {
  const pics = [IMG.bride1, IMG.lipstick, IMG.bride4, IMG.brushes, IMG.bride10, IMG.flatlay]
  return (
    <section className="insta">
      <div className="insta__grid">
        {pics.map((p) => (
          <a key={p} href={brand.instagram} target="_blank" rel="noreferrer" className="insta__item" aria-label="Instagram post">
            <img src={p} alt="" loading="lazy" />
            <Icon name="instagram" size={26} />
          </a>
        ))}
        <a href={brand.instagram} target="_blank" rel="noreferrer" className="insta__handle">
          <Icon name="instagram" size={22} />
          <span>Aarushi Studio</span>
          <small>Follow along on Instagram</small>
        </a>
      </div>
    </section>
  )
}

const homeSections = [
  { id: 'services', label: 'Services' },
  { id: 'packages', label: 'Packages' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'why-us', label: 'Why us' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'academy', label: 'Academy' },
  { id: 'journal', label: 'Tips' },
  { id: 'areas', label: 'Areas' },
]

export default function Home() {
  return (
    <>
      <SectionNav items={homeSections} />
      <Hero />
      <Marquee items={brands} />
      <Intro />
      <Divider />
      <ServicesStrip />
      <Packages />
      <Testimonials id="reviews" />
      <Divider motif="❖" />
      <Why />
      <Work />
      <AcademyTeaser />
      <Divider />
      <Journal />
      <Areas />
      <Insta />
    </>
  )
}
