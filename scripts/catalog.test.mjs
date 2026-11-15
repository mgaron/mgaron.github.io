import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { getCatalog } from './catalog.mjs'
import { execFileSync } from 'node:child_process'

test('catalog discovers deployed applications and uses each application’s own publish history', async () => {
  const apps = await getCatalog()
  for (const id of ['mortal', 'fall25', 'discus', 'toxic-teammate']) {
    const app = apps.find(app => app.id === id)
    assert.ok(app, `Missing ${id}`)
    assert.equal(app.path, `/${id}/`)
    assert.ok(app.title.length > 0)
    const [hash, date] = execFileSync('git', ['log', '-1', '--format=%h|%cI', '--', id], { encoding: 'utf8' }).trim().split('|')
    let expected = {hash: hash || null, date: date || null}
    try { expected = JSON.parse(await readFile(`${id}/build-info.json`, 'utf8')) } catch (error) { if (error.code !== 'ENOENT') throw error }
    assert.equal(app.hash, expected.hash)
    assert.equal(app.date, expected.date)
  }
  assert.ok(!apps.some(app => app.id === 'dist'))
})

test('featured catalog places Toxic Teammate immediately before Mortal Discus', async () => {
  const apps = await getCatalog()
  assert.equal(apps.findIndex(app => app.id === 'toxic-teammate') + 1, apps.findIndex(app => app.id === 'mortal'))
})
