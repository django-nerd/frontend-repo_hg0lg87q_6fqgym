import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/posts`)
        const data = await res.json()
        if (Array.isArray(data)) setPosts(data)
      } catch (e) {}
    }
    if (API) load()
  }, [])

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold">Insights</h1>
        <p className="max-w-2xl text-zinc-400">Short ideas on discipline, routines, and mindset. Direct. Useful. No fluff.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {(posts.length ? posts : [
          { title: 'Reset vs. Routine', excerpt: 'Why pattern breaks matter—and how to reinstall standards fast.' },
          { title: 'Identity > Motivation', excerpt: 'Make discipline who you are, not what you try.' },
          { title: 'Friction Kills Execution', excerpt: 'Remove decisions. Simplify. Run the system.' },
        ]).map((p, i) => (
          <article key={i} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">{p.title}</h3>
            <p className="text-sm text-zinc-400">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
