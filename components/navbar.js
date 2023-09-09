import React, {useEffect, useRef, useState} from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'

function navbar() {
  const router = useRouter()
  const [show,setShow] = useState(false)
  const stickRef = useRef(null)
  useEffect(()=>{
    gsap.fromTo(stickRef.current, {scaleX:2,x:40}, {x:0, scaleX:1, duration:1, })
  })
  return (
    <div className='navbar'> 
      <div className='mobile-nav'>
        <h4 className='myname'>
              <Link href="/">
              Omotola</Link>
          </h4>
          <div className='stick' ref={stickRef}></div>
          <div className={`hamburger ${show?('cancel'):('show')}`} onClick={()=>{setShow(!show)}}>
            <span></span>
            <span></span>
          </div>
      </div>
      <div className={`nav-links ${show?('display'):('nodisplay')}`}>
        <Link href="/">
          <h5 className={router.pathname=="/"&&'active'}>Home</h5>
        </Link>
        <Link href='/about'>
              <h5 className={router.pathname=="/about"&&'active'}>About Me</h5>
        </Link>
      </div>
    </div>
  )
}

export default navbar
