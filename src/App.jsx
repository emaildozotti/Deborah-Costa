import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import VSLBlock from './components/VSLBlock'
import Metodo from './components/Metodo'
import Sobre from './components/Sobre'
import ComoFunciona from './components/ComoFunciona'
import Depoimentos from './components/Depoimentos'
import FAQ from './components/FAQ'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    })
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <VSLBlock />
        <Metodo />
        <Sobre />
        <ComoFunciona />
        <Depoimentos />
        <FAQ />
      </main>
    </div>
  )
}
