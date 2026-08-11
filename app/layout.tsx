import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

const baseUrl = 'https://dikshant-portfolio-pied.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Dikshant Shahare — Dikshant Portfolio | Software Developer',
    template: '%s | Dikshant Shahare Portfolio',
  },
  description:
    'Official portfolio of Dikshant Shahare, a software developer building real-world web, mobile, and AI-powered applications.',
  keywords: [
    'Dikshant',
    'Dikshant Shahare',
    'Dikshant Portfolio',
    'Dikshant Shahare Portfolio',
    'Dikshant Developer',
    'Software Developer Portfolio',
    'Full-Stack Developer',
    'React.js Developer',
    'Java Developer',
    'Spring Boot',
    'dikshant2007',
  ],
  authors: [{ name: 'Dikshant Shahare', url: baseUrl }],
  creator: 'Dikshant Shahare',
  publisher: 'Dikshant Shahare',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Dikshant Shahare Portfolio',
    title: 'Dikshant Shahare — Dikshant Portfolio | Software Developer',
    description:
      'Official portfolio of Dikshant Shahare, a software developer building real-world web, mobile, and AI-powered applications.',
    images: [
      {
        url: '/dikshant-photo.png',
        width: 1200,
        height: 630,
        alt: 'Dikshant Shahare Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dikshant Shahare — Dikshant Portfolio',
    description:
      'Official portfolio of Dikshant Shahare, a software developer building real-world web, mobile, and AI-powered applications.',
    images: ['/dikshant-photo.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2efe6' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0b09' },
  ],
}

const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dikshant Shahare',
  alternateName: ['Dikshant', 'Dikshant Portfolio'],
  url: baseUrl,
  image: `${baseUrl}/dikshant-photo.png`,
  jobTitle: 'Software Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'MBiG IT SERVICES PVT. LTD.',
  },
  sameAs: [
    'https://github.com/dikshant2007',
    'https://www.linkedin.com/in/dikshant-shahare-7b668a2a6/',
  ],
  description:
    'Software Developer passionate about building real-world web, mobile, and AI-powered applications.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="fixed inset-0 z-[-1] bg-grid-pattern pointer-events-none" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
