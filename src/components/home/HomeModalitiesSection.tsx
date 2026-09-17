import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { RiFlowerLine } from 'react-icons/ri'

export default function HomeModalitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary-dark font-bold text-xs uppercase tracking-wider shadow-sm">
            • Evidence-Based Approaches
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-dark">
            <span className="text-cta">Therapeutic</span> Modalities
          </h2>
          <p className="text-muted-text text-base sm:text-lg font-medium leading-relaxed">
            Each client’s path is unique. LOGOS Psychotherapy’s online mental health therapy sessions offer evidence-based approaches, thoughtfully integrated to support your individual needs.
          </p>
        </div>

        {/* FEATURED MODALITY CARD: EMDR */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_10px_35px_rgba(47,111,134,0.06)] hover:shadow-[0_16px_45px_rgba(47,111,134,0.12)] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-8">
            
            {/* ICON BADGE */}
            <div className="w-16 h-16 rounded-2xl bg-primary-light text-cta flex items-center justify-center shrink-0 shadow-sm">
              <RiFlowerLine className="w-8 h-8" />
            </div>

            {/* CONTENT */}
            <div className="space-y-4 flex-1 text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight">
                Eye Movement Desensitization and Reprocessing (EMDR)
              </h3>
              <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
                EMDR helps the brain reprocess distressing or traumatic experiences so they no longer feel overwhelming or “stuck.” This approach supports healing, clarity, and emotional relief.
              </p>

              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cta hover:text-primary-dark transition-colors group"
                >
                  <span className="uppercase tracking-wider">Learn About EMDR Therapy</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM INSIGHT QUOTE */}
        <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl bg-primary-light/40 border border-primary-light">
          <p className="text-sm sm:text-base text-text-dark font-medium italic leading-relaxed">
            “Our approach is grounded in research and adapted through an existential lens, supporting not only symptom relief but deeper insight and self-awareness.”
          </p>
        </div>

      </div>
    </section>
  )
}
