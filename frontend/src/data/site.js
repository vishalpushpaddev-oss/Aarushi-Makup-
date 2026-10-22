// Saara website content yahin se aata hai. Baad me ye data backend API se aayega.

const img = (name) => `/images/${name}.webp`

export const IMG = {
  hero: img('bride-12'),
  bride1: img('bride-1'),
  bride2: img('bride-2'),
  bride3: img('bride-3'),
  bride4: img('bride-4'),
  bride5: img('bride-5'),
  bride6: img('bride-6'),
  bride7: img('bride-7'),
  bride8: img('bride-8'),
  bride10: img('bride-10'),
  bride11: img('bride-11'),
  sareePink: img('saree-pink'),
  sareeRed: img('saree-red'),
  face: img('face'),
  portrait: img('portrait'),
  palette: img('palette'),
  brushes: img('brushes'),
  brushPot: img('brush-pot'),
  products: img('products'),
  flatlay: img('flatlay'),
  lipstick: img('lipstick'),
  studio: img('studio'),
  studio2: img('studio-2'),
  // Asli photos — Google Business listing se
  realBride1: img('real-bride-1'),
  realBride2: img('real-bride-2'),
  realEngagement: img('real-engagement'),
  realHair: img('real-hair'),
  realSmoothing: img('real-hair-smoothing'),
  studioFront: img('studio-front'),
  studioInside: img('studio-inside'),
  studioDecor: img('studio-decor'),
  studioEntry: img('studio-entry'),
  studioHair: img('studio-hair-station'),
  aarushi: img('aarushi-portrait'), // Aarushi Piplodiya (owner)
  aarushiCard: img('aarushi-piplodiya'),
}

export const brand = {
  name: 'Aarushi',
  owner: 'Aarushi Piplodiya',
  suffix: 'Makeup Studio & Academy',
  tagline: 'Makeup · Bridal · Salon · Academy',
  city: 'Mhow, Indore',
  phone: '+91 78799 20779',
  whatsapp: '917879920779',
  email: '', // asli email milne par yahan daalein — khaali rahe to website par email nahi dikhega
  address: '2nd Floor, HDFC Bank Building, Shanti Nagar Road, Opp. Petrol Pump, Shanti Nagar, Mhow, Indore, Madhya Pradesh 453441',
  hours: 'Mon – Sun · 10:00 AM – 7:00 PM',
  instagram: 'https://www.instagram.com/aarushi_makeup_studio/',
  facebook: 'https://facebook.com/',
  youtube: 'https://youtube.com/',
}

// Asli ratings — Google Maps aur Justdial listing se (count badhne par yahan update karein)
export const ratings = [
  { source: 'Justdial', score: '5.0', count: 20, unit: 'ratings', url: 'https://www.justdial.com/Indore/Aarushi-Makeup-Studio-Academy-Lodheshver-Mahadev-Mandir-Mhow/0731PX731-X731-241126174453-J3S7_BZDET' },
  { source: 'Google', score: '5.0', count: 1, unit: 'review', url: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Aarushi makeup studio and academy, Shanti Nagar, Mhow') },
]

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services & Prices' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/academy', label: 'Academy' },
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
]

export const stats = [
  { value: '500+', label: 'Brides adorned' },
  { value: '2019', label: 'Serving Mhow since' },
  { value: '1,200+', label: 'Students trained' },
  { value: '5.0★', label: 'Rated on Google & Justdial' },
]

export const whyUs = [
  { title: 'A look made for your face', text: 'Every bride gets a consult, a skin read and a look designed around her features, outfit and jewellery — never a template.' },
  { title: 'Quality, skin-safe products', text: 'Professional, skin-safe products with sanitised kits and fresh applicators for every client.' },
  { title: 'Camera-ready, all day', text: 'Basic, HD and glossy finishes that look flawless under flash and 4K video, and last through the pheras and the party after.' },
  { title: 'Calm, punctual, on time', text: 'We arrive early, run to schedule and keep the room calm, so the morning feels like yours.' },
  { title: 'Home service available', text: "Can't come to the studio? We come to you — at home, the hotel or the venue, across Mhow and Indore." },
  { title: 'Everything under one roof', text: 'Makeup, hair, skin, nails, lashes, mehndi and professional courses — all at one studio in Mhow.' },
]

export const brands = ['Dior', 'NARS', 'Charlotte Tilbury', 'MAC', 'Huda Beauty', 'Bobbi Brown', 'Estée Lauder', 'Too Faced', 'Fenty Beauty', 'Kryolan']

export const packages = [
  {
    id: 'basic',
    name: 'Basic Bridal',
    price: '₹5,000',
    img: IMG.bride5,
    blurb: 'A beautiful, budget-friendly bridal look designed around your outfit and style.',
    includes: ['Bridal makeup for your day', 'Hairstyling', 'Dupatta / saree setting', 'Lashes'],
  },
  {
    id: 'glossy',
    name: 'Glossy Bridal',
    price: '₹8,000',
    img: IMG.hero,
    featured: true,
    blurb: 'Our most-loved glossy, dewy HD finish — radiant in person and in every photo.',
    includes: ['Glossy HD bridal makeup', 'Premium hairstyling with accessories', 'Draping & jewellery setting', 'Lashes', 'Touch-up for the day'],
  },
  {
    id: 'hd',
    name: 'HD Bridal',
    price: '₹7,500',
    img: IMG.bride3,
    blurb: 'A flawless, camera-ready HD finish that holds up to close-up photography and video.',
    includes: ['HD bridal makeup', 'Hairstyling with accessories', 'Draping & setting', 'Lashes', 'Long-lasting finish'],
  },
]

export const services = [
  { slug: 'bridal', page: '/bridal-makeup-artist-mhow', title: 'Bridal Makeup', img: IMG.bride1, price: 'from ₹5,000', text: 'Basic, HD and glossy bridal looks for your wedding day, designed around your outfit, jewellery and skin.' },
  { slug: 'party', page: '/party-makeup-mhow', title: 'Party & Occasion Makeup', img: IMG.realEngagement, price: 'Enquire', text: 'Engagement, reception, party and family makeup that shines under evening lights.' },
  { slug: 'hair', page: '/beauty-parlour-mhow', title: 'Hairstyling', img: IMG.realHair, price: 'from ₹350', text: 'Bridal, party and occasion hairstyles — buns, braids, curls, waves and more.' },
  { slug: 'treatments', page: '/beauty-parlour-mhow', title: 'Hair Treatments', img: IMG.realSmoothing, price: 'Enquire', text: 'Keratin, botox, nanoplastia, smoothening and straightening, plus colour, cutting and extensions.' },
  { slug: 'skin', page: '/beauty-parlour-mhow', title: 'Facials & Skin Care', img: IMG.face, price: 'Enquire', text: 'Facials, professional skin treatments, mani-pedi, body massage, polishing, threading and waxing.' },
  { slug: 'nails', page: '/beauty-parlour-mhow', title: 'Nails, Lash & Extensions', img: IMG.lipstick, price: 'Enquire', text: 'Nail extensions, creative nail art, eyelash extensions and hair extensions.' },
]

export const priceList = [
  { group: 'Bridal Makeup', items: [['Basic Bridal Makeup', '₹5,000'], ['HD Bridal Makeup', '₹7,500'], ['Glossy Bridal Makeup', '₹8,000']] },
  { group: 'Hairstyling', items: [['Basic Hairstyle', '₹350'], ['Advanced Hairstyle', '₹500'], ['Bridal / Occasion Hairstyle', 'On request']] },
  { group: 'Hair Treatments', items: [['Hair Straightening', 'On request'], ['Hair Smoothening', 'On request'], ['Keratin Treatment', 'On request'], ['Hair Botox', 'On request'], ['Nanoplastia', 'On request'], ['Hair Colour / Cut / Extensions', 'On request']] },
  { group: 'Skin & Salon', items: [['Facial / Skin Treatment', 'On request'], ['Manicure & Pedicure', 'On request'], ['Body Massage / Polishing', 'On request'], ['Threading', 'On request'], ['Waxing / Full Body Waxing', 'On request']] },
  { group: 'Nails & Lashes', items: [['Nail Extensions', 'On request'], ['Nail Art', 'On request'], ['Eyelash Extensions', 'On request'], ['Hair Extensions', 'On request']] },
]

export const courses = [
  {
    slug: 'bridal-makeup',
    title: 'Bridal Makeup Course',
    duration: 'Basic to Advanced',
    mode: 'In studio',
    fee: 'In ₹25,000 package',
    level: 'Beginner to Pro',
    img: IMG.bride5,
    points: ['Skin prep & flawless base', 'Eye makeup & techniques', 'Basic to advanced bridal looks', 'HD & glossy finishes', 'Practice on real models'],
  },
  {
    slug: 'hair',
    title: 'Hair Artist Course',
    duration: 'All levels',
    mode: 'In studio',
    fee: 'In ₹25,000 package',
    level: 'All levels',
    img: IMG.studioHair,
    points: ['Cutting & blow-dry basics', 'Bridal & party hairstyles', 'Curls, waves & volume', 'Intro to hair treatments'],
  },
  {
    slug: 'skin',
    title: 'Skin & Facial Course',
    duration: 'All levels',
    mode: 'In studio',
    fee: 'In ₹25,000 package',
    level: 'All levels',
    img: IMG.studioInside,
    points: ['Skin types & analysis', 'Facials & clean-ups', 'Professional skin treatments', 'Hygiene & product knowledge'],
  },
  {
    slug: 'nail',
    title: 'Nail Artist Course',
    duration: 'All levels',
    mode: 'In studio',
    fee: 'In ₹25,000 package',
    level: 'All levels',
    img: IMG.lipstick,
    points: ['Manicure & pedicure', 'Gel polish application', 'Nail extensions', 'Creative nail art'],
  },
  {
    slug: 'mehndi',
    title: 'Mehndi Course',
    duration: 'All levels',
    mode: 'In studio',
    fee: 'In ₹25,000 package',
    level: 'All levels',
    img: IMG.realHair,
    points: ['Basic to bridal mehndi', 'Arabic & Indian designs', 'Fillers, motifs & jewellery', 'Speed & neat finishing'],
  },
]

export const portfolio = [
  { src: IMG.realBride2, cat: 'Bridal', title: 'Kundan bridal glam', real: true },
  { src: IMG.studioInside, cat: 'Our studio', title: 'Our studio in Shanti Nagar, Mhow', real: true },
  { src: IMG.realBride1, cat: 'Bridal', title: 'Red lehenga bride', real: true },
  { src: IMG.realEngagement, cat: 'Party', title: 'Engagement soft glam', real: true },
  { src: IMG.aarushiCard, cat: 'Our studio', title: 'Aarushi Piplodiya — Luxury Makeup Artist', real: true },
  { src: IMG.realSmoothing, cat: 'Hair', title: 'Hair straightening & smoothing', real: true },
  { src: IMG.realHair, cat: 'Hair', title: 'Silky, smooth finish', real: true },
  { src: IMG.hero, cat: 'Bridal', title: 'Statement kundan bride' },
  { src: IMG.bride1, cat: 'Bridal', title: 'Rani pink, soft eyes' },
  { src: IMG.bride4, cat: 'Haldi & Mehendi', title: 'South Indian silk' },
  { src: IMG.bride11, cat: 'Bridal', title: 'Mehendi & mathapatti' },
  { src: IMG.face, cat: 'Party', title: 'Soft-glam evening' },
  { src: IMG.bride3, cat: 'Bridal', title: 'Palace courtyard bride' },
  { src: IMG.bride6, cat: 'Party', title: 'Polki & glow' },
  { src: IMG.sareeRed, cat: 'Editorial', title: 'Banarasi studio shoot' },
  { src: IMG.bride5, cat: 'Bridal', title: 'Close-up HD finish' },
  { src: IMG.bride10, cat: 'Bridal', title: 'Veil reveal' },
  { src: IMG.sareePink, cat: 'Haldi & Mehendi', title: 'Garden pre-wedding' },
  { src: IMG.bride7, cat: 'Bridal', title: 'Red light, red lehenga' },
  { src: IMG.bride2, cat: 'Party', title: 'Engagement soft-glam' },
  { src: IMG.bride8, cat: 'Editorial', title: 'Low-key portrait' },
  { src: IMG.palette, cat: 'Behind the scenes', title: 'Kit for the day' },
  { src: IMG.brushPot, cat: 'Behind the scenes', title: 'Brushes ready' },
  { src: IMG.studioDecor, cat: 'Our studio', title: 'Floral photo corner', real: true },
  { src: IMG.studioEntry, cat: 'Our studio', title: 'Studio entrance', real: true },
  { src: IMG.studioHair, cat: 'Our studio', title: 'Hair wash station', real: true },
  { src: IMG.studioFront, cat: 'Our studio', title: 'Find us above HDFC Bank', real: true },
]

// Asli customer reviews — Justdial se, jaise likhe gaye waise hi (owner ka apna review shamil nahi).
export const testimonials = [
  {
    name: 'Shristi Pandey',
    date: 'Dec 2025',
    source: 'Justdial',
    tags: ['Polite staff', 'Luxurious vibe', 'High-quality products'],
    text: 'If you want to make your day special, book your appointment with Aarushi Makeup Studio. My experience with Aarushi Makeup Studio was excellent. 💖🥰😊',
  },
  {
    name: 'Sarveshna',
    date: 'Jan 2025',
    source: 'Justdial',
    tags: ['Excellent results', 'Nice interiors', 'Hygienic salon'],
    text: 'I recently visited Aarushi Makeup Studio and I must say, I was thoroughly impressed. The salon is impeccably clean and hygienic, with beautiful interiors that create a soothing atmosphere. The staff were extremely polite and professional. Most importantly, the results were excellent! I left feeling pampered and looking fabulous. Highly recommend this place for all your beauty needs!',
  },
  {
    name: 'Ishu',
    date: 'Apr 2025',
    source: 'Justdial',
    tags: ['Highly professional', 'Excellent results', 'Relaxing ambience'],
    text: 'I had a wonderful experience at Aarushi Makeup Studio & Academy. The salon has a luxurious vibe that made me feel special. The prices are reasonable, which is great for everyone. … I was impressed with the high-quality products they use, and I loved the excellent results I got after my treatment. …',
  },
  {
    name: 'Chirag Pawar',
    date: 'Jan 2025',
    source: 'Justdial',
    tags: ['Experienced staff', 'High-quality products', 'Luxurious vibe'],
    text: 'Very nice great service excellent products very luxurious products no compromise with the products and very nice makeup good looking soft and shuttle makeup',
  },
  {
    name: 'Payal Raiwal',
    date: 'Jan 2025',
    source: 'Justdial',
    tags: ['Makeup'],
    text: 'Thank you so much 😊 di for the pretty makeup 😊 I like your makeup and your nature also like it.',
  },
  {
    name: 'Rubal Jain',
    date: 'Jan 2025',
    source: 'Justdial',
    tags: ['Reasonably priced', 'Great offers', 'Hygienic salon'],
    text: 'I recently visited Aarushi Makeup Studio & Academy and had a fantastic experience. The services were reasonably priced, and they had great offers available. The salon was very hygienic, and the equipment used was clean. I would highly recommend this place for anyone looking for quality beauty services.',
  },
  {
    name: 'Preeti Dwivedi',
    date: 'Jan 2025',
    source: 'Justdial',
    tags: ['Relaxing ambience'],
    text: 'Aarushi Makeup Studio & Academy offers a luxurious and relaxing ambiance. The skilled professionals create a serene and calming environment, making the experience truly exceptional. The attention to detail and personalized service ensures a rejuvenating and indulgent experience.',
  },
]

export const posts = [
  { slug: 'bridal-skin-prep', cat: 'Bridal', date: 'Sep 28, 2026', read: '6 min', img: IMG.bride7, title: 'The 90-day bridal skin prep plan', excerpt: 'What to start three months before the wedding, what to stop, and the facials to avoid in the final week.' },
  { slug: 'hd-vs-airbrush', cat: 'Makeup', date: 'Sep 10, 2026', read: '4 min', img: IMG.flatlay, title: 'HD vs glossy bridal makeup: which to pick?', excerpt: 'Finish, glow, skin type and your function — a plain comparison to help you choose your bridal look.' },
  { slug: 'trial-checklist', cat: 'Bridal', date: 'Aug 22, 2026', read: '5 min', img: IMG.bride11, title: 'Your makeup trial checklist', excerpt: 'Bring these things to the trial and ask these questions so wedding-day decisions are already made.' },
  { slug: 'summer-wedding', cat: 'Makeup', date: 'Aug 02, 2026', read: '5 min', img: IMG.bride4, title: 'Makeup that survives a summer wedding', excerpt: 'Primers, setting sprays and the techniques we use to keep makeup intact through heat and humidity.' },
  { slug: 'bridal-hair', cat: 'Hair', date: 'Jul 18, 2026', read: '3 min', img: IMG.bride8, title: 'Choosing a bridal hairstyle for your dupatta', excerpt: 'Heavy dupatta, light dupatta, double dupatta — which buns and braids hold up best.' },
  { slug: 'kit-essentials', cat: 'Academy', date: 'Jul 01, 2026', read: '7 min', img: IMG.brushes, title: 'Building your first pro kit', excerpt: 'Where to spend and where to save when you\'re starting out as a makeup artist.' },
]

export const faqs = [
  { q: 'What is the price of bridal makeup in Mhow?', a: 'Bridal makeup starts at ₹5,000 (Basic), ₹7,500 (HD) and ₹8,000 (Glossy), including hairstyling and draping.' },
  { q: 'What services do you offer besides makeup?', a: 'Hairstyling, facials & skin treatments, threading & waxing, hair treatments (keratin, botox, smoothening, nanoplastia), hair colour, cutting & extensions, plus nail and eyelash extensions and nail art.' },
  { q: 'Do you have beauty courses?', a: 'Yes — a special 5-in-1 Academy package for ₹25,000: Bridal Makeup, Hair, Skin, Nail Art and Mehndi courses, all in one.' },
  { q: 'Do you offer home service?', a: 'Yes. We come to your home, hotel or venue in Mhow and Indore. Outstation travel is charged at actuals.' },
]
