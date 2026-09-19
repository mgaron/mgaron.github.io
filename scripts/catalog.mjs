import { readdir, readFile, writeFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'

export async function getCatalog(root = process.cwd()) {
  const entries = await readdir(root, { withFileTypes: true })
  const apps = []
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.') || ['node_modules', 'dist', 'src', 'public', 'scripts'].includes(entry.name)) continue
    let html
    try { html = await readFile(`${root}/${entry.name}/index.html`, 'utf8') } catch { continue }
    const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim()
    if (!title) throw new Error(`Missing HTML title: ${entry.name}`)
    const log = execFileSync('git', ['log', '-1', '--format=%h|%cI', '--', entry.name], { cwd: root, encoding: 'utf8' }).trim()
    const [hash, date] = log.split('|')
    apps.push({ id: entry.name, title, path: `/${entry.name}/`, image: `/previews/${entry.name}.jpg`, hash: hash || null, date: date || null })
  }
  return apps
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const apps = await getCatalog()
  await writeFile('src/catalog.json', JSON.stringify(apps, null, 2) + '\n')
  console.log(`Generated catalog for ${apps.length} applications.`)
}
