import { useState, useEffect } from 'preact/hooks'

interface Slide {
  id: number
  image: string
  title: string
  description: string
}

interface ImageSlideshowProps {
  slides: Slide[]
  autoPlay?: boolean
  interval?: number
  showIndicators?: boolean
  showControls?: boolean
}

export function ImageSlideshow({ 
  slides, 
  autoPlay = true, 
  interval = 4000,
  showIndicators = true,
  showControls = true 
}: ImageSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [isPlaying, slides.length, interval])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  if (slides.length === 0) return null

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {showControls && slides.length > 1 && (
        <>
          <button className="slide-control prev" onClick={prevSlide}>
            <span>‹</span>
          </button>
          <button className="slide-control next" onClick={nextSlide}>
            <span>›</span>
          </button>
          <button className="slide-control play-pause" onClick={togglePlayPause}>
            <span>{isPlaying ? '⏸' : '▶'}</span>
          </button>
        </>
      )}

      {showIndicators && slides.length > 1 && (
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}