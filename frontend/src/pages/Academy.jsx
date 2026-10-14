import { IMG, courses } from '../data/site'
import { PageHero, Reveal, SectionHead, Button, Icon } from '../components/ui'
import BookingForm from '../components/BookingForm'

const perks = [
  ['calendar', 'Small batches', 'Maximum 8 students per batch so every student gets hands-on correction.'],
  ['sparkle', 'Real models', 'Practise on real faces of different skin types, ages and tones — not just mannequins.'],
  ['award', 'Certificate & shoot', 'Graduate with a certificate and a professional portfolio shoot.'],
  ['check', 'Lifetime support', 'Join the alumni community for doubts, referrals and assisting opportunities.'],
]

export default function Academy() {
  return (
    <>
      <PageHero eyebrow="Makeup academy in Mhow, Indore" title="Turn your passion into a <em>profession</em>" text="Professional courses and personal workshops taught by a working bridal makeup artist." img={IMG.studio2} />

      <section className="section">
        <div className="container">
          <div className="perks">
            {perks.map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 80} className="perk">
                <span className="perk__ic"><Icon name={ic} size={22} /></span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Courses" title="Find your <em>course</em>" text="New batches start every month. Weekend options are available for working professionals." />
          <div className="courses">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 100} className="course">
                <div className="course__img">
                  <img src={c.img} alt={c.title} loading="lazy" />
                  <span className="course__level">{c.level}</span>
                </div>
                <div className="course__body">
                  <h3>{c.title}</h3>
                  <div className="course__meta">
                    <span><Icon name="clock" size={15} />{c.duration}</span>
                    <span><Icon name="pin" size={15} />{c.mode}</span>
                  </div>
                  <ul>
                    {c.points.map((p) => <li key={p}><Icon name="check" size={14} />{p}</li>)}
                  </ul>
                  <div className="course__foot">
                    <strong>{c.fee}</strong>
                    <Button to="/contact" variant="ghost">Enrol</Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container enrol">
          <Reveal className="enrol__media">
            <img src={IMG.products} alt="" loading="lazy" />
          </Reveal>
          <div>
            <SectionHead eyebrow="Enquire" title="Reserve your <em>seat</em>" text="Tell us which course you're interested in and we'll share batch dates, fees and the full syllabus." />
            <BookingForm compact defaultEvent="Academy course" />
          </div>
        </div>
      </section>
    </>
  )
}
