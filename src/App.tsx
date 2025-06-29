import { useState, useEffect } from 'preact/hooks'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Technology } from './components/Technology'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Technology />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}