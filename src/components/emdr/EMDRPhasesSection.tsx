import { FiShield, FiAnchor, FiTarget, FiZap, FiCheck, FiHeart, FiLock, FiRefreshCw } from 'react-icons/fi'

export default function EMDRPhasesSection() {
  const phases = [
    {
      num: '01',
      title: 'History & Treatment Planning',
      icon: FiShield,
      summary: 'Identifying targets and establishing goals',
      desc: 'We explore your personal history, symptoms, and specific distressing memories or current triggers that you would like to resolve.',
    },
    {
      num: '02',
      title: 'Preparation & Resource Building',
      icon: FiAnchor,
      summary: 'Developing internal calm and coping tools',
      desc: 'Before memory processing begins, we practice grounding techniques, safe-place visualizations, and somatic stabilizers so you always feel anchored and secure.',
    },
    {
      num: '03',
      title: 'Assessment of Target Memory',
      icon: FiTarget,
      summary: 'Accessing components of the memory',
      desc: 'We identify the vivid image, negative belief (e.g., “I am powerless”), desired positive belief, associated emotions, and bodily sensations.',
    },
    {
      num: '04',
      title: 'Desensitization & BLS',
      icon: FiZap,
      summary: 'Reprocessing with bilateral stimulation',
      desc: 'Using guided eye movements, bilateral auditory tones, or tactile cues, your brain safely reprocesses the memory while distress levels decrease.',
    },
    {
      num: '05',
      title: 'Installation of Positive Beliefs',
      icon: FiCheck,
      summary: 'Strengthening empowering truths',
      desc: 'We link the memory to positive cognitions (e.g., “I am strong, I survived, and I am safe now”) until they feel completely true and authentic.',
    },
    {
      num: '06',
      title: 'Body Scan & Somatic Check',
      icon: FiHeart,
      summary: 'Clearing residual somatic tension',
      desc: 'You hold the target memory and positive belief in mind while scanning your body to identify and discharge any lingering physical tension.',
    },
    {
      num: '07',
      title: 'Closure & Grounding',
      icon: FiLock,
      summary: 'Ensuring stability at session end',
      desc: 'Every session concludes with grounding tools and containment strategies so you leave feeling completely centered, safe, and balanced.',
    },
    {
      num: '08',
      title: 'Re-evaluation & Integration',
      icon: FiRefreshCw,
      summary: 'Checking progress in subsequent sessions',
      desc: 'At the start of the following session, we assess how well previous reprocessing has held and check for any newly emergent insights or responses.',
    },
  ]

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-cta font-bold text-xs uppercase tracking-wider">
          Structured 8-Phase Protocol
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight">
          The 8 Phases of <span className="text-cta">EMDR Therapy</span>
        </h2>
        <p className="text-muted-text text-base sm:text-lg font-medium leading-relaxed">
          EMDR follows a rigorous, scientifically validated framework designed to ensure client safety, pacing, and complete neurological resolution.
        </p>
      </div>

      {/* 8 PHASES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase) => {
          const Icon = phase.icon
          return (
            <div
              key={phase.num}
              className="p-6 rounded-[2rem] bg-white border border-border-neutral shadow-[0_6px_25px_rgba(47,111,134,0.05)] hover:shadow-[0_12px_35px_rgba(47,111,134,0.1)] hover:border-cta/40 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-cta/30 group-hover:text-cta transition-colors font-mono">
                    {phase.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-primary-light/60 text-cta flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-text-dark mb-1 group-hover:text-cta transition-colors">
                  {phase.title}
                </h3>
                
                <p className="text-xs font-bold text-primary-dark mb-3">
                  {phase.summary}
                </p>

                <p className="text-xs sm:text-sm text-muted-text font-medium leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
