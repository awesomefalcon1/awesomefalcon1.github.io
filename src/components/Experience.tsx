import { useState, useEffect } from 'preact/hooks'

interface Position {
  title: string
  company: string
  location: string
  companyUrl: string
  period: string
}

interface ExperienceItem {
  year: string
  positions: Position[]
}

const experienceData: ExperienceItem[] = [
  {
    year: '2024',
    positions: [
      {
        title: 'Software Developer Intern - DevOps (Hybrid)',
        company: 'Open Text Corporation',
        location: 'Ottawa, ON, Canada',
        companyUrl: 'https://www.opentext.com/',
        period: 'Sep.3 ~ Dec.20, 2024 (4 months)',
      },
      {
        title: 'Cloud Engineer Intern (Remote)',
        company: 'Sun Life Financial',
        location: 'Toronto, ON, Canada',
        companyUrl: 'https://www.sunlife.ca/en/',
        period: 'May.6~ Aug.30, 2024 (4 months)',
      }
    ]
  },
  {
    year: '2023',
    positions: [
      {
        title: 'Site Reliability Engineer Intern (Remote)',
        company: 'OANDA (Canada) Corporation',
        location: 'Toronto, ON, Canada',
        companyUrl: 'https://oanda.com/ca-en/',
        period: 'Jan.9 ~ Apr.21, 2023 (4 Months)',
      }
    ]
  },
  {
    year: '2022',
    positions: [
      {
        title: 'Site Reliability Engineer Intern (Hybrid)',
        company: 'Carta Maple Technologies Inc.',
        location: 'Waterloo, ON, Canada',
        companyUrl: 'https://carta.com/',
        period: 'May.2 ~ Aug.26, 2022 (4 Months)',
      }
    ]
  },
  {
    year: '2021',
    positions: [
      {
        title: 'Software Development Co-op Student (Remote)',
        company: 'VirtaMove Corp.',
        location: 'Ottawa, ON, Canada',
        companyUrl: 'https://www.virtamove.com/about-us',
        period: 'May.6 ~ Aug.27, 2021 (4 Months)',
      }
    ]
  }
]

const quotes = [
  {
    text: "Knowledge = Experience x Sensitivity",
    author: "Yuval Noah Harari"
  }
]

interface TimelineItemProps {
  position: Position
  side: 'left' | 'right'
}

function TimelineItem({ position, side }: TimelineItemProps) {
  return (
    <div className={`timeline-item ${side}`}>
      <div className="timeline-content">
        <div className={`timeline-panel ${side === 'right' ? 'debits' : 'credits'}`}>
          <h3 className="position-title">{position.title}</h3>
          <div className="company-info">
            <img src="/img/diamond.gif" alt="diamond" />
            <a href={position.companyUrl} target="_blank" rel="noopener noreferrer">
              {position.company} | {position.location}
            </a>
          </div>
          <p className="period">{position.period}</p>
        </div>
      </div>
    </div>
  )
}

interface TimelineYearProps {
  year: string
  positions: Position[]
}

function TimelineYear({ year, positions }: TimelineYearProps) {
  return (
    <div className="timeline-year">
      <div className="timeline-badge">
        <span className="year-text">{year}</span>
      </div>
      <div className="timeline-positions">
        {positions.map((position, index) => (
          <TimelineItem 
            key={index} 
            position={position} 
            side={index % 2 === 0 ? 'left' : 'right'} 
          />
        ))}
      </div>
    </div>
  )
}

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('experience')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            "{randomQuote.text}" — {randomQuote.author}
          </p>
        </div>

        <div className={`timeline ${isVisible ? 'animate' : ''}`}>
          <div className="timeline-header">
            <img src="/img/year.png" alt="Timeline" className="timeline-icon" />
          </div>
          
          {experienceData.map((yearGroup, index) => (
            <TimelineYear 
              key={index}
              year={yearGroup.year}
              positions={yearGroup.positions}
            />
          ))}
        </div>
      </div>
    </section>
  )
}