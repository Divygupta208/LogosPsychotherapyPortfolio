import { FiCheckCircle, FiMonitor, FiLock, FiHome, FiHeadphones } from 'react-icons/fi'
import emdrHeroImg from '../../../public/images/emdrhero.jpg'

export default function EMDROnlineExperienceSection() {
  const benefits = [
    {
      title: 'Comfort of Your Own Space',
      desc: 'Engage in deep therapeutic work from your most comfortable, safe environment with your favorite grounding items (blanket, tea, pets).',
      icon: FiHome,
    },
    {
      title: 'Advanced Online Bilateral Tools',
      desc: 'We utilize specialized, secure online EMDR platforms featuring smooth visual light bars and alternating bilateral audio that you control.',
      icon: FiMonitor,
    },
    {
      title: 'No Post-Session Commute Stress',
      desc: 'After an intense reprocessing session, you can immediately rest, integrate, and relax without navigating traffic or public transport.',
      icon: FiHeadphones,
    },
    {
      title: 'HIPAA & GDPR Compliant Security',
      desc: 'All virtual sessions are conducted through fully encrypted, confidential telehealth software ensuring total privacy.',
      icon: FiLock,
    },
  ]

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* LEFT COLUMN: BENEFIT HIGHLIGHTS */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-cta font-bold text-xs uppercase tracking-wider">
            Telehealth & Virtual Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight leading-tight">
            How <span className="text-cta">Online EMDR</span> Works
          </h2>
          <p className="text-base text-text-dark/90 font-medium leading-relaxed">
            Many clients wonder: <em>"Can EMDR be as effective through video therapy as in person?"</em> Extensive clinical research and client experiences confirm that virtual EMDR is just as impactful, offering distinct comfort and grounding advantages.
          </p>

          <div className="space-y-4 pt-2">
            {benefits.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-border-neutral shadow-sm hover:border-cta/40 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-light text-cta flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-text-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-text font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: PREPARATION CHECKLIST CARD */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-border-neutral shadow-[0_12px_45px_rgba(47,111,134,0.08)] space-y-6 text-left relative overflow-hidden">
            
            <div className="w-full h-48 rounded-2xl overflow-hidden relative shadow-inner mb-4">
              <img
                src={emdrHeroImg}
                alt="Online EMDR setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-white font-bold text-sm tracking-wide">
                  Your Personalized Healing Sanctuary
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-extrabold text-text-dark tracking-tight">
              What You Need for an Online Session
            </h3>

            <ul className="space-y-3.5 text-sm text-text-dark font-medium">
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                <span>A private, quiet space where you will not be interrupted.</span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                <span>A laptop or desktop computer with a stable internet connection.</span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                <span>A comfortable pair of headphones or earbuds for bilateral audio.</span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                <span>Water, tissues, or a comforting object to hold during processing.</span>
              </li>
            </ul>

            <div className="pt-2 p-4 rounded-xl bg-primary-light/40 border border-primary-light">
              <p className="text-xs text-primary-dark font-semibold leading-relaxed">
                Prior to your first reprocessing session, we test all audio and visual bilateral tools together to make sure you feel completely comfortable and prepared.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
