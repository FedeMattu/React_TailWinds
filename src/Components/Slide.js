import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Slide = () => {

    const boxRef = useRef()
    useEffect(() => {
        gsap.to([boxRef.current], { x : '800px' , durata : 4 })
    })
    return (
        <div ref={boxRef} style={{
            width: '160px',
            height: '160px',
            background: 'salmon'
        }} />
    )
}

export default Slide