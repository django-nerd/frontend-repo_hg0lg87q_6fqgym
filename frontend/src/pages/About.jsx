function Block({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <div className="text-zinc-300 text-sm">{children}</div>
    </div>
  )
}

export default function About() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold">About</h1>
        <p className="max-w-2xl text-zinc-400">Unshakeable Discipline was founded by Patrick Grace to help driven people build routines that refactor identity and produce reliable execution.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <Block title="Founder — Patrick Grace">
          Patrick is a coach and builder focused on high-performance routines. His approach is simple: fewer decisions, stronger standards, better outputs.
        </Block>
        <Block title="Mission">
          Upgrade identity through disciplined systems. Make consistency the default by removing friction and installing clarity.
        </Block>
        <Block title="Values">
          Truth, simplicity, ownership, and action. No fluff. No excuses. Just the work.
        </Block>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Block title="What makes us different">
          Identity-first behavior change. We build systems that alter who you believe you are. The result: adherence without burnout, execution without drama.
        </Block>
        <Block title="Transformation focus">
          We measure outcomes: adherence, energy, clarity, and execution rate. Everything else is noise.
        </Block>
      </div>
    </div>
  )
}
