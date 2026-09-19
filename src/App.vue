<script setup lang="ts">
import { computed, ref } from 'vue'
import catalog from './catalog.json'

type SortOrder = 'random' | 'newest' | 'oldest' | 'title'
const sort = ref<SortOrder>('random')
function shuffle<T>(items: T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}
const randomOrder = ref(shuffle(catalog))
const apps = computed(() => {
  if (sort.value === 'random') return randomOrder.value
  return [...catalog].sort((a, b) => {
    if (sort.value === 'title') return a.title.localeCompare(b.title)
    const difference = Date.parse(b.date || '1970-01-01') - Date.parse(a.date || '1970-01-01')
    return (sort.value === 'newest' ? difference : -difference) || a.title.localeCompare(b.title)
  })
})
const formatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
const formatDate = (date: string | null) => date ? formatter.format(new Date(date)) : 'Not published yet'
function changeSort() {
  if (sort.value === 'random') randomOrder.value = shuffle(catalog)
}
// Decode HTML title entities as text, never as rendered markup.
function titleText(title: string) {
  const doc = new DOMParser().parseFromString(`<title>${title}</title>`, 'text/html')
  return doc.title
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header flex items-center justify-between">
      <a class="wordmark" href="/" aria-label="Mike Garon home">mg<span class="dot">.</span></a>
      <span class="header-note">A personal collection</span>
    </header>
    <main>
      <section class="intro" aria-labelledby="page-title">
        <p class="eyebrow"><span class="status-dot"></span> MIKE GARON / EXPERIMENTS</p>
        <h1 id="page-title">Writing code is cheap.<br><span>The consequences may not be.</span></h1>
        <p class="intro-ctpy">Silly experiments to test your patience and my random ideas.</p>
      </section>
      <section aria-label="Applications" class="collection">
        <div class="collection-toolbar">
          <p class="collection-label">THE COLLECTION <span>{{ String(catalog.length).padStart(2, '0') }}</span></p>
          <div class="sort-control flex items-center">
            <label for="sort">Sort by</label>
            <select id="sort" v-model="sort" @change="changeSort">
              <option value="random">Random</option>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="title">Title A–Z</option>
            </select>
          </div>
        </div>
        <ul class="card-grid">
          <li v-for="app in apps" :key="app.id">
            <a class="app-card" :href="app.path" :aria-label="`Open ${titleText(app.title)}`">
              <img class="card-image" :src="app.image" alt="" loading="lazy" width="1200" height="900">
              <div class="card-shade"></div>
              <div class="card-top">
                <div><span class="card-path">/{{ app.id }}</span><h2>{{ titleText(app.title) }}</h2></div>
                <span class="open-icon" aria-hidden="true">↗</span>
              </div>
              <div class="card-bottom">
                <span class="build-date"><span class="meta-label">BUILT</span><time :datetime="app.date || undefined">{{ formatDate(app.date) }}</time></span>
                <span class="build-hash" title="Latest publish commit for this application"><span class="meta-label">BUILD</span><code>{{ app.hash || 'unpublished' }}</code></span>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </main>
    <footer class="site-footer"><span>Made out of curiosity.</span><span>Always a work in progress <span class="dot">↗</span></span></footer>
  </div>
</template>
