import { cp } from 'node:fs/promises'
import { getCatalog } from './catalog.mjs'
for (const app of await getCatalog()) await cp(app.id, `dist/${app.id}`, { recursive: true })

// Preserve nested game releases such as /game/royale/ in the Pages artifact.
try { await cp('game', 'dist/game', { recursive: true }) }
catch (error) { if (error.code !== 'ENOENT') throw error }

// Preserve nested game releases such as /game/royale/ in the Pages artifact.
try { await cp('game', 'dist/game', { recursive: true }) }
catch (error) { if (error.code !== 'ENOENT') throw error }

// Preserve nested game releases such as /game/royale/ in the Pages artifact.
try { await cp('game', 'dist/game', { recursive: true }) }
catch (error) { if (error.code !== 'ENOENT') throw error }

// Preserve nested game releases such as /game/royale/ in the Pages artifact.
try { await cp('game', 'dist/game', { recursive: true }) }
catch (error) { if (error.code !== 'ENOENT') throw error }

// Preserve nested game releases such as /game/royale/ in the Pages artifact.
try { await cp('game', 'dist/game', { recursive: true }) }
catch (error) { if (error.code !== 'ENOENT') throw error }

// Preserve nested game releases such as /game/royale/ in the Pages artifact.
try { await cp('game', 'dist/game', { recursive: true }) }
catch (error) { if (error.code !== 'ENOENT') throw error }

// Preserve nested game releases such as /game/royale/ in the Pages artifact.
try { await cp('game', 'dist/game', { recursive: true }) }
catch (error) { if (error.code !== 'ENOENT') throw error }

// Preserve nested game releases such as /game/royale/ in the Pages artifact.
try { await cp('game', 'dist/game', { recursive: true }) }
catch (error) { if (error.code !== 'ENOENT') throw error }

// Preserve nested game releases such as /game/royale/ in the Pages artifact.
try { await cp('game', 'dist/game', { recursive: true }) }
catch (error) { if (error.code !== 'ENOENT') throw error }
