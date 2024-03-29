import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'
import Proyects from './components/Proyects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/works" element={<Proyects />} />
      </Routes>
    </>
  )
}

export default App
