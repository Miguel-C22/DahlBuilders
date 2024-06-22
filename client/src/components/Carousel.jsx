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
    <div className="carousel w-full mt-12">
    {carouselImages.map((data, index) => {
        return (
            <div key={index} id={`slide${index}`}  className={`carousel-item relative w-full ${count === index ? 'block' : 'hidden'}`}>
                <img src={data.Img} className="
                w-full h-[70vh]  object-cover sm:max-h-screen md:max-h-[70vh] 
                lg:max-h-screen 2xl:max-h-[80vh]" />
                <div className="absolute flex justify-between items-center w-full px-4 top-1/2 transform -translate-y-1/2">
                    <button onClick={handlePrev} className="text-white text-3xl">❮</button>
                    <button onClick={handleNext} className=" text-white text-3xl">❯</button>
                </div>
                <div className="
                bg-opacity-100  px-4 py-8 
                absolute 
                left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <p className="text-3xl text-white text-center text-shadow-dark-lg">{data.text}</p>
                </div>
            </div>
        )
    })}
  </div>
  )
}

export default Carousel