import { cp } from 'node:fs/promises'
import { getCatalog } from './catalog.mjs'
for (const app of await getCatalog()) await cp(app.id, `dist/${app.id}`, { recursive: true })
