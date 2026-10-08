import Image from 'next/image'

const publications = [
  {
    outlet: 'The Huntington News',
    section: 'Campus',
    vizTitle: 'Recent stabbings, gunshots in campus area leave students feeling uneasy',
    articleHeadline:
      'Northeastern students report fear, confusion after recent stabbings, gunfire near campus',
    articleAuthor: 'Daniela Rynott',
    date: 'April 3, 2026',
    url: 'https://huntnewsnu.com/92482/campus/northeastern-students-report-fear-confusion-after-recent-stabbings-gunfire-near-campus/',
    image: '/published-stabbings-map.png',
    tool: 'Flourish',
  },
  {
    outlet: 'The Huntington News',
    section: 'Sports',
    vizTitle: 'Tarantino hangs with the best of Northeastern in less games, data show',
    articleHeadline:
      'How Cooper Tarantino is leading Northeastern baseball from behind the plate',
    articleAuthor: 'Elli Einset',
    date: 'June 10, 2026',
    url: 'https://huntnewsnu.com/93337/sports/how-cooper-tarantino-is-leading-northeastern-baseball-from-behind-the-plate/',
    image: '/published-tarantino-scatter.png',
    tool: 'Flourish',
  },
]

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export function Published() {
  return (
    <section id="published" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <p className="text-sm font-medium tracking-widest uppercase text-forest dark:text-forest-light">
              Published Work
            </p>
            <h2 className="font-serif text-5xl font-bold text-ink dark:text-paper">
              Data Visualizations in Print
            </h2>
          </div>
          <p className="text-sm text-muted max-w-xs sm:text-right">
            Interactive graphics I&apos;ve built as a Staff Data Visualization Analyst at The Huntington News.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <a
              key={pub.url}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-card dark:bg-card-dark border border-border dark:border-zinc-800 rounded-2xl overflow-hidden
                         transition-all duration-300
                         hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest/10 dark:hover:shadow-forest-light/5
                         hover:border-forest/50 dark:hover:border-forest-light/40"
            >
              <div className="relative aspect-[16/10] bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
                <Image
                  src={pub.image}
                  alt={pub.vizTitle}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full bg-forest/90 text-white backdrop-blur-sm">
                  {pub.tool}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-7 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-forest/10 dark:bg-forest-light/10 text-forest dark:text-forest-light">
                    {pub.section}
                  </span>
                  <span className="text-xs text-muted">{pub.outlet}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-ink dark:text-paper leading-snug group-hover:text-forest dark:group-hover:text-forest-light transition-colors duration-200">
                  {pub.vizTitle}
                </h3>

                <p className="text-xs font-medium tracking-wider uppercase text-forest dark:text-forest-light">
                  Visualization by Joel Forson
                </p>

                <div className="mt-auto pt-4 border-t border-border dark:border-zinc-800 space-y-2">
                  <p className="text-sm text-muted dark:text-zinc-400 leading-snug">
                    Published in &ldquo;{pub.articleHeadline}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <p>
                      By {pub.articleAuthor} &middot; {pub.date}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-medium text-muted group-hover:text-forest dark:group-hover:text-forest-light transition-colors">
                      Read article
                      <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                        <ArrowIcon />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
