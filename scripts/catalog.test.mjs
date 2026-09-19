import test from 'node:test'
import assert from 'node:assert/strict'
import { getCatalog } from './catalog.mjs'
import { execFileSync } from 'node:child_process'

test('catalog discovers deployed applications and uses each application’s own publish history', async () => {
  const apps = await getCatalog()
  for (const id of ['mortal', 'fall25', 'discus']) {
    const app = apps.find(app => app.id === id)
    assert.ok(app, `Missing ${id}`)
    assert.equal(app.path, `/${id}/`)
    assert.ok(app.title.length > 0)
    const [hash, date] = execFileSync('git', ['log', '-1', '--format=%h|%cI', '--', id], { encoding: 'utf8' }).trim().split('|')
    assert.equal(app.hash, hash)
    assert.equal(app.date, date)
  }
  assert.ok(!apps.some(app => app.id === 'dist'))
})
