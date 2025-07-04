import { useState } from 'preact/hooks'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement
    setFormData(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to collaborate on the next big thing?
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Whether you're looking for a passionate developer, want to discuss 
              a project idea, or just want to chat about the latest in tech, 
              I'd love to hear from you. Let's build something amazing together!
            </p>
            
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/codejediatuw/" className="contact-link">
                <span className="link-icon">💼</span>
                <span>LinkedIn - Professional Network</span>
              </a>
              <a href="https://github.com/codejedi-ai" className="contact-link">
                <span className="link-icon">💻</span>
                <span>GitHub - Code Portfolio</span>
              </a>
              <a href="mailto:awesomefalcon1@example.com" className="contact-link">
                <span className="link-icon">📧</span>
                <span>Email - Direct Contact</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}