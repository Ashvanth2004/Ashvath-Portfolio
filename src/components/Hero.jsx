import photoSrc from '../profilepic/imageformyprofile-removebg-preview.png'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="section-label">01 - Profile</div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Java Full Stack Developer</p>
            <h1>Ashvanth</h1>
            <p className="hero-tagline">I build dependable Java systems for the web.</p>
            <p className="hero-subtitle">
              {'Full-stack developer crafting clean, scalable solutions with secure REST APIs, responsive interfaces, and database-backed business logic.'.split(' ').map((word, i) => (
                <span key={i} className="word-reveal" style={{ animationDelay: `${i * 0.16}s` }}>{word} </span>
              ))}
            </p>
          </div>

          <div className="hero-info-grid">
            <div className="hero-info-item">
              <span className="info-label">Location</span>
              <strong>Chennai, India</strong>
            </div>
            <div className="hero-info-item">
              <span className="info-label">Status</span>
              <strong className="status-badge">Open to work</strong>
            </div>
            <div className="hero-info-item">
              <span className="info-label">Experience</span>
              <strong>3+ Years</strong>
            </div>
          </div>

          <div className="hero-actions">
            <a
              href="https://drive.google.com/file/d/1Ydw7FL_4PPEvHnkqvAp26veOzWjZzSKi/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="resume-btn"
            >
              Download Resume
            </a>
            <div className="hero-social">
              <a href="mailto:ashvantha76@gmail.com" className="social-link">Email</a>
              <a href="https://github.com/Ashvanth2004" target="_blank" rel="noopener" className="social-link">GitHub</a>
              <a href="https://linkedin.com/in/ashvanth" target="_blank" rel="noopener" className="social-link">LinkedIn</a>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>15+</strong>
              <span>Projects</span>
            </div>
            <div className="hero-stat">
              <strong>30+</strong>
              <span>Certificates</span>
            </div>
            <div className="hero-stat">
              <strong>3+</strong>
              <span>Years Coding</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-frame">
            <div className="hero-photo">
              <img src={photoSrc} alt="Ashvanth" />
            </div>
            <div className="hero-photo-glow" />
            <div className="hero-photo-badge">Available for hire</div>
          </div>
          <div className="hero-code-block">
            <div className="code-dots">
              <span /><span /><span />
            </div>
            <code className="slide-line l1"><span className="keyword">@RestController</span></code>
            <code className="slide-line l2"><span className="class-name">public class</span> PortfolioController {'{'}</code>
            <code className="slide-line l3">  <span className="keyword">@GetMapping</span><span className="string">("/api/ashvanth")</span></code>
            <code className="slide-line l4">  <span className="function">public</span> Developer <span className="function">getProfile</span>() {'{'}</code>
            <code className="slide-line l5">    <span className="keyword">return</span> <span className="function">Developer</span>.<span className="function">builder</span>()</code>
            <code className="slide-line l6">      .<span className="function">name</span>(<span className="string">"Ashvanth"</span>)</code>
            <code className="slide-line l7">      .<span className="function">role</span>(<span className="string">"Java Full Stack"</span>)</code>
            <code className="slide-line l8">      .<span className="function">status</span>(<span className="string">"Open to work"</span>)</code>
            <code className="slide-line l9">      .<span className="function">build</span>();</code>
            <code className="slide-line l10">  {'}'}</code>
            <code className="slide-line l11">{'}'}</code>
          </div>
        </div>
      </div>
    </section>
  )
}