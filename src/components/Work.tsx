import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Work.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    num: '01',
    title: 'KubeSage — AI Self-Healing SRE Agent',
    sub: 'Palo Alto Networks Hackathon · Feb 2026',
    tools: 'Python · Vertex AI · Gemini 2.0 Flash · Google ADK · GitLab API · Streamlit',
    link: '#',
    tag: 'AI',
  },
  {
    num: '02',
    title: 'Infra Auto-Troubleshooter',
    sub: 'Personal Project',
    tools: 'Python · FastAPI · MCP · Kubernetes · Vault · Consul · Elasticsearch',
    link: 'https://github.com/aadiiitiii/infra-troubleshooter',
    tag: 'AI',
  },
  {
    num: '03',
    title: 'Reliabot — AI SRE Companion',
    sub: 'Personal Project',
    tools: 'Python · LLM · RAG · SRE',
    link: '#',
    tag: 'AI',
  },
  {
    num: '04',
    title: 'Textile Industry WebApp',
    sub: 'Smart India Hackathon — 2nd Place All India',
    tools: 'NodeJS · ExpressJS · MongoDB · Bootstrap',
    link: 'https://github.com/aadiiitiii/Textile_Marketing',
    tag: 'Award',
  },
  {
    num: '05',
    title: 'License Plate Recognition',
    sub: "Bachelor's Final Year Project · PICT",
    tools: 'Python · CNN · Deep Learning · OpenCV',
    link: '#',
    tag: '',
  },
  {
    num: '06',
    title: 'Heart Disease Prediction',
    sub: 'ML Research Project',
    tools: 'Python · scikit-learn · Pandas · NumPy',
    link: 'https://github.com/aadiiitiii/Heart-Disease-Prediction',
    tag: '',
  },
  {
    num: '07',
    title: 'Drive Thru Crew Automation',
    sub: "McDonald's BurgerHack Hackathon",
    tools: 'NodeJS · ReactJS · MongoDB',
    link: '#',
    tag: '',
  },
  {
    num: '08',
    title: 'Meeting Room Booking System',
    sub: 'DBMS Project · PICT',
    tools: 'PHP · HTML · CSS · JavaScript · MySQL',
    link: '#',
    tag: '',
  },
  {
    num: '09',
    title: 'Smart Car Parking System',
    sub: 'IoT Project · PICT',
    tools: 'Python · Arduino Uno · IoT · Cloud',
    link: '#',
    tag: '',
  },
]

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const rowRefs = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    gsap.to(rowRefs.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">[ Projects ]</span>
          <h2 className="section-heading">
            Side Projects<br />&amp; Research
          </h2>
        </div>

        <div className="work-list">
          {projects.map((p, i) => (
            <a
              key={p.num}
              className="work-row"
              href={p.link}
              target={p.link !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              ref={el => { if (el) rowRefs.current[i] = el }}
            >
              <span className="work-num">{p.num}</span>
              <div className="work-info">
                <span className="work-title">
                  {p.title}
                  {p.tag && <span className={`work-tag work-tag--${p.tag.toLowerCase()}`}>{p.tag}</span>}
                </span>
                <span className="work-sub">{p.sub}</span>
              </div>
              <span className="work-tools">{p.tools}</span>
              <span className="work-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
