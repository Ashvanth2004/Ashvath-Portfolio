import useScrollReveal from '../hooks/useScrollReveal'

export default function Experience() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="experience" ref={ref}>
      <div className={`section-label reveal ${isVisible ? 'visible' : ''} delay-1`}>05 - Experience</div>
      <h2 className={`reveal ${isVisible ? 'visible' : ''} delay-2`}>Experience</h2>
      <div className="timeline">
        <article className={`job reveal ${isVisible ? 'visible' : ''} delay-3`}>
          <p className="date">2025 - 2026</p>
          <h3>Java Full Stack Developer Training</h3>
          <p><strong>Blue Ball Technologies</strong></p>
          <p>Currently undergoing intensive training covering end-to-end web development. Gaining hands-on experience building applications using HTML, CSS, Java, Spring Boot, and SQL databases.</p>
        </article>

        <article className={`job reveal ${isVisible ? 'visible' : ''} delay-4`}>
          <p className="date">Mar 2025 - Apr 2025</p>
          <h3>Machine Learning Intern</h3>
          <p><strong>Thirumoolar IT Solutions Pvt Ltd</strong></p>
          <p>Successfully completed an internship program in Machine Learning. Gained practical experience in ML concepts, model building, and data-driven problem solving under the guidance of industry mentors.</p>
        </article>

        <article className={`job reveal ${isVisible ? 'visible' : ''} delay-5`}>
          <p className="date">Aug 2024</p>
          <h3>Full Stack Web Development Intern</h3>
          <p><strong>8Queens Software Technologies Pvt Ltd</strong></p>
          <p>Completed an on-site internship in Full Stack Web Development. Gained hands-on experience in building end-to-end web applications, working with frontend and backend technologies, and understanding real-world development workflows.</p>
        </article>
      </div>
    </section>
  )
}