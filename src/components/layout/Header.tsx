import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiCalendar } from 'react-icons/fi'
import logo from "../../../public/images/logo.png";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false)
    }, [location])

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'EMDR Therapy', path: '/emdr-therapy' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 py-4 bg-gradient-to-b from-black/60 via-black/25 to-transparent backdrop-blur-[3px] transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">

                {/* LEFT PILL: LOGO */}
                <Link
                    to="/"
                    className="group flex items-center justify-center px-4 py-2 rounded-full backdrop-blur-md bg-white/70 hover:bg-white/85 border border-white/80 shadow-[0_4px_20px_rgba(47,111,134,0.08)] transition-all duration-300"
                >
                    {/* Logo Image in its natural aspect ratio */}
                    <img
                        src={logo}
                        alt="Logos Psychotherapy"
                        className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
                    />
                </Link>

                {/* CENTER PILL: NAVIGATION LINKS (Desktop) */}
                <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/70 border border-white/80 shadow-[0_4px_20px_rgba(47,111,134,0.08)]">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `px-3.5 lg:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${isActive
                                    ? 'bg-primary/20 text-primary-dark font-semibold shadow-inner'
                                    : 'text-muted-text hover:text-text-dark hover:bg-white/60'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* RIGHT PILL: ACTION BUTTON & MOBILE TOGGLE */}
                <div className="flex items-center gap-2">
                    {/* Schedule Meet Button */}
                    <Link
                        to="/contact"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cta hover:bg-primary-dark text-white text-sm font-medium shadow-[0_4px_14px_rgba(58,142,166,0.35)] hover:shadow-[0_6px_20px_rgba(47,111,134,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                        <FiCalendar className="w-4 h-4" />
                        <span className="whitespace-nowrap">Schedule Meet</span>
                    </Link>

                    {/* Hamburger Menu Toggle (Mobile Only) */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md bg-white/70 hover:bg-white/90 border border-white/80 text-text-dark shadow-[0_4px_20px_rgba(47,111,134,0.08)] transition-all active:scale-95"
                    >
                        {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* MOBILE NAVIGATION DROPDOWN */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-3 max-w-7xl mx-auto">
                    <div className="backdrop-blur-xl bg-white/90 border border-white/80 shadow-[0_12px_40px_rgba(47,111,134,0.15)] rounded-3xl p-4 flex flex-col gap-1.5 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `px-5 py-3 rounded-2xl text-base font-medium transition-all ${isActive
                                        ? 'bg-primary/20 text-primary-dark font-semibold'
                                        : 'text-muted-text hover:text-text-dark hover:bg-white/60'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
