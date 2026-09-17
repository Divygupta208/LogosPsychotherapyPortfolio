import { useState } from 'react'
import { FiMail, FiCheck } from 'react-icons/fi'
import waveBg from '../../../public/wavebg.png'

export default function BottomCTA() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4500)
    }
  }

  // Balanced, organic wave mask with elegant moderate amplitude (~80px crest-to-trough)
  const waveMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 360' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L1440,0 L1440,290 C1200,340 960,240 720,290 C480,340 240,240 0,290 Z' fill='%23000'/%3E%3C/svg%3E")`

  return (
    <div className="w-full bg-[#EFE5D8]">
      <section
        style={{
          maskImage: waveMask,
          WebkitMaskImage: waveMask,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
        className="relative w-full m-0 pt-20 sm:pt-28 lg:pt-32 pb-32 sm:pb-40 lg:pb-48 min-h-[540px] sm:min-h-[600px] md:min-h-[660px] lg:min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-bg-main via-bg-main to-[#EFE5D8]"
      >

      {/* BACKGROUND WAVE IMAGE WITH OPAQUE TOP & SAND BOTTOM */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Solid Top Layer to completely block footer bleed at top */}
        <div className="absolute inset-x-0 top-0 h-44 sm:h-52 bg-bg-main z-0" />

        <img
          src={waveBg}
          alt="Ocean Wave Background"
          className="relative z-10 w-full h-full object-fill mix-blend-multiply"
        />

        {/* Seamless Sand Gradient Layer at Bottom */}
        <div className="absolute inset-x-0 bottom-0 h-52 sm:h-64 bg-gradient-to-t from-[#EFE5D8] via-[#EFE5D8]/80 to-transparent pointer-events-none z-20" />
      </div>

      {/* CENTERED COLUMN CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 flex flex-col items-center justify-center text-center gap-5 text-white w-full">
        
        {/* Centered Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
          Stay Inspired, Stay Connected
        </h2>

        {/* Centered Subtitle */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/95 font-medium max-w-xl drop-shadow-[0_1px_5px_rgba(0,0,0,0.18)]">
          Get wellness tips, updates, and exclusive offers delivered directly to your inbox.
        </p>


        {/* Centered Form & Buttons */}
        <div className="w-full max-w-md mx-auto pt-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
          >
            <div className="relative w-full sm:flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FiMail className="w-4 h-4" />
              </div>
              <input
                id="cta-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="h-11 w-full rounded-full border-0 bg-white pl-10 pr-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 shadow-md focus:ring-2 focus:ring-white/50 transition-all text-center sm:text-left"
              />
            </div>

            <button
              type="submit"
              className="h-11 w-full sm:w-auto px-7 rounded-full border border-white/80 bg-transparent hover:bg-white text-white hover:text-primary-dark font-semibold text-sm shadow-md transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              {subscribed ? (
                <span className="flex items-center gap-1.5">
                  <FiCheck className="w-4 h-4 text-emerald-300" /> Subscribed!
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>

          {subscribed && (
            <p className="mt-2.5 text-xs text-white text-center font-semibold animate-pulse drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
              ✓ Thank you for subscribing!
            </p>
          )}
        </div>

      </div>
    </section>
    </div>
  )
}







