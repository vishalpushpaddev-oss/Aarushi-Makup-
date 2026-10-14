// Poori site ke liye ek smooth-scroll helper. SmoothScroll (motion.jsx) Lenis instance yahan set karta hai.
let lenisInstance = null

export const setLenis = (l) => {
  lenisInstance = l
}

/** Page ko kisi bhi position par smooth scroll karta hai (Lenis ho to usse). */
export function scrollToPos(top) {
  if (lenisInstance) lenisInstance.scrollTo(top, { duration: 1.1 })
  else window.scrollTo({ top, behavior: 'smooth' })
}
