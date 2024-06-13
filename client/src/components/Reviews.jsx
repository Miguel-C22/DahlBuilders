import React, { useState } from 'react'
import reviews from '../data/reviews'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

  return (
    <div className='bg-zinc-800 pt-24 px-4 sm:px-4 md:px-8 2xl:px-96 pb-12 mb-12'>
  {reviews.map((data, index) => (
    <div key={data.id} className={`bg-white mx-auto py-8 px-8 w-full max-w-xs md:max-w-md aspect-w-1 aspect-h-1 rounded-lg ${index === currentIndex ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <div className="flex justify-center mb-4">
        {Array.from({ length: data.stars }).map((_, idx) => (
          <FontAwesomeIcon key={idx} icon={faStar} style={{ color: "#FFD43B" }} />
        ))}
      </div>
      <div className="text-center">
        <p className="font-bold text-lg">{data.name}</p>
        <p className="mt-2 break-words">{data.review}</p>
      </div>
    </div>
  ))}
  <div className="flex gap-10 justify-center mt-12">
    <button onClick={prevSlide} className="btn btn-circle left-5 border-4 text-white text-lg">❮</button>
    <button onClick={nextSlide} className="btn btn-circle right-5 border-4 text-white text-lg">❯</button>
  </div>
</div>
  )
}

export default Reviews