import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUp, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import logo from '../../../public/images/logo.png'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative w-full text-text-dark pt-12 sm:pt-16 pb-12 bg-[#EFE5D8]">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* MAIN FOOTER GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 pb-10 border-b border-[#061B2E]/20">

                    {/* COL 1: BRAND LOGO & SOCIAL */}
                    <div className="sm:col-span-2 lg:col-span-2 space-y-4">
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <div className="p-1 rounded-xl transition-transform group-hover:scale-105">
                                <img
                                    src={logo}
                                    alt="Logos Psychotherapy Logo"
                                    className="h-16 sm:h-20 w-auto object-contain"
                                />
                            </div>
                        </Link>

                        <p className="text-sm sm:text-base text-[#0A2640] max-w-sm leading-relaxed font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                            Smart wellness guided by human care. Dedicated to providing compassionate, evidence-based psychotherapy tailored to your unique journey.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-1">
                            <a
                                href="https://whatsapp.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-[#061B2E] border border-[#061B2E]/30 text-[#061B2E] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-[#061B2E] border border-[#061B2E]/30 text-[#061B2E] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                            >
                                <FaFacebookF className="w-3.5 h-3.5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-[#061B2E] border border-[#061B2E]/30 text-[#061B2E] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                            >
                                <FaTwitter className="w-3.5 h-3.5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-[#061B2E] border border-[#061B2E]/30 text-[#061B2E] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                            >
                                <FaLinkedinIn className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* COL 2: QUICK LINKS */}
                    <div className="space-y-3.5">
                        <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#061B2E]">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-sm sm:text-base text-[#0A2640] font-bold">
                            <li>
                                <Link to="/" className="hover:text-[#041220] hover:translate-x-1 inline-block transition-all">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-[#041220] hover:translate-x-1 inline-block transition-all">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-[#041220] hover:translate-x-1 inline-block transition-all">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/emdr-therapy" className="hover:text-[#041220] hover:translate-x-1 inline-block transition-all">
                                    EMDR Therapy
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-[#041220] hover:translate-x-1 inline-block transition-all">
                                    How It Works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* COL 3: SUPPORT */}
                    <div className="space-y-3.5">
                        <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#061B2E]">
                            Support
                        </h4>
                        <ul className="space-y-2.5 text-sm sm:text-base text-[#0A2640] font-bold">
                            <li>
                                <Link to="/contact" className="hover:text-[#041220] hover:translate-x-1 inline-block transition-all">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-[#041220] hover:translate-x-1 inline-block transition-all">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-[#041220] hover:translate-x-1 inline-block transition-all">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-[#041220] hover:translate-x-1 inline-block transition-all">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* COL 4: CONTACT INFO */}
                    <div className="space-y-3.5">
                        <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#061B2E]">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm sm:text-base text-[#0A2640] font-bold">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/90 border border-[#061B2E]/30 flex items-center justify-center shrink-0 text-[#061B2E] shadow-sm">
                                    <FiMail className="w-4 h-4" />
                                </div>
                                <span className="hover:text-[#041220] transition-colors">hello@logos.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/90 border border-[#061B2E]/30 flex items-center justify-center shrink-0 text-[#061B2E] shadow-sm">
                                    <FiPhone className="w-4 h-4" />
                                </div>
                                <span className="hover:text-[#041220] transition-colors">+91 98176543210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/90 border border-[#061B2E]/30 flex items-center justify-center shrink-0 text-[#061B2E] shadow-sm">
                                    <FiMapPin className="w-4 h-4" />
                                </div>
                                <span>Bengaluru, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM COPYRIGHT & BACK TO TOP */}
                <div className="pt-4 sm:pt-6 flex flex-row items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-[#0A2640] text-left font-bold">
                        © {new Date().getFullYear()} Logos Psychotherapy. All rights reserved.
                    </p>

                    {/* Scroll To Top Button */}
                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#061B2E] hover:bg-[#030E18] text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                    >
                        <FiArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </footer>
    )
}


