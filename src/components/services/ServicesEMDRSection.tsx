import { Link } from 'react-router-dom'
import { FiArrowRight, FiShield, FiHeart, FiFeather, FiUsers, FiInfo } from 'react-icons/fi'
import sandBg from '../../../public/sandbg.png'

export default function ServicesEMDRSection() {
  const emdrSpecialties = [
    {
      title: 'Trauma',
      icon: FiShield,
      text: 'EMDR is widely recognized for its effectiveness in treating trauma. Whether stemming from a single event or ongoing experiences, trauma can leave lasting imprints on the nervous system. EMDR supports trauma healing by helping the brain safely process these experiences, reducing reactivity, and restoring a sense of internal safety and balance.',
    },
    {
      title: 'Anxiety & Depression',
      icon: FiHeart,
      text: 'Anxiety and depression are natural yet often overwhelming experiences that impact both mind and body. Anxiety can feel like an internal alarm stuck on, bringing constant worry, racing thoughts, and tension, while depression can feel like a heavy weight marked by fatigue, loss of interest, and lingering hopelessness. Together, they can make it hard to feel grounded or at ease. Through mental health treatment, these experiences can be understood with compassion, helping to calm the nervous system and gradually restore balance, energy, and a sense of hope.',
    },
    {
      title: 'Grief & Loss',
      icon: FiFeather,
      text: 'Grief and loss are deeply human experiences that can touch every part of your inner world. They often don’t follow a clear path, showing up as waves of sadness, longing, numbness, or even confusion, sometimes when you least expect it. Loss can shift your sense of identity, connection, and meaning, making it difficult to feel grounded or move forward. Through mental health treatment, grief can be met with compassion rather than urgency, creating space to process the pain, honor what has been lost, and gradually find a way to carry it while reconnecting with life in a meaningful way.',
    },
    {
      title: 'Attachment Work and Relationships',
      icon: FiUsers,
      text: 'Our earliest relationships create the blueprint for how we experience trust and connection throughout our lives. EMDR can help reprocess attachment wounds that influence current relationships, supporting healthier boundaries, increased emotional security, and a more authentic connection with others and with yourself.',
    },
  ]

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10">
      <div className="p-8 sm:p-14 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_12px_45px_rgba(47,111,134,0.08)] space-y-12">
        
        {/* SERENE BANNER IMAGE */}
        <div className="w-full h-48 sm:h-64 rounded-3xl overflow-hidden shadow-inner relative">
          <img
            src={sandBg}
            alt="EMDR Therapy Serene Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/40 via-transparent to-primary-dark/20" />
        </div>

        {/* EMDR HEADER & PARAGRAPHS */}
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-text-dark tracking-tight leading-tight">
            EMDR Therapy <span className="font-serif italic font-normal text-cta">Online</span>
          </h2>

          <p className="text-base sm:text-lg text-text-dark/95 font-medium leading-relaxed">
            Eye Movement Desensitization and Reprocessing (EMDR) is a powerful, evidence-based therapeutic approach that supports healing from distressing or traumatic experiences. Online EMDR therapy allows individuals to engage in deep, focused healing work within a setting that feels safe, familiar, and grounded.
          </p>

          <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
            When difficult experiences are overwhelming, the brain may struggle to fully process them. As a result, memories can remain "stuck," continuing to trigger emotional distress, physical tension, or unhelpful beliefs long after the event has passed. EMDR works with the brain's natural capacity to heal by helping these experiences be reprocessed and integrated in a healthier, more adaptive way.
          </p>

          <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
            Through guided eye movements or other forms of bilateral stimulation, EMDR helps reduce the emotional intensity of painful memories while allowing new insight, clarity, and perspective to emerge. Rather than reliving the past, clients are supported in moving through it—gently and at their own pace.
          </p>

          {/* ACTION BUTTONS */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/services/emdr-therapy"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cta text-white hover:bg-primary-dark font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <FiInfo className="w-4 h-4" />
              <span>View Full EMDR Details</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-cta text-cta hover:bg-cta hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <span>Start Your Journey</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* BLUE QUOTE / FEATURE CALLOUT BOX */}
        <div className="p-8 sm:p-10 rounded-2xl bg-primary-dark text-white shadow-md text-left">
          <p className="text-base sm:text-lg font-medium leading-relaxed max-w-4xl mx-auto text-white/95">
            EMDR is effective for a wide range of emotional and relational concerns. Through EMDR therapy online, clients can access this transformative work while remaining grounded in their everyday environment, supporting continuity and integration between sessions.
          </p>
        </div>

        {/* 4 SPECIALTIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {emdrSpecialties.map((item, idx) => {
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
                  <h3 className="text-lg sm:text-xl font-extrabold text-text-dark">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-text font-medium leading-relaxed pt-1">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
