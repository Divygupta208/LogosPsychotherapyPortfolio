import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeart, FiShield, FiSun, FiSmile, FiCompass } from 'react-icons/fi'
import clientImg from '../../../public/client-image.png'

export default function AboutStorySection() {
  const coreValues = [
    { label: 'Peace', icon: FiSun },
    { label: 'Tranquil', icon: FiSmile },
    { label: 'Loved', icon: FiHeart },
    { label: 'Meaning', icon: FiCompass },
    { label: 'Secure', icon: FiShield },
  ]

  return (
    <section className="pb-20 max-w-7xl mx-auto px-6 sm:px-10">
      
      {/* ABOUT ME SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span className="inline-block px-5 py-2 rounded-full bg-primary-light text-primary-dark font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm">
          About Me
        </span>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif italic text-text-dark tracking-tight">
          Moussia Zaklikovsky
        </h2>
        <p className="text-cta font-bold text-xs sm:text-sm uppercase tracking-[0.25em]">
          Licensed Clinical Social Worker (LCSW)
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-cta text-cta hover:bg-cta hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm"
          >
            <span>Schedule a Consultation</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* MAIN STORY CARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start p-8 sm:p-14 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_12px_45px_rgba(47,111,134,0.08)]">
        
        {/* THERAPIST PORTRAIT */}
        <div className="lg:col-span-5 relative flex justify-center lg:sticky lg:top-32">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-lg border border-white">
            <img
              src={clientImg}
              alt="Moussia Zaklikovsky, LCSW"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl backdrop-blur-md bg-white/90 border border-white shadow-md text-left">
              <h3 className="text-lg font-extrabold text-text-dark leading-tight">
                Moussia Zaklikovsky, LCSW
              </h3>
              <p className="text-xs font-semibold text-cta">
                Licensed Clinical Social Worker
              </p>
            </div>
          </div>
        </div>

        {/* DETAILED CONTENT PARAGRAPHS */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <p className="text-base sm:text-lg text-text-dark/95 font-medium leading-relaxed">
            I am a Licensed Clinical Social Worker dedicated to helping individuals move toward emotional wellness and a more meaningful life. My work is grounded in the belief that while pain is an inevitable part of being human, suffering is shaped by how we experience, interpret, and carry that pain.
          </p>

          <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
            The name <strong className="text-primary-dark font-bold">LOGOS</strong> comes from the Greek word for <em>meaning</em> and is inspired by Viktor Frankl's understanding that meaning can lessen the suffering that accompanies unavoidable hardship. Therapy, to me, is not about erasing pain; it is about building resilience, deepening understanding, and creating a life that feels purposeful even in the presence of difficulty.
          </p>

          <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
            I am <strong className="text-text-dark font-bold">EMDR trained</strong> and specialize in trauma-focused work. In EMDR therapy, we can work together to reduce the suffering those experiences continue to cause. By helping the nervous system process and integrate trauma, healing becomes possible without reliving the past.
          </p>

          <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
            Trained in early childhood attachment-based and somatic approaches as well as behavior therapy, I have extensive experience working with individuals navigating anxiety, depression, and relational challenges. My approach integrates formal clinical training with a deep personal understanding of emotional resistance and pain. It was this dual perspective that drew me to trauma work, where I now walk alongside others on their journeys.
          </p>

          <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
            At <strong className="text-primary-dark font-bold">LOGOS Psychotherapy</strong>, therapy is a collaborative space to explore your values, strengthen resilience, and create meaning, even when life feels uncertain or heavy.
          </p>

          {/* CORE VALUES BAR / PILLS */}
          <div className="pt-6 border-t border-border-neutral/60">
            <div className="p-4 sm:p-6 rounded-2xl bg-primary-dark text-white shadow-md">
              <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3">
                {coreValues.map((val, idx) => {
                  const Icon = val.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-xs sm:text-sm tracking-wide"
                    >
                      <Icon className="w-4 h-4 text-primary-light" />
                      <span>{val.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* CONSULTATION BUTTON */}
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-cta hover:bg-primary-dark text-white font-semibold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Schedule a Consultation</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
