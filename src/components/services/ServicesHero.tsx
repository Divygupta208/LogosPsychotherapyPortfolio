import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import BlurText from '../common/BlurText'
import servicesHeroImg from '../../../public/images/serviceshero.jpg'

export default function ServicesHero() {
  return (
    <section className="relative min-h-[540px] sm:min-h-[620px] lg:min-h-[680px] w-full flex flex-col items-center justify-start pt-40 sm:pt-44 lg:pt-48 pb-28 sm:pb-32 overflow-hidden bg-bg-main">
      {/* BACKGROUND IMAGE WITH OVERLAY */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={servicesHeroImg}
          alt="Services Hero Background"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center transition-all duration-700"
        />
        {/* Soft gradient balance overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-main/0 via-bg-main/40 to-bg-main" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center space-y-6">
        <span className="inline-block px-5 py-2 rounded-full backdrop-blur-md bg-white/90 border border-white text-primary-dark font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm">
          • Our Services
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-dark tracking-tight leading-[1.15] drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]">
          <span className="block text-text-dark">
            <BlurText text="Holistic Solutions for" delay={0.15} staggerDelay={0.035} duration={0.8} />
          </span>
          <span className="block text-cta font-extrabold">
            <BlurText text="Every Mind and Body" delay={0.65} staggerDelay={0.035} duration={0.8} />
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-text-dark/95 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(255,255,255,0.8)]">
          Explore our wide range of evidence-based psychotherapy programs tailored to your unique needs, helping you process pain and cultivate lasting resilience.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-cta hover:bg-primary-dark text-white font-semibold text-sm shadow-[0_6px_20px_rgba(58,142,166,0.35)] transition-all active:scale-95 cursor-pointer"
          >
            <FiCalendar className="w-4 h-4" />
            <span>Schedule a Consultation</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* BOTTOM SEAMLESS ORGANIC OCEAN WAVE */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          className="relative block w-full h-12 sm:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" opacity="0.4" fill="var(--color-primary-light)" />
          <path d="M0,20 C200,80 450,10 700,65 C950,120 1100,20 1200,50 L1200,120 L0,120 Z" fill="var(--color-bg-main)" />
        </svg>
      </div>
    </section>
  )
}
