'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { projects, type Project } from '@/lib/portfolio-data'

const easeOut = [0.22, 1, 0.36, 1] as const

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: easeOut }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 glass-card"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {project.category}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {project.year}
        </span>
      </div>

      <div className="mt-16">
        <h3 className="flex items-center gap-2 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
          {project.title}
          <ArrowUpRight className="h-6 w-6 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
        </h3>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-foreground/70"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: easeOut }}
      className="group grid grid-cols-[1fr_auto] items-center gap-4 border-t border-border py-6 transition-colors sm:grid-cols-[1.4fr_1.6fr_auto]"
    >
      <div className="flex items-baseline gap-3">
        <h3 className="font-serif text-2xl tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
          {project.title}
        </h3>
        <span className="font-mono text-xs text-muted-foreground">
          {project.year}
        </span>
      </div>
      <p className="hidden max-w-md text-sm leading-relaxed text-muted-foreground sm:block">
        {project.description}
      </p>
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </motion.a>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="relative px-6 py-28 sm:px-10 overflow-hidden">
      <div className="ambient-glow top-0 right-0 translate-x-1/4 -translate-y-1/4" />
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Selected work
              </p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
                Things I&apos;ve built.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professional, personal, and academic applications built across
              web, mobile, databases, and AI.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((p, i) => (
            <FeaturedCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="mt-6">
          {rest.map((p, i) => (
            <ProjectRow key={p.title} project={p} index={i} />
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
