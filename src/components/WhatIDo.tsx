import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/WhatIDo.css'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    num: '01',
    title: 'CLOUD & INFRA',
    subtitle: 'Scalable Infrastructure at Scale',
    body: 'Designing and operating cloud-native platforms on AWS and GCP. Kubernetes orchestration, Helm chart deployments, and infrastructure-as-code for security platforms serving enterprise customers.',
    tags: ['Kubernetes', 'Helm', 'AWS', 'GCP', 'Docker', 'Terraform'],
  },
  {
    num: '02',
    title: 'DEVOPS & SRE',
    subtitle: 'Reliability & Observability Engineering',
    body: 'Building CI/CD pipelines, monitoring stacks, and auto-remediation systems. From metrics collection with Prometheus to dashboards in Grafana — making systems observable and self-healing.',
    tags: ['Prometheus', 'Grafana', 'Jenkins', 'CI/CD', 'Bash', 'Alerting'],
  },
  {
    num: '03',
    title: 'DATA & SECURITY',
    subtitle: 'Data Engineering & Security Platforms',
    body: 'Data ingestion pipelines, BigQuery analytics, ETL workflows with Airflow. Background in security tooling with Vault, Consul, and Elasticsearch at Palo Alto Networks.',
    tags: ['Python', 'Airflow', 'BigQuery', 'Vault', 'Consul', 'Elasticsearch'],
  },
]

const WhatIDo = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.to(cardRefs.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  return (
    <section className="whatido-section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">[ What I Do ]</span>
          <h2 className="section-heading">
            My Areas of<br />Focus
          </h2>
        </div>

        <div className="whatido-cards">
          {cards.map((card, i) => (
            <div
              key={i}
              className="whatido-card"
              ref={el => { if (el) cardRefs.current[i] = el }}
            >
              <div className="card-number">{card.num}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-subtitle">{card.subtitle}</div>
              <p className="card-body">{card.body}</p>
              <div className="card-tags">
                {card.tags.map(tag => (
                  <span key={tag} className="card-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
