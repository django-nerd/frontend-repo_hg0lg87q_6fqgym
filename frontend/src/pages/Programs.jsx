const products = [
  {
    name: '72-Hour Reset',
    description: 'Break patterns fast. Strip distraction. Reinstall standards in 3 days.',
    price: '$49',
    cta: 'Start Reset',
  },
  {
    name: 'Unshakeable Discipline Membership',
    description: 'Weekly structures, templates, and ruthless accountability to keep you executing.',
    price: '$39/mo',
    cta: 'Join Membership',
  },
  {
    name: 'Digital Downloads',
    description: 'Trackers, daily templates, planning systems, and frameworks for clarity.',
    price: 'From $9',
    cta: 'Browse Library',
  },
]

export default function Programs() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold">Programs & Products</h1>
        <p className="max-w-2xl text-zinc-400">Build your stack. Start with a reset, lock in identity, and scale your outputs with systems that stick.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.name} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="mb-1 text-xl font-semibold">{p.name}</h3>
            <p className="mb-4 text-sm text-zinc-400">{p.description}</p>
            <div className="mb-4 text-sm text-zinc-300">{p.price}</div>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
