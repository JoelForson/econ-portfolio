'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const photos = [
  { src: '/about-1.jpg', caption: 'Lakefront views in Chicago during my IBM co-op.' },
  { src: '/about-2.jpg', caption: 'Suited up for a BBSA event — building community in business school.' },
  { src: '/about-3.jpg', caption: 'Exploring an abandoned lighthouse in Curaçao.' },
  { src: '/about-4.jpg', caption: 'Zip-lining across the jungle canopy.' },
  { src: '/about-5.jpg', caption: 'Admiring the scenery at the MFA in Boston.' },
]

const AUTO_ROTATE_MS = 5000

function PhotoCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length)
    }, AUTO_ROTATE_MS)
    return () => clearInterval(id)
  }, [paused])

  const go = (next: number) => setIndex((next + photos.length) % photos.length)

  return (
    <div
      className="relative mt-20 max-w-md mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-lg">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="(max-width: 500px) 100vw, 500px"
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
              <p className="text-sm font-medium text-white max-w-2xl">{photo.caption}</p>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-ink/70 hover:bg-white dark:hover:bg-ink text-ink dark:text-paper backdrop-blur-sm flex items-center justify-center shadow transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-ink/70 hover:bg-white dark:hover:bg-ink text-ink dark:text-paper backdrop-blur-sm flex items-center justify-center shadow transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? 'w-8 bg-forest dark:bg-forest-light'
                : 'w-1.5 bg-border dark:bg-zinc-700 hover:bg-forest/50 dark:hover:bg-forest-light/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-medium tracking-widest uppercase text-forest dark:text-forest-light">
                About Me
              </p>
              <h2 className="font-serif text-5xl font-bold text-ink dark:text-paper leading-tight">
                Where data meets
                <br />
                <em className="not-italic text-forest dark:text-forest-light">storytelling.</em>
              </h2>
            </div>

            <div className="space-y-4 text-muted dark:text-zinc-400 leading-relaxed">
              <p>
                I&apos;m a Northeastern University junior studying Management Information Systems and Business Analytics with a minor in Economics. Through co-ops and internships at <span className="text-ink dark:text-paper font-medium">MFS Investment Management</span>, <span className="text-ink dark:text-paper font-medium">MassMutual</span>, and <span className="text-ink dark:text-paper font-medium">Liberty Mutual</span>, I&apos;ve built fluency in econometrics, SQL, and interactive visualization — applying those skills across financial services, insurance, and enterprise technology.
              </p>
              <p>
                I&apos;m currently a <span className="text-ink dark:text-paper font-medium">Customer Success Engineer Co-Op at IBM</span>, and in August 2027 I&apos;ll join <span className="text-ink dark:text-paper font-medium">Capital One</span> full-time as a Data Analyst. My project work spans the full data lifecycle: ETL pipelines, credit classification models on 98K+ records, NLP that decodes Federal Reserve language, and Tableau dashboards that expose gender representation gaps in music. I also publish interactive data visualizations in <span className="text-ink dark:text-paper font-medium">The Huntington News</span> as a Staff Data Visualization Analyst.
              </p>
              <p>
                Off the clock, I serve as <span className="text-ink dark:text-paper font-medium">Upperclassman Representative</span> for the <span className="text-ink dark:text-paper font-medium">Black Business Student Association</span> and <span className="text-ink dark:text-paper font-medium">Community Service Coordinator</span> for the <span className="text-ink dark:text-paper font-medium">Northeastern Ghanaian Student Organization</span>, a club I helped found. When I&apos;m not in those roles, you&apos;ll likely find me digging through music data, following sports, or finding a way to turn whatever I&apos;m passionate about into a dataset worth exploring.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: '📊',
                title: 'Data Analytics',
                desc: 'Transforming raw datasets into insights using Python, SQL, and statistical methods.',
              },
              {
                icon: '🎨',
                title: 'Visualization',
                desc: 'Building interactive dashboards and charts that make complex data accessible.',
              },
              {
                icon: '🤖',
                title: 'Machine Learning',
                desc: 'Applying scikit-learn and NLP pipelines to build predictive models and extract meaning from text.',
              },
              {
                icon: '💼',
                title: 'Finance & Media',
                desc: 'Bridging quantitative analysis with real-world applications in investment and media industries.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl bg-card dark:bg-card-dark border border-border dark:border-zinc-800 hover:border-forest/40 dark:hover:border-forest-light/30 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink dark:text-paper mb-1">{item.title}</h3>
                  <p className="text-sm text-muted dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PhotoCarousel />
      </div>
    </section>
  )
}
