import { Link } from 'react-router-dom'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="max-w-screen-2xl mx-auto px-4 md:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-black text-primary tracking-tighter leading-none mb-6">
                Architects of <br />Circular Flow
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Our multidisciplinary team combines molecular biology, bioengineering, and sustainable economics to transform calcified waste into high-purity mineral resources.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col items-start md:items-end">
              <div className="bg-surface-container-high p-8 rounded-sm w-full md:w-80">
                <span className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-outline mb-2 block">
                  Mission Statement
                </span>
                <p className="font-body text-sm italic text-on-surface leading-snug">
                  "Bridging the gap between raw marine organicism and refined industrial mineralogy through intentional material curation."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid - Bento Inspired */}
        <section className="max-w-screen-2xl mx-auto px-4 md:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Founder Card */}
            <div className="md:col-span-8 bg-surface-container-low rounded-sm overflow-hidden flex flex-col md:flex-row group">
              <div className="md:w-1/2 h-96 md:h-auto overflow-hidden">
                <img
                  alt="Beyza Özerdem - Founder"
                  className="w-full h-full object-cover"
                  src="/images/team/beyza.jpeg"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-label text-[0.7rem] uppercase tracking-[0.15em] text-secondary font-bold mb-4 block">
                    Founder & Visionary
                  </span>
                  <h2 className="font-headline text-4xl text-primary font-bold mb-6">Beyza Özerdem</h2>
                  <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                    Architecting the future of Re-shell by integrating ecological preservation with industrial scalability. Beyza leads our global strategy and material philosophy, ensuring every shell reclaimed meets the highest standard of architectural purity.
                  </p>
                </div>
                <Link to="/partner-with-us" className="mt-8 flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-bold hover:opacity-70 transition-opacity">
                  Get In Touch{' '}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* R&D Engineer Card */}
            <div className="md:col-span-4 bg-surface-container-highest rounded-sm p-6 sm:p-8 flex flex-col">
              <div className="w-full aspect-square mb-8 overflow-hidden">
                <img
                  alt="Evrim Uludağ - R&D Lead"
                  className="w-full h-full object-cover"
                  src="/images/team/evrim.jpeg"
                />
              </div>
              <div>
                <span className="font-label text-[0.7rem] uppercase tracking-[0.15em] text-tertiary font-bold mb-2 block">
                  Technical Lead
                </span>
                <h3 className="font-headline text-2xl text-primary font-bold mb-4">Evrim Uludağ</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  R&D Engineer specializing in mineral extraction and polymer bonding. Evrim's research focuses on the calcification cycles of Aegean mussels.
                </p>
              </div>
            </div>

            {/* Sustainability Expert Card */}
            <div className="md:col-span-4 bg-surface-container-high rounded-sm p-6 sm:p-8 flex flex-col">
              <div className="w-full aspect-square mb-8 overflow-hidden">
                <img
                  alt="Erdem Kuruca - Sustainability Officer"
                  className="w-full h-full object-cover"
                  src="/images/team/erdem.jpg"
                />
              </div>
              <div>
                <span className="font-label text-[0.7rem] uppercase tracking-[0.15em] text-secondary font-bold mb-2 block">
                  Sustainability Officer
                </span>
                <h3 className="font-headline text-2xl text-primary font-bold mb-4">Erdem Kuruca</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  An expert in circular economy metrics. Erdem ensures our supply chain remains carbon-neutral while optimizing mineral output for the global market.
                </p>
              </div>
            </div>

            {/* Milo Card */}
            <div className="md:col-span-8 rounded-sm overflow-hidden flex flex-col md:flex-row relative">
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center z-10">
                <div className="bg-[#432d21]/70 backdrop-blur-sm p-6 sm:p-8 rounded-sm">
                  <span className="font-label text-[0.7rem] uppercase tracking-[0.15em] text-primary-fixed-dim font-bold mb-4 block">
                    Moral Support & Vibe Tech
                  </span>
                  <h2 className="font-headline text-5xl font-bold mb-6 italic text-white">Milo</h2>
                  <p className="font-body text-white/90 leading-relaxed text-sm">
                    Head of Pur and Chief Happiness Officer. Milo manages office morale with high-frequency purring and rigorous sun-spot testing. A vital pillar of our creative atmosphere.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-80 md:h-full relative overflow-hidden">
                <img
                  alt="Milo - Chief Happiness Officer"
                  className="w-full h-full object-cover object-top"
                  src="/images/team/milio.jpeg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-40 bg-surface-container-low py-24">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
            <div className="mb-16">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-outline block mb-4">
                Collective Intelligence
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl text-primary font-bold">
                Production Aims & MVP Development
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="font-body text-lg text-on-surface leading-relaxed">
                  Re-shell aims to upcycle Turkey's 45k-ton mussel waste into high-purity CaCO₃. We prevent coastal pollution and replace destructive mining with a circular industrial raw material.
                </p>
                <p className="font-body text-lg text-on-surface leading-relaxed">
                  Re-shell offers a domestic and sustainable circular economy model that reduces import dependence. The production of high-purity CaCO₃ from mussel and oyster shells is a multi-stage process requiring advanced technological optimization.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-highest p-4 sm:p-8 flex flex-col justify-between aspect-square">
                  <span className="font-headline text-5xl text-primary font-black">
                    45k<span className="text-2xl">t</span>
                  </span>
                  <div>
                    <h4 className="font-label font-bold uppercase tracking-widest text-[0.65rem] mb-2">
                      Waste Upcycle Potential
                    </h4>
                    <p className="font-body text-[0.65rem] text-on-surface-variant leading-relaxed">
                      Diverting shell waste from coasts into high-value industrial cycle.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-highest p-4 sm:p-8 flex flex-col justify-between aspect-square">
                  <span className="font-headline text-5xl text-primary font-black">100%</span>
                  <div>
                    <h4 className="font-label font-bold uppercase tracking-widest text-[0.65rem] mb-2">
                      Circular Model
                    </h4>
                    <p className="font-body text-[0.65rem] text-on-surface-variant leading-relaxed">
                      Sustainable domestic alternative to traditional destructive mining.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 max-w-screen-xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-primary mb-8 tracking-tighter">
            Join the Archive
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            We are always seeking materials scientists, designers, and visionaries to expand our elemental reach.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/partner-with-us"
              className="bg-primary text-on-primary px-10 py-4 font-label uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-all"
            >
              What's next
            </Link>
            <Link
              to="/partner-with-us"
              className="border border-outline/20 px-10 py-4 font-label uppercase tracking-[0.2em] text-xs hover:bg-surface-container-low transition-all"
            >
              Collaborate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
