import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

function Section({ children, className = '' }) {
  return (
    <section className={`mx-auto max-w-7xl px-6 ${className}`}>{children}</section>
  )
}

function Pillar({ title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition hover:-translate-y-1 hover:border-white/20">
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-zinc-400">{desc}</p>
    </div>
  )
}

export default function Home() {
  const [stats, setStats] = useState([])
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    async function fetchSocialProof() {
      try {
        const [s, t] = await Promise.all([
          fetch(`${API}/stats`).then(r => r.json()).catch(() => []),
          fetch(`${API}/testimonials`).then(r => r.json()).catch(() => []),
        ])
        setStats(Array.isArray(s) ? s : [])
        setTestimonials(Array.isArray(t) ? t : [])
      } catch (e) {
        // silent fail for initial empty DB
      }
    }
    if (API) fetchSocialProof()
  }, [])

  return (
    <div className="space-y-28">
      {/* Hero */}
      <Section className="pt-24">
        <div className="flex flex-col items-start gap-8 md:items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400">
            Elite routines. Identity-based discipline.
          </div>
          <h1 className="max-w-3xl text-left text-5xl font-semibold leading-tight tracking-tight md:text-center md:text-6xl">
            Build an Unshakeable Standard
          </h1>
          <p className="max-w-2xl text-left text-zinc-400 md:text-center">
            No hacks. No fluff. Just systems that hardwire discipline into who you are—and keep you there.
          </p>
          <div className="flex gap-3">
            <a href="/programs" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">Join Now</a>
            <a href="#learn" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40">Learn More</a>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section id="learn">
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-2xl font-semibold text-white">Mission</h2>
          <p className="text-zinc-300">
            Unshakeable Discipline helps high performers lock in routines, remove friction, and execute with clarity. We build identity-first habits backed by simple systems and ruthless accountability.
          </p>
        </div>
      </Section>

      {/* Pillars */}
      <Section>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">The Four Pillars</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          <Pillar title="Mental" desc="Clarity, focus, and stress-proof execution." />
          <Pillar title="Physical" desc="Energy, recovery, and consistency on demand." />
          <Pillar title="Social" desc="Boundaries, leadership, and intentional relationships." />
          <Pillar title="Financial" desc="Systems for building, protecting, and deploying capital." />
        </div>
      </Section>

      {/* Products */}
      <Section>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Programs & Products</h2>
          <a href="/programs" className="text-sm text-zinc-400 hover:text-white">View all</a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="mb-2 text-xl font-semibold">72-Hour Reset</h3>
            <p className="mb-4 text-sm text-zinc-400">Rapid pattern break. Strip distractions. Reinstall standards.</p>
            <a href="/programs" className="text-sm text-white underline underline-offset-4">Explore</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="mb-2 text-xl font-semibold">UD Membership</h3>
            <p className="mb-4 text-sm text-zinc-400">Weekly structures, templates, and accountability.</p>
            <a href="/programs" className="text-sm text-white underline underline-offset-4">Explore</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="mb-2 text-xl font-semibold">Digital Downloads</h3>
            <p className="mb-4 text-sm text-zinc-400">Trackers, templates, and frameworks for execution.</p>
            <a href="/programs" className="text-sm text-white underline underline-offset-4">Explore</a>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Results</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.length > 0 ? (
            stats.map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                <div className="text-3xl font-semibold text-white">{s.value}</div>
                <div className="text-sm text-zinc-400">{s.label}</div>
              </div>
            ))
          ) : (
            <>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                <div className="text-3xl font-semibold text-white">10k+</div>
                <div className="text-sm text-zinc-400">Hours Executed</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                <div className="text-3xl font-semibold text-white">1,000+</div>
                <div className="text-sm text-zinc-400">Members Served</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                <div className="text-3xl font-semibold text-white">94%</div>
                <div className="text-sm text-zinc-400">Adherence at 8 Weeks</div>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {(testimonials.length > 0 ? testimonials : [
            { name: 'J.', role: 'Founder', quote: 'The only system that finally stuck.' },
            { name: 'A.', role: 'Operator', quote: 'Fewer decisions. More execution.' },
            { name: 'M.', role: 'Creator', quote: 'Identity flipped from “trying” to “I am”.' },
          ]).map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
              <p className="text-zinc-200">“{t.quote}”</p>
              <div className="mt-3 text-sm text-zinc-400">— {t.name}{t.role ? `, ${t.role}` : ''}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
