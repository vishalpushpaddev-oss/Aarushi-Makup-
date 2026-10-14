import { IMG } from '../data/site'
import { PageHero, Button } from '../components/ui'

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="This page took <em>a day off</em>" img={IMG.bride8} />
      <section className="section">
        <div className="container center-cta">
          <p>The page you're looking for doesn't exist.</p>
          <Button to="/">Back to home</Button>
        </div>
      </section>
    </>
  )
}
