export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-zinc-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 md:grid-cols-2">
        <p className="text-sm">© {new Date().getFullYear()} Unshakeable Discipline. All rights reserved.</p>
        <div className="flex justify-start gap-6 md:justify-end">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
