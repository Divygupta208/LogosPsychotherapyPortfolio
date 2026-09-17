import AboutHero from '../components/about/AboutHero'
import AboutStorySection from '../components/about/AboutStorySection'
import AboutMissionVisionSection from '../components/about/AboutMissionVisionSection'
import AboutValuesSection from '../components/about/AboutValuesSection'
import BottomCTA from '../components/common/BottomCTA'
import SEO from '../components/common/SEO'

export default function About() {
    return (
        <div className="w-full">
            <SEO
                title="About Us | Logos Psychotherapy"
                description="Learn about Moussia Zaklikovsky, LCSW, and our mission at LOGOS Psychotherapy to help individuals reconnect with purpose and intentional living."
                url="https://logospsychotherapy.com/about"
            />
            <AboutHero />

            <div className="w-full bg-bg-main pt-12 sm:pt-16">
                <AboutStorySection />
                <AboutMissionVisionSection />
                <AboutValuesSection />
            </div>

            <BottomCTA />
        </div>
    )
}
