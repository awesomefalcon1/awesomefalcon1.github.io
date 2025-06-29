export function Technology() {
  const technologies = [
    {
      name: "Machine Learning & AI",
      description: "Building intelligent systems with TensorFlow, PyTorch, and scikit-learn. Experience in computer vision, NLP, and reinforcement learning.",
      image: "/img/aws-practitioner.png",
      specs: ["Neural Networks", "Computer Vision", "Natural Language Processing"]
    },
    {
      name: "Cloud & DevOps",
      description: "AWS certified with expertise in containerization, CI/CD pipelines, and scalable infrastructure design.",
      image: "/img/aws-developer.png",
      specs: ["AWS Services", "Docker/Kubernetes", "Infrastructure as Code"]
    },
    {
      name: "Full-Stack Development",
      description: "Modern web development with React, TypeScript, Node.js, and various database technologies.",
      image: "/img/aws-devops-prof.png",
      specs: ["React/TypeScript", "Node.js/Python", "Database Design"]
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

        <div className="technology-content">
          {technologies.map((tech, index) => (
            <div key={index} className={`tech-item ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="tech-image">
                <img src={tech.image} alt={tech.name} />
              </div>
              <div className="tech-details">
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