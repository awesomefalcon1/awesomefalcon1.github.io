import { useState, useEffect, useRef } from 'preact/hooks'

interface AnimatedElementProps {
  children: any
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoomIn' | 'zoomOut'
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export function AnimatedElement({ 
  children, 
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = ''
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay * 1000)
        }
      },
      { threshold }
    )

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay, threshold])

  const animationClasses = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideDown: 'animate-slide-down',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
    zoomIn: 'animate-zoom-in',
    zoomOut: 'animate-zoom-out'
  }

  return (
    <div
      ref={elementRef}
      className={`animated-element ${animationClasses[animation]} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ 
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  )
}

interface CounterProps {
  end: number
  start?: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({ 
  end, 
  start = 0, 
  duration = 2, 
  suffix = '', 
  prefix = '' 
}: CounterProps) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const increment = (end - start) / (duration * 60) // 60fps
    let current = start
    
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isVisible, start, end, duration])

  return (
    <span ref={elementRef} className="animated-counter">
      {prefix}{count}{suffix}
    </span>
  )
}

interface ProgressBarProps {
  percentage: number
  height?: number
  color?: string
  backgroundColor?: string
  animated?: boolean
  showLabel?: boolean
  label?: string
}

export function AnimatedProgressBar({ 
  percentage, 
  height = 8, 
  color = '#2563eb',
  backgroundColor = '#e5e7eb',
  animated = true,
  showLabel = false,
  label = ''
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible || !animated) {
      setProgress(percentage)
      return
    }

    const duration = 1500 // 1.5 seconds
    const increment = percentage / (duration / 16) // 60fps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= percentage) {
        setProgress(percentage)
        clearInterval(timer)
      } else {
        setProgress(current)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, percentage, animated])

  return (
    <div ref={elementRef} className="progress-container">
      {showLabel && (
        <div className="progress-label">
          <span>{label}</span>
          <span>{Math.round(progress)}%</span>
        </div>
      )}
      <div 
        className="progress-bar-background"
        style={{ 
          height: `${height}px`,
          backgroundColor 
        }}
      >
        <div 
          className="progress-bar-fill"
          style={{ 
            width: `${progress}%`,
            backgroundColor: color,
            height: '100%',
            transition: animated ? 'width 0.3s ease' : 'none'
          }}
        />
      </div>
    </div>
  )
}