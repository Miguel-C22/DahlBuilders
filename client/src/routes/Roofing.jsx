import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WhiteQuoteBtn from '../components/WhiteQuoteBtn'

function Roofing() {
  return (
    <div>
      <Header/>
      <div className="relative z-0 pt-16">
        <img
          className="w-full h-auto object-cover sm:max-h-screen md:max-h-[70vh] lg:max-h-screen 2xl:max-h-[50vh]"
          src="/images/services/kitchen.png"
          alt="Image of a house"
        />
        <div className="absolute inset-0 mt-12 sm:mt-0 left-0 right-0  flex flex-col justify-center gap-4 items-center text-center px-8">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h3 className="text-4xl text-white md:text-6xl">Kitchen Remodeling</h3>
            <p className="text-white pt-2 hidden sm:block ">
              The kitchen is the heart of the home, where friends and family come together to eat and spend time together. Don’t let a cramped or outdated kitchen turn the joy of cooking into something you dread.
            </p>
          </div>
          <WhiteQuoteBtn />
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Roofing