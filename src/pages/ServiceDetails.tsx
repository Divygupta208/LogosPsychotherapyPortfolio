import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiCalendar,
  FiHeart,
  FiFeather,
  FiUsers,
  FiTarget,
} from 'react-icons/fi'
import { servicesData } from '../data/servicesData'
import BottomCTA from '../components/common/BottomCTA'
import SEO from '../components/common/SEO'

export default function ServiceDetails() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const navigate = useNavigate()

  const service = servicesData.find((s) => s.id === serviceId)

  // Scroll to top when page loads or serviceId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [serviceId])

  if (!service) {
    return (
      <div className="w-full min-h-screen pt-40 pb-24 bg-bg-main flex flex-col items-center justify-center text-center px-6">
        <SEO
          title="Service Not Found | Logos Psychotherapy"
          description="The requested treatment specialty was not found."
          url="https://logospsychotherapy.com/services"
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4">
          Service Not Found
        </h1>
        <p className="text-muted-text text-base mb-8">
          The treatment specialty you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cta text-white font-semibold text-sm shadow-md hover:bg-primary-dark transition-all"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>
    )
  }

  // Get icon for service
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
        return FiTarget
    }
  }

  const ServiceIcon = getIcon(service.id)
  const otherServices = servicesData.filter((s) => s.id !== service.id)

  return (
    <div className="w-full">
      <SEO
        title={`${service.title} | LOGOS Psychotherapy`}
        description={service.summary}
        url={`https://logospsychotherapy.com/services/${service.id}`}
      />
      <div className="w-full pt-28 pb-20 bg-bg-main">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">

          {/* BREADCRUMB / BACK LINK */}
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-cta hover:text-primary-dark transition-colors group"
            >
              <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Services</span>
            </Link>
          </div>

          {/* SERVICE HERO BANNER */}
          <div className="p-8 sm:p-14 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_12px_45px_rgba(47,111,134,0.08)] mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* LEFT TEXT */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-cta font-bold text-xs uppercase tracking-wider">
                  <ServiceIcon className="w-4 h-4" />
                  <span>Treatment Specialty</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-text-dark tracking-tight leading-tight">
                  {service.title}
                </h1>

                <p className="text-lg sm:text-xl text-primary-dark font-bold leading-relaxed">
                  {service.subtitle}
                </p>

                <p className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
                  {service.summary}
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-cta hover:bg-primary-dark text-white font-semibold text-sm shadow-md transition-all active:scale-95"
                  >
                    <FiCalendar className="w-4 h-4" />
                    <span>Book Consultation for {service.title}</span>
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="lg:col-span-5 relative">
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

          {/* MAIN CONTENT & SIDEBAR GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT MAIN CONTENT */}
            <div className="lg:col-span-8 space-y-10 text-left">

              {/* FULL DESCRIPTION PARAGRAPHS */}
              <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight">
                  Understanding <span className="text-cta">{service.title}</span>
                </h2>

                {service.fullDescription.map((para, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-muted-text font-medium leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* BENEFITS & OUTCOMES */}
              <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] space-y-6">
                <h3 className="text-2xl font-extrabold text-text-dark tracking-tight">
                  Key Benefits & Outcomes
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-bg-main border border-border-neutral/80"
                    >
                      <FiCheckCircle className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-text-dark leading-snug">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHO IT'S FOR & APPROACH */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] space-y-3">
                  <h4 className="text-lg font-extrabold text-text-dark">Who This Helps</h4>
                  <p className="text-sm text-muted-text font-medium leading-relaxed">
                    {service.whoItsFor}
                  </p>
                </div>

                <div className="p-8 rounded-[2rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] space-y-3">
                  <h4 className="text-lg font-extrabold text-text-dark">Therapeutic Approach</h4>
                  <p className="text-sm text-muted-text font-medium leading-relaxed">
                    {service.approach}
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-4 space-y-8 text-left lg:sticky lg:top-32">

              {/* BOOK CONSULTATION SIDEBAR CARD */}
              <div className="p-8 rounded-[2rem] bg-primary-dark text-white shadow-xl space-y-6">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Ready to Take the First Step?
                </h3>
                <p className="text-sm text-white/90 font-medium leading-relaxed">
                  Reach out today to schedule your confidential consultation. We offer compassionate, personalized care online.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cta hover:bg-white hover:text-primary-dark text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <span>Book Consultation</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* QUICK SESSION INFO */}
              <div className="p-6 rounded-[2rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] space-y-4">
                <h4 className="text-base font-bold text-text-dark uppercase tracking-wider text-xs">
                  Session Details
                </h4>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-border-neutral/60">
                    <span className="text-muted-text font-medium">Format:</span>
                    <span className="font-bold text-text-dark">Online Video Sessions</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-border-neutral/60">
                    <span className="text-muted-text font-medium">Duration:</span>
                    <span className="font-bold text-text-dark">50 Minutes</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-text font-medium">Privacy:</span>
                    <span className="font-bold text-text-dark">100% Confidential</span>
                  </div>
                </div>
              </div>

              {/* OTHER SPECIALTIES */}
              <div className="p-6 rounded-[2rem] bg-white border border-border-neutral shadow-[0_6px_30px_rgba(47,111,134,0.06)] space-y-4">
                <h4 className="text-base font-bold text-text-dark uppercase tracking-wider text-xs">
                  Other Specialties
                </h4>

                <div className="space-y-2">
                  {otherServices.map((other) => (
                    <button
                      key={other.id}
                      onClick={() => navigate(`/services/${other.id}`)}
                      className="w-full p-3 rounded-xl bg-bg-main hover:bg-primary-light/50 text-left flex items-center justify-between group transition-colors cursor-pointer"
                    >
                      <span className="text-sm font-bold text-text-dark group-hover:text-cta transition-colors">
                        {other.title}
                      </span>
                      <FiArrowRight className="w-4 h-4 text-muted-text group-hover:text-cta group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <BottomCTA />
    </div>
  )
}
