import { useEffect } from 'react'
import BookingForm from './BookingForm'
import { Icon } from './ui'

// Mobile: neeche se khulne wala enquiry form (bottom sheet). Kisi bhi page se, page badle bina.
export default function EnquirySheet({ open, onClose, defaultEvent }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div className={`sheet ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="sheet__backdrop" onClick={onClose} />
      <div className="sheet__panel" role="dialog" aria-modal="true" aria-labelledby="sheet-title" data-lenis-prevent>
        <span className="sheet__handle" aria-hidden="true" />
        <div className="sheet__head">
          <div>
            <h2 id="sheet-title">Enquire Now</h2>
            <p>Share a few details — we'll call or WhatsApp you back.</p>
          </div>
          <button className="sheet__close" onClick={onClose} aria-label="Close">
            <Icon name="close" size={20} />
          </button>
        </div>
        {/* Har baar khulne par fresh form */}
        {open && <BookingForm compact defaultEvent={defaultEvent} />}
      </div>
    </div>
  )
}
