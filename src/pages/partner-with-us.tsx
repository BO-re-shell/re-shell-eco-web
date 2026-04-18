import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { sendEmail } from '../forms/emailjs-config'
import { validatePartnerForm } from '../forms/validators'

export default function PartnerWithUsPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    companyName: '',
    sector: '',
    partnershipInterest: '',
    phone: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const errors = validatePartnerForm(formData)
      if (errors.length > 0) {
        setError(errors[0])
        setLoading(false)
        return
      }

      await sendEmail(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
        {
          contact_name: formData.contactName,
          user_email: formData.email,
          company_name: formData.companyName,
          user_sector: formData.sector,
          partnership_interest: formData.partnershipInterest,
          user_phone: formData.phone,
        }
      )

      navigate('/success')
    } catch (err) {
      setError('Failed to submit inquiry. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="font-label uppercase tracking-[0.2em] text-secondary text-sm mb-4 block">
                  Industrial Collaboration
                </span>
                <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight">
                  Forging circularity through marine minerals.
                </h1>
              </div>
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Join our ecosystem of industrial pioneers. We transform calcium-rich marine waste into high-performance architectural and chemical precursors.
              </p>
            </div>
            <div className="md:col-span-5 relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                className="object-cover w-full h-full grayscale-[20%] contrast-110"
                alt="Macro photography of calcium carbonate mineral textures with crystalline structures"
                src="/images/environmental/caco3.webp"
              />
            </div>
          </div>
        </section>

        {/* Partnership Verticals */}
        <section className="bg-surface-container-low py-24 mb-24">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="mb-16 space-y-4">
              <h2 className="font-headline text-3xl text-primary">Target Sectors</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-surface-container-highest p-8 flex flex-col justify-between aspect-square">
                <span className="font-label text-xs tracking-widest text-secondary uppercase">01</span>
                <div className="space-y-3">
                  <h3 className="font-headline text-2xl text-primary">Construction</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Aggregates and binders for low-carbon architectural concrete and mineral-based cladding.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-highest p-8 flex flex-col justify-between aspect-square">
                <span className="font-label text-xs tracking-widest text-secondary uppercase">02</span>
                <div className="space-y-3">
                  <h3 className="font-headline text-2xl text-primary">Pharma</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    High-purity calcium carbonate precursors for pharmaceutical-grade supplements and coatings.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-highest p-8 flex flex-col justify-between aspect-square">
                <span className="font-label text-xs tracking-widest text-secondary uppercase">03</span>
                <div className="space-y-3">
                  <h3 className="font-headline text-2xl text-primary">Plastics</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Mineral fillers that improve structural integrity and recyclability in polymer compounds.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-highest p-8 flex flex-col justify-between aspect-square">
                <span className="font-label text-xs tracking-widest text-secondary uppercase">04</span>
                <div className="space-y-3">
                  <h3 className="font-headline text-2xl text-primary">Remediation</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    pH-neutralizing soil amendments and heavy-metal filtration media for environmental restoration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-headline text-4xl text-primary">Initiate the Archive</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Complete the technical intake form below. Our industrial partnership team reviews all inquiries for material compatibility and supply chain integration within 72 hours.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    lab_research
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-primary font-body">Material Specification</h4>
                    <p className="font-label text-sm text-on-surface-variant">
                      Access our full technical data sheets (TDS) for pure CaCO₃ derivatives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    factory
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-primary font-body">Scale Capacity</h4>
                    <p className="font-label text-sm text-on-surface-variant">
                      Processing facilities currently handling 500+ metric tons of marine waste monthly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="bg-error/10 border border-error p-4 rounded-sm">
                    <p className="font-body text-error text-sm">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-secondary block">
                      Contact Name
                    </label>
                    <input
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-outline/20 p-4 text-sm font-label"
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-secondary block">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-outline/20 p-4 text-sm font-label"
                      placeholder="j.doe@company.com"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-secondary block">
                    Company Name
                  </label>
                  <input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-outline/20 p-4 text-sm font-label"
                    placeholder="Global Minerals Ltd."
                    type="text"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-secondary block">
                    Industry Sector
                  </label>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-outline/20 p-4 text-sm font-label appearance-none"
                    required
                  >
                    <option value="">Select Sector</option>
                    <option>Construction &amp; Architecture</option>
                    <option>Pharmaceuticals</option>
                    <option>Plastics &amp; Polymers</option>
                    <option>Soil Remediation</option>
                    <option>Other Industrial</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-secondary block">
                    Phone (Optional)
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-outline/20 p-4 text-sm font-label"
                    placeholder="+1 (555) 123-4567"
                    type="tel"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-secondary block">
                    Partnership Interest
                  </label>
                  <textarea
                    name="partnershipInterest"
                    value={formData.partnershipInterest}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-outline/20 p-4 text-sm font-label resize-none"
                    placeholder="Describe your material requirements or project scope..."
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 font-label uppercase tracking-widest text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
