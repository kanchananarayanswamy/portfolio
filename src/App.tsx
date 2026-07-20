import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('isDark') === 'true'
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('isDark', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('isDark', 'false')
    }
  }

  return (
    <div className="bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navbar />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="coding-profiles">
          <CodingProfiles />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </motion.main>
      
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App