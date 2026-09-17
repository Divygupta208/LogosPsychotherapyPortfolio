import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import clientImg from '../../../public/images/client-image.png'

export default function HomeAboutSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP ABOUT US BADGE */}
        <div className="flex items-center justify-center mb-10">
          <span className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-primary-light text-primary-dark shadow-sm uppercase tracking-wider">
            • About Us
          </span>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: THERAPIST PORTRAIT IMAGE */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(47,111,134,0.12)] border border-white">
              <img
                src={clientImg}
                alt="Moussia Zaklikovsky, LCSW"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent pointer-events-none" />

              {/* FLOATING NAME BADGE */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl backdrop-blur-md bg-white/90 border border-white shadow-md text-left">
                <h4 className="text-base font-extrabold text-text-dark leading-tight">
                  Moussia Zaklikovsky, LCSW
                </h4>
                <p className="text-xs font-semibold text-cta">
                  Licensed Clinical Social Worker
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: TEXT & DETAILS */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-dark leading-[1.2]">
              A Space to <span className="text-cta">Pause, Reflect</span>, and Reconnect with Intentional Living.
            </h2>

            <p className="text-base sm:text-lg text-text-dark/90 font-medium leading-relaxed">
              At <strong className="text-primary-dark font-bold">LOGOS Psychotherapy</strong>, therapy is an invitation to pause, to breathe, and to reconnect with what truly matters. When life feels uncertain or overwhelming, we provide a compassionate space to gain clarity and move forward with intention.
            </p>

            <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
              Founded by <strong className="text-text-dark font-bold">Moussia Zaklikovsky, LCSW</strong>, we offer online counseling for individuals navigating anxiety, trauma, life transitions, and questions of purpose. Our work centers on deep self-understanding—enabling you to make choices from authenticity rather than fear.
            </p>

            {/* KEY HIGHLIGHTS */}
            <div className="space-y-2.5 pt-1 flex flex-col items-center lg:items-start w-full">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-text-dark font-semibold text-left">
                <FiCheckCircle className="w-5 h-5 text-cta shrink-0" />
                <span>Evidence-based practice rooted in existential understanding</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-text-dark font-semibold text-left">
                <FiCheckCircle className="w-5 h-5 text-cta shrink-0" />
                <span>Exploration without judgment, growth without pressure</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-text-dark font-semibold text-left">
                <FiCheckCircle className="w-5 h-5 text-cta shrink-0" />
                <span>Cultivating awareness, resilience, and renewed possibility</span>
              </div>
            </div>

            {/* EXPLORE MORE BUTTON */}
            <div className="pt-4 flex justify-center lg:justify-start w-full lg:w-auto">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-cta hover:bg-primary-dark text-white font-semibold text-sm shadow-[0_6px_20px_rgba(58,142,166,0.3)] transition-all duration-300 active:scale-95"
              >
                <span>Read Full Story</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
