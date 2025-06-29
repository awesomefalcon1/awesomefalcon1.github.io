export function Technology() {
  const technologies = [
    {
      name: "Machine Learning & AI",
      description: "Building intelligent systems with TensorFlow, PyTorch, and scikit-learn. Experience in computer vision, NLP, and reinforcement learning.",
      image: "https://via.placeholder.com/300x200/2563eb/ffffff?text=AI%2FML",
      specs: ["Neural Networks", "Computer Vision", "Natural Language Processing"]
    },
    {
      name: "Cloud & DevOps",
      description: "AWS certified with expertise in containerization, CI/CD pipelines, and scalable infrastructure design.",
      image: "https://via.placeholder.com/300x200/059669/ffffff?text=Cloud%2FDevOps",
      specs: ["AWS Services", "Docker/Kubernetes", "Infrastructure as Code"]
    },
    {
      name: "Full-Stack Development",
      description: "Modern web development with React, TypeScript, Node.js, and various database technologies.",
      image: "https://via.placeholder.com/300x200/dc2626/ffffff?text=Full-Stack",
      specs: ["React/TypeScript", "Node.js/Python", "Database Design"]
    },
    {
      name: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and Flutter, with native iOS and Android experience.",
      image: "https://via.placeholder.com/300x200/7c3aed/ffffff?text=Mobile%20Dev",
      specs: ["React Native", "Flutter", "iOS/Android"]
    },
    {
      name: "Data Science & Analytics",
      description: "Data analysis, visualization, and machine learning pipelines using Python, R, and modern data tools.",
      image: "https://via.placeholder.com/300x200/ea580c/ffffff?text=Data%20Science",
      specs: ["Python/R", "Data Visualization", "Statistical Analysis"]
    },
    {
      name: "Cybersecurity",
      description: "Security-first development practices, penetration testing, and secure system architecture design.",
      image: "https://via.placeholder.com/300x200/be123c/ffffff?text=Cybersecurity",
      specs: ["Security Auditing", "Penetration Testing", "Secure Coding"]
    }
  ]

  return (
    <section id="technology" className="technology">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle">
            "The greatest scientific discovery was the discovery of ignorance." 
            — Yuval Noah Harari
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-image">
                <img src={tech.image} alt={tech.name} />
                <div className="tech-overlay">
                  <div className="tech-icon">
                    {index === 0 && '🤖'}
                    {index === 1 && '☁️'}
                    {index === 2 && '💻'}
                    {index === 3 && '📱'}
                    {index === 4 && '📊'}
                    {index === 5 && '🔒'}
                  </div>
                </div>
              </div>
              <div className="tech-content">
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
                <ul className="tech-specs">
                  {tech.specs.map((spec, specIndex) => (
                    <li key={specIndex}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="technology-quote">
          <blockquote>
            "For AwesomeFalcon1, coding isn't just about writing software—it's about crafting 
            solutions that bridge the gap between human needs and technological possibilities. 
            Every project is an opportunity to create something meaningful and impactful."
          </blockquote>
        </div>
      </div>
    </section>
  )
}