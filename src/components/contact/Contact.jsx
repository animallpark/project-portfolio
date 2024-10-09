import React, { useRef, useState } from 'react'
import "./contact.css"
// import emailjs from "@emailjs/browser"
function Contact() {
  // const [formData, setFormData] = useState();
  const [user, setUser] = useState({
    name: "", email: "", message: "",
  })

  const handleInputs = (event) => {

    let name;
    let value;
    name = event.target.innerHTML;
    console.log(name)
    // value = e.target.value;

    // setUser({ ...user, [name]: value });
  }
  // const name = document.getElementById("name");
  // const email = document.getElementById("email")
  // const message = document.getElementById("message")
  // const nameValue = name.innerHTML
  // const emailValue = email.innerText;
  // const messageValue = message.innerText;



  // const handleOnClick = () => {

  // }
  // value = { user.message }


  return (
    <div className='contact'>
      <form className='form'>
        <div className='touch'>
          <a>Contact Us</a>
          <div className='touch-details'>
            <a > Would you like to work together, or simply</a>
            <a > chat about a Project? Don't hesitate to contact me!</a>
          </div>
        </div>
        <div className='input-details'>
          <div className='inputs-type'>
            <a> Name </a>
            <input type="text" onChange={handleInputs} id='name' className='input-container' required />
          </div>
          <div className='inputs-type' >
            <a> Email </a>
            <input type="text" onChange={handleInputs} id='email' className='input-container' required />
          </div>
          <div className='inputs-type'>
            <a> Message </a>
            <textarea type="text" onChange={handleInputs} id='message' className='message-container' required />
          </div>
          <button type='submit' className='button'>Send message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
