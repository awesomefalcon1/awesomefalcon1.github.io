import { useState, useEffect } from 'preact/hooks'

interface Skill {
  img: string
  alt: string
  title: string
  date: string
}

const skillsData: Skill[] = [
  {
    img: '/img/aws-practitioner.png',
    alt: 'AWS-CloudPractitioner-2021',
    title: 'AWS Certified Practitioner',
    date: '2 January 2021'
  },
  {
    img: '/img/aws-developer.png',
    alt: 'AWS-Developer',
    title: 'AWS Certified Developer',
    date: '29 August 2021'
  },
  {
    img: '/img/aws-devops-prof.png',
    alt: 'AWS-SysOps',
    title: 'AWS Certified DevOps Engineer - Professional',
    date: '23 August 2024'
  }
]

const skillsQuote = {
  text: "The greatest scientific discovery was the discovery of ignorance.",
  author: "Yuval Noah Harari, Homo Deus: A History of Tomorrow"
}

interface SkillItemProps {
  skill: Skill
  index: number
  isVisible: boolean
}

function SkillItem({ skill, index, isVisible }: SkillItemProps) {
  return (
    <div className={`skill-item ${isVisible ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="skill-icon">
        {skill.img ? (
          <img src={skill.img} alt={skill.alt} />
        ) : (
          <div className="skill-placeholder">?</div>
        )}
      </div>
      <div className="skill-content">
        <h3>{skill.title}</h3>
        <p>{skill.date}</p>
      </div>
    </div>
  )
}

export function Skills() {
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

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Certifications</h2>
          <p className="section-subtitle">
            "{skillsQuote.text}" — {skillsQuote.author}
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillItem 
              key={index} 
              skill={skill} 
              index={index}
              isVisible={isVisible}
            />
          ))}
          
          {/* Placeholder for future certification */}
          <div className={`skill-item placeholder ${isVisible ? 'animate' : ''}`} style={{ animationDelay: `${skillsData.length * 0.2}s` }}>
            <div className="skill-icon">
              <div className="skill-placeholder">?</div>
            </div>
            <div className="skill-content">
              <h3>Next Certification</h3>
              <p>Coming Soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}