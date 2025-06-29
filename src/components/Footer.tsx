export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Secundus Dermis</h3>
            <p>Revolutionary base layer technology for the modern world</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#technology">Technology</a>
              <a href="#gallery">Gallery</a>
            </div>
            
            <div className="link-group">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Secundus Dermis. All rights reserved.</p>
          <p>Designed with innovation and elegance in mind.</p>
        </div>
      </div>
    </footer>
  )
}