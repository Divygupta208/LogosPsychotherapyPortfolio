import { useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

export default function HomeTestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  const testimonials = [
    {
      quote:
        'Logos Psychotherapy has transformed my life. I feel more balanced, confident, and at peace than I ever have before. The support is truly life-changing.',
      name: 'Priya Sharma',
      role: 'Client',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    },
    {
      quote:
        'The ocean-like calm and patient-focused approach helped me process anxiety that I had carried for years. I am deeply grateful for this healing space.',
      name: 'Aarav Mehta',
      role: 'Client',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    },
    {
      quote:
        'Warm, clinical, and extraordinarily empathetic. The personalized therapy sessions gave me clear practical tools for my everyday life.',
      name: 'Ananya Roy',
      role: 'Client',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    },
  ]

  const current = testimonials[activeIdx]

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-28 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-dark">
            <span className="text-cta">What Our</span> Clients Say
          </h2>
          <p className="text-muted-text text-base sm:text-lg font-medium">
            Real stories of transformation and healing.
          </p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_12px_45px_rgba(47,111,134,0.08)] flex flex-col justify-between transition-all duration-500">
            
            {/* GIANT DOUBLE QUOTE MOTIF */}
            <div className="text-6xl sm:text-7xl font-serif text-cta/20 leading-none select-none mb-4">
              “
            </div>

            {/* QUOTE TEXT */}
            <p className="text-lg sm:text-2xl text-text-dark font-medium leading-relaxed mb-8">
              "{current.quote}"
            </p>

            {/* CLIENT PROFILE & NAV ARROW */}
            <div className="flex items-center justify-between pt-4 border-t border-border-neutral/60">
              
              {/* CLIENT INFO */}
              <div className="flex items-center gap-3.5">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-light"
                />
                <div>
                  <h4 className="text-base font-bold text-text-dark leading-tight">
                    {current.name}
                  </h4>
                  <span className="text-xs text-muted-text font-medium">
                    {current.role}
                  </span>
                </div>
              </div>

              {/* CONTROLS */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full bg-bg-main hover:bg-primary-light text-text-dark flex items-center justify-center transition-all cursor-pointer"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full bg-bg-main hover:bg-primary-light text-text-dark flex items-center justify-center transition-all cursor-pointer"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

          {/* DOTS PAGINATION */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  activeIdx === idx ? 'w-8 bg-cta' : 'w-2.5 bg-border-muted'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
