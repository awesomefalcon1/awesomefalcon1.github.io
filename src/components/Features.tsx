export function Features() {
  const features = [
    {
      title: "Problem-Solving Mindset",
      description: "Analytical thinking combined with creative approaches to tackle complex challenges",
      icon: "🧠",
      details: ["Algorithm optimization", "System design", "Performance tuning"]
    },
    {
      title: "Modern Tech Stack",
      description: "Proficiency in cutting-edge technologies and frameworks",
      icon: "⚡",
      details: ["React/TypeScript", "Python/ML", "AWS/Docker"]
    },
    {
      title: "Collaborative Spirit",
      description: "Strong communication and teamwork skills from co-op experiences",
      icon: "🤝",
      details: ["Agile methodologies", "Code reviews", "Mentoring"]
    },
    {
      title: "Continuous Learning",
      description: "Always staying updated with the latest industry trends and technologies",
      icon: "📚",
      details: ["Open source contributions", "Tech conferences", "Online courses"]
    },
    {
      title: "Quality Focus",
      description: "Commitment to writing clean, maintainable, and well-tested code",
      icon: "✨",
      details: ["Test-driven development", "Code documentation", "Best practices"]
    },
    {
      title: "Innovation Drive",
      description: "Passion for exploring new technologies and building innovative solutions",
      icon: "🚀",
      details: ["Hackathon participation", "Side projects", "Research interests"]
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Strengths</h2>
          <p className="section-subtitle">
            What makes a vibe coder stand out in the tech world
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
              </div>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-details">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}