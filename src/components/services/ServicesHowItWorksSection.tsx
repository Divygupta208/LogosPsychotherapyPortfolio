import { FiCalendar, FiFileText, FiCompass, FiHeart, FiSmile } from 'react-icons/fi'

export default function ServicesHowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Book a Session',
      description: 'Choose a service and schedule your initial confidential consultation.',
      icon: FiCalendar,
    },
    {
      num: '02',
      title: 'Personalized Plan',
      description: 'We create a tailored therapeutic strategy focused on your unique needs.',
      icon: FiFileText,
    },
    {
      num: '03',
      title: 'Begin Your Journey',
      description: 'Engage in deep, focused sessions with proven evidence-based techniques.',
      icon: FiCompass,
    },
    {
      num: '04',
      title: 'Ongoing Support',
      description: 'We walk with you with empathy, safety, and guidance every step of the way.',
      icon: FiHeart,
    },
    {
      num: '05',
      title: 'Transform Your Life',
      description: 'Experience emotional balance, personal growth, and lasting resilience.',
      icon: FiSmile,
    },
  ]

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight">
          How It <span className="text-cta">Works</span>
        </h2>
        <p className="text-muted-text text-base sm:text-lg font-medium">
          Simple steps to start your wellness journey toward clarity and healing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon
          return (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[2rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] hover:shadow-[0_12px_45px_rgba(47,111,134,0.12)] transition-all duration-300 flex flex-col justify-between space-y-4 text-left group"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-primary-light text-cta font-extrabold text-sm flex items-center justify-center">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-xl bg-bg-main text-text-dark group-hover:text-cta flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-extrabold text-text-dark group-hover:text-cta transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-text font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
