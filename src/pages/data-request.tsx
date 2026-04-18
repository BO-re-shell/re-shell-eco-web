import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { sendEmail } from '../forms/emailjs-config'
import { validateDataRequestForm } from '../forms/validators'

export default function DataRequestPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    sector: '',
    mineralFocus: [] as string[],
    requestType: [] as string[],
    applicationDetails: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'mineralFocus' | 'requestType') => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [fieldName]: checked
        ? [...prev[fieldName], value]
        : prev[fieldName].filter(item => item !== value),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const errors = validateDataRequestForm(formData)
      if (errors.length > 0) {
        setError(errors[0])
        setLoading(false)
        return
      }

      await sendEmail(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_DATA_REQUEST,
        {
          full_name: formData.fullName,
          user_email: formData.email,
          company_name: formData.company,
          user_sector: formData.sector,
          mineral_focus: formData.mineralFocus.join(', '),
          request_type: formData.requestType.join(', '),
          application_details: formData.applicationDetails,
        }
      )

      navigate('/success')
    } catch (err) {
      setError('Failed to submit request. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 px-8 md:px-12 max-w-7xl mx-auto">
        {/* Hero Header Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.05] tracking-tight mb-10">
              Request Technical Specifications &amp; Samples
            </h1>
            <p className="font-body text-lg md:text-xl text-secondary leading-relaxed max-w-2xl">
              Our high-purity marine mineralogy represents the pinnacle of regenerative chemical engineering. This data is provided exclusively for industrial partners and R&amp;D organizations evaluating our upcycled CaCO₃ and CaO for commercial implementation.
            </p>
          </div>
          <div className="lg:col-span-5 h-[400px] bg-surface-container-low relative overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-multiply"
              alt="Close-up mineral textures showing crystalline structures"
              src="/images/environmental/caco3.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
          </div>
        </section>

        {/* Form Interface */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Technical Context Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-surface-container-low p-8 space-y-4">
              <h3 className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold">
                Standard Lead Times
              </h3>
              <p className="font-body text-sm text-secondary leading-relaxed">
                Technical Data Sheets (TDS) and SDS are delivered digitally within 24 hours. Physical mineral samples are dispatched via lab-grade courier within 5-7 business days.
              </p>
            </div>
            <div className="space-y-8 pl-2">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary shrink-0">science</span>
                <div>
                  <h4 className="font-headline text-xl italic text-primary leading-tight mb-1">
                    Lab-Verified Purity
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed">
                    Every sample is batch-tested for chemical consistency and trace element control.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary shrink-0">verified</span>
                <div>
                  <h4 className="font-headline text-xl italic text-primary leading-tight mb-1">
                    Certified Origins
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed">
                    Full traceability documentation available for all upcycled marine sources.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Request Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-16">
            {error && (
              <div className="bg-error/10 border border-error p-4 rounded-sm">
                <p className="font-body text-error text-sm">{error}</p>
              </div>
            )}

            {/* Section: Company & Contact */}
            <div className="space-y-10">
              <div className="flex items-baseline gap-4 border-b border-outline-variant/30 pb-4">
                <span className="font-label text-xs font-bold text-primary tracking-[0.2em]">01</span>
                <h2 className="font-headline text-3xl text-primary">Company &amp; Contact</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="space-y-3">
                  <label className="font-label text-[11px] uppercase tracking-[0.15em] text-secondary font-bold">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body text-on-surface placeholder:text-outline-variant/60"
                    placeholder="Dr. Julian Thorne"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-label text-[11px] uppercase tracking-[0.15em] text-secondary font-bold">
                    Professional Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body text-on-surface placeholder:text-outline-variant/60"
                    placeholder="j.thorne@lab-industrial.com"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-label text-[11px] uppercase tracking-[0.15em] text-secondary font-bold">
                    Company Name
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body text-on-surface placeholder:text-outline-variant/60"
                    placeholder="Advanced Materials Corp."
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-label text-[11px] uppercase tracking-[0.15em] text-secondary font-bold">
                    Industry Sector
                  </label>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body text-on-surface appearance-none"
                    required
                  >
                    <option disabled value="">Select Sector</option>
                    <option>Construction</option>
                    <option>Pharma</option>
                    <option>Plastics</option>
                    <option>Remediation</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Data Interest & Request Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Column 1: Minerals */}
              <div className="space-y-10">
                <div className="flex items-baseline gap-4 border-b border-outline-variant/30 pb-4">
                  <span className="font-label text-xs font-bold text-primary tracking-[0.2em]">02</span>
                  <h2 className="font-headline text-3xl text-primary">Mineral Focus</h2>
                </div>
                <div className="space-y-5">
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      value="CaCO3"
                      checked={formData.mineralFocus.includes('CaCO3')}
                      onChange={e => handleCheckboxChange(e, 'mineralFocus')}
                      className="w-4 h-4 border-outline-variant text-primary focus:ring-0 rounded-none"
                    />
                    <span className="font-label text-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                      High-Purity CaCO₃
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      value="CaO"
                      checked={formData.mineralFocus.includes('CaO')}
                      onChange={e => handleCheckboxChange(e, 'mineralFocus')}
                      className="w-4 h-4 border-outline-variant text-primary focus:ring-0 rounded-none"
                    />
                    <span className="font-label text-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                      Calcium Oxide (CaO)
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      value="Both"
                      checked={formData.mineralFocus.includes('Both')}
                      onChange={e => handleCheckboxChange(e, 'mineralFocus')}
                      className="w-4 h-4 border-outline-variant text-primary focus:ring-0 rounded-none"
                    />
                    <span className="font-label text-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                      Integrated Evaluation (Both)
                    </span>
                  </label>
                </div>
              </div>

              {/* Column 2: Requirements */}
              <div className="space-y-10">
                <div className="flex items-baseline gap-4 border-b border-outline-variant/30 pb-4">
                  <span className="font-label text-xs font-bold text-primary tracking-[0.2em]">03</span>
                  <h2 className="font-headline text-3xl text-primary">Request Type</h2>
                </div>
                <div className="space-y-5">
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      value="TDS"
                      checked={formData.requestType.includes('TDS')}
                      onChange={e => handleCheckboxChange(e, 'requestType')}
                      className="w-4 h-4 border-outline-variant text-primary focus:ring-0 rounded-none"
                    />
                    <span className="font-label text-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                      Technical Data Sheets (TDS)
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      value="SDS"
                      checked={formData.requestType.includes('SDS')}
                      onChange={e => handleCheckboxChange(e, 'requestType')}
                      className="w-4 h-4 border-outline-variant text-primary focus:ring-0 rounded-none"
                    />
                    <span className="font-label text-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                      Safety Data Sheets (SDS)
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      value="Samples"
                      checked={formData.requestType.includes('Samples')}
                      onChange={e => handleCheckboxChange(e, 'requestType')}
                      className="w-4 h-4 border-outline-variant text-primary focus:ring-0 rounded-none"
                    />
                    <span className="font-label text-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                      Material Samples
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      value="Pilot"
                      checked={formData.requestType.includes('Pilot')}
                      onChange={e => handleCheckboxChange(e, 'requestType')}
                      className="w-4 h-4 border-outline-variant text-primary focus:ring-0 rounded-none"
                    />
                    <span className="font-label text-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                      Pilot Partnership Inquiry
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Section: Project Context */}
            <div className="space-y-10">
              <div className="flex items-baseline gap-4 border-b border-outline-variant/30 pb-4">
                <span className="font-label text-xs font-bold text-primary tracking-[0.2em]">04</span>
                <h2 className="font-headline text-3xl text-primary">Project Context</h2>
              </div>
              <div className="space-y-3">
                <label className="font-label text-[11px] uppercase tracking-[0.15em] text-secondary font-bold">
                  Application &amp; Testing Requirements
                </label>
                <textarea
                  name="applicationDetails"
                  value={formData.applicationDetails}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-low border-0 p-8 focus:ring-1 focus:ring-primary/20 transition-all font-body text-on-surface placeholder:text-outline-variant/60 resize-none leading-relaxed"
                  placeholder="Please describe the intended industrial application, required volume, and specific testing parameters or ISO standards relevant to your inquiry..."
                  rows={6}
                  required
                />
              </div>
            </div>

            {/* Final Action */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-10">
              <p className="font-body text-sm text-secondary/70 italic max-w-sm leading-relaxed">
                By submitting this request, you agree to our data handling policy for industrial inquiries. Your technical data will remain confidential.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-on-primary px-16 py-6 font-label text-xs uppercase tracking-[0.25em] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Data Request'}
              </button>
            </div>
          </form>
        </section>

        {/* Visual Divider */}
        <div className="w-full h-[500px] mt-24 relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Abstract aerial view of mineral extraction and processing facility"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIwlxzlPlc9tcmxYCpRDIDEqWqZBCAaLvnPMHlrE6E_PSyRBtvq8Hv7M3gsJp1yXVlfFHYZFLsSJeyUDpTCjOUXmI7JWqpVFAdjuvg-rsHu-ZkfrYYzF4CFwaq3J14LiCYHDeEcF3FmcGkvySfyu_TKkioMArYQloHFie8IqLYeBL8B0SgXAY9PhThrLb8kHDszbEhbzZzQeS7BaYb5cpA5xxpbcfinD049W7Ey0zIN8shzCGbMWCntHO0O_XG6Xs4wy2UrHN7jtE"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface h-full"></div>
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="bg-surface/90 backdrop-blur-md p-14 max-w-xl text-center border border-outline-variant/20 shadow-2xl">
              <h5 className="font-headline italic text-3xl text-primary mb-6">Precision Engineering</h5>
              <p className="font-body text-lg text-secondary leading-relaxed">
                Our minerals are processed at a state-of-the-art facility designed specifically for shell-derived mineralogy refinement.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
