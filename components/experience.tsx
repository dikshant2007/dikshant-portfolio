import { Reveal } from '@/components/reveal'
import { experience } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28 sm:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Experience
          </p>
          <h2 className="mt-6 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Where I&apos;ve spent my time.
          </h2>
        </Reveal>

        <ol>
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <li className="group flex flex-col gap-3 rounded-2xl p-6 sm:p-8 transition-all hover:glass-card">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-2xl tracking-tight text-foreground">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">
                    {job.company}
                  </p>
                  <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
