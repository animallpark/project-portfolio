import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import Skills from "./components/skiils/Skills"

function App() {
  return <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>

  </>
}
export default App
