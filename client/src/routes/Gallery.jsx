import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Gallery() {
  return (
    <div>
        <Header /> 
        <div className="relative z-0 pt-16">
            <img className="w-full h-auto object-cover sm:max-h-screen md:max-h-[70vh] lg:max-h-screen 2xl:max-h-[50vh]" src="/images/gallery/galleryHeaderImage.png" alt="Image of a house" />
            <div className="absolute bottom-0 left-2 px-4 py-8 lg:bottom-24 md:py-24 sm:left-24">
                <h3 className="text-4xl text-white text-left md:text-6xl">Project Gallery</h3>
                <p className="text-white pt-0 hidden sm:pt-2 sm:block">Check out some of our recent work. <br /> Bathroom remodeling, kitchen remodeling, flooring, decks, fencing and more!</p>
            </div>
        </div>
        <div className='flex flex-wrap gap-12 justify-center pt-12 px-4'>
            <img src="/images/bathrooms.png" alt="" srcset="" />
            <img src="/images/decks.png" alt="" srcset="" />
            <img src="/images/roofing.png" alt="" srcset="" />
            <img src="/images/bathrooms.png" alt="" srcset="" />
            <img src="/images/decks.png" alt="" srcset="" />
            <img src="/images/roofing.png" alt="" srcset="" />
            <img src="/images/bathrooms.png" alt="" srcset="" />
            <img src="/images/decks.png" alt="" srcset="" />
            <img src="/images/roofing.png" alt="" srcset="" />
            <img src="/images/bathrooms.png" alt="" srcset="" />
            <img src="/images/decks.png" alt="" srcset="" />
            <img src="/images/roofing.png" alt="" srcset="" />
            <img src="/images/bathrooms.png" alt="" srcset="" />
            <img src="/images/decks.png" alt="" srcset="" />
            <img src="/images/roofing.png" alt="" srcset="" />
            <img src="/images/bathrooms.png" alt="" srcset="" />
        </div>

        <Footer />
    </div>
  )
}

export default Gallery
//h-48 w-full sm:h-auto