import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoR from '../../assets/images/logoR.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['o', 'b', 'i', 'n']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']


  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _8`}>o</span>
            <span className={`${letterClass} _9`}>l</span>
            <span className={`${letterClass} _10`}>a,</span>
            <br />
            <span className={`${letterClass} _11`}>S</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>y</span>
            <img src={LogoR} className='initial' alt='developer'></img>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}></AnimatedLetters>
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}></AnimatedLetters>
          </h1>
          <h2>Full Stack Developer</h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>


      </div>
      <Loader type='pacman'></Loader>
    </>

  )
}

export default Home
