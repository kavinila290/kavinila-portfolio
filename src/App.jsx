import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
return ( <MotionConfig reducedMotion="user"> <div className="portfolio-shell">

```
    {/* Purple particle background */}
    <div className="particle-background" aria-hidden="true">
      <div className="purple-glow purple-glow-1"></div>
      <div className="purple-glow purple-glow-2"></div>
      <div className="purple-glow purple-glow-3"></div>

      <div className="particles">
        {Array.from({ length: 45 }).map((_, index) => (
          <span
            key={index}
            className={`particle particle-${(index % 6) + 1}`}
          />
        ))}
      </div>
    </div>

    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent"
    >
      Skip to content
    </a>

    <Navbar />

    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <GitHub />
      <Contact />
    </main>

    <Footer />
  </div>
</MotionConfig>

);
}
