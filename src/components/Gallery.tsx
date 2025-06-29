import { useState } from 'preact/hooks'

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'design', label: 'Design' },
    { id: 'technology', label: 'Technology' },
    { id: 'materials', label: 'Materials' },
    { id: 'lifestyle', label: 'Lifestyle' }
  ]

  const galleryItems = [
    {
      id: 1,
      category: 'design',
      title: 'Elegant Lace Detailing',
      image: '/img/bunny.bmp',
      description: 'Sophisticated lace-trimming with functional tear-away sections'
    },
    {
      id: 2,
      category: 'technology',
      title: 'Silver Thread Integration',
      image: '/img/damage_no_damage.png',
      description: 'Advanced antimicrobial silver threading technology'
    },
    {
      id: 3,
      category: 'materials',
      title: 'Premium Fabric Blend',
      image: '/img/ImageStitching.png',
      description: 'Luxurious silk and Egyptian cotton composition'
    },
    {
      id: 4,
      category: 'lifestyle',
      title: 'Versatile Styling',
      image: '/img/RL_CartPole.png',
      description: 'Seamless transition from undergarment to statement piece'
    },
    {
      id: 5,
      category: 'design',
      title: 'Snowflake Patterns',
      image: '/img/nengo/RTRL.png',
      description: 'Subtle shimmering designs for individual expression'
    },
    {
      id: 6,
      category: 'technology',
      title: 'Quick-Dry Innovation',
      image: '/img/DJ+TF-obj-det.png',
      description: 'Advanced moisture-wicking and rapid-dry technology'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Design Gallery</h2>
          <p className="section-subtitle">
            "Necessity is the mother of invention" — Plato
          </p>
        </div>

        <div className="gallery-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}