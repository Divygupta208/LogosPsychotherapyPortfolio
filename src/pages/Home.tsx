import HomeHero from '../components/home/HomeHero'
import HomeAboutSection from '../components/home/HomeAboutSection'
import HomeApproachSection from '../components/home/HomeApproachSection'
import HomeWellnessJourneyStats from '../components/home/HomeWellnessJourneyStats'
import HomeServicesSection from '../components/home/HomeServicesSection'
import HomeTestimonialsSection from '../components/home/HomeTestimonialsSection'
import BottomCTA from '../components/common/BottomCTA'

export default function Home() {
  return (
    <div className="w-full">
      <HomeHero />
      <HomeAboutSection />
      <HomeApproachSection />
      <HomeWellnessJourneyStats />
      <HomeServicesSection />
      <HomeTestimonialsSection />
      <BottomCTA />
    </div>
  )
}
