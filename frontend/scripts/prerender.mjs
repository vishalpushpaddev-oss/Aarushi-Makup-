// `npm run build` ke baad chalta hai: har route ka poora HTML (SEO ke liye), sitemap.xml, robots.txt aur 404.html banata hai.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, pages, headTags, SITE_URL } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--app-head-->')) throw new Error('index.html me <!--app-head--> marker nahi mila')

const page = (route) =>
  template
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/<meta name="description"[^>]*>\s*/, '')
    .replace('<!--app-head-->', headTags(route))
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)

const routes = Object.keys(pages)
for (const route of routes) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page(route))
  console.log('prerendered', route)
}

fs.writeFileSync(path.join(dist, '404.html'), page('/404'))

const today = new Date().toISOString().slice(0, 10)
const priority = { '/': '1.0', '/services': '0.9', '/portfolio': '0.8', '/academy': '0.8', '/contact': '0.8' }
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => `  <url><loc>${SITE_URL}${r}</loc><lastmod>${today}</lastmod><priority>${priority[r] || '0.6'}</priority></url>`)
  .join('\n')}
</urlset>
`,
)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`done: ${routes.length} pages + 404.html, sitemap.xml, robots.txt  (site: ${SITE_URL})`)
