import BottomCTA from '../components/common/BottomCTA'

export default function About() {
  return (
    <div className="w-full pt-28">
      {/* About Page Content Placeholder */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-center bg-bg-main">
        <h1 className="text-4xl font-extrabold text-text-dark mb-4">About Logos Psychotherapy</h1>
        <p className="text-muted-text text-lg max-w-2xl mx-auto">
          Learn about our background, therapy philosophy, and dedicated team of compassionate therapists.
        </p>
      </section>
      <BottomCTA />
    </div>
  )
}
