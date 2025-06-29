export function Technology() {
  const technologies = [
    {
      name: "Antimicrobial Silver Threading",
      description: "Advanced silver nanoparticles woven into the fabric provide continuous protection against bacteria and odor-causing microorganisms.",
      image: "/img/aws-practitioner.png",
      specs: ["99.9% bacteria elimination", "Long-lasting protection", "Safe for sensitive skin"]
    },
    {
      name: "Flatlock Seam Construction",
      description: "Precision-engineered seams prevent chafing and ensure ultimate comfort during extended wear periods.",
      image: "/img/aws-developer.png",
      specs: ["Zero chafing design", "Enhanced durability", "Smooth comfort zones"]
    },
    {
      name: "Adaptive Fiber Matrix",
      description: "Revolutionary fiber blend that adapts to body temperature and movement patterns for optimal comfort.",
      image: "/img/aws-devops-prof.png",
      specs: ["Temperature regulation", "Movement adaptation", "Shape memory technology"]
    }
  ]

  return (
    <section id="technology" className="technology">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technology Innovation</h2>
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
            "For Mekkana, the Secundus Dermis is more than clothing—it's a declaration 
            of her ingenuity and independence. Its constant presence acts as a visible 
            extension of her identity, a mark of her strength, practicality, and resourcefulness."
          </blockquote>
        </div>
      </div>
    </section>
  )
}