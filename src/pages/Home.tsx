import HomeHero from '../components/home/HomeHero'
import HomeAboutSection from '../components/home/HomeAboutSection'
import HomeApproachSection from '../components/home/HomeApproachSection'
import HomeWellnessJourneyStats from '../components/home/HomeWellnessJourneyStats'
import HomeModalitiesSection from '../components/home/HomeModalitiesSection'
import HomeServicesSection from '../components/home/HomeServicesSection'
import HomeTestimonialsSection from '../components/home/HomeTestimonialsSection'
import BottomCTA from '../components/common/BottomCTA'
import SEO from '../components/common/SEO'

export default function Home() {
    return (
        <div className="w-full">
            <SEO
                title="Logos Psychotherapy | Compassionate Online Counseling & EMDR Therapy"
                description="Logos Psychotherapy offers compassionate online counseling, EMDR therapy, trauma processing, anxiety relief, and relational therapy."
                url="https://logospsychotherapy.com"
            />
            <HomeHero />
            <HomeAboutSection />
            <HomeApproachSection />
            <HomeWellnessJourneyStats />
            <HomeModalitiesSection />
            <HomeServicesSection />
            <HomeTestimonialsSection />
            <BottomCTA />
        </div>
    )
}
