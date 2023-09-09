import React, {useEffect, useRef, useState} from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

function navbar() {
  const [show,setShow] = useState(false)
  const stickRef = useRef(null)
  useEffect(()=>{
    gsap.fromTo(stickRef.current, {scaleX:2,x:40}, {x:0, scaleX:1, duration:1, })
  })
  return (
    <div className='navbar'> 
      <div className='mobile-nav'>
        <h4 className='myname'>
              Omotola
          </h4>
          <div className='stick' ref={stickRef}></div>
          <div className={`hamburger ${show?('cancel'):('show')}`} onClick={()=>{setShow(!show)}}>
            <span></span>
            <span></span>
          </div>
      </div>
      <div className={`nav-links ${show?('display'):('nodisplay')}`}>
        <Link href="/">
          <h5>Home</h5>
        </Link>
        <Link href='/about' legacyBehavior>
            <a>
              <h5>About Me</h5></a>
        </Link>
      </div>
        
    </div>
  )
}

export default navbar
