import EMDRHero from '../components/emdr/EMDRHero'
import EMDROverviewSection from '../components/emdr/EMDROverviewSection'
import EMDRPhasesSection from '../components/emdr/EMDRPhasesSection'
import EMDRSpecialtiesSection from '../components/emdr/EMDRSpecialtiesSection'
import EMDROnlineExperienceSection from '../components/emdr/EMDROnlineExperienceSection'
import EMDRFAQSection from '../components/emdr/EMDRFAQSection'
import BottomCTA from '../components/common/BottomCTA'
import SEO from '../components/common/SEO'

export default function EMDRTherapy() {
  return (
    <div className="w-full">
      <SEO
        title="EMDR Therapy Online | Logos Psychotherapy"
        description="Evidence-based EMDR therapy online to reprocess trauma, relieve anxiety, and restore neurological calm with specialized bilateral stimulation."
        url="https://logospsychotherapy.com/emdr-therapy"
      />
      
      {/* HERO SECTION */}
      <EMDRHero />

      {/* BODY CONTENT CONTAINER */}
      <div className="w-full bg-bg-main">
        {/* HOW EMDR WORKS & SCIENCE */}
        <EMDROverviewSection />

        {/* 8-PHASE EMDR PROTOCOL */}
        <EMDRPhasesSection />

        {/* CLINICAL SPECIALTIES TREATED */}
        <EMDRSpecialtiesSection />

        {/* HOW ONLINE EMDR WORKS */}
        <EMDROnlineExperienceSection />

        {/* FREQUENTLY ASKED QUESTIONS */}
        <EMDRFAQSection />
      </div>

      {/* BOTTOM ACTION BANNER */}
      <BottomCTA />
    </div>
  )
}
