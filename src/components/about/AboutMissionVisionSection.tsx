import { FiTarget, FiEye } from 'react-icons/fi'

export default function AboutMissionVisionSection() {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* OUR MISSION CARD */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] flex flex-col items-center text-center space-y-4 hover:shadow-[0_12px_45px_rgba(47,111,134,0.1)] transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-primary-light text-cta flex items-center justify-center mb-2 shadow-sm">
            <FiTarget className="w-8 h-8" />
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight">
            <span className="text-cta">Our</span> Mission
          </h3>
          <p className="text-base sm:text-lg text-muted-text font-medium leading-relaxed max-w-md">
            To empower individuals to heal, grow, and thrive through holistic, personalized, and evidence-based wellness and psychotherapy solutions.
          </p>
        </div>

        {/* OUR VISION CARD */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] flex flex-col items-center text-center space-y-4 hover:shadow-[0_12px_45px_rgba(47,111,134,0.1)] transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-primary-light text-cta flex items-center justify-center mb-2 shadow-sm">
            <FiEye className="w-8 h-8" />
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight">
            <span className="text-cta">Our</span> Vision
          </h3>
          <p className="text-base sm:text-lg text-muted-text font-medium leading-relaxed max-w-md">
            A world where mental and emotional well-being is prioritized, and every person has the compassionate tools to live a balanced and meaningful life.
          </p>
        </div>

      </div>
    </section>
  )
}
