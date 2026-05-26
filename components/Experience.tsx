const workExperience = [
  {
    company: 'IBM',
    role: 'Customer Success Engineer',
    location: 'Chicago, IL',
    period: 'September 2026',
    upcoming: true,
    bullets: [
      'Will partner with enterprise clients to drive adoption and value realization of IBM technology products, serving as a technical bridge between client needs and IBM\'s platform capabilities.',
      'Will diagnose technical blockers, lead onboarding workflows, and develop client-facing documentation and success plans to reduce churn and accelerate time-to-value.',
    ],
  },
  {
    company: 'Liberty Mutual Insurance',
    role: 'Data Analyst Intern',
    location: 'Boston, MA',
    period: 'May 2026 – Present',
    bullets: [
      'Building an AI agent to help internal stakeholders access key information more easily, reducing the time spent searching across systems and documentation.',
      'Conduct data analysis across large insurance datasets to surface operational and risk insights that inform business decisions.',
    ],
  },
  {
    company: 'MFS Investment Management',
    role: 'Investment Operations Business Analyst Co-Op',
    location: 'Boston, MA',
    period: 'July 2025 – December 2025',
    bullets: [
      'Developed and executed regression test cases to validate Round Robin data integrity and ensure accurate data flow between databases and the UI; designed ETL workflows for financial data processing (e.g., Money Market Sweep pipeline supporting CIT fund operations).',
      'Performed SQL-driven portfolio performance analysis, querying Eagle data and building dashboards to deliver insights for institutional portfolios utilized by portfolio managers and senior leadership.',
      'Led bi-weekly cross-functional issue resolution with Eagle developers and stakeholders, resolving 30+ data defects and updating system specifications while strengthening expertise in Eagle, CRIMS, SQL, and Agile.',
    ],
  },
  {
    company: 'MassMutual',
    role: 'Operations Project Management Office Intern',
    location: 'Springfield, MA',
    period: 'May 2025 – July 2025',
    bullets: [
      'Built an operational milestone tracking database in Confluence for 40+ active projects to identify bottlenecks across the top 10 Strategic Initiatives; created an interactive roadmap that enhanced resource reallocation and data analysis.',
      'Developed an automated data pipeline to extract stakeholder responses from Microsoft Forms, process the data, and generate real-time dashboards depicting critical KPIs for the Ops PMO — improving visibility into budget adherence, resource management, and on-time milestone completion.',
    ],
  },
  {
    company: 'PwC × Extern Non-Profit Consulting',
    role: 'Consulting Extern',
    location: 'Remote',
    period: 'January 2025 – March 2025',
    bullets: [
      'Analyzed 10+ nonprofit competitors in the inclusion and disability advocacy sector; identified eight underserved audience segments to improve market clarity and expand outreach.',
      "Conducted weekly financial and organizational analysis; compiled findings into a final executive presentation with data-driven recommendations to enhance NOD's market positioning and partner engagement.",
    ],
  },
]

const education = {
  school: 'Northeastern University – D\'Amore-McKim School of Business',
  degree: 'Bachelor of Science in Business Administration',
  location: 'Boston, MA',
  period: 'September 2023 – May 2027',
  concentrations: 'Management Information Systems, Business Analytics',
  minor: 'Economics',
  coursework: 'Data Mining, Data Wrangling, Information Visualization, Data Modeling for Business, Statistics, Calculus I',
  awards: [
    '2025 MLT Consulting Case Competition Finalist',
    '2023 Junior Achievement of Western Mass — 18 Under 18',
  ],
  orgs: ['Management Leadership for Tomorrow', 'ColorStack', 'NSBE', 'NABA'],
}

const leadership = [
  {
    org: 'Northeastern Ghanaian Student Organization',
    role: 'Community Service Coordinator',
    location: 'Boston, MA',
    period: 'March 2024 – Present',
    bullets: [
      'Founding e-board member, successfully leading the club from its inception to achieving full university recognition within a year.',
      'Plan and manage events for 50+ members, overseeing all aspects to ensure smooth operation and high participant satisfaction.',
    ],
  },
  {
    org: 'Northeastern Black Business Student Association',
    role: 'Upperclassman Representative',
    location: 'Boston, MA',
    period: 'April 2026 – Present',
    bullets: [
      'Serve as a peer mentor and advocate for upperclassman members, bridging communication between leadership and the broader membership.',
    ],
  },
  {
    org: 'Northeastern Black Business Student Association',
    role: 'Lead Events Director',
    location: 'Boston, MA',
    period: 'April 2024 – April 2026',
    bullets: [
      'Led the Events team in planning and executing 25+ events per year — networking mixers, technical workshops, and an annual Professional Conference with 100+ attendees; grew membership by 80%.',
      'Cultivated partnerships with local and national businesses to secure sponsorships, increasing member engagement and participation by 35%.',
    ],
  },
  {
    org: 'Huntington News',
    role: 'Staff Data Visualization Analyst',
    location: 'Boston, MA',
    period: 'March 2026 – Present',
    bullets: [
      'Create data visualizations for editorial stories using Flourish, translating complex data into compelling, reader-friendly graphics.',
    ],
  },
  {
    org: 'Microsoft Excel Student Ambassador Program',
    role: 'Event Director',
    location: 'Hybrid',
    period: 'January 2025 – May 2025',
    bullets: [
      'Developed and delivered workshops on advanced Excel functions — XLOOKUP, INDEX MATCH, Pivot Tables — to 40+ attendees, providing personal tutoring to enhance data analysis capabilities.',
    ],
  },
]

const skills = {
  technical: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'Flourish'],
  tools: ['Confluence', 'Jira'],
  interests: ['Celtics', 'Ghanaian Culture', 'Music Production', 'Avatar: The Last Airbender', 'Simulation Games'],
}

function TimelineItem({
  company,
  role,
  location,
  period,
  bullets,
  upcoming = false,
  last = false,
}: {
  company: string
  role: string
  location: string
  period: string
  bullets: string[]
  upcoming?: boolean
  last?: boolean
}) {
  return (
    <div className={`relative pl-8 ${last ? '' : 'pb-12'}`}>
      {/* Vertical line */}
      {!last && (
        <div className={`absolute left-[7px] top-4 bottom-0 w-px ${upcoming ? 'bg-forest/30 dark:bg-forest-light/20' : 'bg-border dark:bg-zinc-800'}`} />
      )}
      {/* Dot — hollow ring for upcoming, filled for past */}
      <div className={`absolute left-0 top-[6px] w-3.5 h-3.5 rounded-full ring-4 ring-paper dark:ring-ink ${
        upcoming
          ? 'bg-paper dark:bg-ink border-2 border-forest dark:border-forest-light'
          : 'bg-forest dark:bg-forest-light'
      }`} />

      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className={`font-serif text-xl font-bold leading-snug ${upcoming ? 'text-muted dark:text-zinc-400' : 'text-ink dark:text-paper'}`}>
                {role}
              </h3>
              {upcoming && (
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-forest/10 dark:bg-forest-light/10 text-forest dark:text-forest-light border border-forest/20 dark:border-forest-light/20">
                  Upcoming
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-forest dark:text-forest-light mt-0.5">
              {company} &middot; {location}
            </p>
          </div>
          <span className="shrink-0 text-xs font-medium text-muted bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
            {period}
          </span>
        </div>

        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted dark:text-zinc-400 leading-relaxed">
              <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-forest dark:bg-forest-light" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* Work Experience */}
        <div>
          <div className="space-y-3 mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-forest dark:text-forest-light">
              Background
            </p>
            <h2 className="font-serif text-5xl font-bold text-ink dark:text-paper">
              Experience
            </h2>
          </div>

          <div>
            {workExperience.map((job, i) => (
              <TimelineItem key={job.company} {...job} last={i === workExperience.length - 1} />
            ))}
          </div>
        </div>

        {/* Education + Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="p-7 rounded-2xl border border-border dark:border-zinc-800 bg-card dark:bg-card-dark space-y-5 hover:scale-[1.02] hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-ink dark:text-paper leading-snug">
                  {education.school}
                </h3>
                <p className="text-sm font-medium text-forest dark:text-forest-light mt-1">
                  {education.degree}
                </p>
              </div>
              <span className="shrink-0 text-xs font-medium text-muted bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
                {education.period}
              </span>
            </div>

            <div className="space-y-2 text-sm text-muted dark:text-zinc-400">
              <p>
                <span className="font-medium text-ink dark:text-paper">Concentrations:</span>{' '}
                {education.concentrations}
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Minor:</span>{' '}
                {education.minor}
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Coursework:</span>{' '}
                {education.coursework}
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-border dark:border-zinc-800">
              <div className="flex flex-wrap gap-2">
                {education.orgs.map((o) => (
                  <span key={o} className="text-xs font-medium px-2.5 py-1 bg-forest/10 dark:bg-forest-light/10 text-forest dark:text-forest-light rounded-full">
                    {o}
                  </span>
                ))}
              </div>
              <div className="space-y-1">
                {education.awards.map((a) => (
                  <p key={a} className="text-xs text-muted dark:text-zinc-500 flex gap-2">
                    <span className="text-forest dark:text-forest-light">★</span> {a}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="space-y-6">
            <div className="p-7 rounded-2xl border border-border dark:border-zinc-800 bg-card dark:bg-card-dark space-y-4 hover:scale-[1.02] hover:shadow-md transition-all duration-200">
              <h3 className="font-serif text-xl font-bold text-ink dark:text-paper">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((s) => (
                  <span key={s} className="text-sm font-medium px-3 py-1.5 rounded-full border border-border dark:border-zinc-700 text-ink dark:text-paper hover:scale-110 hover:border-forest dark:hover:border-forest-light hover:text-forest dark:hover:text-forest-light transition-all duration-150 cursor-default">
                    {s}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-border dark:border-zinc-800">
                <p className="text-xs text-muted mb-2 tracking-wider uppercase font-medium">Management Tools</p>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((t) => (
                    <span key={t} className="text-sm font-medium px-3 py-1.5 rounded-full border border-border dark:border-zinc-700 text-ink dark:text-paper">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-7 rounded-2xl border border-border dark:border-zinc-800 bg-card dark:bg-card-dark space-y-3 hover:scale-[1.02] hover:shadow-md transition-all duration-200">
              <h3 className="font-serif text-xl font-bold text-ink dark:text-paper">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {skills.interests.map((i) => (
                  <span key={i} className="text-sm text-muted dark:text-zinc-400 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800/50 rounded-full">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-ink dark:text-paper mb-8">
            Leadership &amp; Activities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {leadership.map((item) => (
              <div
                key={item.org}
                className="p-6 rounded-2xl border border-border dark:border-zinc-800 bg-card dark:bg-card-dark space-y-3 hover:border-forest/40 dark:hover:border-forest-light/30 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
              >
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-forest dark:text-forest-light mb-1">
                    {item.period}
                  </p>
                  <h4 className="font-serif text-lg font-bold text-ink dark:text-paper leading-snug">
                    {item.role}
                  </h4>
                  <p className="text-sm text-muted mt-0.5">{item.org} &middot; {item.location}</p>
                </div>
                <ul className="space-y-2">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-muted dark:text-zinc-400 leading-relaxed">
                      <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-forest dark:bg-forest-light" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
