export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>AwesomeFalcon1</h3>
            <p>Vibe Coder & Software Developer</p>
            <p>University of Waterloo Computer Science Graduate</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Portfolio</h4>
              <a href="#experience">Experience</a>
              <a href="#portfolio">Projects</a>
              <a href="#skills">Skills</a>
            </div>
            
            <div className="link-group">
              <h4>Connect</h4>
              <a href="https://www.linkedin.com/in/codejediatuw/">LinkedIn</a>
              <a href="https://github.com/codejedi-ai">GitHub</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 AwesomeFalcon1. All rights reserved.</p>
          <p>Crafted with passion and positive vibes 🚀</p>
        </div>
      </div>
    </footer>
  )
}