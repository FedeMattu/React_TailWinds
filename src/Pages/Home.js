import React from 'react';
import Store from "../Components/Store";
import Header from "../Components/Header";
import Gallery from "../Components/Gallery";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';



const Home = () => {

    // const div_pannello = useRef(null);
    // const div_linea = useRef(null);
    // const div_title = useRef(null);


    // useEffect((pin = true) => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.to(div_linea.current, {
    //         scrollTrigger: {
    //             trigger: div_pannello.current,
    //             scrub: true,
    //             pin: pin,
    //             start: "top top",
    //             end: "+=200%"
    //         },
    //         duration: 0.5,
    //         opacity: 0, 
    //     })

    // });


    return (
        <div className="bg-gradient-to-r from-purple-800 to-indigo-500">
            <Header />
            <Store />
            <Gallery />
            <Gallery />
        </div>
    );
};

export default Home;