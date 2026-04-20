const skillGroups = [
  {
    category: 'Languages & Data',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'R', level: 65 },
    ],
  },
  {
    category: 'Libraries & Frameworks',
    skills: [
      { name: 'pandas', level: 88 },
      { name: 'scikit-learn', level: 78 },
      { name: 'Plotly', level: 82 },
      { name: 'NumPy', level: 80 },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Tableau', level: 75 },
      { name: 'Excel / Power BI', level: 80 },
      { name: 'Jupyter', level: 90 },
    ],
  },
]

const badges = [
  'Python', 'pandas', 'scikit-learn', 'SQL', 'Plotly', 'Git',
  'NumPy', 'R', 'Tableau', 'NLP', 'Jupyter', 'Power BI',
  'Excel', 'Data Viz', 'Econometrics', 'Machine Learning',
]

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-3 mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-forest dark:text-forest-light">
            Expertise
          </p>
          <h2 className="font-serif text-5xl font-bold text-ink dark:text-paper">
            Skills &amp; Tools
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            {skillGroups.map((group) => (
              <div key={group.category} className="space-y-5">
                <h3 className="text-xs font-medium tracking-widest uppercase text-muted">
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-ink dark:text-paper">{skill.name}</span>
                        <span className="text-xs text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-forest dark:bg-forest-light rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-medium tracking-widest uppercase text-muted">
              All Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-border dark:border-zinc-700 text-ink dark:text-paper hover:border-forest dark:hover:border-forest-light hover:text-forest dark:hover:text-forest-light transition-colors cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-forest/5 dark:bg-forest-dark/20 border border-forest/20 dark:border-forest-light/20">
              <h3 className="font-serif text-2xl font-bold text-ink dark:text-paper mb-2">
                Currently Learning
              </h3>
              <p className="text-sm text-muted dark:text-zinc-400 leading-relaxed">
                Deep learning with PyTorch, advanced time-series analysis, and cloud data pipelines on AWS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
