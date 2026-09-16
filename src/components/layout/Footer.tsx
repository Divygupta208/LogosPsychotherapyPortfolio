import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUp, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full bg-bg-main text-text-dark pt-16 pb-12 border-t border-border-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border-neutral">
          
          {/* COL 1: BRAND LOGO & SOCIAL */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Logos Psychotherapy Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-text-dark">
                Logos Psychotherapy
              </span>
            </Link>

            <p className="text-sm text-muted-text max-w-sm leading-relaxed">
              Smart wellness guided by human care. Dedicated to providing compassionate, evidence-based psychotherapy tailored to your unique journey.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white border border-border-neutral text-text-dark hover:text-primary-dark hover:border-primary/40 flex items-center justify-center transition-all shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-border-neutral text-text-dark hover:text-primary-dark hover:border-primary/40 flex items-center justify-center transition-all shadow-sm"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white border border-border-neutral text-text-dark hover:text-primary-dark hover:border-primary/40 flex items-center justify-center transition-all shadow-sm"
              >
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-border-neutral text-text-dark hover:text-primary-dark hover:border-primary/40 flex items-center justify-center transition-all shadow-sm"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-dark">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-text">
              <li>
                <Link to="/" className="hover:text-primary-dark transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-dark transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-dark transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-dark transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-dark transition-colors">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: SUPPORT */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-dark">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-text">
              <li>
                <Link to="/contact" className="hover:text-primary-dark transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-dark transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-dark transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-dark transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT INFO */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-dark">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-text">
              <li className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-cta shrink-0" />
                <span>hello@logos.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-cta shrink-0" />
                <span>+91 98176543210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMapPin className="w-4 h-4 text-cta shrink-0" />
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-text text-center sm:text-left">
            © {new Date().getFullYear()} Logos Psychotherapy. All rights reserved.
          </p>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-cta hover:bg-primary-dark text-white flex items-center justify-center shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
