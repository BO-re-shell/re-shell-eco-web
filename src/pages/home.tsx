import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent z-10"></div>
            <img
              className="w-full h-full object-cover grayscale-[0.3] brightness-90"
              alt="Iridescent white and cream mineral shells and calcite textures"
              src="/images/environmental/mussels.jpg"
            />
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-20 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-6 block">
                The Elemental Archive
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] mb-8 tracking-tighter">
                Redefining <span className="text-secondary italic">Industrial Minerals</span> with Circular Biomaterials
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                We transform marine bio-waste into high-purity CaCO₃ and CaO, delivering a high-performance alternative to traditional mining with a drastically reduced carbon footprint.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/data-request"
                  className="bg-primary text-on-primary px-8 py-4 rounded-sm font-label text-sm uppercase tracking-widest shadow-xl inline-block hover:opacity-90 transition-opacity"
                >
                  REQUEST Technical Data
                </Link>
                <Link
                  to="/our-story"
                  className="bg-surface-container-high text-on-surface px-8 py-4 rounded-sm font-label text-sm uppercase tracking-widest inline-block hover:opacity-90 transition-opacity"
                >
                  Sustainability Report
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="relative">
                  <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-sm">
                    <img
                      className="w-full h-full object-cover mix-blend-multiply opacity-80"
                      alt="Professional laboratory with scientific glassware and white minerals"
                      src="/images/environmental/caco3.webp"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 p-10 bg-white shadow-2xl max-w-xs">
                    <span className="font-label text-xs uppercase tracking-widest text-secondary block mb-2">
                      Purity Standard
                    </span>
                    <p className="font-headline text-2xl text-primary italic">
                      +95% High-Purity Calcium Carbonate
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="font-headline text-4xl font-bold text-primary mb-8">
                  Upcycling Marine Bio-waste
                </h2>
                <div className="space-y-6 font-body text-on-surface-variant leading-relaxed text-lg">
                  <p>
                    Every year, the aquaculture industry produces millions of tons of shell waste. At Re-shell, we view this not as trash, but as a sophisticated biological source of minerals.
                  </p>
                  <p>
                    Through our proprietary high-purity extraction process, we transition raw mussel shells into technical-grade Calcium Carbonate (CaCO₃) and Calcium Oxide (CaO), bypassing the need for invasive stone quarrying.
                  </p>
                  <div className="pt-8 grid grid-cols-2 gap-8">
                    <div>
                      <span className="font-label text-xs uppercase tracking-widest text-secondary block mb-2">
                        Process I
                      </span>
                      <span className="font-headline text-xl text-primary font-bold">
                        Thermal Synthesis
                      </span>
                    </div>
                    <div>
                      <span className="font-label text-xs uppercase tracking-widest text-secondary block mb-2">
                        Process II
                      </span>
                      <span className="font-headline text-xl text-primary font-bold">
                        Molecular Refinement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact - Bento Grid Style */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl font-bold text-primary mb-4">
                  The Circular Advantage
                </h2>
                <p className="font-body text-on-surface-variant text-lg">
                  Re-shell disrupts the linear "take-make-discard" model by transforming mussel and oyster waste into high-value industrial raw materials.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Impact Card 1 */}
              <div className="bg-surface p-10 rounded-sm flex flex-col justify-between min-h-[300px]">
                <div>
                  <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">
                    co2
                  </span>
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">
                    Carbon Footprint
                  </h3>
                </div>
                <div>
                  <span className="font-headline text-6xl font-extrabold text-primary">
                    -72%
                  </span>
                  <span className="font-label text-xs uppercase tracking-widest block mt-2 text-secondary">
                    CO₂ Emission Reduction
                  </span>
                </div>
              </div>

              {/* Impact Card 2 */}
              <div className="bg-primary text-on-primary p-10 rounded-sm flex flex-col justify-between min-h-[300px] md:row-span-2">
                <div>
                  <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6 block">
                    eco
                  </span>
                  <h3 className="font-headline text-xl font-bold mb-4">
                    Restorative Ecology
                  </h3>
                  <p className="font-body text-on-primary/80 leading-relaxed">
                    Our process actively eliminates coastline pollution caused by shell decay, converting biological methane risks into stable industrial assets.
                  </p>
                </div>
                <div className="border-t border-primary-container pt-6">
                  <span className="font-label text-xs uppercase tracking-[0.2em] mb-4 block">
                    Current Yearly Impact
                  </span>
                  <div className="flex items-end gap-2">
                    <span className="font-headline text-4xl">45k</span>
                    <span className="font-label text-sm mb-1 uppercase">Tons Diverted</span>
                  </div>
                </div>
              </div>

              {/* Impact Card 3 */}
              <div className="bg-surface p-10 rounded-sm flex flex-col justify-between min-h-[300px]">
                <div>
                  <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">
                    bolt
                  </span>
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">
                    Energy Efficiency
                  </h3>
                </div>
                <div>
                  <span className="font-headline text-6xl font-extrabold text-primary">
                    -20%
                  </span>
                  <span className="font-label text-xs uppercase tracking-widest block mt-2 text-secondary">
                    Lower energy consumption
                  </span>
                </div>
              </div>

              {/* Impact Card 4 */}
              <div className="md:col-span-2 bg-surface p-10 rounded-sm flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <h3 className="font-headline text-xl font-bold text-primary mb-4">
                    Resource Circularity
                  </h3>
                  <p className="font-body text-on-surface-variant">
                    Unlike finite quarry reserves, mussel shells are a seasonal, renewable byproduct of the global food system.
                  </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-secondary-fixed flex items-center justify-center relative">
                    <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center text-center">
                      <span className="font-label text-xs font-bold text-primary">
                        100% UPCYCLED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Applications Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-20">
              <h2 className="font-headline text-5xl font-bold text-primary">
                Industrial Applications
              </h2>
              <span className="h-px flex-1 bg-outline-variant opacity-20 hidden md:block"></span>
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary">
                High-Purity CaO/CaCO₃
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10">
              <div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group">
                <span className="material-symbols-outlined text-secondary mb-8 block text-3xl">
                  architecture
                </span>
                <h4 className="font-headline text-xl font-bold text-primary mb-4">
                  Green Construction
                </h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Sustainable concrete additives and bio-cement binders that lower structural carbon.
                </p>
              </div>
              <div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group">
                <span className="material-symbols-outlined text-secondary mb-8 block text-3xl">
                  biotech
                </span>
                <h4 className="font-headline text-xl font-bold text-primary mb-4">
                  Pharmaceuticals
                </h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Ultra-pure calcium sources for supplements and medical-grade manufacturing.
                </p>
              </div>
              <div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group">
                <span className="material-symbols-outlined text-secondary mb-8 block text-3xl">
                  precision_manufacturing
                </span>
                <h4 className="font-headline text-xl font-bold text-primary mb-4">
                  Polymers &amp; Plastics
                </h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  High-performance functional fillers for biodegradable plastic alternatives.
                </p>
              </div>
              <div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group">
                <span className="material-symbols-outlined text-secondary mb-8 block text-3xl">
                  agriculture
                </span>
                <h4 className="font-headline text-xl font-bold text-primary mb-4">
                  Soil Remediation
                </h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Rapid-action bio-available lime for pH balancing in regenerative farming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto bg-primary py-20 px-12 md:px-24 relative overflow-hidden rounded-sm">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Secure your sustainable supply chain today.
              </h2>
              <p className="font-body text-on-primary/70 text-lg mb-10">
                Request technical specifications or discuss a pilot partnership with our materials engineering team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/partner-with-us"
                  className="bg-white text-primary px-10 py-5 font-label text-sm uppercase tracking-widest font-bold inline-block hover:opacity-90 transition-opacity"
                >
                  Partner With Us
                </Link>
                <Link
                  to="/data-request"
                  className="border border-white/20 text-white px-10 py-5 font-label text-sm uppercase tracking-widest hover:bg-white/5 transition-colors inline-block"
                >
                  Technical Catalog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
