import React, { useState, useEffect } from "react";
import carouselImages from '../data/carousel'

function Carousel() {
    const [count, setCount] = useState(0);
    const lastIndex = carouselImages.length -1
 
    useEffect(() => {
        console.log(lastIndex)
        console.log(count)
        const interval = setInterval(() => {
            if (count < lastIndex){
                setCount(count + 1);
            }else{
                setCount(0)
            }
        }, 5000);
 
        return () => clearInterval(interval);
    }, [count]);

    const handlePrev = () => {
            if (count < lastIndex){
                setCount(count + 1);
            }else{
                setCount(0)
            }
    };

    const handleNext = () => {
            if (count < lastIndex){
                setCount(count + 1);
            }else{
                setCount(0)
            }
    };
 
  return (
    <div className="carousel w-full">
    {carouselImages.map((data, index) => {
        return (
            <div key={index} id={`slide${index}`}  className={`carousel-item relative w-full ${count === index ? 'block' : 'hidden'}`}>
                <img src={data.Img} className="w-full h-auto object-cover sm:max-h-screen md:max-h-[70vh] lg:max-h-screen 2xl:max-h-[80vh]" />
                <div className="absolute flex justify-between items-center w-full px-4 top-1/2 transform -translate-y-1/2">
                    <button onClick={handlePrev} className="text-white text-3xl">❮</button>
                    <button onClick={handleNext} className=" text-white text-3xl">❯</button>
                </div>
                <div className="
                 bg-zinc-800 bg-opacity-100 relative px-4 py-8 
                 md:absolute md:bg-opacity-45 rounded-none
                 md:py-12 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:bg-inherit ">
                    <p className="text-xl text-white text-center md:text-3xl drop-shadow-3xl sm:text-shadow-dark-lg">{data.text}
                    FOR ANY JOB IMAGINABLE</p>
                </div>
            </div>
        )
    })}
  </div>
  )
}

export default Carousel