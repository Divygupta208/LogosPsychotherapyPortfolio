import { FiCheckCircle, FiCpu, FiEye, FiShield } from 'react-icons/fi'
import { RiBrainLine, RiSparkling2Line } from 'react-icons/ri'
import service1 from '../../../public/images/service-1.avif'

export default function EMDROverviewSection() {
  const sciencePoints = [
    {
      title: 'Bilateral Stimulation (BLS)',
      desc: 'Alternating sensory input (such as guided eye movements or alternating auditory tones) activates both cerebral hemispheres, stimulating the brain’s natural information processing system.',
      icon: FiEye,
    },
    {
      title: 'Adaptive Information Processing',
      desc: 'Traumatic memories are stored in raw, isolated neural networks. EMDR unlocks these networks, allowing the brain to digest and integrate them with healthy, adaptive memory networks.',
      icon: RiBrainLine,
    },
    {
      title: 'Desensitization of Triggers',
      desc: 'As memories are reprocessed, emotional distress, bodily tension, and hypervigilance decrease substantially, leaving the memory intact but without the painful charge.',
      icon: FiShield,
    },
    {
      title: 'Rewiring Negative Beliefs',
      desc: 'Shifts deeply embedded subconscious beliefs (e.g., “I am in danger” or “I am not good enough”) into empowering, adaptive truths (e.g., “I am safe now” or “I am resilient”).',
      icon: RiSparkling2Line,
    },
  ]

  return (
    <section id="how-emdr-works" className="py-20 max-w-7xl mx-auto px-6 sm:px-10">
      {/* INTRO CARD */}
      <div className="p-8 sm:p-14 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_12px_45px_rgba(47,111,134,0.08)] space-y-12">
        
        {/* TOP ROW: TEXT & VISUAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-cta font-bold text-xs uppercase tracking-wider">
              Understanding the Modality
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight leading-tight">
              How Does <span className="text-cta">EMDR Therapy</span> Work?
            </h2>
            <p className="text-base sm:text-lg text-text-dark/90 font-medium leading-relaxed">
              Eye Movement Desensitization and Reprocessing (EMDR) is an extensively researched, neurobiologically grounded psychotherapy proven to help people recover from trauma and distressing life experiences.
            </p>
            <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
              When we experience severe distress or trauma, the brain’s normal processing mechanisms can be overwhelmed. Instead of becoming a standard memory of the past, the experience becomes frozen in time—complete with the original sights, emotions, thoughts, and physical tensions.
            </p>
            <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
              Whenever a present event resembles that past experience, the old memory triggers, making you feel as though you are back in that dangerous or overwhelming moment. EMDR facilitates the brain’s innate healing capacity to reprocess these frozen memories into resolved past events.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-white relative">
              <img
                src={service1}
                alt="EMDR Therapy in action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                <p className="text-xs font-bold text-text-dark leading-snug">
                  “Healing does not mean forgetting the past. It means the past no longer controls your nervous system or emotional present.”
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 NEUROLOGICAL PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {sciencePoints.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-bg-main border border-border-neutral space-y-3 text-left hover:border-cta/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-cta flex items-center justify-center border border-border-neutral shadow-sm shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-text-dark">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-text font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* TALK THERAPY VS EMDR CALLOUT */}
        <div className="p-8 rounded-2xl bg-primary-light/50 border border-primary-light space-y-4 text-left">
          <div className="flex items-center gap-2 text-cta font-bold text-sm uppercase tracking-wider">
            <FiCpu className="w-4 h-4" />
            <span>How EMDR Differs from Traditional Talk Therapy</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-1">
              <span className="font-extrabold text-text-dark block">Non-Verbal Processing</span>
              <p className="text-muted-text text-xs sm:text-sm font-medium leading-relaxed">
                You do not have to describe traumatic events in painful detail. The brain reprocesses the memory internally.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-extrabold text-text-dark block">Rapid Symptom Relief</span>
              <p className="text-muted-text text-xs sm:text-sm font-medium leading-relaxed">
                Because it addresses how memories are stored neurobiologically, EMDR often achieves relief in fewer sessions.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-extrabold text-text-dark block">Physiological Integration</span>
              <p className="text-muted-text text-xs sm:text-sm font-medium leading-relaxed">
                Targeting somatic tension and autonomic nervous system activation to ensure comprehensive whole-body calm.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
