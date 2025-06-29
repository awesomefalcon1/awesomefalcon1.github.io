export function Features() {
  const features = [
    {
      title: "Silver-Infused Silk",
      description: "Antimicrobial properties with luxurious breathable texture",
      icon: "🥈",
      details: ["Neutralizes bacteria", "Eliminates odor", "Maintains freshness"]
    },
    {
      title: "Egyptian Cotton Blend",
      description: "High-thread count for durability and moisture-wicking",
      icon: "🌿",
      details: ["Superior comfort", "Moisture management", "Long-lasting quality"]
    },
    {
      title: "Elastic Fiber Technology",
      description: "Form-fitting flexibility without movement restriction",
      icon: "🔄",
      details: ["Perfect fit", "Unrestricted movement", "Shape retention"]
    },
    {
      title: "Lace-Trimming Design",
      description: "Sophisticated aesthetics with functional tear-away sections",
      icon: "✂️",
      details: ["Emergency functionality", "Elegant appearance", "Practical design"]
    },
    {
      title: "Snowflake Patterns",
      description: "Subtle shimmering designs for individual expression",
      icon: "❄️",
      details: ["Unique aesthetics", "Personal style", "Elegant detailing"]
    },
    {
      title: "Quick-Dry Technology",
      description: "Advanced fabric keeps you dry and comfortable",
      icon: "💨",
      details: ["Rapid moisture evaporation", "Breathable comfort", "All-day freshness"]
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Advanced Features</h2>
          <p className="section-subtitle">
            Cutting-edge technology meets timeless elegance
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