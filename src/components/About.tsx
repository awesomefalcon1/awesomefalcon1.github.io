export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Secundus Dermis</h2>
          <p className="section-subtitle">
            "Let each person examine his own work, and then he can take pride in himself alone, 
            and not compare himself with someone else." — Galatians 6:4
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Revolutionary Design Philosophy</h3>
              <p>
                The Secundus Dermis represents a paradigm shift in clothing technology. 
                Aptly named "second skin," this garment transcends traditional boundaries 
                between undergarments, base layers, and statement pieces.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">🧬</div>
                  <h4>Multi-Functional Core</h4>
                  <p>Acts as bra, layering tee, and emergency undergarment without compromising elegance.</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <h4>Adaptive Technology</h4>
                  <p>Seamlessly transitions between casual, professional, and ceremonial contexts.</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🛡️</div>
                  <h4>Hygienic Durability</h4>
                  <p>Silver-infused threads provide antimicrobial protection for extended wear.</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">✨</div>
                  <h4>Luxury Materials</h4>
                  <p>Premium silk and Egyptian cotton blend for ultimate comfort and sophistication.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img src="/img/CodeJedi.png" alt="Secundus Dermis Design" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Innovation Meets Elegance</h4>
                  <p>Where technology and fashion converge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}