'use client'

import { useState } from 'react'
import Image from 'next/image'

const FILTERS = ['All', 'Python', 'SQL', 'Excel', 'Tableau'] as const
type Filter = (typeof FILTERS)[number]

const projects = [
  {
    title: "Benchmarking Ghana's Economic Journey: World Bank API Analysis",
    description:
      "Built an automated World Bank API pipeline to benchmark Ghana's GDP, inflation, trade, and fiscal health against Lower Middle Income and global averages (2000–2023). Engineered four derived indicators — labor productivity, budget balance, net capital outflow, and natural unemployment rate — uncovering that Ghana's GDP per capita grew just 9.5% while peer economies grew 57%. Delivered findings via a 2×3 executive dashboard.",
    tags: ['Python', 'pandas', 'Matplotlib', 'Seaborn', 'wbgapi', 'Streamlit'],
    github: 'https://github.com/JoelForson',
    image: '/project-ghana.png',
    status: 'Complete',
  },
  {
    title: 'FedSpeak Sentiment: NLP on FOMC Minutes',
    description:
      'Diagnosed and rebuilt a broken NLP pipeline for Federal Reserve meeting minutes (2000–2024). Replaced a flawed Harvard sentiment lexicon with the Loughran-McDonald financial dictionary to eliminate false positives on terms like "capital" and "liability." Benchmarked TF-IDF + K-Means clustering against sentence-transformer embeddings, and evaluated hawkish vs. dovish classification via logistic regression with TimeSeriesSplit cross-validation.',
    tags: ['Python', 'scikit-learn', 'NLTK', 'sentence-transformers', 'Plotly'],
    github: 'https://github.com/JoelForson/ECON5200-Applied-Data-Analytics-in-Economics/tree/main/lab23',
    image: '/project-fedspeak.png',
    status: 'Complete',
  },
  {
    title: 'Time Series Forecasting: ARIMA, GARCH & Block Bootstrap',
    description:
      'Diagnosed and corrected a misspecified ARIMA pipeline on U.S. CPI data, identifying three planted errors including non-stationary fitting and missing seasonality structure. Extended the analysis by fitting GARCH(1,1) to 6,287 daily S&P 500 log returns (2000–2024), finding volatility persistence of α + β = 0.9826 with a ~39.5 trading day shock half-life. Implemented block bootstrap resampling for distribution-free forecast intervals and built a reusable forecast_evaluation.py module.',
    tags: ['Python', 'pmdarima', 'arch', 'statsmodels', 'FRED API'],
    github: 'https://github.com/JoelForson',
    image: '/project-cpi.png',
    status: 'Complete',
  },
  {
    title: 'Netflix Consumer Clustering & ETL Pipeline',
    description:
      'Built an ETL pipeline standardizing 1,000+ unique titles from multiple web-scraped Netflix datasets. Applied K-Means clustering to segment audiences into 5 consumer profiles based on engagement data, uncovering correlations between content type, release year, and viewership to inform media investment strategy.',
    tags: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Excel'],
    github: 'https://github.com/JoelForson/Netflix-Data-Analysis-Project',
    image: '/project-netflix.jpg',
    status: 'Complete',
  },
  {
    title: 'Credit Score Classification: 98.8K Customer Records',
    description:
      'Built a modular ML pipeline with custom preprocessing classes across 98.8K cleaned records, achieving 80% accuracy and 0.77 F1-macro via 5-fold stratified cross-validation. Engineered high-signal features like debt-to-income ratio and benchmarked Random Forest, Logistic Regression, and Decision Tree models to identify key drivers of creditworthiness.',
    tags: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'SciPy', 'Excel'],
    github: 'https://github.com/JoelForson/Credit_Score_Analysis_Project',
    image: '/project-credit.jpg',
    status: 'Complete',
  },
  {
    title: 'Women in Music: Billboard vs. Grammy Representation',
    description:
      'Analyzed the gender representation gap between commercial success and industry recognition, contrasting female artist trends on the Billboard Hot 100 (1946–2022) against Grammy Award outcomes. Revealed a growing disparity — women matching men in chart presence but consistently underrepresented in major award categories.',
    tags: ['Tableau', 'Excel'],
    image: '/project-grammy-v2.png',
    github: 'https://public.tableau.com/app/profile/joel.forson/vizzes',
    status: 'Complete',
  },
]

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export function Projects() {
  const [active, setActive] = useState<Filter>('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === active.toLowerCase())
        )

  return (
    <section id="projects" className="py-28 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <p className="text-sm font-medium tracking-widest uppercase text-forest dark:text-forest-light">
              Work
            </p>
            <h2 className="font-serif text-5xl font-bold text-ink dark:text-paper">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-muted max-w-xs sm:text-right">
            Econometrics, NLP, and time-series — built with real data.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                active === f
                  ? 'bg-forest text-white border-forest dark:bg-forest-light dark:border-forest-light dark:text-ink'
                  : 'border-border dark:border-zinc-700 text-muted hover:border-forest dark:hover:border-forest-light hover:text-forest dark:hover:text-forest-light'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid — key change triggers re-mount + staggered fade-up */}
        {filtered.length > 0 ? (
          <div key={active} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <article
                key={project.title}
                className="animate-fade-up group flex flex-col bg-card dark:bg-card-dark border border-border dark:border-zinc-800 rounded-2xl overflow-hidden
                           transition-all duration-300
                           hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest/10 dark:hover:shadow-forest-light/5
                           hover:border-forest/50 dark:hover:border-forest-light/40"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative h-40 bg-gradient-to-br from-forest-muted to-forest/5 dark:from-forest-dark/20 dark:to-transparent overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,106,79,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="font-serif text-6xl font-black text-forest/15 dark:text-forest-light/15 select-none transition-transform duration-500 group-hover:scale-110">
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                    </>
                  )}
                  <span className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full
                    bg-forest/10 text-forest dark:bg-forest-light/10 dark:text-forest-light backdrop-blur-sm`}>
                    {project.status}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <h3 className="font-serif text-xl font-bold text-ink dark:text-paper leading-snug group-hover:text-forest dark:group-hover:text-forest-light transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted dark:text-zinc-400 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-200 ${
                          tag.toLowerCase() === active.toLowerCase() && active !== 'All'
                            ? 'bg-forest text-white dark:bg-forest-light dark:text-ink'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-ink dark:text-paper'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="pt-3 border-t border-border dark:border-zinc-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-forest dark:hover:text-forest-light transition-colors group/link"
                    >
                      <GitHubIcon />
                      {project.github.includes('tableau') ? 'View on Tableau' : 'View on GitHub'}
                      <span className="translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">
                        <ArrowIcon />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div key={active} className="animate-fade-up flex flex-col items-center justify-center py-24 text-center">
            <p className="font-serif text-3xl font-bold text-ink dark:text-paper mb-2">No {active} projects yet.</p>
            <p className="text-sm text-muted">Check back soon — more work in progress.</p>
          </div>
        )}

        {/* Footer link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/JoelForson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-forest dark:hover:text-forest-light transition-colors group/all"
          >
            View all projects on GitHub
            <span className="translate-x-0 group-hover/all:translate-x-1 transition-transform duration-200">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
