import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Trauma Therapy',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT: CONTACT INFO CARDS */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-text-dark mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-muted-text font-medium">
                We respond to all inquiries within 24 business hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-light text-cta flex items-center justify-center shrink-0">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-text block">Email</span>
                  <a href="mailto:hello@logos.com" className="text-base font-bold text-text-dark hover:text-cta transition-colors">
                    hello@logos.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-light text-cta flex items-center justify-center shrink-0">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-text block">Phone</span>
                  <a href="tel:+9198176543210" className="text-base font-bold text-text-dark hover:text-cta transition-colors">
                    +91 98176543210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-light text-cta flex items-center justify-center shrink-0">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-text block">Location</span>
                  <span className="text-base font-bold text-text-dark">
                    Bengaluru, India (Online Sessions Worldwide)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-light text-cta flex items-center justify-center shrink-0">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-text block">Office Hours</span>
                  <span className="text-base font-bold text-text-dark">
                    Mon – Fri: 9:00 AM – 6:00 PM IST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CONSULTATION FORM */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] space-y-6 text-left"
          >
            <h3 className="text-2xl font-extrabold text-text-dark mb-4">
              Schedule a Session
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full h-12 rounded-xl bg-bg-main border border-border-neutral px-4 text-sm text-text-dark outline-none focus:border-cta transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full h-12 rounded-xl bg-bg-main border border-border-neutral px-4 text-sm text-text-dark outline-none focus:border-cta transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 00000 00000"
                  className="w-full h-12 rounded-xl bg-bg-main border border-border-neutral px-4 text-sm text-text-dark outline-none focus:border-cta transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-2">
                  Select Treatment Specialty
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-12 rounded-xl bg-bg-main border border-border-neutral px-4 text-sm text-text-dark outline-none focus:border-cta transition-colors"
                >
                  <option value="Trauma Therapy">Trauma Therapy</option>
                  <option value="Anxiety & Depression">Anxiety & Depression</option>
                  <option value="Grief & Loss">Grief & Loss</option>
                  <option value="Attachment Work & Relationships">Attachment Work & Relationships</option>
                  <option value="EMDR Therapy">EMDR Therapy</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-2">
                How Can We Help You?
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share a brief message about what you're experiencing..."
                className="w-full p-4 rounded-xl bg-bg-main border border-border-neutral text-sm text-text-dark outline-none focus:border-cta transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-cta hover:bg-primary-dark text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5 text-white" /> Request Sent Successfully!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <FiSend className="w-4 h-4" /> Request Consultation
                </span>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
