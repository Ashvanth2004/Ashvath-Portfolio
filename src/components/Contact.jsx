import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="contact" ref={ref}>
      <div className={`section-label reveal ${isVisible ? 'visible' : ''} delay-1`}>08 - Contact</div>
      <h2 className={`reveal ${isVisible ? 'visible' : ''} delay-2`}>Contact</h2>
      <p className={`reveal ${isVisible ? 'visible' : ''} delay-3`}>
        Open to Java full-stack developer roles, internships, and collaborative web application projects.
      </p>
      <div className={`contact-card reveal ${isVisible ? 'visible' : ''} delay-4`}>
        <div>
          <span>Your Destination</span>
          <strong>ashvantha76@gmail.com</strong>
        </div>
        <a href="mailto:ashvantha76@gmail.com" className="connect-btn">
          <span className="connect-btn-icon">&#9993;</span>
          <span className="connect-btn-text">
            <span className="connect-btn-label">Let's Connect</span>
            <span className="connect-btn-email">ashvantha76@gmail.com</span>
          </span>
        </a>
      </div>
      <div className="contact-icons">
        <a href="https://github.com/Ashvanth2004" target="_blank" rel="noopener" className={`reveal ${isVisible ? 'visible' : ''} delay-4`}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ashvanthanbalagan/" target="_blank" rel="noopener" className={`reveal ${isVisible ? 'visible' : ''} delay-5`}>
          LinkedIn
        </a>
      </div>
    </section>
  )
}