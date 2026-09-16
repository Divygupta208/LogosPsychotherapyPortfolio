import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiShield, FiHeart, FiCheckCircle } from 'react-icons/fi'
import { RiScalesLine } from 'react-icons/ri'

import BlurText from '../common/BlurText'

export default function HomeHero() {
    // Animation Variants - Blurry Reveal Effect
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.14,
                delayChildren: 0.12,
            },
        },
    }

    const blurItemVariants: Variants = {
        hidden: {
            opacity: 0,
            filter: 'blur(14px)',
            y: 22,
            scale: 0.98,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            scale: 1,
            transition: {
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1], // fluid cubic-bezier
            },
        },
    }

    const floatingCardVariant: Variants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-bg-main">
            {/* BACKGROUND AERIAL TOP-VIEW OCEAN & SAND IMAGE (SAND ON LEFT) */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Aerial Top View Ocean & Sand - Flipped Horizontally (scaleX(-1)) */}
                <div
                    className="absolute inset-0 opacity-95 bg-cover bg-center transition-all duration-700 scale-x-[-1]"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2052&auto=format&fit=crop')`,
                    }}
                />

                {/* Subtle light balance overlay for crystal clear image visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-bg-main/35 via-transparent to-bg-main/45" />
            </div>

            {/* HERO CONTENT CONTAINER */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* LEFT COLUMN: ANIMATED TEXT & CTAS */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
                    >
                        {/* THERAPY BADGE */}
                        <motion.div variants={blurItemVariants}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/90 border border-white text-primary-dark text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(47,111,134,0.1)]">
                                <RiScalesLine className="w-4 h-4 text-cta animate-pulse" />
                                <span>Empathetic & Evidence-Based Psychotherapy</span>
                            </div>
                        </motion.div>

                        {/* MAIN HEADLINE WITH FLUID SEAMLESS LETTER REVEAL */}
                        <div className="space-y-2">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]">
                                <span className="block text-primary-dark">
                                    <BlurText text="Calm minds." delay={0.15} staggerDelay={0.035} duration={1} />
                                </span>
                                <span className="block text-cta font-extrabold">
                                    <BlurText text="Clear paths." delay={0.65} staggerDelay={0.035} duration={1} />
                                </span>
                                <span className="block text-text-dark">
                                    <BlurText text="Meaningful change." delay={1.15} staggerDelay={0.035} duration={1} />
                                </span>
                            </h1>
                        </div>

                        {/* SUBHEADING WITH BLURRY REVEAL */}
                        <motion.p
                            variants={blurItemVariants}
                            className="text-lg sm:text-xl text-text-dark/90 font-medium max-w-2xl leading-relaxed drop-shadow-[0_1px_8px_rgba(255,255,255,0.85)]"
                        >
                            Where understanding meets transformation—supportive psychotherapy tailored to help you live more fully and authentically.
                        </motion.p>

                        {/* KEY HIGHLIGHT TAGS */}
                        <motion.div
                            variants={blurItemVariants}
                            className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-1 text-sm text-text-dark/80 font-medium"
                        >
                            <div className="flex items-center gap-2">
                                <FiCheckCircle className="w-4 h-4 text-cta" />
                                <span>In-Person & Online Sessions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiCheckCircle className="w-4 h-4 text-cta" />
                                <span>Safe & Confidential</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiCheckCircle className="w-4 h-4 text-cta" />
                                <span>Personalized Approach</span>
                            </div>
                        </motion.div>

                        {/* CALL TO ACTION BUTTONS */}
                        <motion.div
                            variants={blurItemVariants}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto"
                        >
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/contact"
                                    className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-cta hover:bg-primary-dark text-white font-semibold text-base shadow-[0_8px_25px_rgba(58,142,166,0.35)] hover:shadow-[0_12px_30px_rgba(47,111,134,0.45)] transition-all duration-300"
                                >
                                    <FiCalendar className="w-5 h-5" />
                                    <span>Book Consultation</span>
                                    <FiArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/about"
                                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-full backdrop-blur-md bg-white/80 hover:bg-white border border-border-neutral text-text-dark hover:text-primary-dark font-semibold text-base shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <span>Explore Therapy</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN: VISUAL COMPOSITION WITH GLASS CARDS & WAVE ILLUSTRATION */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="lg:col-span-5 relative flex items-center justify-center"
                    >
                        {/* CENTRAL OCEAN EMBLEM CARD */}
                        <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden p-6 flex flex-col justify-between backdrop-blur-xl bg-gradient-to-b from-white/90 via-white/70 to-primary-light/40 border border-white/90 shadow-[0_20px_50px_rgba(47,111,134,0.12)]">

                            {/* Decorative Ocean Water Ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-ocean-gradient opacity-15 blur-2xl pointer-events-none" />

                            {/* Top Header inside Emblem */}
                            <div className="flex items-center justify-between z-10">
                                <div className="w-12 h-12 rounded-2xl bg-ocean-gradient p-0.5 shadow-md">
                                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-primary-dark">
                                        <FiHeart className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                                <div className="px-3.5 py-1.5 rounded-full bg-primary-light/80 text-primary-dark text-xs font-semibold">
                                    Healing Environment
                                </div>
                            </div>

                            {/* Center Ocean Motif & Serene Message */}
                            <div className="my-auto z-10 text-center py-6 space-y-4">
                                <div className="mx-auto w-24 h-24 rounded-full bg-soft-sky-gradient border border-white flex items-center justify-center shadow-inner">
                                    <svg className="w-12 h-12 text-primary-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 12c3 0 3-3 6-3s3 3 6 3 3-3 6-3" />
                                        <path d="M2 17c3 0 3-3 6-3s3 3 6 3 3-3 6-3" />
                                        <path d="M12 3a4 4 0 0 1 4 4c0 3-4 7-4 7s-4-4-4-7a4 4 0 0 1 4-4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-text-dark tracking-tight">
                                    A Safe Space to Heal
                                </h3>
                                <p className="text-sm text-muted-text max-w-xs mx-auto leading-relaxed">
                                    Dedicated professional support designed to bring clarity, emotional balance, and peace to your life journey.
                                </p>
                            </div>

                            {/* Bottom Quote inside Emblem */}
                            <div className="z-10 p-4 rounded-2xl bg-white/80 border border-white shadow-sm flex items-center gap-3">
                                <FiShield className="w-5 h-5 text-cta shrink-0" />
                                <span className="text-xs text-text-dark font-medium leading-snug">
                                    Licensed & Confidential Psychotherapy Practice
                                </span>
                            </div>
                        </div>

                        {/* FLOATING GLASS CARD 1: PATIENT SATISFACTION */}
                        <motion.div
                            variants={floatingCardVariant}
                            animate="animate"
                            className="absolute -bottom-6 -left-4 sm:-left-8 z-20 hidden sm:flex items-center gap-3.5 p-4 rounded-2xl backdrop-blur-xl bg-white/95 border border-white shadow-[0_12px_35px_rgba(47,111,134,0.15)]"
                        >
                            <div className="w-10 h-10 rounded-xl bg-warm-accent/30 flex items-center justify-center text-primary-dark">
                                <span className="text-lg">🌿</span>
                            </div>
                            <div>
                                <div className="text-xs text-muted-text font-medium">Care Philosophy</div>
                                <div className="text-sm font-bold text-text-dark">Holistic & Compassionate</div>
                            </div>
                        </motion.div>

                        {/* FLOATING GLASS CARD 2: CONFIDENTIAL & TRUSTED */}
                        <motion.div
                            variants={floatingCardVariant}
                            animate="animate"
                            transition={{ delay: 1 }}
                            className="absolute -top-4 -right-4 sm:-right-6 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl backdrop-blur-xl bg-white/95 border border-white shadow-[0_12px_35px_rgba(47,111,134,0.15)]"
                        >
                            <div className="flex -space-x-2 overflow-hidden">
                                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-primary-light flex items-center justify-center text-xs font-bold text-primary-dark">
                                    Dr
                                </div>
                                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-soft-accent flex items-center justify-center text-xs font-bold text-primary-dark">
                                    ♥
                                </div>
                            </div>
                            <div className="pr-1">
                                <div className="text-xs font-bold text-text-dark">Guided Recovery</div>
                                <div className="text-[11px] text-cta font-medium">1-on-1 Sessions</div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            {/* BOTTOM SEAMLESS ORGANIC OCEAN WAVE */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                <svg
                    className="relative block w-full h-12 sm:h-20 text-white fill-current"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" opacity="0.4" fill="var(--color-primary-light)" />
                    <path d="M0,20 C200,80 450,10 700,65 C950,120 1100,20 1200,50 L1200,120 L0,120 Z" fill="#FFFFFF" />
                </svg>
            </div>
        </section>
    )
}
