import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_k6el4vp', form.current, 'xNxs3CQBqRBhvFccO')
      .then(() => {
          alert('Mensaje enviado correctamente')
      }, () => {
          alert('Error al enviar el mensaje, intente de nuevo')
      });
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'á', 'c', 't', 'a', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Estoy interesado en oportunidades de trabajo,
            especialmente en proyectos ambiciosos con trabajo en equipo. Sin embargo, si tienes otra petición o pregunta, no dudes en ponerte en contacto conmigo usando el siguiente formulario.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nombre" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Asunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button type="submit" className="flat-button">Enviar</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          San Vicent del Raspeig,
          <br />
          Alicante,
          <br />
          C/ Pedro Maltes 8, 03690 <br />
          <br />
          <span>robin.bucad6@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[38.3958692, -0.5308478]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[38.3953406, -0.5293106]}>
              <Popup>Vivo aqui, ven y tomemos un café :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
