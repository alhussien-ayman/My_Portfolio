import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
/**
Register GASP
*/
gsap.registerPlugin(useGSAP , ScrollTrigger);

/**
 components
*/
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ButtonPrimary } from "./components/Button";
import About from "./components/about";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { YouTubeSection } from "./components/YouTubeSection";
const App = () => {
  const [count, setCount] = useState(0);
useGSAP(() => {
  const elements = gsap.utils.toArray('.reveal-up');

  elements.forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start:'-200 bottom' ,
        end: 'bottom 80%' ,
        scrub: true,    // Animation syncs to scroll position
      },
      y: 0,             // Move to y = 0
      opacity: 1,       // Fade in to full opacity
      duration: 1,      // Duration of the animation
      ease: 'power2.out'// Easing function
    });
  });
});


  return (
     <ReactLenis root>
    <Header />
    <main>
      <Hero /> 
      <About/>
      <Skills/>
      <Work/>
      <Review/>
      <YouTubeSection/>
      <Contact/>
      <Footer/>
    </main>
    </ReactLenis>
  );
}

export default App;
