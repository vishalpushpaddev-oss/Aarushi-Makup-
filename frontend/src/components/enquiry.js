// Mobile/tablet par kisi bhi "Enquire" button se usi page par enquiry form (bottom sheet) kholta hai.
// Desktop par link normal tarah se Contact page ke form par le jaata hai.
export const ENQUIRY_EVENT = 'enquiry:open'

export function openEnquiry(e, event) {
  if (typeof window === 'undefined' || !window.matchMedia('(max-width: 1024px)').matches) return
  e?.preventDefault()
  window.dispatchEvent(new CustomEvent(ENQUIRY_EVENT, { detail: { event } }))
}
