import { useLayoutEffect, useRef, useState } from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import { gsap } from "gsap"

export default function Home() {
  const rollRef = useRef(null)
  useLayoutEffect(()=>{
    const listen=(e)=>{
      const ex = e.clientX;
      const yy = e.clientY;
      gsap.to(rollRef.current, {
        x:ex,
        y:yy,
        duration: 0.35,
        ease: "none",
        overwrite: "auto",
        stagger: 0.035,
      });
    }
    window.addEventListener('mousemove', listen)
    return(()=>{
      window.removeEventListener('mousemove',listen)
    })
  })
  return (
   <div className="homepage">
      <div className="roll" ref={rollRef}></div>
      <Navbar/>
      <Header/>
      This is the new div
   </div>
  )
}
