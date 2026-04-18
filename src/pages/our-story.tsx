import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function OurStoryPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        {/* Hero Section: Asymmetric & Editorial */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-20 md:mb-40">
          <div className="flex flex-col md:flex-row items-end gap-12">
            <div className="w-full md:w-3/5 relative">
              <div className="aspect-[4/5] md:aspect-[16/9] bg-surface-container-high overflow-hidden">
                <img
                  alt="Upcycled marine minerals"
                  className="w-full h-full object-cover"
                  src="/images/environmental/mussel.jpg"
                />
              </div>
              <div className="absolute -bottom-12 -right-6 md:-right-12 bg-surface p-8 md:p-12 max-w-md shadow-sm">
                <span className="font-label text-xs tracking-[0.2em] text-on-surface-variant uppercase mb-4 block">
                  Genesis 01.
                </span>
                <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-primary leading-none mb-6">
                  Purity from <br />the Tide.
                </h1>
              </div>
            </div>
            <div className="w-full md:w-2/5 pb-12">
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                Re-shell was born at the intersection of marine biology and industrial mineralogy. We recognized that the surplus mussel shells from the aquaculture industry weren't a waste stream—they were a sophisticated biological resource for producing high-purity CaCO₃ and CaO for sustainable industrial applications.
              </p>
              <div className="w-16 h-px bg-outline-variant opacity-30 mb-8"></div>
              <p className="font-body text-sm text-on-surface-variant/70 leading-relaxed max-w-xs">
                Founded in 2025, Re-shell aims to upcycle thousands of tonnes of discarded mussel shells annually into laboratory-grade calcium carbonate and quicklime, replacing carbon-intensive quarried minerals.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section: Tonal Layering */}
        <section className="bg-surface-container-low py-24 md:py-40">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <h2 className="font-headline text-3xl font-bold text-primary mb-8">Our Mission</h2>
                <div className="space-y-6">
                  <p className="font-body text-xl text-on-surface">
                    We exist to eliminate the carbon footprint of industrial minerals by harnessing the regenerative cycle of the ocean.
                  </p>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Traditional mineral extraction relies on destructive quarrying and high-heat processing. Re-shell bypasses this through "Atmospheric Calcification"—a proprietary cold-cleansing process that preserves the mineral integrity of marine bio-waste while removing organic impurities.
                  </p>
                </div>
              </div>

              {/* Bento Grid for Metrics */}
              <div className="md:col-span-7 grid grid-cols-2 gap-4">
                <div className="bg-surface-container-highest p-10 flex flex-col justify-between aspect-square">
                  <span className="material-symbols-outlined text-primary text-3xl">waves</span>
                  <div>
                    <h3 className="font-headline text-5xl font-black text-primary">+95%</h3>
                    <p className="font-label text-xs tracking-widest uppercase mt-4 text-on-surface-variant">Purity Rating</p>
                  </div>
                </div>
                <div className="bg-primary text-on-primary p-10 flex flex-col justify-between aspect-square">
                  <span className="material-symbols-outlined text-on-primary text-3xl">eco</span>
                  <div>
                    <h3 className="font-headline text-5xl font-black">-72%</h3>
                    <p className="font-label text-xs tracking-widest uppercase mt-4 text-on-primary-container">CO₂ Reduction</p>
                  </div>
                </div>
                <div className="col-span-2 bg-secondary-container p-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="font-headline text-3xl font-bold text-on-secondary-container">The Circular Standard</h3>
                    <p className="font-body text-sm text-on-secondary-container mt-2">
                      Integrating waste streams into high-end glass, ceramics, and architectural polymers.
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-6xl text-on-secondary-container opacity-20">biotech</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section: Narrative Flow */}
        <section className="py-24 md:py-40 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="relative">
                  <img
                    alt="Laboratory research"
                    className="w-full grayscale brightness-90 shadow-2xl"
                    src="/images/environmental/caco3.webp"
                  />
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-fixed-dim/30 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <span className="font-label text-xs tracking-[0.3em] text-secondary uppercase mb-6 block">The Methodology</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-10 leading-tight">
                  From Mariculture to Materiality.
                </h2>
                <ul className="space-y-12">
                  <li className="flex gap-6">
                    <span className="font-headline text-2xl text-outline-variant">01</span>
                    <div>
                      <h4 className="font-label font-bold tracking-tight text-on-surface uppercase mb-2">Sourcing Strategy</h4>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                        We partner with boutique aquaculture farms in Turkey to reclaim mineral-rich shells that would otherwise contribute to landfill acidification.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-headline text-2xl text-outline-variant">02</span>
                    <div>
                      <h4 className="font-label font-bold tracking-tight text-on-surface uppercase mb-2">Molecular Purification</h4>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                        We extract pure CaCO₃ without the use of harsh chemical bleaches or heavy metal ingredient solvents.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-headline text-2xl text-outline-variant">03</span>
                    <div>
                      <h4 className="font-label font-bold tracking-tight text-on-surface uppercase mb-2">Micronization</h4>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                        Final processing into particle sizes tailored for specific industrial applications from aerospace composites to high-purity glass.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bridge to Team Section */}
        <section className="max-w-screen-xl mx-auto px-8 mb-40">
          <div className="bg-surface-container-high p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 italic">
                "We don't just see waste; we see the architecture of the ocean."
              </h2>
              <p className="font-body text-on-surface-variant mb-10 text-lg">
                The Elemental Archive is driven by a multidisciplinary collective of oceanographers, material scientists, and industrial designers committed to a decarbonized future.
              </p>
              <Link to="/team" className="inline-flex items-center gap-4 group">
                <span className="font-headline text-xl text-primary border-b border-primary pb-1 group-hover:opacity-70 transition-opacity">
                  Meet the Archive Custodians
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 hidden md:block">
              <svg className="h-full w-full fill-primary" viewBox="0 0 100 100">
                <path d="M0,0 Q50,50 100,0 T200,0 L200,100 L0,100 Z" />
              </svg>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
