// SEO: har page ka title/description + Google structured data (JSON-LD).
// Build ke time (scripts/prerender.mjs) aur browser me (App.jsx) dono jagah yahi use hota hai.
import { brand, courses, faqs } from './site'
import { landingPages, landingBySlug } from './landing'

// ⚠️ Hosting ke baad apna asli domain yahan daalein (end me "/" nahi).
export const SITE_URL = 'https://aarushimakeupstudio.in'

const NAME = `${brand.name} ${brand.suffix}`
const OG_IMAGE = '/og-image.jpg'

export const pages = {
  '/': {
    title: `Bridal Makeup Artist in Mhow, Indore | ${NAME}`,
    description:
      'Aarushi Makeup Studio & Academy, Mhow — HD & airbrush bridal makeup, engagement, party makeup, facials, hair, nails, home service and professional makeup courses near Indore.',
  },
  '/about': {
    title: `About Aarushi Piplodiya — Makeup Artist in Mhow since 2019 | ${NAME}`,
    description:
      'Meet Aarushi Piplodiya, luxury makeup artist and founder of Aarushi Makeup Studio & Academy in Shanti Nagar, Mhow. Skin-first bridal makeup, trusted by brides across Mhow and Indore since 2019.',
  },
  '/portfolio': {
    title: `Bridal Makeup Portfolio — Real Brides | ${NAME}`,
    description:
      'See real bridal, engagement, reception and party makeup looks by Aarushi Makeup Studio, Mhow. HD and airbrush makeup photographed in natural light.',
  },
  '/services': {
    title: `Bridal Makeup Price in Mhow — Services & Packages | ${NAME}`,
    description:
      'Bridal makeup packages from ₹25,000, engagement, party & family makeup, facials, hair styling, nail art and home service in Mhow & Indore. See full rate card and FAQs.',
  },
  '/reviews': {
    title: `Reviews — Rated 5.0★ by Clients in Mhow | ${NAME}`,
    description:
      'Read real client reviews of Aarushi Makeup Studio & Academy, Mhow — rated 5.0 on Justdial and Google for bridal makeup, party makeup and beauty services.',
  },
  '/academy': {
    title: `Makeup Course in Mhow & Indore — Makeup Academy | ${NAME}`,
    description:
      'Join the makeup academy in Mhow: professional makeup artist course, self-grooming workshop, hairstyling masterclass and corporate grooming. Small batches with certificate.',
  },
  '/journal': {
    title: `Bridal Beauty Tips & Makeup Blog | ${NAME}`,
    description:
      'Bridal skin prep plans, HD vs airbrush makeup, trial checklists and makeup tips for brides-to-be from Aarushi Makeup Studio, Mhow.',
  },
  '/contact': {
    title: `Contact & Book — Makeup Artist in Mhow | ${NAME}`,
    description: `Book bridal or party makeup in Mhow. Call or WhatsApp ${brand.phone}. Visit us at ${brand.address}.`,
  },
}

for (const p of landingPages) pages[p.slug] = { title: p.title, description: p.description }

export const notFound = {
  title: `Page not found | ${NAME}`,
  description: 'The page you are looking for does not exist.',
  noindex: true,
}

export const areasServed = ['Mhow', 'Mhow Cantonment', 'Indore', 'Rau', 'Pithampur', 'Manpur', 'Simrol', 'Dhar']

const business = () => ({
  '@type': 'BeautySalon',
  '@id': `${SITE_URL}/#business`,
  name: NAME,
  description: pages['/'].description,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${OG_IMAGE}`,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  telephone: brand.phone.replace(/\s/g, ''),
  ...(brand.email ? { email: brand.email } : {}),
  priceRange: '₹₹',
  foundingDate: '2019',
  founder: { '@type': 'Person', name: brand.owner, jobTitle: 'Luxury Makeup Artist' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2nd Floor, HDFC Bank Building, Shanti Nagar Road, Opp. Petrol Pump, Shanti Nagar',
    addressLocality: 'Mhow',
    addressRegion: 'Madhya Pradesh',
    postalCode: '453441',
    addressCountry: 'IN',
  },
  areaServed: areasServed.map((name) => ({ '@type': 'City', name })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '10:00',
    closes: '19:00',
  },
  makesOffer: ['Bridal Makeup', 'Engagement & Reception Makeup', 'Party Makeup', 'HD Makeup', 'Facials & Skin Treatments', 'Waxing', 'Body Massage', 'Hair Spa & Hair Treatments', 'Hair Styling', 'Nail Art & Extensions', 'Home Service Makeup', 'Makeup Courses'].map(
    (name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } }),
  ),
})

const breadcrumb = (path) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: pages[path].title.split(' | ')[0].split(' — ')[0], item: `${SITE_URL}${path}` },
  ],
})

export function structuredData(path) {
  const graph = []
  if (path === '/') {
    graph.push({ '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: NAME, inLanguage: 'en-IN' })
    graph.push(business())
  }
  if (path === '/contact' || path === '/about') graph.push(business())
  if (path === '/services') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    })
  }
  if (path === '/academy') {
    graph.push({
      '@type': 'ItemList',
      itemListElement: courses.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Course',
          name: c.title,
          description: `${c.title} (${c.duration}, ${c.mode}) — ${c.points.join(', ')}.`,
          provider: { '@type': 'Organization', name: NAME, sameAs: `${SITE_URL}/` },
        },
      })),
    })
  }
  const lp = landingBySlug[path]
  if (lp) {
    graph.push({
      '@type': 'Service',
      name: lp.h1,
      description: lp.description,
      url: `${SITE_URL}${path}`,
      areaServed: areasServed.map((name) => ({ '@type': 'City', name })),
      provider: { '@id': `${SITE_URL}/#business` },
    })
    graph.push(business())
    graph.push({
      '@type': 'FAQPage',
      mainEntity: lp.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    })
  }
  if (path !== '/' && pages[path]) graph.push(breadcrumb(path))
  return graph.length ? { '@context': 'https://schema.org', '@graph': graph } : null
}

export function metaFor(path) {
  return pages[path] || notFound
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Build ke time <head> me daalne ke liye tags. */
export function headTags(path) {
  const m = metaFor(path)
  const url = `${SITE_URL}${path === '/' ? '/' : path}`
  const ld = m.noindex ? null : structuredData(path)
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    m.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(NAME)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ld && `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ')
}

/** Browser me page badalne par title/description/canonical update karta hai. */
export function applyHead(path) {
  const m = metaFor(path)
  document.title = m.title
  const set = (selector, attr, value) => {
    const el = document.head.querySelector(selector)
    if (el) el.setAttribute(attr, value)
  }
  const url = `${SITE_URL}${path}`
  set('meta[name="description"]', 'content', m.description)
  set('link[rel="canonical"]', 'href', url)
  set('meta[property="og:title"]', 'content', m.title)
  set('meta[property="og:description"]', 'content', m.description)
  set('meta[property="og:url"]', 'content', url)
}
