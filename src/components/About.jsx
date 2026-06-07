import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="about" ref={ref}>
      <div className={`section-label ${isVisible ? 'visible' : ''} reveal delay-1`}>03 - About</div>
      <h2 className={`reveal ${isVisible ? 'visible' : ''} delay-2`}>About Me</h2>
      <p className={`reveal ${isVisible ? 'visible' : ''} delay-3`}>
        I am Ashvanth, a Java full-stack developer focused on building practical web applications from frontend to backend. My core work includes Spring Boot services, REST API design, React interfaces, SQL and MongoDB data models, and deployment-ready development practices.
      </p>
      <div className="about-grid">
        <article className={`reveal ${isVisible ? 'visible' : ''} delay-2`}>
          <h3>Backend Engineering</h3>
          <p>Spring Boot, Java, Hibernate, authentication flows, API validation, and maintainable service layers.</p>
        </article>
        <article className={`reveal ${isVisible ? 'visible' : ''} delay-3`}>
          <h3>Frontend Development</h3>
          <p>Responsive React, HTML, CSS, JavaScript, clean UI structure, and API-integrated user experiences.</p>
        </article>
        <article className={`reveal ${isVisible ? 'visible' : ''} delay-4`}>
          <h3>Delivery Mindset</h3>
          <p>Git-based workflow, testing basics, Docker awareness, Postman validation, and production-minded debugging.</p>
        </article>
      </div>
    </section>
  )
}