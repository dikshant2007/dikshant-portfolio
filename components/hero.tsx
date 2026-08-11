'use client'

import dynamic from 'next/dynamic'
import { motion } from 'motion/react'
import { ArrowDownRight, Mouse } from 'lucide-react'
import { profile, stats } from '@/lib/portfolio-data'

const techStack = [
  'REACT.JS', 'TYPESCRIPT', 'NEXT.JS', 'JAVA', 'SPRING BOOT', 
  'TAILWIND CSS', 'MYSQL', 'FLUTTER', 'ARTIFICIAL INTELLIGENCE'
]

const HeroOrb = dynamic(
  () => import('@/components/hero-orb').then((m) => m.HeroOrb),
  { ssr: false },
)

const easeOut = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-28 pb-16 sm:px-10"
    >
      {/* 3D orb backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute right-[-10%] top-1/2 h-[50vh] w-[50vh] -translate-y-1/2 sm:h-[60vh] sm:w-[60vh] md:right-[-5%] md:h-[60vh] md:w-[60vh] lg:right-[0%] lg:h-[65vh] lg:w-[65vh] xl:right-[5%] xl:h-[70vh] xl:w-[70vh]"
          style={{
            maskImage:
              'radial-gradient(circle at center, black 55%, transparent 78%)',
            WebkitMaskImage:
              'radial-gradient(circle at center, black 55%, transparent 78%)',
          }}
        >
          <HeroOrb />
        </div>
        <div className="grain absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            {profile.available && (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
            )}
            Available for select work · {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance font-serif text-[3.4rem] leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[8.5rem]"
          >
            <span className="block text-foreground">{profile.firstName}</span>
            <span className="block text-gold-gradient italic">
              {profile.lastName}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View selected work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-3xl text-foreground sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/50 sm:bottom-24"
      >
        <Mouse className="h-5 w-5 animate-bounce" />
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>

      {/* Tech Stack Marquee */}
      <div className="absolute bottom-0 left-0 flex w-full overflow-hidden border-y border-border/30 bg-background/40 py-2.5 backdrop-blur-sm sm:py-3">
        <div className="flex w-max min-w-full shrink-0 animate-marquee items-center justify-around gap-8 px-4 sm:gap-16 sm:px-8">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-foreground/40 sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
