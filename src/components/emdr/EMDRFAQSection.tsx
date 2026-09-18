import { useState } from 'react'
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi'

interface FAQItem {
  question: string
  answer: string
}

export default function EMDRFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'Do I have to describe every traumatic detail out loud?',
      answer:
        'No. Unlike conventional talk therapy, EMDR does not require you to recount every graphic or painful detail of past events. You only need to hold aspects of the memory in your mind while engaging in bilateral stimulation. This significantly lowers distress and reduces the risk of feeling overwhelmed.',
    },
    {
      question: 'Will EMDR make me feel re-traumatized or out of control?',
      answer:
        'EMDR is designed with rigorous safety protocols. Before reprocessing ever begins, we spend time building internal safety, grounding tools, and emotional anchors (Phase 2: Preparation). You are always in control of the session, and we can pause, slow down, or ground at any second using our predetermined stop signals.',
    },
    {
      question: 'Is online EMDR as effective as in-person therapy?',
      answer:
        'Yes. Clinical studies show that online EMDR therapy using secure bilateral stimulation software delivers equivalent therapeutic efficacy to in-person sessions. Many clients find that being in their own safe, familiar environment actually facilitates deeper relaxation and emotional processing.',
    },
    {
      question: 'How many sessions will I need?',
      answer:
        'The length of treatment varies depending on whether we are addressing a single-incident trauma (which often resolves in 6 to 12 sessions) or complex, ongoing childhood trauma (which may take longer for comprehensive stabilization and reprocessing). We will establish a clear, personalized timeline during your initial consultation.',
    },
    {
      question: 'Can EMDR help with anxiety, grief, and relationship issues?',
      answer:
        'Absolutely. EMDR was originally developed for PTSD, but decades of clinical application have demonstrated high effectiveness for anxiety disorders, panic attacks, complicated grief, phobias, performance anxiety, and deep attachment wounds.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 sm:py-20 max-w-5xl mx-auto px-6 sm:px-10">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-cta font-bold text-xs uppercase tracking-wider">
          Got Questions?
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight">
          Frequently Asked <span className="text-cta">Questions</span>
        </h2>
        <p className="text-muted-text text-base sm:text-lg font-medium">
          Clear, reassuring answers about EMDR therapy, what to expect, and how we ensure your safety.
        </p>
      </div>

      {/* ACCORDION LIST */}
      <div className="space-y-4 text-left">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-white border-cta/40 shadow-[0_8px_30px_rgba(47,111,134,0.08)]'
                  : 'bg-white/80 border-border-neutral hover:border-border-neutral hover:bg-white'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <FiHelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-cta' : 'text-muted-text'}`} />
                  <span className="text-base sm:text-lg font-bold text-text-dark">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-primary-light text-cta rotate-180' : 'bg-bg-main text-muted-text'
                  }`}
                >
                  <FiChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-muted-text text-sm sm:text-base font-medium leading-relaxed border-t border-border-neutral/40 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
