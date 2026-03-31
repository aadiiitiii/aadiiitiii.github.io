import './styles/Contact.css'

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-heading">
          Let's work<br />together.
        </h2>

        <div className="contact-email-wrap">
          <a
            className="contact-email"
            href="mailto:aditisjoshi14@gmail.com"
          >
            aditisjoshi14@gmail.com →
          </a>
        </div>

        <div className="contact-divider" />

        <div className="contact-footer">
          <div className="contact-socials">
            <a
              className="contact-social-link"
              href="https://github.com/aadiiitiii"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="contact-social-link"
              href="https://linkedin.com/in/aadiiitiii"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="contact-social-link"
              href="https://twitter.com/aadiiitiii"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter ↗
            </a>
          </div>

          <span className="contact-copy">AJ © 2026</span>

          <a
            className="contact-url"
            href="https://linkedin.com/in/aadiiitiii"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/aadiiitiii
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
