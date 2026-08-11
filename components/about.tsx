'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Reveal } from '@/components/reveal'
import { about } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 overflow-hidden">
      <div className="ambient-glow -left-1/4 top-1/4" />
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            About
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            {about.heading}
          </h2>
        </Reveal>

        {/* Main Content: Photo + Text */}
        <div className="mt-16 grid gap-12 md:grid-cols-[auto_1fr] md:gap-16 lg:gap-20 items-start">
          {/* Photo */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto md:mx-0 w-fit">
              {/* Glow behind */}
              <div className="absolute -inset-6 rounded-3xl bg-primary/15 blur-3xl opacity-60" />
              {/* Gradient border ring */}
              <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-primary via-primary/50 to-primary/20">
                <div className="rounded-2xl bg-background p-1.5">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-72 w-56 overflow-hidden rounded-xl sm:h-80 sm:w-64 lg:h-[22rem] lg:w-72"
                  >
                    <Image
                      src="/dikshant-photo.png"
                      alt="Dikshant Shahare"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
              {/* Decorative badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-3 -right-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-background bg-primary shadow-lg sm:h-16 sm:w-16"
              >
                <span className="text-lg font-bold text-primary-foreground sm:text-xl">D</span>
              </motion.div>
            </div>
          </Reveal>

          {/* Text Content */}
          <div>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="mb-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                What I work with
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {about.focus.map((f) => (
                  <li
                    key={f}
                    className="glass-card rounded-full px-4 py-1.5 text-sm text-foreground/80"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
