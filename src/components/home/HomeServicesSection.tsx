import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import service1 from '../../../public/images/service-1.avif'
import service2 from '../../../public/images/service-2.avif'
import service3 from '../../../public/images/service-3.avif'
import service4 from '../../../public/images/service-4.avif'

export default function HomeServicesSection() {
  const treatments = [
    {
      title: 'Trauma',
      description: 'Process overwhelming experiences, release stored tension, and regain a deep sense of safety and wholeness.',
      image: service1,
    },
    {
      title: 'Anxiety & Depression',
      description: 'Calm constant worry, ease emotional fatigue, and gradually restore inner balance, energy, and hope.',
      image: service2,
    },
    {
      title: 'Grief & Loss',
      description: 'Process deep pain with compassion, honor what has been lost, and reconnect with meaning at your own pace.',
      image: service3,
    },
    {
      title: 'Attachment Work & Relationships',
      description: 'Calm relational alarm systems, build steadier grounding, and cultivate healthy, confident connections.',
      image: service4,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-dark">
            <span className="text-cta">Specialized</span> Treatments
          </h2>
          <p className="text-muted-text text-base sm:text-lg font-medium">
            Compassionate, evidence-based care tailored to your unique healing journey.
          </p>
        </div>

        {/* 4 TREATMENT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {treatments.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-4 rounded-3xl bg-white border border-border-neutral shadow-[0_4px_20px_rgba(47,111,134,0.04)] hover:shadow-[0_12px_35px_rgba(47,111,134,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* IMAGE CONTAINER */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-primary-light/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-lg font-bold text-text-dark mb-2 px-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-text font-medium leading-relaxed mb-6 px-1">
                  {item.description}
                </p>
              </div>

              {/* LEARN MORE BUTTON */}
              <div className="pt-2 px-1">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-text hover:text-cta transition-colors group-hover:translate-x-1"
                >
                  <span>Learn More</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ALL TREATMENTS BUTTON */}
        <div className="flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-cta hover:bg-primary-dark text-white font-semibold text-sm shadow-[0_6px_20px_rgba(58,142,166,0.3)] transition-all duration-300 active:scale-95"
          >
            <span>View All Treatments</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
