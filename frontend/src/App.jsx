import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import MobileCta from './components/MobileCta'
import { BackToTop } from './components/ScrollNav'
import { SmoothScroll, Cursor } from './components/motion'
import { PremiumFX } from './components/premium'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Academy from './pages/Academy'
import Journal from './pages/Journal'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import NotFound from './pages/NotFound'
import Landing from './pages/Landing'
import { landingPages } from './data/landing'

export default function App() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <PremiumFX />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          {landingPages.map((p) => (
            <Route key={p.slug} path={p.slug} element={<Landing slug={p.slug} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileCta />
      <BackToTop />
    </>
  )
}
