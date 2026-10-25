import { useEffect, useState } from 'react'
import { SiPlaystation5 } from "react-icons/si";

import './slider.css'

export type Slide = {
    id: number;
    image: string;
    title: string;
    description: string;
}

type SliderProps = {
    slides: Slide[];
}

const Slider = ({ slides }: SliderProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const loopSlides = [...slides, ...slides];
    const SLIDE_WIDTH = 380;
const [isAnimating, setIsAnimating] = useState(true);

const handleTransitionEnd = () => {
    if (currentIndex >= slides.length) {
        setIsAnimating(false);
        setCurrentIndex(currentIndex - slides.length);
    }
};
const next = () => {
    setIsAnimating(true);
    setCurrentIndex(prev => prev + 1);
};

// const prev = () => {
//     if (currentIndex === 0) {
//         // jump to the copy without animation, then slide back one
//         setIsAnimating(false);
//         setCurrentIndex(slides.length);
//         requestAnimationFrame(() => requestAnimationFrame(() => {
//             setIsAnimating(true);
//             setCurrentIndex(slides.length - 1);
//         }));
//     } else {
//         setIsAnimating(true);
//         setCurrentIndex(prev => prev - 1);
//     }
// };

useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
}, []);
  return (
 <>
 <div className="slider-container">
 <div className="wrapper" style={{
        transform: `translateX(-${currentIndex * SLIDE_WIDTH}px)`,
        transition: isAnimating ? 'transform 0.5s ease' : 'none',
    }}
    onTransitionEnd={handleTransitionEnd}>
 {loopSlides.map((slide, index) => (
    <div key={`${slide.id}-${index}`} className={`slider ${index % slides.length === currentIndex % slides.length ? 'active' : ''}`}>
        <img src={slide.image} alt={slide.title} />
        <span>{slide.title === "PS5" ? <SiPlaystation5 /> : slide.title}</span>
    </div>
  ))}
  </div>
  </div>
  </>
  )
}

export default Slider;
