import Marquee from 'react-fast-marquee'
import './styles/TechStack.css'

const row1 = ['Python', 'Kubernetes', 'Docker', 'AWS', 'GCP', 'Prometheus', 'Grafana', 'Datadog', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI/CD', 'ArgoCD', 'Helm', 'Kafka', 'Loki', 'PagerDuty']
const row2 = ['Git', 'Bash', 'Java', 'React', 'Elasticsearch', 'PostgreSQL', 'MongoDB', 'Airflow', 'DBT', 'BigQuery', 'Istio', 'Redis', 'Consul', 'Vault']

const certs = [
  { icon: '☁', title: 'GCP Associate Cloud Engineer', provider: 'Google Cloud Platform' },
  { icon: '☁', title: 'Cloud Operations on AWS', provider: 'Amazon Web Services' },
  { icon: '🍃', title: 'MongoDB Schema Design Patterns', provider: 'MongoDB University' },
  { icon: '🍃', title: 'CRUD Operations in MongoDB', provider: 'MongoDB University' },
  { icon: '🔵', title: 'Exploring Gemini Multimodality', provider: 'Palo Alto Networks' },
]

const TechStack = () => {
  return (
    <section className="techstack-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">[ Tech Stack ]</span>
          <h2 className="section-heading">
            Tools &amp;<br />Technologies
          </h2>
        </div>
      </div>

      <div className="techstack-marquees">
        <Marquee speed={40} gradient={false} direction="left">
          {row1.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </Marquee>
        <Marquee speed={40} gradient={false} direction="right">
          {row2.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </Marquee>
      </div>

      <div className="container">
        <div className="section-sublabel">[ Certifications ]</div>
        <div className="cert-grid">
          {certs.map((cert) => (
            <div key={cert.title} className="cert-card">
              <span className="cert-icon">{cert.icon}</span>
              <div className="cert-text">
                <span className="cert-title">{cert.title}</span>
                <span className="cert-provider">{cert.provider}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
