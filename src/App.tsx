import { experiences, projects, skills, stats } from './data';

function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="chip-row">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function Navigation() {
  return (
    <nav className="nav">
      <a className="brand" href="#top" aria-label="Samyak Jain portfolio home">
        <span className="brand-mark">SJ</span>
        <span>Samyak Jain</span>
      </a>
      <div className="nav-links" aria-label="Primary navigation">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Senior SDE · Remote USD Roles · Freelance AI/Backend Contracts</p>
          <h1>I build senior-level backend and AI systems for teams that need production execution, fast.</h1>
          <p className="hero-text">
            I&apos;m Samyak Jain — a Senior Backend Engineer available for remote USD roles, freelance contracts,
            and AI/backend consulting. I bring production experience from Amazon, Allen Digital, Fivetran, and
            Observe.AI across distributed systems, Kafka data pipelines, high-throughput APIs, and AI-native backend products.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Hire / Contract me</a>
            <a className="button secondary" href="#projects">View work</a>
          </div>
        </div>

        <aside className="command-panel reveal delay-1" aria-label="Engineering profile summary">
          <div className="terminal-bar"><span /><span /><span /><p>profile.runtime</p></div>
          <div className="terminal-body">
            <p><span>$</span> engineer --focus backend --mode production</p>
            <p className="muted">status: open_to_remote_usd_roles_and_contracts</p>
            <p className="muted">stack: java python golang kafka k8s aws</p>
            <p className="muted">specialty: scalable backend + AI infrastructure</p>
          </div>
        </aside>
      </div>

      <div className="stats-grid reveal delay-2">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell about reveal delay-1">
      <div className="section-label">About</div>
      <div className="about-card">
        <h2>Senior backend engineer for product teams, startups, and remote-first companies.</h2>
        <p>
          I work best where backend engineering meets scale: CDC systems, Kafka streams, cache-heavy APIs,
          multi-tenant infrastructure, reliability automation, and AI-enabled workflows. My recent work spans
          MongoDB → Snowflake replication, Kubernetes-hosted Kafka Connect clusters, and taxonomy services serving massive read traffic.
        </p>
        <p>
          B.Tech CSE from Jaypee Institute of IT. Currently positioning for Senior SDE / Senior Backend Engineer roles,
          remote USD opportunities, and freelance contracts where ownership, system design maturity, and shipping speed matter.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell reveal">
      <div className="section-header">
        <div>
          <div className="section-label">Experience</div>
          <h2>Production systems, not toy demos.</h2>
        </div>
        <p>Four engineering chapters across infra, data, consumer-scale education, and Amazon-scale systems.</p>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <article className="experience-card" key={item.company} style={{ animationDelay: `${index * 70}ms` }}>
            <div className="timeline-dot" />
            <div className="experience-topline">
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <span>{item.period}</span>
            </div>
            <p className="summary">{item.summary}</p>
            <ul>
              {item.impact.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <ChipRow items={item.stack} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell reveal">
      <div className="section-header">
        <div>
          <div className="section-label">Selected Projects</div>
          <h2>Contract-relevant AI/backend systems.</h2>
        </div>
        <a className="text-link" href="https://github.com/Samyak-jain7" target="_blank" rel="noreferrer">View GitHub →</a>
      </div>

      <div className="project-grid featured-only">
        {projects.map((project, index) => (
          <a
            className="project-card"
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={project.title}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="project-signal">{project.signal}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ChipRow items={project.tech} />
          </a>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell reveal">
      <div className="section-header">
        <div>
          <div className="section-label">Skills</div>
          <h2>Stack built around backend ownership.</h2>
        </div>
        <p>Languages, infra, data systems, observability, and cloud tooling used in real production work.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.group}>
            <h3>{skill.group}</h3>
            <ChipRow items={skill.items} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell contact reveal">
      <div>
        <div className="section-label">Contact</div>
        <h2>Hiring senior backend talent or need an AI/backend contract delivered?</h2>
        <p>
          I&apos;m available for Senior Backend / Senior SDE remote USD roles and selective freelance contracts around
          AI apps, RAG systems, backend APIs, data pipelines, and internal automation tools.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button primary" href="mailto:sj221097@gmail.com">Discuss a role / contract</a>
        <a className="button secondary" href="https://www.linkedin.com/in/silver-samyak" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="button secondary" href="https://github.com/Samyak-jain7" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
