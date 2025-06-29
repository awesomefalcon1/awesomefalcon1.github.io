import { useState } from 'preact/hooks'

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'web', label: 'Web Dev' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'mobile', label: 'Mobile' }
  ]

  const galleryItems = [
    {
      id: 1,
      category: 'ai',
      title: 'Neural Network Visualization',
      image: '/img/nengo/RTRL.png',
      description: 'Real-time visualization of neural network learning processes'
    },
    {
      id: 2,
      category: 'ai',
      title: 'Computer Vision Pipeline',
      image: '/img/damage_no_damage.png',
      description: 'CNN-based image classification for damage detection'
    },
    {
      id: 3,
      category: 'web',
      title: 'Full-Stack Application',
      image: '/img/DJ+TF-obj-det.png',
      description: 'Django web app with TensorFlow integration'
    },
    {
      id: 4,
      category: 'cloud',
      title: 'AWS Architecture',
      image: '/img/wildrydes-architecture.jpeg',
      description: 'Serverless application architecture on AWS'
    },
    {
      id: 5,
      category: 'ai',
      title: 'Reinforcement Learning',
      image: '/img/RL_CartPole.png',
      description: 'RL agent mastering the CartPole environment'
    },
    {
      id: 6,
      category: 'web',
      title: 'Image Processing Tool',
      image: '/img/ImageStitching.png',
      description: 'Panoramic image stitching web application'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Project Gallery</h2>
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