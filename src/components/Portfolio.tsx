import { useState, useEffect } from 'preact/hooks'

interface PortfolioProject {
  id: number
  category: string
  title: string
  image: string
  link: string
  description: string
  featured?: boolean
}

interface Filter {
  id: string
  label: string
  filter: string
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    category: 'SWE',
    title: 'Syntaxtual - AI Coding Buddy',
    image: '/img/CodeJedi.png',
    link: 'https://github.com/codejedi-ai/syntaxtual',
    description: 'Winner at Cohere x OpenSesame Builder Day! An AI coding buddy integrated into VS Code with repository-level code analysis, conversational code reviews, and custom configurations. Built in under 8 hours with team Aether.',
    featured: true
  },
  {
    id: 2,
    category: 'SWE',
    title: 'Galatea - AI Growth Companions',
    image: '/img/AISeeHuman.jpeg',
    link: 'https://github.com/codejedi-ai/galatea',
    description: 'AI companions that actually help you grow instead of being omnicompliant. Focused on personal development and meaningful interactions rather than just agreeable responses.',
    featured: true
  },
  {
    id: 3,
    category: 'SWE',
    title: 'AuraSight - Ultimate Aura Management',
    image: '/img/spacexRocket.jpeg',
    link: 'https://github.com/codejedi-ai/aurasight',
    description: 'The ultimate aura management platform you would use to make your vibe. Track, analyze, and optimize your personal energy and presence.',
    featured: true
  },
  {
    id: 4,
    category: 'SWE',
    title: 'Magic Quill - Smart Study Tool',
    image: '/img/handwrightingrecognization.jpeg',
    link: 'https://github.com/codejedi-ai/magic-quill',
    description: 'The ultimate study tool where you can chat with your notes and generate LaTeX documents with ease. Revolutionizing how students interact with their study materials.',
    featured: true
  },
  {
    id: 5,
    category: 'SWE',
    title: 'Ali - Alzheimer\'s Mobile Buddy',
    image: '/img/chatbot.png',
    link: 'https://github.com/codejedi-ai/ali',
    description: 'A compassionate mobile companion designed to assist individuals with Alzheimer\'s disease, providing memory aids, daily reminders, and emotional support.',
    featured: true
  },
  {
    id: 6,
    category: 'SWE',
    title: 'EcoFind - 3D Filament Recycling Platform',
    image: '/img/DevSecOps.JPG',
    link: 'https://github.com/codejedi-ai/ecofind',
    description: 'A platform connecting 3D filament waste producers with recyclers, promoting sustainable 3D printing practices and circular economy principles.',
    featured: true
  },
  {
    id: 7,
    category: 'CV',
    title: 'K-Means Algorithm for Unsupervised Learning',
    image: '/img/bunny.bmp',
    link: '/vids/K-means_V1.mp4',
    description: 'Enhancing image understanding through the extraction of meaningful patterns from data, improving visual comprehension.'
  },
  {
    id: 8,
    category: 'CV',
    title: 'CNN for Hurricane Damage Classification',
    image: '/img/damage_no_damage.png',
    link: '/vids/Hurricane.mp4',
    description: 'Utilized Convolutional Neural Networks for classifying the existence of hurricane damage.'
  },
  {
    id: 9,
    category: 'CV',
    title: 'Panoramic Image Stitching',
    image: '/img/ImageStitching.png',
    link: '/vids/PanoramicStich_1.mp4',
    description: 'Implemented homographies with Scikit libraries for panoramic image stitching.'
  },
  {
    id: 10,
    category: 'Nengo',
    title: 'Real-Time Online Learning with PES Rule',
    image: '/img/nengo/RTRL.png',
    link: '/vids/Real-Time Online Learning with PES Rule.mp4',
    description: 'Executed in the Neural Engineering Framework, enabling adaptive connection weight adjustments.'
  },
  {
    id: 11,
    category: 'RL',
    title: 'Tackling CartPole with OpenAI Gym',
    image: '/img/RL_CartPole.png',
    link: '/vids/CartpoleRenforcementLearning_1.mp4',
    description: 'Designed a resilient reinforcement learning model for CartPole-v1 in OpenAI Gym.'
  },
  {
    id: 12,
    category: 'Nengo',
    title: 'Pavlov\'s Dog Conditional Stimulus Simulation',
    image: '/img/nengo/classical_conditioning.png',
    link: '/vids/ParlovDog.mp4',
    description: 'Utilized Nengo simulation, applying PBS learning rule for dynamic stimuli-response weight adjustments.'
  },
  {
    id: 13,
    category: 'Nengo',
    title: 'Decision Making Model with Nengo Neural Simulator',
    image: '/img/nengo/accumulator.png',
    link: '/vids/Accumulate-to-Threshold Decision Making Model.mp4',
    description: 'Utilized Nengo 3.2.0 to simulate a neuro accumulator, integrating input functions.'
  },
  {
    id: 14,
    category: 'CV',
    title: 'Django+TensorFL Hub:Object Detection',
    image: '/img/DJ+TF-obj-det.png',
    link: '/vids/Django_Object_detection_1.mp4',
    description: 'Developed a robust Django web application and seamlessly integrated TensorFlow Hub\'s Inception ResNet V2 model.'
  },
  {
    id: 15,
    category: 'AWS',
    title: 'Wild Rydes',
    image: '/img/wildrydes-architecture.jpeg',
    link: '/pdfs/WildRydeReport.pdf',
    description: 'SERVERLESS! Perform version control in the deployment code of static webpage, used AWS amplify to host the static webpage frontend.'
  },
  {
    id: 16,
    category: 'AWS',
    title: 'Trend Micro One',
    image: '/img/TrendMicroControlPanel.png',
    link: '/pdfs/DevSecOpsReport.pdf',
    description: 'Security + DevOps. Used Trend Micro to add security checks and block targeted attacks on the site.'
  },
  {
    id: 17,
    category: 'SWE',
    title: 'Nationstates-LLM - GPT-4 Bias Analysis',
    image: '/img/Nationstates-LLM.png',
    link: 'https://github.com/codejedi-ai/Nationstate-LLM',
    description: 'Utilized the nationstates API to access data and make decisions in the game.'
  },
  {
    id: 18,
    category: 'SWE',
    title: 'GMM-Segmentation',
    image: '/img/SegmanticPic.png',
    link: 'https://github.com/codejedi-ai/GMM-Segmentation',
    description: 'Implemented the Gaussian mixture model (GMM) for image segmentation.'
  }
]

const portfolioFilters: Filter[] = [
  { id: 'all', label: 'All Projects', filter: '*' },
  { id: 'featured', label: 'Featured', filter: '.featured' },
  { id: 'swe', label: 'Software Development', filter: '.SWE' },
  { id: 'cv', label: 'Computer Vision', filter: '.CV' },
  { id: 'nengo', label: 'Neuroscience', filter: '.Nengo' },
  { id: 'rl', label: 'Reinforcement Learning', filter: '.RL' },
  { id: 'aws', label: 'AWS Cloud', filter: '.AWS' }
]

const portfolioQuotes = [
  {
    text: "Necessity is the mother of invention",
    author: "Plato"
  },
  {
    text: "Knowledge = Experience x Sensitivity",
    author: "Yuval Noah Harari"
  }
]

interface ProjectItemProps {
  project: PortfolioProject
  isVisible: boolean
}

function ProjectItem({ project, isVisible }: ProjectItemProps) {
  return (
    <div className={`portfolio-item ${project.category} ${project.featured ? 'featured' : ''} ${isVisible ? 'animate' : ''}`}>
      <div className="portfolio-card">
        {project.featured && (
          <div className="featured-badge">
            <span>✨ Featured</span>
          </div>
        )}
        <div className="portfolio-image">
          <img src={project.image} alt={project.title} />
          <div className="portfolio-overlay">
            <a href={project.link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
              <div className="overlay-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-link-indicator">
                  {project.link.includes('github.com') ? '🔗 GitHub' : 
                   project.link.includes('.pdf') ? '📄 PDF' : 
                   project.link.includes('/vids/') ? '🎥 Demo' : '🔗 Link'}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FilterContextProps {
  activeFilter: string
  totalProjects: number
  filteredCount: number
}

function FilterContext({ activeFilter, totalProjects, filteredCount }: FilterContextProps) {
  const activeFilterLabel = portfolioFilters.find(f => f.id === activeFilter)?.label || 'All Projects'
  
  return (
    <div className="filter-context">
      <div className="context-info">
        <span className="current-filter">
          Showing: <strong>{activeFilterLabel}</strong>
        </span>
        <span className="project-count">
          {filteredCount} of {totalProjects} projects
        </span>
      </div>
      <div className="context-bar">
        <div 
          className="context-progress" 
          style={{ width: `${(filteredCount / totalProjects) * 100}%` }}
        />
      </div>
    </div>
  )
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('featured')
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

    const element = document.getElementById('portfolio')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : activeFilter === 'featured'
    ? portfolioProjects.filter(project => project.featured)
    : portfolioProjects.filter(project => project.category === activeFilter)

  const randomQuote = portfolioQuotes[Math.floor(Math.random() * portfolioQuotes.length)]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            "{randomQuote.text}" — {randomQuote.author}
          </p>
        </div>

        <FilterContext 
          activeFilter={activeFilter}
          totalProjects={portfolioProjects.length}
          filteredCount={filteredProjects.length}
        />

        <div className="portfolio-filters">
          {portfolioFilters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              <span className="filter-count">
                {filter.id === 'all' 
                  ? portfolioProjects.length 
                  : filter.id === 'featured'
                  ? portfolioProjects.filter(p => p.featured).length
                  : portfolioProjects.filter(p => p.category === filter.id).length}
              </span>
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <ProjectItem 
              key={project.id} 
              project={project} 
              isVisible={isVisible}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}