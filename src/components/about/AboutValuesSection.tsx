import { FiHeart, FiShield, FiSun, FiAward, FiUsers } from 'react-icons/fi'

export default function AboutValuesSection() {
  const detailedValues = [
    {
      title: 'Compassion',
      description: 'We listen, we care, and we walk with you through every stage of your healing journey.',
      icon: FiHeart,
    },
    {
      title: 'Integrity',
      description: 'Honest, ethical, and transparent in everything we do to build genuine clinical trust.',
      icon: FiShield,
    },
    {
      title: 'Excellence',
      description: 'Evidence-based practices tailored carefully to achieve the best therapeutic outcomes.',
      icon: FiAward,
    },
    {
      title: 'Empowerment',
      description: 'Empowering you to take active, courageous charge of your mental and emotional well-being.',
      icon: FiSun,
    },
    {
      title: 'Community',
      description: 'Building a supportive, non-judgmental community of personal growth, safety, and healing.',
      icon: FiUsers,
    },
  ]

  return (
    <section className="pb-24 max-w-4xl mx-auto px-6 sm:px-10">
      <div className="p-8 sm:p-14 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_12px_45px_rgba(47,111,134,0.08)] text-center space-y-10">
        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight">
            <span className="text-cta">Our</span> Values
          </h3>
          <p className="text-muted-text text-base sm:text-lg font-medium mt-3">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {detailedValues.map((val, idx) => {
            const Icon = val.icon
            return (
              <div
                key={idx}
                className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-bg-main border border-border-neutral/80 hover:border-cta/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-cta border border-border-neutral flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-text-dark">
                    {val.title}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-text font-medium mt-1 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
