import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Awards.css'

gsap.registerPlugin(ScrollTrigger)

const awards = [
  {
    icon: '🏆',
    title: '2nd Place — Smart India Hackathon 2019',
    org: 'Government of India',
    desc: 'Ranked 2nd nationally out of thousands of teams. Built a marketing portal for the Ministry of Textiles using the MERN stack.',
  },
  {
    icon: '⭐',
    title: '"You Made a Difference" Award',
    org: 'Publicis Sapient',
    desc: 'Awarded for striving towards excellence on the McDonald\'s Japan Analytics project and delivering measurable client impact.',
  },
  {
    icon: '🤖',
    title: 'KubeSage — PANW Hackathon',
    org: 'Palo Alto Networks · Feb 2026',
    desc: 'Built KubeSage, an AI-powered self-healing SRE agent using Google Vertex AI (Gemini 2.0 Flash) with autonomous reasoning, GitLab commit correlation, and a Streamlit interface for automated incident response and remediation.',
  },
  {
    icon: '📟',
    title: 'On-Call Excellence Recognition',
    org: 'Palo Alto Networks',
    desc: 'Received team recognition for handling multiple production outages during on-call rotations, resolving incidents with minimal customer impact.',
  },
]

const publications = [
  'Software Defect Prediction Utilizing Deterministic and Probabilistic Approach for Optimizing Performance through Defect Association Learning',
  'A Software Defect Learning and Analysis Utilizing Regression Method for Quality Software Development',
  'Comparative Analysis of Code Optimization Techniques with Eminent Applications (Tools)',
  'A Survey on Software Defect Prediction in Cross Project',
]

const Awards = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const awardRefs = useRef<HTMLDivElement[]>([])
  const pubRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(awardRefs.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
    })
    gsap.to(pubRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: pubRef.current, start: 'top 80%' },
    })
  }, [])

  return (
    <section className="awards-section" id="awards" ref={sectionRef}>
      <div className="container">

        {/* Awards */}
        <div className="awards-header">
          <span className="section-label">[ Recognition ]</span>
          <h2 className="section-heading">Awards &amp;<br />Recognition</h2>
        </div>

        <div className="awards-grid">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className="award-card"
              ref={el => { if (el) awardRefs.current[i] = el }}
            >
              <span className="award-icon">{a.icon}</span>
              <div className="award-body">
                <span className="award-title">{a.title}</span>
                <span className="award-org">{a.org}</span>
                <p className="award-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div
          className="pubs-block"
          ref={pubRef}
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <span className="section-label">[ Research ]</span>
          <h3 className="pubs-heading">Published Research</h3>
          <ul className="pubs-list">
            {publications.map(pub => (
              <li key={pub} className="pub-item">
                <span className="pub-bullet">—</span>
                <span>{pub}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Awards
