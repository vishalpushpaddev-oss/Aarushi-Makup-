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
      <PageHero eyebrow="Makeup academy in Mhow, Indore" title="Turn your passion into a <em>profession</em>" text="Five professional beauty courses in one package — makeup, hair, skin, nails and mehndi." img={IMG.studio2} />

      <section className="section academy-offer-wrap">
        <div className="container">
          <div className="academy-offer">
            <div className="academy-offer__tag">Special Academy Offer</div>
            <div className="academy-offer__price">
              <strong>₹25,000</strong>
              <span>5 professional courses in one package</span>
            </div>
            <ul className="academy-offer__list">
              <li><Icon name="check" size={15} />Bridal Makeup (Basic to Advanced)</li>
              <li><Icon name="check" size={15} />Hair Artist Course</li>
              <li><Icon name="check" size={15} />Skin & Facial Course</li>
              <li><Icon name="check" size={15} />Nail Artist Course</li>
              <li><Icon name="check" size={15} />Mehndi Course</li>
            </ul>
            <Button to="/contact" variant="gold" enquiry="Academy course">Enrol now</Button>
          </div>
        </div>
      </section>

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
          <SectionHead eyebrow="Courses" title="What you'll <em>learn</em>" text="All five courses are included in the ₹25,000 package. Learn, practise, create and grow." />
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
                    <Button to="/contact" variant="ghost" enquiry="Academy course">Enrol</Button>
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
            <img src={IMG.studioEntry} alt="Aarushi Makeup Academy studio, Mhow" loading="lazy" />
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
