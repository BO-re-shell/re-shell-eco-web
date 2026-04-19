import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full py-20 px-8 bg-stone-100">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 max-w-7xl mx-auto">
        <div className="max-w-xs">
          <Link to="/home" className="flex items-center gap-3 mb-6">
            <img
              alt="Re-shell logo"
              className="h-20 w-auto object-contain"
              src="/images/environmental/re-shell-logo.png"
            />
            <div className="font-headline text-2xl font-bold text-stone-900">Re-shell</div>
          </Link>
          <p className="font-body text-sm text-stone-500 leading-relaxed">
            Engineering a mineral-neutral future through the scientific upcycling of marine bio-waste.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16 md:grid-cols-4">
          <div>
            <span className="font-label text-xs tracking-widest uppercase text-stone-400 mb-6 block">Company</span>
            <ul className="space-y-4">
              <li>
                <Link className="font-label text-xs tracking-widest uppercase text-stone-500 hover:text-stone-800 transition-colors" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-label text-xs tracking-widest uppercase text-stone-500 hover:text-stone-800 transition-colors" to="/our-story">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="font-label text-xs tracking-widest uppercase text-stone-500 hover:text-stone-800 transition-colors" to="/team">
                  The Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-label text-xs tracking-widest uppercase text-stone-400 mb-6 block">Legal</span>
            <ul className="space-y-4">
              <li>
                <a className="font-label text-xs tracking-widest uppercase text-stone-500 hover:text-stone-800 transition-colors" href="mailto:bo@reshelleco.com">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="font-label text-xs tracking-widest uppercase text-stone-500 hover:text-stone-800 transition-colors" href="mailto:bo@reshelleco.com">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-label text-xs tracking-widest uppercase text-stone-400 mb-6 block">Social</span>
            <ul className="space-y-4">
              <li>
                <a className="font-label text-xs tracking-widest uppercase text-stone-500 hover:text-stone-800 transition-colors" href="https://www.linkedin.com/company/re-shell-eco/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="font-label text-xs tracking-widest uppercase text-stone-500 hover:text-stone-800 transition-colors" href="https://www.instagram.com/reshelleco/">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-label text-xs tracking-widest uppercase text-stone-400 mb-6 block">Contact</span>
            <ul className="space-y-4">
              <li>
                <a className="font-label text-xs tracking-widest uppercase text-stone-500 hover:text-stone-800 transition-colors" href="mailto:bo@reshelleco.com">
                  bo@reshelleco.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-200">
        <p className="font-label text-xs tracking-widest uppercase text-stone-400">
          © 2025 Re-shell. The Elemental Archive. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
