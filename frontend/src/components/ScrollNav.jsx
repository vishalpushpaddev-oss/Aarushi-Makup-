import { useEffect, useRef, useState } from 'react'
import { scrollToPos } from './scroll'
import { Icon } from './ui'

const OFFSET = 140 // fixed header + section nav ki height

/** Neeche jaane par dikhne wala "upar jao" button. */
export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.2)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button className={`to-top ${show ? 'is-on' : ''}`} onClick={() => scrollToPos(0)} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <Icon name="arrow" size={18} />
    </button>
  )
}

/**
 * Hero ke baad upar chipkne wali section chips. Chip dabao to page us section tak scroll hota hai,
 * aur scroll karte waqt jo section screen par hai uski chip highlight hoti hai.
 * items: [{ id, label }] — page par same id wale sections hone chahiye.
 */
export function SectionNav({ items }) {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(items[0]?.id)
  const bar = useRef(null)

  useEffect(() => {
    let id
    const tick = () => {
      setShow(window.scrollY > window.innerHeight * 0.75)
      let current = items[0]?.id
      for (const it of items) {
        const el = document.getElementById(it.id)
        if (el && el.getBoundingClientRect().top <= OFFSET + 20) current = it.id
      }
      setActive(current)
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [items])

  // Active chip ko bar ke beech me rakho
  useEffect(() => {
    const wrap = bar.current
    const chip = wrap?.querySelector(`[data-id="${active}"]`)
    if (chip) wrap.scrollTo({ left: chip.offsetLeft - wrap.clientWidth / 2 + chip.offsetWidth / 2, behavior: 'smooth' })
  }, [active])

  const go = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) scrollToPos(el.getBoundingClientRect().top + window.scrollY - OFFSET + 10)
  }

  return (
    <nav className={`snav ${show ? 'is-on' : ''}`} aria-label="On this page">
      <div className="snav__inner" ref={bar}>
        {items.map((it) => (
          <button key={it.id} data-id={it.id} className={active === it.id ? 'is-active' : ''} onClick={() => go(it.id)} tabIndex={show ? 0 : -1}>
            {it.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
