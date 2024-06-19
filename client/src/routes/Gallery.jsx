import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Gallery() {
  return (
    <div>
        <Header /> 
        <div className="relative z-0 pt-16">
            <img
                className="w-full h-auto object-cover sm:max-h-screen md:max-h-[70vh] lg:max-h-screen 2xl:max-h-[50vh]"
                src="/images/gallery/galleryHeaderImage.png"
                alt="Image of a house"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl text-white md:text-6xl">Project Gallery</h1>
                    <p className="text-white pt-2 hidden sm:block">
                        Check out some of our recent work. <br /> Bathroom remodeling, kitchen remodeling, flooring, decks, fencing and more!
                    </p>
                </div>
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