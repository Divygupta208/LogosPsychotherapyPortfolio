export default function HomeWellnessJourneyStats() {
  return (
    <section className="relative w-full py-16 sm:py-24 my-6 bg-bg-main min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* BACKGROUND WAVE IMAGE (STRETCHED FULL WIDTH) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="/wavebg.png"
          alt="Ocean Wave Background"
          className="w-full h-full object-fill mix-blend-multiply"
        />
      </div>

      {/* CONTENT CONTAINER OVERLAY */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center py-4 text-white w-full">
        
        {/* HEADER */}
        <div className="max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
            Your Wellness Journey Starts Here
          </h2>
          <p className="text-white/95 text-base sm:text-lg font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
            Small steps today lead to a healthier, happier tomorrow.
          </p>
        </div>

        {/* 3 STATS COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-4xl mx-auto">
          
          {/* STAT 1 */}
          <div className="flex flex-col items-center justify-center p-4 md:border-r border-white/20">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
              20K+
            </span>
            <span className="text-sm sm:text-base font-semibold text-white/95 uppercase tracking-wider">
              Lives Transformed
            </span>
          </div>

          {/* STAT 2 */}
          <div className="flex flex-col items-center justify-center p-4 md:border-r border-white/20">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
              50K+
            </span>
            <span className="text-sm sm:text-base font-semibold text-white/95 uppercase tracking-wider">
              Wellness Sessions
            </span>
          </div>

          {/* STAT 3 */}
          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
              10+
            </span>
            <span className="text-sm sm:text-base font-semibold text-white/95 uppercase tracking-wider">
              Years of Experience
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
