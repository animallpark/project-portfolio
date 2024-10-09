import React from 'react'
import img1 from "../../assets/IMG_20240418_184938_642.jpg"
import "./home.css"
import { Link } from "react-scroll"
import pdf from "/my-resume1.pdf"
import { download } from 'express/lib/response'

function Home() {
  return <>
    <div className="hero">
      <img className="img" src={img1} alt="Profile" />

      <div>
        <p className='bio-text'> <span> I'm Anuj Bhatt, </span> Web Developer  </p>
        <div className="hero-action">
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-10} duration={500}><div className="hero-connect"> Connect with me</div></Link>
          <a href={pdf} className="hero-resume"> My Resume</a>
        </div>

      </div>
    </div>
  </>
}


export default Home
