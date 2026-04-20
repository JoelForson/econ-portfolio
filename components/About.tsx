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
                In my time at Northeastern I have built fluency in econometrics, machine learning, and interactive visualization, applying those skills across financial services, media, and enterprise technology to make complex analysis accessible and actionable.
              </p>
              <p>
                My project work spans the full data lifecycle: from engineering ETL pipelines and building credit classification models on 98K+ records, to crafting NLP pipelines that decode Federal Reserve language and Tableau dashboards that expose gender representation gaps in the music industry. I&apos;m drawn to problems that sit at the intersection of culture, finance, and storytelling — where the numbers have something real to say.
              </p>
              <p>
                Off the clock, I serve as <span className="text-ink dark:text-paper font-medium">Lead Events Director</span> of the <span className="text-ink dark:text-paper font-medium">Black Business Student Association</span>, where I organize events that build community and create space for underrepresented voices in business. When I&apos;m not in that role, you&apos;ll likely find me digging through music data, following sports, or finding a way to turn whatever I&apos;m passionate about into a dataset worth exploring. That curiosity is what drives most of my best work — the Billboard gender gap analysis, the Ghana economic benchmarking, the Spotify enrichment pipeline — projects that started not as assignments, but as genuine questions I wanted answered.
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
      </div>
    </section>
  )
}
