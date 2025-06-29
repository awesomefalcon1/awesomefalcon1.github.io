import { useState, useEffect } from 'preact/hooks'

interface PortfolioProject {
  id: number
  category: string
  title: string
  image: string
  link: string
  description: string
}

interface Filter {
  id: string
  label: string
  filter: string
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    category: 'CV',
    title: 'K-Means Algorithm for Unsupervised Learning',
    image: '/img/bunny.bmp',
    link: '/vids/K-means_V1.mp4',
    description: 'Enhancing image understanding through the extraction of meaningful patterns from data, improving visual comprehension.'
  },
  {
    id: 2,
    category: 'CV',
    title: 'CNN for Hurricane Damage Classification',
    image: '/img/damage_no_damage.png',
    link: '/vids/Hurricane.mp4',
    description: 'Utilized Convolutional Neural Networks for classifying the existence of hurricane damage.'
  },
  {
    id: 3,
    category: 'CV',
    title: 'Panoramic Image Stitching',
    image: '/img/ImageStitching.png',
    link: '/vids/PanoramicStich_1.mp4',
    description: 'Implemented homographies with Scikit libraries for panoramic image stitching.'
  },
  {
    id: 4,
    category: 'Nengo',
    title: 'Real-Time Online Learning with PES Rule',
    image: '/img/nengo/RTRL.png',
    link: '/vids/Real-Time Online Learning with PES Rule.mp4',
    description: 'Executed in the Neural Engineering Framework, enabling adaptive connection weight adjustments.'
  },
  {
    id: 5,
    category: 'RL',
    title: 'Tackling CartPole with OpenAI Gym',
    image: '/img/RL_CartPole.png',
    link: '/vids/CartpoleRenforcementLearning_1.mp4',
    description: 'Designed a resilient reinforcement learning model for CartPole-v1 in OpenAI Gym.'
  },
  {
    id: 6,
    category: 'Nengo',
    title: 'Pavlov\'s Dog Conditional Stimulus Simulation',
    image: '/img/nengo/classical_conditioning.png',
    link: '/vids/ParlovDog.mp4',
    description: 'Utilized Nengo simulation, applying PBS learning rule for dynamic stimuli-response weight adjustments.'
  },
  {
    id: 7,
    category: 'Nengo',
    title: 'Decision Making Model with Nengo Neural Simulator',
    image: '/img/nengo/accumulator.png',
    link: '/vids/Accumulate-to-Threshold Decision Making Model.mp4',
    description: 'Utilized Nengo 3.2.0 to simulate a neuro accumulator, integrating input functions.'
  },
  {
    id: 8,
    category: 'CV',
    title: 'Django+TensorFL Hub:Object Detection',
    image: '/img/DJ+TF-obj-det.png',
    link: '/vids/Django_Object_detection_1.mp4',
    description: 'Developed a robust Django web application and seamlessly integrated TensorFlow Hub\'s Inception ResNet V2 model.'
  },
  {
    id: 9,
    category: 'AWS',
    title: 'Wild Rydes',
    image: '/img/wildrydes-architecture.jpeg',
    link: '/pdfs/WildRydeReport.pdf',
    description: 'SERVERLESS! Perform version control in the deployment code of static webpage, used AWS amplify to host the static webpage frontend.'
  },
  {
    id: 10,
    category: 'AWS',
    title: 'Trend Micro One',
    image: '/img/TrendMicroControlPanel.png',
    link: '/pdfs/DevSecOpsReport.pdf',
    description: 'Security + DevOps. Used Trend Micro to add security checks and block targeted attacks on the site.'
  },
  {
    id: 11,
    category: 'SWE',
    title: 'Analyze progressive bias in the GPT-4 model: Nationstates-LLM',
    image: '/img/Nationstates-LLM.png',
    link: 'https://github.com/codejedi-ai/Nationstate-LLM',
    description: 'Utilized the nationstates API to access data and make decisions in the game.'
  },
  {
    id: 12,
    category: 'SWE',
    title: 'GMM-Segmentation',
    image: '/img/SegmanticPic.png',
    link: 'https://github.com/codejedi-ai/GMM-Segmentation',
    description: 'Implemented the Gaussian mixture model (GMM) for image segmentation.'
  }
]

const portfolioFilters: Filter[] = [
  { id: 'all', label: 'All', filter: '*' },
  { id: 'nengo', label: 'Neuroscience', filter: '.Nengo' },
  { id: 'rl', label: 'Reinforcement Learning', filter: '.RL' },
  { id: 'cv', label: 'Computer Vision', filter: '.CV' },
  { id: 'swe', label: 'Software Developments', filter: '.SWE' },
  { id: 'aws', label: 'AWS', filter: '.AWS' }
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
    <div className={`portfolio-item ${project.category} ${isVisible ? 'animate' : ''}`}>
      <div className="portfolio-card">
        <div className="portfolio-image">
          <img src={project.image} alt={project.title} />
          <div className="portfolio-overlay">
            <a href={project.link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
              <div className="overlay-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
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

        <div className="portfolio-filters">
          {portfolioFilters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
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
      </div>
    </section>
  )
}