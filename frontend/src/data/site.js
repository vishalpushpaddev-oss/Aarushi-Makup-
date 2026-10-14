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
  tagline: 'Bridal Makeup Studio & Academy',
  city: 'Mhow, Indore',
  phone: '+91 84604 61764',
  whatsapp: '918460461764',
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
  { title: 'Only luxury products', text: 'Dior, NARS, Charlotte Tilbury, MAC, Huda Beauty — sanitised kits, fresh applicators, skin-safe formulas.' },
  { title: 'Camera-ready, all day', text: 'HD and airbrush finishes tested under flash, ring lights and 4K video. Built to last through pheras and the party after.' },
  { title: 'Calm, punctual, on time', text: 'We arrive early, run to schedule and keep the room calm, so the morning feels like yours.' },
  { title: 'Home service available', text: "Can't come to the studio? We come to you — at home, the hotel or the venue, across Mhow and Indore." },
  { title: 'Trials that matter', text: 'Optional pre-bridal trial so you see, photograph and fine-tune the look weeks before the day.' },
]

export const brands = ['Dior', 'NARS', 'Charlotte Tilbury', 'MAC', 'Huda Beauty', 'Bobbi Brown', 'Estée Lauder', 'Too Faced', 'Fenty Beauty', 'Kryolan']

export const packages = [
  {
    id: 'hd',
    name: 'HD Bridal',
    price: '₹25,000',
    img: IMG.bride5,
    blurb: 'A skin-like finish that holds up to close-up photography and 4K video.',
    includes: ['HD makeup by Aarushi', 'Hairstyling & accessories setting', 'Dupatta / saree draping', 'Lashes & lens (optional)', 'Touch-up kit for the day'],
  },
  {
    id: 'airbrush',
    name: 'Airbrush Bridal',
    price: '₹35,000',
    img: IMG.hero,
    featured: true,
    blurb: 'Weightless, transfer-resistant and sweat-proof — made for long ceremonies and summer weddings.',
    includes: ['Airbrush makeup by Aarushi', 'Premium hairstyling with extensions', 'Draping & jewellery setting', 'Pre-bridal skin prep', 'On-site touch-ups (2 hrs)'],
  },
  {
    id: 'destination',
    name: 'Destination Wedding',
    price: 'On request',
    img: IMG.bride3,
    blurb: 'Aarushi and team travel with you for multi-day functions anywhere in India or abroad.',
    includes: ['All function looks covered', 'Dedicated hair stylist', 'Family makeup add-ons', 'Travel & stay as per plan', 'Day-wise look planning'],
  },
]

export const services = [
  { slug: 'bridal', page: '/bridal-makeup-artist-mhow', title: 'Bridal Makeup', img: IMG.bride1, price: 'from ₹25,000', text: 'HD and airbrush bridal looks for the wedding day, designed around your outfit, jewellery and skin.' },
  { slug: 'engagement', page: '/party-makeup-mhow', title: 'Engagement & Reception', img: IMG.bride10, price: 'from ₹15,000', text: 'Glam, soft-glam or dewy — a look that shines under evening lights and on the dance floor.' },
  { slug: 'party', page: '/party-makeup-mhow', title: 'Party & Family Makeup', img: IMG.realEngagement, price: 'from ₹5,000', text: 'For mothers, sisters, bridesmaids and guests. Group bookings get a dedicated artist team.' },
  { slug: 'skin', page: '/beauty-parlour-mhow', title: 'Facials & Skin Care', img: IMG.face, price: 'from ₹1,500', text: 'Pre-bridal facials, clean-ups and glow treatments so your skin is camera-ready before the big day.' },
  { slug: 'hair', page: '/beauty-parlour-mhow', title: 'Hair Care & Styling', img: IMG.realHair, price: 'from ₹1,000', text: 'Hair spa, treatments, bridal buns, braids, waves and saree / lehenga draping.' },
  { slug: 'nails', page: '/beauty-parlour-mhow', title: 'Nail Art & Extensions', img: IMG.lipstick, price: 'from ₹800', text: 'Gel polish, nail extensions and bridal nail art to match your outfit.' },
]

export const priceList = [
  { group: 'Bridal', items: [['HD Bridal Makeup', '₹25,000'], ['Airbrush Bridal Makeup', '₹35,000'], ['Pre-bridal Trial', '₹5,000'], ['Destination Wedding', 'On request']] },
  { group: 'Occasion', items: [['Engagement / Reception', '₹15,000'], ['Haldi / Mehendi', '₹8,000'], ['Sangeet / Cocktail', '₹12,000'], ['Party Makeup (guest)', '₹5,000']] },
  { group: 'Add-ons', items: [['Hairstyling only', '₹2,500'], ['Saree / Dupatta Draping', '₹1,000'], ['Pre-bridal Facial', '₹1,500'], ['Nail Extensions', '₹800'], ['Waxing', 'On request'], ['Body Massage', 'On request'], ['Home Service', 'On request']] },
]

export const courses = [
  {
    slug: 'pro',
    title: 'Professional Makeup Artistry',
    duration: '30 days',
    mode: 'In studio',
    fee: '₹1,25,000',
    level: 'Beginner to Pro',
    img: IMG.studioInside,
    points: ['Skin science & prep', 'Colour theory & correction', 'HD, airbrush & bridal looks', 'Portfolio shoot + certificate', 'Business & pricing session'],
  },
  {
    slug: 'self',
    title: 'Self-Grooming Workshop',
    duration: '2 days',
    mode: 'Studio / Online',
    fee: '₹9,999',
    level: 'Everyone',
    img: IMG.products,
    points: ['Know your skin type', 'Everyday & office looks', 'Party eye makeup', 'Kit building on any budget'],
  },
  {
    slug: 'hair',
    title: 'Hairstyling Masterclass',
    duration: '7 days',
    mode: 'In studio',
    fee: '₹35,000',
    level: 'Intermediate',
    img: IMG.studioHair,
    points: ['Bridal buns & braids', 'Curls, waves & volume', 'Accessory placement', 'Saree & dupatta draping'],
  },
  {
    slug: 'corporate',
    title: 'Corporate Grooming',
    duration: '1 day',
    mode: 'On-site',
    fee: 'On request',
    level: 'Teams',
    img: IMG.palette,
    points: ['Polished workday looks', 'Grooming etiquette', 'On-camera presence', 'Custom for your team size'],
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
  { slug: 'hd-vs-airbrush', cat: 'Makeup', date: 'Sep 10, 2026', read: '4 min', img: IMG.flatlay, title: 'HD vs airbrush: which one is right for you?', excerpt: 'Finish, longevity, skin type and budget — a plain comparison to help you pick a package.' },
  { slug: 'trial-checklist', cat: 'Bridal', date: 'Aug 22, 2026', read: '5 min', img: IMG.bride11, title: 'Your makeup trial checklist', excerpt: 'Bring these things to the trial and ask these questions so wedding-day decisions are already made.' },
  { slug: 'summer-wedding', cat: 'Makeup', date: 'Aug 02, 2026', read: '5 min', img: IMG.bride4, title: 'Makeup that survives a summer wedding', excerpt: 'Primers, setting sprays and the techniques we use to keep makeup intact through heat and humidity.' },
  { slug: 'bridal-hair', cat: 'Hair', date: 'Jul 18, 2026', read: '3 min', img: IMG.bride8, title: 'Choosing a bridal hairstyle for your dupatta', excerpt: 'Heavy dupatta, light dupatta, double dupatta — which buns and braids hold up best.' },
  { slug: 'kit-essentials', cat: 'Academy', date: 'Jul 01, 2026', read: '7 min', img: IMG.brushes, title: 'Building your first pro kit', excerpt: 'Where to spend and where to save when you\'re starting out as a makeup artist.' },
]

export const faqs = [
  { q: 'How early should I book my bridal makeup?', a: 'Peak wedding dates (Nov–Feb) usually fill 4–6 months ahead. We recommend booking as soon as your date is fixed.' },
  { q: 'Is there a booking advance?', a: 'Yes, 30% of the package confirms your date. The balance is due on the wedding day.' },
  { q: 'Do you offer home service?', a: 'Yes. We come to your home, hotel or venue in Mhow and Indore. Outstation and destination travel is charged at actuals.' },
  { q: 'Can I take a trial before booking?', a: 'Absolutely. A paid trial is available and the trial fee is adjusted in your package if you book.' },
]
