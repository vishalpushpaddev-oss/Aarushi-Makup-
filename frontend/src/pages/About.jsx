import { IMG, stats, brand } from '../data/site'
import { PageHero, Reveal, Eyebrow, SectionHead, Button, Marquee } from '../components/ui'
import Testimonials from '../components/Testimonials'
import { CountUp } from '../components/motion'

const timeline = [
  ['2019', 'The studio opens', 'Aarushi Makeup Studio & Academy opens its doors in Mhow.'],
  ['2020', 'Home services', 'Started bridal and party makeup at home and at venues across Mhow and Indore.'],
  ['2022', 'Academy launch', 'Began teaching small batches of aspiring makeup artists from Mhow and nearby towns.'],
  ['2024', 'Beyond makeup', 'Added facials, hair care and nail services under one roof.'],
  ['2026', '5.0★ rated', 'Trusted by brides and families, with a perfect rating from our clients.'],
]

const values = [
  ['Skin first', 'Great makeup starts with prepped, hydrated skin. Every look begins with a skin read and custom prep.'],
  ['Less, but better', 'We build coverage only where it is needed, so your skin still looks like skin.'],
  ['Your story', 'Your outfit, jewellery, venue and lighting all shape the look. Nothing is copy-paste.'],
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About our Mhow studio" title="The hands behind <em>the glow</em>" text="A bridal artist, educator and skin obsessive — on a mission to make every bride feel like the most beautiful version of herself." img={IMG.bride10} />

      <section className="section">
        <div className="container about-split">
          <Reveal className="about-split__media">
            <img src={IMG.studioDecor} alt="Inside Aarushi Makeup Studio & Academy, Mhow" />
            <img src={IMG.studioFront} alt="Studio board above HDFC Bank, Shanti Nagar, Mhow" className="about-split__inset" />
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Hello, I'm {brand.name}</Eyebrow>
              <h2 className="display-2">I believe a bride should <em>recognise herself</em> in the mirror.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="lead">The best compliment I get isn't "you look so different" — it's "you look exactly like you, only more beautiful."</p>
              <p>
                I spent my early years learning from senior artists, experimenting with products and studying how light falls on different
                skin tones. Today my team and I work with brides across India and abroad, but the approach hasn't changed: listen first,
                design a look around you, and stay calm so you can enjoy your day.
              </p>
              <p>
                When I'm not with a bride, I'm teaching at the Academy — because passing on what I've learned is the part of this work I
                love most.
              </p>
              <Button to="/contact">Work with me</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-band__grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="stats-band__item">
              <strong><CountUp value={s.value} /></strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="Philosophy" title="How we <em>think</em> about beauty" />
          <div className="values">
            {values.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100} className="value">
                <span className="value__n">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="The journey" title="Since 2019, <em>one</em> obsession" />
          <ol className="timeline">
            {timeline.map(([y, t, d], i) => (
              <Reveal as="li" key={y} delay={i * 80}>
                <span className="timeline__y">{y}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Marquee dark items={['Bridal Makeup', 'Makeup Academy', 'Facials', 'Hair Care', 'Nail Art', 'Home Service']} />
      <Testimonials />
    </>
  )
}
