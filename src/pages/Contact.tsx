import ContactHero from '../components/contact/ContactHero'
import ContactFormSection from '../components/contact/ContactFormSection'
import ContactFAQSection from '../components/contact/ContactFAQSection'
import BottomCTA from '../components/common/BottomCTA'
import SEO from '../components/common/SEO'

export default function Contact() {
    return (
        <div className="w-full">
            <SEO
                title="Contact Us & Book Consultation | Logos Psychotherapy"
                description="Get in touch with LOGOS Psychotherapy to schedule your confidential online consultation or ask any questions."
                url="https://logospsychotherapy.com/contact"
            />
            <ContactHero />

            <div className="w-full bg-bg-main">
                <ContactFormSection />
                <ContactFAQSection />
            </div>

            <BottomCTA />
        </div>
    )
}
