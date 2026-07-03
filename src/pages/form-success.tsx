import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function FormSuccessPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 md:pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto py-32">
          <div className="mb-12 h-64 md:h-80 rounded-sm overflow-hidden">
            <img
              alt="Mineral success background"
              className="w-full h-full object-cover grayscale brightness-95"
              src="/images/environmental/caco3.webp"
            />
          </div>
          <div className="bg-white rounded-sm shadow-sm p-6 md:p-20 max-w-2xl mx-auto text-center">
            <div className="mb-12">
              <span
                className="material-symbols-outlined text-tertiary text-7xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                task_alt
              </span>
              <h1 className="font-headline text-4xl md:text-5xl text-primary mb-4">Thank You!</h1>
              <p className="font-headline text-lg text-secondary italic">Your submission has been received</p>
            </div>

            <div className="space-y-6 mb-12">
              <p className="font-body text-lg text-on-surface">
                We've received your inquiry and our team will review it shortly.
              </p>
              <p className="font-body text-on-surface-variant">
                You'll receive a confirmation email at the address you provided, and we will be in touch within 24–48 business hours.
              </p>
              <div className="bg-surface-container-low p-6 rounded-sm my-8">
                <p className="font-label text-sm text-on-surface-variant uppercase tracking-widest mb-4">What's Next?</p>
                <ul className="space-y-3 text-left max-w-md mx-auto">
                  <li className="flex items-start gap-3">
                    <span className="text-tertiary font-bold">✓</span>
                    <span className="font-body text-sm">We'll verify your organization and requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-tertiary font-bold">✓</span>
                    <span className="font-body text-sm">Our team will send technical documentation and samples</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-tertiary font-bold">✓</span>
                    <span className="font-body text-sm">We'll schedule a consultation to discuss partnership options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
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

            <p className="font-label text-xs text-outline mt-8 uppercase tracking-widest">
              Questions? Email us at{' '}
              <a href="mailto:bo@reshelleco.com" className="text-primary hover:underline">
                bo@reshelleco.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
