import { useState, useEffect } from 'preact/hooks'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: '/img/carousel/hero-1.jpg',
      fallback: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'AI & Machine Learning',
      subtitle: 'Building intelligent systems that understand and learn',
      description: 'Passionate about creating AI solutions that solve real-world problems'
    },
    {
      image: '/img/carousel/hero-2.jpg',
      fallback: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Cloud & DevOps',
      subtitle: 'Scaling applications with modern infrastructure',
      description: 'AWS certified engineer with expertise in containerization and CI/CD'
    },
    {
      image: '/img/carousel/hero-3.jpg',
      fallback: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Full-Stack Development',
      subtitle: 'Creating seamless user experiences from front to back',
      description: 'Modern web development with React, TypeScript, and Node.js'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Slower transition for better readability

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img 
              src={slide.fallback} 
              alt={slide.title}
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.src = `https://via.placeholder.com/1920x1080/1e293b/ffffff?text=${encodeURIComponent(slide.title)}`
              }}
            />
            <div className="slide-overlay" />
            <div className="slide-content">
              <div className="container">
                <div className="slide-text">
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                  <p className="slide-description">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="hero-main-content">
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
      </div>

      {/* Carousel Controls */}
      <div className="carousel-controls">
        <button className="carousel-btn prev" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          <span>›</span>
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slide Info */}
      <div className="slide-info">
        <span className="slide-counter">{currentSlide + 1} / {slides.length}</span>
        <span className="slide-title-small">{slides[currentSlide].title}</span>
      </div>
    </section>
  )
}