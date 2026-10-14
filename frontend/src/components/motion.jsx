import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { applyHead } from '../data/seo'

const isBrowser = typeof window !== 'undefined'
const reducedMotion = () => isBrowser && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const finePointer = () => isBrowser && window.matchMedia('(hover: hover) and (pointer: fine)').matches

/** Smooth scrolling (Lenis) + har page change par top par le jaana. */
export function SmoothScroll() {
  const lenis = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (reducedMotion()) return
    const l = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) })
    lenis.current = l
    let id = requestAnimationFrame(function raf(time) {
      l.raf(time)
      id = requestAnimationFrame(raf)
    })
    return () => {
      cancelAnimationFrame(id)
      l.destroy()
      lenis.current = null
    }
  }, [])

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true })
    else window.scrollTo({ top: 0 })
    applyHead(pathname)
  }, [pathname])

  return null
}

/** Desktop custom cursor. Kisi element par data-cursor="View" lagao to cursor bada hokar label dikhata hai. */
export function Cursor() {
  const dot = useRef(null)
  const [enabled] = useState(() => finePointer() && !reducedMotion())

  useEffect(() => {
    if (!enabled) return
    const el = dot.current
    const pos = { x: -100, y: -100 }
    const cur = { x: -100, y: -100 }
    let id

    const move = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      const target = e.target.closest?.('[data-cursor], a, button, label.chip')
      const label = target?.getAttribute('data-cursor')
      el.dataset.state = label ? 'label' : target ? 'link' : ''
      el.firstChild.textContent = label || ''
    }
    const leave = () => (el.dataset.hidden = 'true')
    const enter = () => (el.dataset.hidden = '')
    const tick = () => {
      cur.x += (pos.x - cur.x) * 0.2
      cur.y += (pos.y - cur.y) * 0.2
      el.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`
      id = requestAnimationFrame(tick)
    }
    document.documentElement.classList.add('has-cursor')
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    document.addEventListener('pointerenter', enter)
    id = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(id)
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
      document.removeEventListener('pointerenter', enter)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div className="cursor" ref={dot} aria-hidden="true">
      <span />
    </div>
  )
}

/** Page ke top par patli gold progress line. */
export function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    let id
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      bar.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`
      id = requestAnimationFrame(update)
    }
    id = requestAnimationFrame(update)
    return () => cancelAnimationFrame(id)
  }, [])
  return <div className="progress" ref={bar} aria-hidden="true" />
}

/** Scroll par image ko halka sa upar-neeche move karta hai. */
export function Parallax({ speed = 0.12, className = '', children }) {
  const ref = useRef(null)
  useEffect(() => {
    if (reducedMotion()) return
    const el = ref.current
    let id
    const tick = () => {
      const r = el.getBoundingClientRect()
      if (r.bottom > 0 && r.top < window.innerHeight) {
        const offset = (r.top + r.height / 2 - window.innerHeight / 2) * -speed
        el.style.setProperty('--py', `${offset.toFixed(1)}px`)
      }
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [speed])
  return (
    <div ref={ref} className={`parallax ${className}`}>
      {children}
    </div>
  )
}

function parseCount(value) {
  const m = /^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/.exec(value)
  if (!m) return null
  const [, pre, num, post] = m
  const target = parseFloat(num.replace(/,/g, ''))
  if (!post && target >= 1900 && target <= 2100) return null // saal (jaise 2019) ko nahi ginte
  const decimals = (num.split('.')[1] || '').length
  const fmt = (n) => pre + n.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + post
  return { target, decimals, fmt }
}

/** "1,200+" jaisi value ko 0 se gin kar dikhata hai jab screen par aaye. */
export function CountUp({ value }) {
  const ref = useRef(null)
  const [text, setText] = useState(() => {
    // Server (SEO HTML) par asli value; browser me 0 se ginti
    const c = isBrowser && !reducedMotion() && parseCount(value)
    return c ? c.fmt(0) : value
  })

  useEffect(() => {
    const c = !reducedMotion() && parseCount(value)
    if (!c) return
    let id
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const step = (t) => {
        const p = Math.min(1, (t - start) / 1800)
        setText(c.fmt(+(c.target * (1 - Math.pow(1 - p, 3))).toFixed(c.decimals)))
        if (p < 1) id = requestAnimationFrame(step)
      }
      id = requestAnimationFrame(step)
    })
    io.observe(ref.current)
    return () => {
      io.disconnect()
      cancelAnimationFrame(id)
    }
  }, [value])

  return <span ref={ref}>{text}</span>
}
