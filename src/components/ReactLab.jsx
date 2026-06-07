import { useMemo, useState } from 'react'

const projects = [
  {
    name: "Currency Converter Java",
    type: "Java Console App",
    repo: "https://github.com/Ashvanth2004/CurrencyConverter-Java.git",
    focus: "Input handling, conversion logic, loops, and clean Java basics.",
    stack: ["Java", "Scanner", "Control Flow", "Decimal Logic"],
    command: "javac CurrencyConverter.java && java CurrencyConverter"
  },
  {
    name: "Bank Account Simulation",
    type: "OOP Java System",
    repo: "https://github.com/Ashvanth2004/Bank-Account-Simulation.git",
    focus: "Account classes, deposits, withdrawals, balance checks, and validation.",
    stack: ["Java", "OOP", "Inheritance", "Exception Handling"],
    command: "javac Main.java && java Main"
  },
  {
    name: "Movie Info Finder",
    type: "Frontend API App",
    repo: "https://github.com/Ashvanth2004/Movie-Info-Finder.git",
    focus: "Movie search interface, typed frontend structure, CSS UI, and API data display.",
    stack: ["TypeScript", "CSS", "API", "Responsive UI"],
    command: "npm install && npm run dev"
  }
]

const metrics = [
  ["Backend", "Java + Spring Boot", "88%"],
  ["Frontend", "React + TypeScript", "82%"],
  ["Database", "SQL + MongoDB", "76%"],
  ["Tools", "Git + Docker + Postman", "80%"]
]

export default function ReactLab() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const activeProject = projects[activeIndex]

  const terminalLines = useMemo(() => [
    "$ portfolio --profile java-full-stack",
    "> Loading selected project...",
    `> ${activeProject.name}`,
    `> Stack: ${activeProject.stack.join(" / ")}`,
    `> Run: ${activeProject.command}`
  ], [activeProject])

  function copyCommand() {
    navigator.clipboard?.writeText(activeProject.command)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="react-lab-panel">
      <div className="react-lab-copy">
        <p className="eyebrow">Powered by React</p>
        <h2>Interactive technical workspace.</h2>
        <p>
          Explore my core Java and frontend projects through live actions, stack indicators, repository links, and terminal-style commands.
        </p>
      </div>

      <div className="metric-grid">
        {metrics.map(([label, value, pct]) => (
          <article className="metric-card" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <div className="meter" aria-label={`${label} level ${pct}`}>
              <i style={{ width: pct }} />
            </div>
          </article>
        ))}
      </div>

      <div className="project-switcher">
        <div className="project-tabs" role="tablist" aria-label="Project selector">
          {projects.map((project, index) => (
            <button
              key={project.name}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              {String(index + 1).padStart(2, '0')} {project.name}
            </button>
          ))}
        </div>

        <article className="active-project-card">
          <p className="project-type">{activeProject.type}</p>
          <h3>{activeProject.name}</h3>
          <p>{activeProject.focus}</p>
          <div className="project-tags">
            {activeProject.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="react-actions">
            <a href={activeProject.repo} target="_blank" rel="noopener">Open Repository</a>
            <button onClick={copyCommand} type="button">
              {copied ? 'Copied' : 'Copy Run Command'}
            </button>
          </div>
        </article>
      </div>

      <div className="terminal-card" aria-label="Technical command preview">
        <div className="terminal-dots">
          <span /><span /><span />
        </div>
        {terminalLines.map((line) => (
          <code key={line}>{line}</code>
        ))}
      </div>
    </div>
  )
}