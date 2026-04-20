import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium tracking-widest uppercase text-forest dark:text-forest-light">
                Data Analytics &amp; MIS
              </p>
              <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-black text-ink dark:text-paper leading-[0.95] tracking-tight">
                Joel
                <br />
                <span className="text-forest dark:text-forest-light">Forson</span>
              </h1>
            </div>

            <p className="text-lg text-muted dark:text-zinc-400 leading-relaxed max-w-xl">
              A Business Analytics &amp; MIS student at Northeastern University with a track record of turning data into decisions. Through co-ops and internships at Fortune 100 companies —{' '}
              <span className="text-ink dark:text-paper font-medium">Liberty Mutual</span>,{' '}
              <span className="text-ink dark:text-paper font-medium">IBM</span>, and{' '}
              <span className="text-ink dark:text-paper font-medium">MassMutual</span> — I&apos;ve built fluency in econometrics, Machine Learning, and interactive visualizations, always with an eye toward making complex analysis accessible and actionable.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-forest-dark hover:scale-105 active:scale-95 transition-all duration-200"
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border dark:border-zinc-700 text-ink dark:text-paper px-6 py-3 rounded-full text-sm font-medium hover:border-forest dark:hover:border-forest-light hover:text-forest dark:hover:text-forest-light hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="group relative w-[27rem] h-[27rem] rounded-full overflow-hidden border-4 border-forest dark:border-forest-light shadow-xl shadow-forest/20 transition-transform duration-500 hover:scale-[1.03]">
              <Image
                src="/headshot.jpg"
                alt="Joel Forson"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border dark:border-zinc-800 flex flex-wrap gap-14">
          {[
            { label: 'Organizations Worked For', value: '4+' },
            { label: 'Projects Worked On', value: '20+' },
            { label: 'Years Coding', value: '3+' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-5xl font-bold text-ink dark:text-paper">{stat.value}</p>
              <p className="text-base text-muted mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
