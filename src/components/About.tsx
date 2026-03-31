import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/About.css'

gsap.registerPlugin(ScrollTrigger)

const headingWords = ['Building', 'systems', 'that', "don't", 'break', 'at', '3am.']

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const words = wordRefs.current.filter(Boolean)

    gsap.fromTo(
      words,
      { y: '100%' },
      {
        y: '0%',
        duration: 0.8,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    )

    gsap.fromTo(
      rightRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    )
  }, [])

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Left column */}
          <div>
            <div className="about-label">[ About Me ]</div>
            <h2 className="about-heading">
              {headingWords.map((word, i) => (
                <span key={i} className="word">
                  <span ref={el => { if (el) wordRefs.current[i] = el }}>{word}</span>
                </span>
              ))}
            </h2>
          </div>

          {/* Right column */}
          <div ref={rightRef} style={{ opacity: 0 }}>
            <p className="about-para">
              I'm a Staff Software Engineer on the Prisma SaaS SRE team at Palo Alto Networks,
              building reliable and scalable cloud-native security infrastructure. My work spans
              IaC with Terraform and Ansible, Kubernetes-based deployments, Grafana observability,
              and GitLab CI/CD pipelines. I hold a Master's in Computer Science from Arizona State
              University and am passionate about the intersection of DevOps, reliability
              engineering, and security at scale.
            </p>
            <div className="about-currently">
              <span className="about-currently-label">↳ Currently</span>
              <span className="about-currently-text">
                Working on platformization, failover and resiliency at Palo Alto Networks.
              </span>
            </div>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-num">6+</span>
                <span className="about-stat-label">Years Exp</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">3</span>
                <span className="about-stat-label">SOC2 Audits Led</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">☕</span>
                <span className="about-stat-label">Coffee &gt; Chai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
