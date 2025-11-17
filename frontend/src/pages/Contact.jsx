import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  async function submit(e) {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${API}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('Sent. We will reply shortly.')
      else setStatus('Something went wrong. Please try again later.')
    } catch (e) {
      setStatus('Unable to send right now.')
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-10 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold">Coaching Inquiry</h1>
        <p className="text-zinc-400">Tell us where you are and where you want to go. Keep it direct.</p>
      </header>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-zinc-400">Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-3 py-2 outline-none ring-0 placeholder:text-zinc-500"
            placeholder="Patrick Grace"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-400">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-3 py-2 outline-none ring-0 placeholder:text-zinc-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-400">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={6}
            className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-3 py-2 outline-none ring-0 placeholder:text-zinc-500"
            placeholder="Your goals, constraints, and timeline"
          />
        </div>
        <button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
          Send Inquiry
        </button>
        {status && <p className="text-sm text-zinc-400">{status}</p>}
      </form>
    </div>
  )
}
