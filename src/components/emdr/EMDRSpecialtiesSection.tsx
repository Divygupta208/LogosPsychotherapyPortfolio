import { FiShield, FiHeart, FiFeather, FiUsers, FiActivity, FiSmile } from 'react-icons/fi'

export default function EMDRSpecialtiesSection() {
  const specialties = [
    {
      title: 'Post-Traumatic Stress & Acute Trauma',
      icon: FiShield,
      desc: 'Whether from an accident, medical crisis, assault, natural disaster, or military service, EMDR helps defuse flashbacks, nightmares, and persistent hyperarousal.',
    },
    {
      title: 'Complex Trauma & Childhood Wounds',
      icon: FiHeart,
      desc: 'Heal from long-term emotional neglect, invalidating family dynamics, or chronic relational trauma by reprogramming foundational feelings of safety and self-worth.',
    },
    {
      title: 'Panic Disorders, Anxiety & Phobias',
      icon: FiActivity,
      desc: 'Address the root neural loops causing sudden panic spikes, catastrophic thinking, social anxiety, and phobias that restrict daily life.',
    },
    {
      title: 'Complicated Grief & Sudden Loss',
      icon: FiFeather,
      desc: 'Process intense shock, unresolved regrets, or traumatic grief surrounding the loss of a loved one, enabling you to honor memory with peace rather than debilitating pain.',
    },
    {
      title: 'Attachment & Relational Triggers',
      icon: FiUsers,
      desc: 'Resolve deep-seated abandonment fears, distrust, people-pleasing tendencies, or chronic relationship conflict rooted in early attachment blueprints.',
    },
    {
      title: 'Self-Doubt, Shame & Limiting Beliefs',
      icon: FiSmile,
      desc: 'Overcome debilitating inner critics, impostor syndrome, or pervasive beliefs like “I am broken,” replacing them with grounded, resilient self-esteem.',
    },
  ]

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10">
      <div className="p-8 sm:p-14 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_12px_45px_rgba(47,111,134,0.08)] space-y-12">
        
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-cta font-bold text-xs uppercase tracking-wider">
            Clinical Applications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight">
            What Can <span className="text-cta">EMDR Help You</span> Overcome?
          </h2>
          <p className="text-muted-text text-base sm:text-lg font-medium leading-relaxed">
            While famously known for trauma recovery, EMDR is a versatile modality that brings rapid neurological relief across a broad spectrum of emotional and mental challenges.
          </p>
        </div>

        {/* SPECIALTIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-bg-main border border-border-neutral space-y-3 text-left hover:border-cta/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white text-cta flex items-center justify-center border border-border-neutral shadow-sm mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* STATS & SCIENTIFIC VALIDATION BOX */}
        <div className="p-8 sm:p-10 rounded-2xl bg-primary-dark text-white text-left space-y-6">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Recognized by Leading Global Health Organizations
          </h3>
          <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-4xl">
            EMDR is formally recognized and endorsed as an effective treatment for trauma and PTSD by the <strong>World Health Organization (WHO)</strong>, the <strong>American Psychological Association (APA)</strong>, the <strong>Department of Veterans Affairs (VA)</strong>, and the <strong>International Society for Traumatic Stress Studies (ISTSS)</strong>.
          </p>
        </div>

      </div>
    </section>
  )
}
