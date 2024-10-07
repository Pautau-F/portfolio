import LightSide from '../img/jedi_order.png'
import DarkSide from '../img/empire_order.png'
import ProfilePicture from '../img/profilePicture.png'
import '../styles/sideChoice.css'

const hideSideChoice = () => {
  const element = document.querySelector(['.sideChoice'])
  element.classList.add('hidden')
}

const SideChoice = (props) => {
  const { setCurrentTheme, currentTheme } = props
  return (
    <header className='block sideChoice'>
      <div
        className='darkSide side'
        onClick={() => {
          if(!currentTheme){
            setCurrentTheme('dark')
            hideSideChoice()
          }
        }}
      >
        <img src={DarkSide} alt='darkSide' />
      </div>
      <div
        className='lightSide side'
        onClick={() => {
          if(!currentTheme){
            setCurrentTheme('light')
            hideSideChoice()
          }
        }}
      >
        <img src={LightSide} alt='lightSide' />
      </div>

      {currentTheme && <p className='sideInfo box absCenterHorizontally'>You have chosen the {currentTheme} side</p>}
      {!currentTheme && (
        <p className='sideInfo box absCenterHorizontally'>Choosing a side will have an impact on the UI</p>
      )}
    </header>
  )
}

export default SideChoice
