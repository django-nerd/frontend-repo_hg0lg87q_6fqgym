import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 text-sm tracking-wide transition-colors ${
    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
  }`

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="font-semibold text-white">
          <span className="text-xs uppercase tracking-widest text-zinc-400">Unshakeable</span>
          <span className="ml-2 text-lg">Discipline</span>
        </Link>
        <nav className="hidden gap-1 md:flex">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/programs" className={navLinkClass}>
            Programs
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            Insights
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/programs"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Join
          </Link>
        </div>
      </div>
    </header>
  )
}
