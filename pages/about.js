import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function about() {
  return (
    <div className='about'>
      <Navbar/>
      <div className='about__body'>
        <div className='box'>
            <h2>KNOW ME ...</h2>
            <p>
                Hi Lovelies, I am Omotola and i love writing and listening. This is my blog and here you would read some fictional stories and poems inspired by imaginations and sometimes true live events.<br/>
                You can always send me a message! Thank you!
            </p>
            <h2>Text Me!</h2>
            <form>
                <label>Your Name </label>
                <input type='text' id='name' name='name' required/>
                <label>Your Email </label>
                <input type='email' id='name' name='email'required/>
                <label>Subject </label>
                <input type='text' id='subject' name='subject'/>
                <label>Your Message </label>
                <textarea name='message' id='message' required/>
                <button type='submit' >SEND</button>
            </form>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default about
