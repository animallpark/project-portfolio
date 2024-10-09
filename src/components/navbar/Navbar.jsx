import { Link } from "react-scroll"
import "./navbar.css"
function Navbar() {




  return <>

    <div className="navbar">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={-40} duration={500}><p3> Portfolio</p3></Link>
      </div>
      <div className="menu">
        <Link activeClass="nav-home" to="hero" spy={true} smooth={true} offset={-40} duration={500}><ul className="option" >Home</ul></Link>
        <Link activeClass="nav-about" to="about-area" spy={true} smooth={true} offset={-40} duration={500}><ul className="option">About</ul></Link>
        <Link activeClass="nav-skills" to="skills-box" spy={true} smooth={true} offset={-20} duration={500}> <ul className="option">Skills</ul></Link>
        <Link activeClass="nav-projects" to="outer" spy={true} smooth={true} offset={-70} duration={500}><ul className="option">Projects</ul></Link>
      </div>
      <Link activeClass="n-contact" to="contact" spy={true} smooth={true} offset={-30} duration={500}><ul1  >Contact me</ul1></Link>
    </div>
    {/* <div className="mob-menu">
      <Link activeClass="nav-home" to="hero" spy={true} smooth={true} offset={-100} duration={500}><ul className="option" >Home</ul></Link>
      <Link activeClass="nav-about" to="about-area" spy={true} smooth={true} offset={-30} duration={500}><ul className="option">About</ul></Link>
      <Link activeClass="nav-skills" to="skills-box" spy={true} smooth={true} offset={-10} duration={500}> <ul className="option">Skills</ul></Link>
      <Link activeClass="nav-projects" to="outer" spy={true} smooth={true} offset={-10} duration={500}><ul className="option">Projects</ul></Link>
    </div> */}

  </>
}

export default Navbar
