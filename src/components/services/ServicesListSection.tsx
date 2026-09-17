import { Link } from 'react-router-dom'
import { FiArrowRight, FiShield, FiHeart, FiFeather, FiUsers, FiInfo } from 'react-icons/fi'
import { servicesData } from '../../data/servicesData'

export default function ServicesListSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'trauma':
        return FiShield
      case 'anxiety-depression':
        return FiHeart
      case 'grief-loss':
        return FiFeather
      case 'attachment-relationships':
        return FiUsers
      default:
        return FiShield
    }
  }

  // Filter out emdr-therapy since EMDR has its own dedicated section below
  const listServices = servicesData.filter((s) => s.id !== 'emdr-therapy')

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-cta font-bold text-xs uppercase tracking-wider">
          Evidence-Based Care
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight">
          Specialized <span className="text-cta">Treatments</span>
        </h2>
        <p className="text-muted-text text-base sm:text-lg font-medium">
          Select a treatment specialty below to explore how therapy can support your unique path.
        </p>
      </div>

      {/* COMPACT 2-COLUMN GRID OF SERVICE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {listServices.map((item) => {
          const Icon = getIcon(item.id)

          return (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] hover:shadow-[0_12px_40px_rgba(47,111,134,0.12)] transition-all duration-300 flex flex-col justify-between space-y-6 text-left group"
            >
              <div>
                {/* CARD TOP IMAGE */}
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-primary-light/30 relative mb-6 shadow-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-transparent pointer-events-none" />

                  {/* ICON FLOATING BADGE */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md text-cta border border-white flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* TITLE & SUMMARY */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-text-dark tracking-tight group-hover:text-cta transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-text font-medium leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* CARD ACTIONS */}
              <div className="pt-4 border-t border-border-neutral/60 flex items-center justify-between gap-3">
                <Link
                  to={`/services/${item.id}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-cta hover:text-primary-dark transition-colors"
                >
                  <FiInfo className="w-4 h-4" />
                  <span>View Details</span>
                  <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-cta hover:bg-primary-dark text-white font-semibold text-xs shadow-sm transition-all active:scale-95"
                >
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
