import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { getCatalog } from './catalog.mjs'

// Run against `npm run dev`, or set PREVIEW_BASE_URL to the deployed host.
const base = process.env.PREVIEW_BASE_URL || 'http://127.0.0.1:5173'
const browser = await chromium.launch({ channel: process.env.CHROME_CHANNEL || 'chrome' })
await mkdir('public/previews', { recursive: true })
try {
  for (const app of await getCatalog()) {
    const page = await browser.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 1 })
    const response = await page.goto(new URL(app.path, base).href, { waitUntil: 'networkidle' })
    if (!response?.ok()) throw new Error(`Cannot load ${app.path}: ${response?.status()}`)
    await page.evaluate(() => document.fonts.ready)
    // Let canvas/WebGL scenes render before photographing the actual application.
    await page.waitForTimeout(2500)
    await page.screenshot({ path: `public/previews/${app.id}.jpg`, type: 'jpeg', quality: 88 })
    console.log(`Captured ${app.path}: ${await page.title()}`)
    await page.close()
  }
} finally { await browser.close() }
