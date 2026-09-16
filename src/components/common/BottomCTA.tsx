import { useState } from 'react'

export default function BottomCTA() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <section className="relative w-full py-16 sm:py-24 my-6 bg-bg-main min-h-[260px] flex items-center justify-center overflow-hidden">
      {/* BACKGROUND WAVE IMAGE (STRETCHED FULL WIDTH) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="/wavebg.png"
          alt="Ocean Wave Background"
          className="w-full h-full object-fill mix-blend-multiply"
        />
      </div>

      {/* CONTENT CONTAINER OVERLAY */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 py-4 text-white w-full">
        
        {/* LEFT: TITLE & SUBTITLE */}
        <div className="max-w-xl text-center lg:text-left space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
            Stay Inspired, Stay Connected
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-white/95 font-medium max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
            Get wellness tips, updates, and exclusive offers delivered directly to your inbox.
          </p>
        </div>

        {/* RIGHT: FORM */}
        <div className="w-full lg:w-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-end"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="h-11 w-full sm:w-[280px] rounded-full border-0 bg-white px-5 text-sm text-gray-700 outline-none placeholder:text-gray-400 shadow-md focus:ring-2 focus:ring-white/50 transition-all"
            />

            <button
              type="submit"
              className="h-11 w-full sm:w-auto rounded-full border border-white/80 bg-transparent px-7 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-white hover:text-[#5D9EB3] cursor-pointer whitespace-nowrap active:scale-95"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          {subscribed && (
            <p className="mt-2 text-xs text-white text-center lg:text-right font-semibold animate-pulse">
              ✓ Thank you for subscribing!
            </p>
          )}
        </div>

      </div>
    </section>
  )
}
