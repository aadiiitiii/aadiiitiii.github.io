import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Career.css'

gsap.registerPlugin(ScrollTrigger)

type Entry = {
  period: string
  title: string
  org: string
  type: 'work' | 'edu'
  desc: string
  meta?: string // GPA or award
}

const entries: Entry[] = [
  {
    period: 'Aug 2023 — Present',
    title: 'Staff Software Engineer',
    org: 'Palo Alto Networks · Prisma SaaS SRE',
    type: 'work',
    desc: 'Automated AWS maintenance tasks cutting manual effort 10% weekly. Built observability dashboards for 8+ AWS services. Implemented IaC with Terraform and Ansible, streamlined CI/CD with GitLab, and enabled Kubernetes-based cloud resource provisioning across regulated environments.',
  },
  {
    period: 'Aug 2021 — May 2023',
    title: 'Master of Science — Computer Science',
    org: 'Arizona State University · Tempe, Arizona',
    type: 'edu',
    desc: 'Relevant coursework: Data Mining, Foundations of Algorithms, Distributed Database Systems, Information Assurance & Security, Software Verification & Testing, Knowledge Representation & Reasoning.',
    meta: 'GPA 3.85 / 4.0',
  },
  {
    period: 'May 2022 — Aug 2022',
    title: 'DevOps Engineer Intern',
    org: 'Palo Alto Networks',
    type: 'work',
    desc: 'Built Grafana dashboards exposing 25 metrics from 5 data sources via Prometheus Pushgateway. Deployed Python monitoring scripts as Kubernetes applications inside Helm Charts.',
  },
  {
    period: 'Jan 2020 — Jul 2021',
    title: 'Data Engineer',
    org: 'Publicis Sapient · Bengaluru, India',
    type: 'work',
    desc: "McDonald's Japan Analytics — built 5 ML models, GCP data ingestion pipelines processing 25+ daily files from Azure to BigQuery, DBT transformation workflows, and CI/CD pipelines. Awarded 'You Made a Difference' for client impact.",
  },
  {
    period: 'Jun 2019 — Dec 2019',
    title: 'Big Data Engineer / ASDE Trainee',
    org: 'Publicis Sapient · Bengaluru, India',
    type: 'work',
    desc: 'Designed ETL-based functional testing framework for real-time data services. Built Jenkins pipeline for batch job processing. Served as Scrum Master for a 5-member team shipping a RESTful shopping platform.',
  },
  {
    period: 'Jul 2015 — May 2019',
    title: 'Bachelor of Engineering — Computer Engineering',
    org: 'Pune Institute of Computer Technology · Pune, India',
    type: 'edu',
    desc: 'Relevant coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Machine Learning, Object-Oriented Programming, Artificial Intelligence & Robotics.',
    meta: 'GPA 8.3 / 10',
  },
]

const Career = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const entryRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: true,
        },
      }
    )

    gsap.to(entryRefs.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
      },
    })
  }, [])

  return (
    <section className="career-section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="career-layout">
          <div className="career-left">
            <span className="section-label">[ Journey ]</span>
            <h2 className="section-heading">
              Career &amp;<br />Education
            </h2>
          </div>

          <div className="career-timeline-wrap">
            <div className="career-timeline-line" ref={lineRef} />

            {entries.map((entry, i) => (
              <div
                key={`${entry.org}-${entry.period}`}
                className={`career-entry career-entry--${entry.type}`}
                ref={el => { if (el) entryRefs.current[i] = el }}
              >
                <div className="career-dot" />
                <div className="career-entry-inner">
                  <div className="career-entry-header">
                    <span className={`career-type-badge career-type-badge--${entry.type}`}>
                      {entry.type === 'work' ? 'Work' : 'Education'}
                    </span>
                    <span className="career-period">{entry.period}</span>
                  </div>
                  <div className="career-role">{entry.title}</div>
                  <div className="career-company">{entry.org}</div>
                  {entry.meta && <span className="career-meta">{entry.meta}</span>}
                  <p className="career-desc">{entry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
