import { useState, useEffect } from 'preact/hooks'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: '/img/about1.jpg',
      title: 'Revolutionary Base Layer',
      subtitle: 'The future of adaptive clothing technology'
    },
    {
      image: '/img/about2.jpeg',
      title: 'Silver-Infused Innovation',
      subtitle: 'Antimicrobial protection meets luxury comfort'
    },
    {
      image: '/img/about3.jpeg',
      title: 'Multi-Functional Design',
      subtitle: 'One garment, infinite possibilities'
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
              <span className="title-line">Secundus Dermis</span>
              <span className="title-subtitle">Your Second Skin</span>
            </h1>
            <p className="hero-description">
              Experience the revolutionary all-in-one base layer that redefines 
              what an underlayer can achieve. Combining luxury, functionality, 
              and cutting-edge technology in one elegant garment.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover Features
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn Technology
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