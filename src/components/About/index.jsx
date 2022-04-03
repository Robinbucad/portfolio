import { useEffect, useState } from 'react'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i']}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <p className='st-p'>
            Soy un desarrollador full-stack muy ambicioso que busca un puesto en una
            empresa de TI con la oportunidad de trabajar con las últimas
            tecnologías en proyectos desafiantes y diversos.
          </p>
          <p >
            Soy una persona tranquila, curiosa por naturaleza y que trabaja constantemente para
            mejorar mis habilidades.
          </p>
          <p className='lt-p'>
            Si tengo que definirme en una frase sería una persona familiar
            , fanático de los deportes, y obsesionado con la tecnología!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faDatabase} color="#116149" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
