import '../styles/intro.css'

const Intro = () => {
  return (
    <div className='block intro'>
      <h2 className='title box code'>// Introduction </h2>

      <div className='introBlock box'>
        <h3 className='code'>About me</h3>
        <p>
          Greetings! I'm Florian and I'm developping since 2019 so it's just the beginning but I aim at being better everyday.
        </p>
      </div>

      <div className='introBlock box'>
        <h3 className='code'>Current situation</h3>
        <p>
          I am currently in apprenticeship until September 20th 2023 therefore I am not looking for a job at the moment.
        </p>
      </div>

      <div className='introBlock languages box'>
        <h3 className='code'>Comfortable with</h3>
        <div className='languagesIcons'>
          <i className='fab fa-html5' />
          <i className='fab fa-css3-alt' />
          <i className='fab fa-js-square' />
          <i className='fab fa-react' />
          <i className='fab fa-php' />
        </div>
      </div>
    </div>
  )
}

export default Intro
