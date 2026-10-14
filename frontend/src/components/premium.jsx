import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const fine = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

/**
 * Desktop premium interactions, re-bound on every route change:
 *  - 3D tilt on cards (data-tilt / card selectors)
 *  - magnetic pull on primary buttons
 */
export function PremiumFX() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!fine() || reduced()) return
    const cleanups = []

    // --- 3D tilt ---
    const tiltSel = '.svc-card a, .pkg, .rv-card, .course, .value, .lp-related__item, .post-card, .contact__card'
    document.querySelectorAll(tiltSel).forEach((el) => {
      el.style.transformStyle = 'preserve-3d'
      const onMove = (e) => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        el.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-6px)`
      }
      const onLeave = () => { el.style.transform = '' }
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)
      cleanups.push(() => {
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
        el.style.transform = ''
        el.style.transformStyle = ''
      })
    })

    // --- magnetic buttons ---
    document.querySelectorAll('.btn--gold, .btn--solid').forEach((el) => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect()
        const x = e.clientX - r.left - r.width / 2
        const y = e.clientY - r.top - r.height / 2
        el.style.transform = `translate(${(x * 0.22).toFixed(1)}px, ${(y * 0.3).toFixed(1)}px)`
      }
      const onLeave = () => { el.style.transform = '' }
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)
      cleanups.push(() => {
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
        el.style.transform = ''
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [pathname])

  return null
}

/** Sunehra ornamental divider — sections ke beech. */
export function Divider({ motif = '✦' }) {
  return (
    <div className="divider" aria-hidden="true">
      <span className="divider__line" />
      <span className="divider__motif">{motif}</span>
      <span className="divider__line" />
    </div>
  )
}

/** Hero ke liye tairte sunehre kan (gold particles). */
export function Particles({ count = 16 }) {
  if (reduced()) return null
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} style={{ '--i': i }} />
      ))}
    </div>
  )
}
