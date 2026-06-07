import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  {
    index: '01',
    type: 'Java Application',
    name: 'Currency Converter Java',
    desc: 'A lightweight Java application that converts amounts between currencies such as USD, EUR, INR, GBP, and JPY. It demonstrates user input handling, decimal calculations, conditionals, loops, and clean beginner-friendly Java structure.',
    tags: ['Java', 'Console App', 'Currency Logic'],
    href: 'https://github.com/Ashvanth2004',
    arrow: 'View Repo'
  },
  {
    index: '02',
    type: 'Object-Oriented Java',
    name: 'Bank Account Simulation',
    desc: 'A Java banking simulation built around account operations and OOP concepts. The project includes account classes, savings/current account behavior, transaction validation, and a simple main flow for deposits, withdrawals, and balance handling.',
    tags: ['Java', 'OOP', 'Exception Handling'],
    href: 'https://github.com/Ashvanth2004',
    arrow: 'View Repo'
  },
  {
    index: '03',
    type: 'Frontend App',
    name: 'Movie Info Finder',
    desc: 'A frontend movie search project built with TypeScript and CSS. It focuses on a clean search experience, movie information display, reusable UI structure, and environment-based configuration for API-driven data.',
    tags: ['TypeScript', 'CSS', 'API UI'],
    href: 'https://github.com/Ashvanth2004',
    arrow: 'View Repo'
  },
  {
    index: '04',
    type: 'Portfolio & Practice',
    name: 'Developer Portfolio',
    desc: 'A personal portfolio built to present Java full-stack skills, selected projects, certificates, and contact information with a polished responsive interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/Ashvanth2004',
    arrow: 'View Repo'
  },
  {
    index: '05',
    type: 'Hardware / Final Year Project',
    name: 'Emergency Mesh Communicator',
    desc: 'A hardware-based final year project utilizing Embedded C++ and AI. Designed to establish a resilient mesh communication network for critical emergency situations.',
    tags: ['Embedded C++', 'Hardware', 'AI'],
    href: 'https://github.com/Ashvanth2004',
    arrow: 'View Project'
  },
  {
    index: '06',
    type: 'Web Application',
    name: 'Flashcards App',
    desc: 'A web-based flashcards application designed to help users study and memorize information effectively.',
    tags: ['Web Development', 'Education', 'UI/UX'],
    href: 'https://github.com/Ashvanth2004',
    arrow: 'View Repo'
  },
  {
    index: '07',
    type: 'Java Game',
    name: 'Java Tic-Tac-Toe',
    desc: 'A classic Tic-Tac-Toe game implemented in Java, showcasing basic game logic, arrays, and user interaction.',
    tags: ['Java', 'Game Logic', 'Fundamentals'],
    href: 'https://github.com/Ashvanth2004',
    arrow: 'View Repo'
  },
  {
    index: '08',
    type: 'Java Application',
    name: 'Java Calculator',
    desc: 'A fully functional calculator application built with Java, featuring basic arithmetic operations and error handling.',
    tags: ['Java', 'Calculator', 'Logic'],
    href: 'https://github.com/Ashvanth2004',
    arrow: 'View Repo'
  },
  {
    index: '09',
    type: 'Web Clone',
    name: 'Qatar Airways Clone',
    desc: 'A frontend clone of the Qatar Airways website, built to practice complex UI layouts, responsive design, and modern styling.',
    tags: ['HTML/CSS', 'Frontend Clone', 'UI/UX'],
    href: 'https://github.com/Ashvanth2004',
    arrow: 'View Repo'
  }
]

export default function Projects() {
  const [ref, isVisible] = useScrollReveal(0.05)

  return (
    <section id="projects" ref={ref}>
      <div className={`section-label reveal ${isVisible ? 'visible' : ''} delay-1`}>06 - Selected Works</div>
      <h2 className={`reveal ${isVisible ? 'visible' : ''} delay-2`}>Projects</h2>
      <div className="project-container">
        {projects.map((project, i) => (
          <a
            className={`project reveal ${isVisible ? 'visible' : ''} delay-${Math.min(i + 2, 5)}`}
            key={project.index}
            href={project.href}
            target="_blank"
            rel="noopener"
          >
            <span className="project-index">{project.index}</span>
            <div className="project-content">
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <span className="project-arrow">{project.arrow}</span>
          </a>
        ))}
      </div>
    </section>
  )
}