import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-6 pb-12 pt-28 sm:px-10"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        aria-hidden
      />
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Contact
          </p>
          <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Let&apos;s make something{' '}
            <span className="text-gold-gradient italic">worth keeping.</span>
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          {profile.email ? (
            <Reveal delay={0.15}>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 font-serif text-2xl text-foreground transition-colors hover:text-primary sm:text-3xl"
              >
                <Mail className="h-6 w-6 text-primary" />
                {profile.email}
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          ) : null}

          {profile.phone ? (
            <Reveal delay={0.2}>
              <a
                href={`tel:${profile.phone}`}
                className="group inline-flex items-center gap-3 font-serif text-2xl text-foreground transition-colors hover:text-primary sm:text-3xl"
              >
                <Phone className="h-6 w-6 text-primary" />
                {profile.phone}
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          ) : null}
        </div>

        {profile.socials.length > 0 ? (
          <Reveal delay={0.25}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="font-medium text-foreground/80 group-hover:text-primary">
                      {s.label}
                    </span>
                    <span className="font-mono text-xs">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Designed &amp; built with care · {profile.location}
          </span>
        </div>
      </div>
    </footer>
  )
}
