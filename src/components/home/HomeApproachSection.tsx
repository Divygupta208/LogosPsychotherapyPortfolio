import { FiUserCheck, FiCpu, FiSun, FiCompass } from 'react-icons/fi'

export default function HomeApproachSection() {
  const approaches = [
    {
      icon: FiUserCheck,
      title: 'Personalized Care',
      description: 'Tailored plans for your unique needs.',
    },
    {
      icon: FiCpu,
      title: 'Evidence-Based Method',
      description: 'Clinically proven approaches you can trust.',
    },
    {
      icon: FiSun,
      title: 'Mind-Body Connection',
      description: 'Balancing mental, emotional, and physical health.',
    },
    {
      icon: FiCompass,
      title: 'Ongoing Support',
      description: "We're with you every step of the journey.",
    },
  ]

  return (
    <section className="py-20 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-dark">
            <span className="text-cta">Our</span> Approach
          </h2>
          <p className="text-muted-text text-base sm:text-lg font-medium">
            A holistic, human-centered approach to wellness and healing.
          </p>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-border-neutral shadow-[0_4px_20px_rgba(47,111,134,0.04)] hover:shadow-[0_12px_35px_rgba(47,111,134,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* ICON CONTAINER */}
                <div className="w-14 h-14 rounded-2xl bg-primary-light/60 text-cta flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cta group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold text-text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-text font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
