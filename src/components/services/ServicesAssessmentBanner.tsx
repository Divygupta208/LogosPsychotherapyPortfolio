import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import waveBg from '../../../public/wavebg.png'

export default function ServicesAssessmentBanner() {
  return (
    <section className="relative w-full py-16 sm:py-20 my-0 bg-bg-main min-h-[260px] flex items-center justify-center overflow-hidden">
      {/* BACKGROUND WAVE IMAGE (STRETCHED FULL WIDTH) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src={waveBg}
          alt="Ocean Wave Background"
          className="w-full h-full object-fill mix-blend-multiply"
        />
      </div>

      {/* CONTENT CONTAINER OVERLAY */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center md:text-left py-4 text-white w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
            Not Sure Which Service Is Right For You?
          </h2>
          <p className="text-white/95 text-base sm:text-lg font-medium leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
            Reach out to schedule an initial consultation and receive personalized guidance tailored to your specific therapeutic needs.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/80 bg-transparent hover:bg-white text-white hover:text-primary-dark font-semibold text-sm sm:text-base shadow-md transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Request Consultation</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
