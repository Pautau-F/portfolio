import './App.css'
import { useState } from 'react'
import Nav from './components/Nav'
import SideChoice from './components/SideChoice'
import Intro from './components/Intro'

// TODO: Faire en sorte de scroller au prochain bloc (introduction) lorsque l'utilisateur choisi son alignement (sideChoice)
// TODO: Créditer les auteurs des images, trouver un endroit pour placer les crédits
function App() {
  const [currentTheme, setCurrentTheme] = useState('')
  const restart = () => {
    const elements = document.querySelectorAll(['.hidden'])
    for (const element of elements) {
      element.classList.remove('hidden')
    }
    setTimeout(() => {
      setCurrentTheme('')
    }, 3500)
  }

  return (
    <>
      <div className='app' data-theme={currentTheme}>
        <div className='background' />
        {/* Find a way to hide the restart button when clicked on */}
        {currentTheme && (
          <button className='restart' onClick={restart}>
            Restart
          </button>
        )}

        <Nav />
        <SideChoice setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
        <Intro />
      </div>
    </>
  )
}

export default App
