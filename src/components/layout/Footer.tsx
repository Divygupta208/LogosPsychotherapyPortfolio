import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUp, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import sandBg from 'C:/Users/DELL/.gemini/antigravity-ide/brain/3ac990bc-3c39-4488-a55a-cef3c08d31cb/beach_sand_top_view_1789636274037.jpg'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="sticky bottom-0 z-0 w-full min-h-screen flex flex-col justify-end text-[#0F2D45] pt-28 pb-12 overflow-hidden relative">
      {/* BACKGROUND TOP-VIEW SAND TEXTURE IMAGE ONLY */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={sandBg}
          alt="Top View Pure Sand Texture"
          className="w-full h-full object-cover object-center"
        />
      </div>




      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#D8C7B0]/60">
          
          {/* COL 1: BRAND LOGO & SOCIAL */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="p-1.5 rounded-xl transition-transform group-hover:scale-105 ">
                <img
                  src="/logo.png"
                  alt="Logos Psychotherapy Logo"
                  className="h-20 w-auto object-contain"
                />
              </div>
             
            </Link>

            <p className="text-sm text-[#4A6072] max-w-sm leading-relaxed font-medium">
              Smart wellness guided by human care. Dedicated to providing compassionate, evidence-based psychotherapy tailored to your unique journey.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#0F2D45] border border-[#D8C7B0] text-[#0F2D45] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#0F2D45] border border-[#D8C7B0] text-[#0F2D45] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#0F2D45] border border-[#D8C7B0] text-[#0F2D45] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
              >
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#0F2D45] border border-[#D8C7B0] text-[#0F2D45] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0F2D45]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#4A6072] font-medium">
              <li>
                <Link to="/" className="hover:text-[#0F2D45] hover:translate-x-1 inline-block transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0F2D45] hover:translate-x-1 inline-block transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0F2D45] hover:translate-x-1 inline-block transition-all">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0F2D45] hover:translate-x-1 inline-block transition-all">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0F2D45] hover:translate-x-1 inline-block transition-all">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: SUPPORT */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0F2D45]">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-[#4A6072] font-medium">
              <li>
                <Link to="/contact" className="hover:text-[#0F2D45] hover:translate-x-1 inline-block transition-all">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0F2D45] hover:translate-x-1 inline-block transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0F2D45] hover:translate-x-1 inline-block transition-all">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0F2D45] hover:translate-x-1 inline-block transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT INFO */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0F2D45]">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-[#4A6072] font-medium">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/80 border border-[#D8C7B0] flex items-center justify-center shrink-0 text-primary-dark shadow-sm">
                  <FiMail className="w-4 h-4" />
                </div>
                <span className="hover:text-[#0F2D45] transition-colors">hello@logos.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/80 border border-[#D8C7B0] flex items-center justify-center shrink-0 text-primary-dark shadow-sm">
                  <FiPhone className="w-4 h-4" />
                </div>
                <span className="hover:text-[#0F2D45] transition-colors">+91 98176543210</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/80 border border-[#D8C7B0] flex items-center justify-center shrink-0 text-primary-dark shadow-sm">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6F808E] text-center sm:text-left font-medium">
            © {new Date().getFullYear()} Logos Psychotherapy. All rights reserved.
          </p>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-primary-dark hover:bg-[#0F2D45] text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}


