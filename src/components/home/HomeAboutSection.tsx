import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export default function HomeAboutSection() {
  const [activeTab, setActiveTab] = useState<'about' | 'mission' | 'vision'>('about')

  const tabContents = {
    about: {
      headline: 'Dedicated to Helping You Heal, Grow, and Thrive Through Personalized, Holistic Wellness Support Systems.',
      description: "Our care blends science-backed approaches with a human touch, tailoring to every aspect of your life. You're never alone in this journey—we're here.",
    },
    mission: {
      headline: 'Empowering Individuals to Discover Inner Strength and Lasting Emotional Harmony.',
      description: 'Our mission is to make compassionate, evidence-based mental health support accessible, stigma-free, and deeply restorative for everyone.',
    },
    vision: {
      headline: 'A World Where Mental Wellbeing is Nurtured with Dignity, Science, and Empathy.',
      description: 'We envision a supportive community where emotional health is prioritized, allowing individuals to live authentic, fulfilling lives.',
    },
  }

  return (
    <section className="py-20 md:py-28 bg-bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP TAB BADGES */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'about'
                ? 'bg-primary-light text-primary-dark shadow-sm'
                : 'bg-white border border-border-neutral text-muted-text hover:text-text-dark'
            }`}
          >
            • About Us
          </button>
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'mission'
                ? 'bg-primary-light text-primary-dark shadow-sm'
                : 'bg-white border border-border-neutral text-muted-text hover:text-text-dark'
            }`}
          >
            • Our Mission
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'vision'
                ? 'bg-primary-light text-primary-dark shadow-sm'
                : 'bg-white border border-border-neutral text-muted-text hover:text-text-dark'
            }`}
          >
            • Our Vision
          </button>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: THERAPIST PORTRAIT IMAGE */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(47,111,134,0.12)] border border-white">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Psychotherapist in therapy room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* RIGHT: TEXT & DETAILS */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-dark leading-[1.2]">
              Dedicated to{' '}
              <span className="text-text-dark">Helping You Heal, Grow, and Thrive</span>{' '}
              <span className="text-cta">Through</span> Personalized, Holistic Wellness Support Systems.
            </h2>

            <p className="text-base sm:text-lg text-muted-text leading-relaxed max-w-xl font-medium">
              {tabContents[activeTab].description}
            </p>

            {/* EXPLORE MORE BUTTON */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-cta hover:bg-primary-dark text-white font-semibold text-sm shadow-[0_6px_20px_rgba(58,142,166,0.3)] transition-all duration-300 active:scale-95"
              >
                <span>Explore More</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
