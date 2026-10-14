/* eslint-disable react/only-export-components -- build-time entry, not a hot-reloaded module */
// Build ke time har page ka HTML banane ke liye (scripts/prerender.mjs isse use karta hai).
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

export { pages, headTags, SITE_URL } from './data/seo'

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
