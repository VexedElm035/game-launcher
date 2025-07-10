import { Navbar, Card } from "../../components"
import { useState, useEffect, useRef } from 'react'
import './home.css'

const Home = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(1) // Card con key 1 activa por defecto
  const containerRef = useRef<HTMLDivElement>(null)
  const totalCards = 10

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault()
          setActiveCardIndex(prev => prev < totalCards - 1 ? prev + 1 : prev)
          break
        case 'ArrowLeft':
          event.preventDefault()
          setActiveCardIndex(prev => prev > 0 ? prev - 1 : prev)
          break
        case 'ArrowUp':
          event.preventDefault()
          setActiveCardIndex(prev => Math.max(0, prev - 5)) // Saltar 5 hacia arriba
          break
        case 'ArrowDown':
          event.preventDefault()
          setActiveCardIndex(prev => Math.min(totalCards - 1, prev + 5)) // Saltar 5 hacia abajo
          break
      }
    }

    // Agregar el event listener cuando el componente se monta
    window.addEventListener('keydown', handleKeyDown)
    
    // Hacer focus en el contenedor para que pueda recibir eventos de teclado
    if (containerRef.current) {
      containerRef.current.focus()
    }

    // Cleanup del event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [totalCards])

  const handleCardHover = (index: number) => {
    setActiveCardIndex(index)
  }

  return (
    <div className="home_container" ref={containerRef} tabIndex={0}>
      <Navbar />
      <div className="home_content">
        <div className="home_content-cards">
          {Array.from({ length: totalCards }).map((_, i) => (
            <Card 
              key={i} 
              isActive={i === activeCardIndex}
              onHover={() => handleCardHover(i)}
            />
          ))}   
        </div>
      </div>
    </div>
  )
}

export default Home