import { useState, useEffect } from 'preact/hooks'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: '/img/AISeeHuman.jpeg',
      title: 'AI & Machine Learning',
      subtitle: 'Building intelligent systems that understand and learn'
    },
    {
      image: '/img/spacexRocket.jpeg',
      title: 'Cloud & DevOps',
      subtitle: 'Scaling applications with modern infrastructure'
    },
    {
      image: '/img/CodeJedi.png',
      title: 'Full-Stack Development',
      subtitle: 'Creating seamless user experiences from front to back'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">AwesomeFalcon1</span>
              <span className="title-subtitle">Vibe Coder & Software Developer</span>
            </h1>
            <p className="hero-description">
              University of Waterloo Computer Science graduate passionate about creating 
              innovative solutions through code. Specializing in AI/ML, cloud infrastructure, 
              and full-stack development with a focus on user-centric design.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Experience
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}