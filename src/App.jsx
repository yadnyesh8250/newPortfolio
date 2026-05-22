import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBg from './components/ParticleBg'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Work from './pages/Work'
import Persona from './pages/Persona'
import Skills from './pages/Skills'
import Credentials from './pages/Credentials'
import Kiro from './pages/Kiro'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="app-root min-h-screen flex flex-col">
      <Navbar />
      <ParticleBg />

      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Work />} />
              <Route path="/about" element={<Persona />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/credentials" element={<Credentials />} />
              <Route path="/kiro" element={<Kiro />} />
              <Route path="/buy" element={<Home />} />
              <Route path="/gallery" element={<Home />} />
              <Route path="/spectrum" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  )
}
