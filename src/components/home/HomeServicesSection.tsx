import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export default function HomeServicesSection() {
  const services = [
    {
      title: 'Stress & Anxiety Support',
      description: 'Find calm, reduce stress for your unique & manage emotions better.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Emotional Wellness',
      description: 'Strengthen self-awareness, build resilience, and nurture your emotional health.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2062&auto=format&fit=crop',
    },
    {
      title: 'Mindfulness & Meditation',
      description: 'Cultivate inner peace, improve focus, and experience a greater sense of present.',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Couples & Family Support',
      description: 'Strengthen connections, improve communication, and heal together.',
      image: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=2080&auto=format&fit=crop',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-dark">
            <span className="text-cta">Popular</span> Services
          </h2>
          <p className="text-muted-text text-base sm:text-lg font-medium">
            Explore our most loved wellness programs.
          </p>
        </div>

        {/* 4 SERVICE CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((item, idx) => (
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

        {/* BOTTOM ALL SERVICES BUTTON */}
        <div className="flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-cta hover:bg-primary-dark text-white font-semibold text-sm shadow-[0_6px_20px_rgba(58,142,166,0.3)] transition-all duration-300 active:scale-95"
          >
            <span>View All Services</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
