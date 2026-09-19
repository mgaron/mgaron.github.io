import assert from 'node:assert/strict'
import { chromium } from 'playwright'
import { getCatalog } from './catalog.mjs'
const browser = await chromium.launch({ channel: 'chrome' })
const catalog = await getCatalog()
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4173'
try {
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  for (const [width, columns] of [[375, 1], [768, 2], [1440, 3]]) {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto(base, { waitUntil: 'networkidle' })
    assert.equal(await page.locator('.app-card').count(), catalog.length)
    assert.equal(await page.locator('#sort').inputValue(), 'random')
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow at ${width}`)
    assert.equal(await page.locator('.card-grid').evaluate(el => getComputedStyle(el).gridTemplateColumns.split(' ').length), columns)
    await page.locator('.app-card').last().scrollIntoViewIfNeeded()
    await page.waitForFunction(() => [...document.querySelectorAll('.card-image')].every(image => image.complete && image.naturalWidth > 0))
    for (const order of ['title', 'newest', 'oldest']) {
      await page.selectOption('#sort', order)
      const paths = await page.locator('.app-card').evaluateAll(els => els.map(el => el.getAttribute('href')))
      const expected = [...catalog].sort((a, b) => {
        if (order === 'title') return a.title.localeCompare(b.title)
        const delta = Date.parse(b.date) - Date.parse(a.date)
        return (order === 'newest' ? delta : -delta) || a.title.localeCompare(b.title)
      }).map(app => app.path)
      assert.deepEqual(paths, expected)
    }
    await page.selectOption('#sort', 'random')
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.screenshot({ path: `/tmp/site-${width}.png`, fullPage: true })
  }
  for (const app of catalog) {
    const response = await page.goto(new URL(app.path, base).href, { waitUntil: 'networkidle' })
    assert.equal(response.status(), 200)
    assert.equal((await response.text()).match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim(), app.title)
  }
  assert.deepEqual(errors, [])
  console.log('Verified mobile/tablet/desktop layout, previews, every sort mode, and all production application routes.')
} finally { await browser.close() }
