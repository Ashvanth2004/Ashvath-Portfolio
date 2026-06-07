import useScrollReveal from '../hooks/useScrollReveal'

const skillGroups = [
  {
    title: "Java Backend",
    skills: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "Hibernate", "JPA", "Maven", "JUnit", "Postman"]
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Tailwind CSS"]
  },
  {
    title: "Database & Tools",
    skills: ["SQL", "MySQL", "MongoDB", "Git", "GitHub", "Docker", "Linux", "AWS Basics"]
  },
  {
    title: "AI & Data",
    skills: ["Python", "Machine Learning", "Pandas", "NumPy", "TensorFlow"]
  }
]

export default function Skills() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="skills" ref={ref}>
      <div className={`section-label reveal ${isVisible ? 'visible' : ''} delay-1`}>04 - Technical Arsenal</div>
      <h2 className={`reveal ${isVisible ? 'visible' : ''} delay-2`}>Technical Skills</h2>
      {skillGroups.map((group, i) => (
        <div className="skill-group" key={group.title}>
          <h3 className={`reveal-left ${isVisible ? 'visible' : ''} delay-${i + 2}`}>{group.title}</h3>
          <div className={`skills-grid reveal ${isVisible ? 'visible' : ''} delay-${i + 2}`}>
            {group.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}