import { motion, type Variants } from 'framer-motion'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  duration?: number
}

export default function BlurText({
  text,
  className = '',
  delay = 0.2,
  staggerDelay = 0.03,
  duration = 0.6,
}: BlurTextProps) {
  // Split text into words to maintain proper word wrapping
  const words = text.split(' ')

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: 10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: [0.22, 1, 0.36, 1], // fluid natural spring-like easing
      },
    },
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              className="inline-block will-change-[transform,filter,opacity]"
            >
              {char}
            </motion.span>
          ))}
          {/* Space between words */}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  )
}
