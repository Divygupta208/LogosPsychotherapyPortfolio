import ServicesHero from '../components/services/ServicesHero'
import ServicesListSection from '../components/services/ServicesListSection'
import ServicesEMDRSection from '../components/services/ServicesEMDRSection'
import ServicesAssessmentBanner from '../components/services/ServicesAssessmentBanner'
import ServicesHowItWorksSection from '../components/services/ServicesHowItWorksSection'
import BottomCTA from '../components/common/BottomCTA'
import SEO from '../components/common/SEO'

export default function Services() {
    return (
        <div className="w-full">
            <SEO
                title="Our Services | Logos Psychotherapy"
                description="Explore our evidence-based psychotherapy services including Trauma Therapy, EMDR Therapy Online, Anxiety & Depression Counseling, and Attachment Work."
                url="https://logospsychotherapy.com/services"
            />
            <ServicesHero />

            <div className="w-full bg-bg-main">
                <ServicesListSection />
                <ServicesEMDRSection />
                <ServicesAssessmentBanner />
                <ServicesHowItWorksSection />
            </div>

            <BottomCTA />
        </div>
    )
}
