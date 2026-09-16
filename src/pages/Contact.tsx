import BottomCTA from '../components/common/BottomCTA'

export default function Contact() {
  return (
    <div className="w-full pt-28">
      {/* Contact Page Content Placeholder */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-text-dark mb-4">Contact & Book Consultation</h1>
        <p className="text-muted-text text-lg max-w-2xl mx-auto">
          Get in touch with us to schedule your first consultation or ask any questions.
        </p>
      </section>
      <BottomCTA />
    </div>
  )
}
