import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="bg-black top-0 left-0 overflow-y-auto h-screen w-screen">
      <div>
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App

