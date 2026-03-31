import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import './styles/SocialIcons.css'

const SocialIcons = () => {
  return (
    <div className="social-icons-fixed">
      <a
        className="social-icon-link"
        href="https://github.com/aadiiitiii"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        className="social-icon-link"
        href="https://linkedin.com/in/aadiiitiii"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="social-icon-link"
        href="https://twitter.com/aadiiitiii"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaXTwitter />
      </a>
    </div>
  )
}

export default SocialIcons
