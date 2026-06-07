import useScrollReveal from '../hooks/useScrollReveal'

const certificates = [
  ['Full Stack Web Development', '8Queens'],
  ['AI for Beginners', 'HP LIFE'],
  ['Digital Marketing', 'HP LIFE'],
  ['Google Cloud', 'Cloud Fundamentals'],
  ['Data Science', 'Infosys Springboard'],
  ['Microsoft Learn Achievements', 'Microsoft'],
  ['AcquiringDatafutureSkill', 'FutureSkill'],
  ['Ashvanth A S1 (P)', 'Certificate'],
  ['Linux', 'Certificate'],
  ['Certificate', 'be0dfee2-2417-45c1-a4ea-71ccbc3a80a'],
  ['Cybersecurity Essentials', 'Cisco'],
  ['Python Essentials', 'Cisco'],
  ['Data Analysis with Python', 'Cognitive Class'],
  ['TruBot Designer', 'Datamatics'],
  ['Forage', 'Certificate'],
  ['Frontend Developer (React)', 'Certificate'],
  ['Google Analytics', 'Google'],
  ['SQL Basic', 'HackerRank'],
  ['HP Life Certificate', 'HP LIFE'],
  ['Python Basic', 'HackerRank'],
  ['HTML', 'Certificate'],
  ['HubSpot SMM2', 'HubSpot'],
  ['IBM CE CEPYT1IN', 'IBM Career Education Program'],
  ['Introduction to Data Science', 'Certificate'],
  ['Introduction to Modern AI', 'Certificate'],
  ['Introduction to IoT', 'Certificate'],
  ['Introduction to Big Data with Hadoop', 'Certificate'],
  ['Java', 'Certificate'],
  ['JavaScript Essentials 1', 'Certificate'],
  ['TCS iON', 'Certificate'],
  ['Machine Learning', 'Tirumolar IT Solutions']
]

export default function Certificates() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="certificates" ref={ref}>
      <div className={`section-label reveal ${isVisible ? 'visible' : ''} delay-1`}>07 - Credentials</div>
      <h2 className={`reveal ${isVisible ? 'visible' : ''} delay-2`}>Certificates</h2>
      <div className="certificate-grid">
        {certificates.map(([title, issuer], i) => (
          <article
            className={`certificate reveal-scale ${isVisible ? 'visible' : ''} delay-${Math.min((i % 5) + 1, 5)}`}
            key={title + issuer}
          >
            <h3>{title}</h3>
            <p>{issuer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}