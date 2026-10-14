import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { brand } from '../data/site'
import { GOOGLE_FORM } from '../config/googleForm'
import { Icon } from './ui'

// Ye options google-form/CreateEnquiryForm.gs ke EVENT_OPTIONS se match hone chahiye.
const events = ['Bridal', 'Engagement / Reception', 'Haldi / Mehendi', 'Party / Family', 'Photoshoot', 'Academy course']

const whatsappText = (form) =>
  [
    `Hi ${brand.name}! New booking enquiry:`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Event: ${form.event}`,
    form.date && `Date: ${form.date}`,
    form.city && `City / Venue: ${form.city}`,
    form.message && `Note: ${form.message}`,
  ]
    .filter(Boolean)
    .join('\n')

// Enquiry Google Form me jaati hai (responses Google Sheet me). Response opaque hota hai (no-cors),
// isliye sirf network error ko failure maana jaata hai.
async function submitToGoogleForm(form, source) {
  const { actionUrl, fields } = GOOGLE_FORM
  const body = new URLSearchParams()
  const add = (key, value) => fields[key] && value && body.append(fields[key], value)
  add('name', form.name)
  add('phone', form.phone)
  add('event', form.event)
  // Google Form date question ko year/month/day alag-alag chahiye
  if (fields.date && form.date) {
    const [y, m, d] = form.date.split('-')
    body.append(`${fields.date}_year`, y)
    body.append(`${fields.date}_month`, String(+m))
    body.append(`${fields.date}_day`, String(+d))
  }
  add('city', form.city)
  add('message', form.message)
  add('source', source)
  await fetch(actionUrl, { method: 'POST', mode: 'no-cors', body })
}

export default function BookingForm({ compact, defaultEvent = 'Bridal' }) {
  const { pathname } = useLocation()
  const [form, setForm] = useState({ name: '', phone: '', date: '', event: defaultEvent, city: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const waLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(whatsappText(form))}`

  const submit = async (e) => {
    e.preventDefault()
    if (!GOOGLE_FORM.actionUrl) {
      window.open(waLink, '_blank')
      setStatus('sent')
      return
    }
    setStatus('sending')
    try {
      await submitToGoogleForm(form, `Website ${pathname}`)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setForm({ name: '', phone: '', date: '', event: defaultEvent, city: '', message: '' })
    setStatus('idle')
  }

  if (status === 'sent') {
    return (
      <div className="form form--done">
        <span className="form__tick"><Icon name="check" size={28} /></span>
        <h3>Thank you, {form.name.split(' ')[0] || 'lovely'}!</h3>
        <p>Your enquiry has reached us. We'll call or WhatsApp you within a few hours.</p>
        <div className="form__done-actions">
          <a className="btn btn--solid" href={waLink} target="_blank" rel="noreferrer"><span>Chat on WhatsApp</span></a>
          <button className="btn btn--ghost" onClick={reset}><span>Send another</span></button>
        </div>
      </div>
    )
  }

  return (
    <form className={`form ${compact ? 'form--compact' : ''}`} onSubmit={submit}>
      <div className="form__row">
        <label className="field">
          <span>Your name</span>
          <input required value={form.name} onChange={set('name')} placeholder="Full name" />
        </label>
        <label className="field">
          <span>Phone / WhatsApp</span>
          <input required type="tel" pattern="[0-9+\s-]{10,15}" value={form.phone} onChange={set('phone')} placeholder="+91" />
        </label>
      </div>
      <div className="form__row">
        <label className="field">
          <span>Event date</span>
          <input type="date" value={form.date} onChange={set('date')} />
        </label>
        <label className="field">
          <span>City / venue</span>
          <input value={form.city} onChange={set('city')} placeholder="e.g. Mhow" />
        </label>
      </div>
      <fieldset className="chips">
        <legend>What are you booking?</legend>
        {events.map((ev) => (
          <label key={ev} className={`chip ${form.event === ev ? 'is-on' : ''}`}>
            <input type="radio" name="event" value={ev} checked={form.event === ev} onChange={set('event')} />
            {ev}
          </label>
        ))}
      </fieldset>
      {!compact && (
        <label className="field">
          <span>Tell us about your look</span>
          <textarea rows="3" value={form.message} onChange={set('message')} placeholder="Outfit colour, number of people, anything you have in mind…" />
        </label>
      )}
      <button className="btn btn--solid btn--block" type="submit" disabled={status === 'sending'}>
        <span>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</span>
        <Icon name="arrow" />
      </button>
      {status === 'error' ? (
        <p className="form__note form__note--error">
          Couldn't send right now. Please check your internet or{' '}
          <a href={waLink} target="_blank" rel="noreferrer">send it on WhatsApp</a>.
        </p>
      ) : (
        <p className="form__note">We reply on WhatsApp, usually within 2 hours.</p>
      )}
    </form>
  )
}
