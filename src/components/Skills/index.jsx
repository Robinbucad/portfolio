import './style.scss'
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"


function Skills() {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['Skills']}
                        idx={15}
                    ></AnimatedLetters>
                </h1>
                <p className='st-p'>
                    Actualmente las tecnologías que mejor uso son React, CSS3, HTML5, Node, GIT, JavaScript, MongoDB , Bootstrap y SASS.
                </p>
                <p align="LEFT">
                    Como soy un apasionado en el mundo del desarrollo en estos momentos estoy aprendiendo TypeScript y conexiones a tiempo real como es Socket.io. 
                </p>
                <p className='lt-p'>
                    En un futuro no muy lejano también tengo pensado aprender más lenguajes y otro tipo de tecnologías como podria ser Vue JS, testing, redux, next js, docker, etc.. 
                </p>
            </div>

            <div className="container-bars">
             
                    <div>
                        <p>FrontEnd</p>
                        <div className='bar-progress'>
                            <div className='in-front'></div>
                        </div>
                    </div>

                    <div>
                        <p>BackEnd</p>
                        <div className='bar-progress'>
                            <div className='in-back'></div>
                        </div>
                    </div>

                    <div>
                        <p>React</p>
                        <div className='bar-progress'>
                            <div className='in-react'></div>
                        </div>
                    </div>

                    <div>
                        <p>HTML 5</p>
                        <div className='bar-progress'>
                            <div className='in-html5'></div>
                        </div>
                    </div>

                    <div >
                        <p>CSS3</p>
                        <div className='bar-progress'>
                            <div className='in-css3'></div>
                        </div>
                    </div>

                    <div>
                        <p>Bootstrap</p>
                        <div className='bar-progress'>
                            <div className='in-bt'></div>
                        </div>
                    </div>

                    <div>
                        <p>TypeScript</p>
                        <div className='bar-progress'>
                            <div className='in-ts'></div>
                        </div>
                    </div>

                    <div>
                        <p>Socket</p>
                        <div className='bar-progress'>
                            <div className='in-sk'></div>
                        </div>
                    </div>

                    <div>
                        <p>MongoDB</p>
                        <div className='bar-progress'>
                            <div className='in-md'></div>
                        </div>
                    </div>

                    <div>
                        <p>Node</p>
                         <div className='bar-progress'>
                            <div className='in-node'></div>
                        </div>
                    </div>

                    <div>
                        <p>Git</p>
                        <div className='bar-progress'>
                            <div className='in-git'></div>
                        </div>
                    </div>

                    <div>
                        <p>SASS</p>
                        <div className='bar-progress'>
                            <div className='in-Sass'></div>
                        </div>
                    </div>
              
            </div>


        </div>
    )
}
export default Skills