import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function NotFoundPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 md:pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto py-20">
          <div className="mb-12 h-64 md:h-80 rounded-sm overflow-hidden mb-16">
            <img
              alt="Mineral textures"
              className="w-full h-full object-cover grayscale"
              src="/images/environmental/ph-1.jpg"
            />
          </div>
          <div className="text-center py-32">
          <div className="mb-12">
            <h1 className="font-headline text-8xl font-black text-primary mb-6">404</h1>
            <p className="font-headline text-4xl text-primary mb-4">Page Not Found</p>
          </div>
          <div className="mb-12 space-y-3">
            <p className="font-body text-lg text-on-surface">
              The page you're looking for might have been removed or is no longer available.
            </p>
            <p className="font-body text-secondary">Let's get you back on the path to Re-shell.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xs sm:max-w-none mx-auto">
            <Link
              to="/home"
              className="bg-primary text-on-primary text-center px-10 py-4 rounded-sm font-label text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
            >
              Back to Home
            </Link>
            <Link
              to="/partner-with-us"
              className="bg-white border border-primary text-primary text-center px-10 py-4 rounded-sm font-label text-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
