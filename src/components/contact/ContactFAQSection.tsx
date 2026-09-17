import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

export default function ContactFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0) // Open 1st question by default

  const faqs = [
    {
      question: 'How do I book a session?',
      answer:
        'You can schedule a consultation by filling out our online contact form above, emailing us directly at hello@logos.com, or calling +91 98176543210. We respond within 24 business hours to confirm your appointment time.',
    },
    {
      question: 'What services do you offer?',
      answer:
        'We offer evidence-based psychotherapy tailored to individual needs, including Trauma Therapy, EMDR Therapy, Anxiety & Depression support, Grief & Loss counseling, and Attachment & Relational work.',
    },
    {
      question: 'Are sessions online or in-person?',
      answer:
        'We offer secure, confidential online mental health counseling worldwide, as well as in-person sessions in Bengaluru, India.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'We understand that life happens. We ask for at least 24 hours advance notice for any session cancellations or rescheduling to avoid a missed session fee.',
    },
    {
      question: 'What can I expect during the first consultation?',
      answer:
        'The first consultation is a gentle, unhurried space to discuss what brings you to therapy, explore your goals, ask any questions, and ensure our therapeutic approach feels like the right fit for you.',
    },
  ]

  const toggleFAQ = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx))
  }

  return (
    <section className="pb-24 max-w-4xl mx-auto px-6 sm:px-10 text-left">
      <div className="space-y-8">
        
        {/* HEADER */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight">
            FAQs
          </h2>
          <p className="text-muted-text text-base sm:text-lg font-medium mt-2">
            Quick answers to common questions.
          </p>
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-border-neutral shadow-[0_4px_20px_rgba(47,111,134,0.05)] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-text-dark hover:text-cta transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-primary-light/60 text-cta flex items-center justify-center shrink-0 transition-transform">
                    {isOpen ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-muted-text font-medium leading-relaxed border-t border-border-neutral/40">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
