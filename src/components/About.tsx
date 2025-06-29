export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About AwesomeFalcon1</h2>
          <p className="section-subtitle">
            "Let each person examine his own work, and then he can take pride in himself alone, 
            and not compare himself with someone else." — Galatians 6:4
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Vibe Coder Philosophy</h3>
              <p>
                As a University of Waterloo Computer Science graduate, I believe in coding with 
                passion, purpose, and positive energy. My approach combines technical excellence 
                with creative problem-solving, always striving to build solutions that make a 
                meaningful impact.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">🎓</div>
                  <h4>Academic Excellence</h4>
                  <p>University of Waterloo Computer Science graduate with strong foundations in algorithms, data structures, and software engineering.</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">💻</div>
                  <h4>Full-Stack Expertise</h4>
                  <p>Proficient in modern web technologies, cloud platforms, and mobile development frameworks.</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🤖</div>
                  <h4>AI/ML Enthusiast</h4>
                  <p>Passionate about machine learning, neural networks, and building intelligent systems that solve real-world problems.</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">☁️</div>
                  <h4>Cloud Native</h4>
                  <p>AWS certified with experience in DevOps, containerization, and scalable cloud architecture design.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img src="/img/CodeJedi.png" alt="AwesomeFalcon1 - Vibe Coder" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Code with Purpose</h4>
                  <p>Building the future, one line at a time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}