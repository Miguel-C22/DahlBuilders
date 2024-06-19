import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import WhiteQuoteBtn from '../components/WhiteQuoteBtn'
import pastKitchenWork from "../data/kitchenPage"

function Roofing() {
  return (
    <div>
      <Header/>
      <div className="relative z-0 pt-16">
        <img
          className="w-full h-auto object-cover sm:max-h-screen md:max-h-[70vh] lg:max-h-screen 2xl:max-h-[50vh]"
          src="/images/services/kitchen/kitchenHeaderImg.png"
          alt="Image of a house"
        />
        <div className="absolute inset-0 mt-12 sm:mt-0 left-0 right-0  flex flex-col justify-center gap-4 items-center text-center px-8">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h1 className="text-4xl text-white md:text-6xl">Kitchen Remodeling</h1>
            <p className="text-white pt-2 hidden sm:block ">
              The kitchen is the heart of the home, where friends and family come together to eat and spend time together. Don’t let a cramped or outdated kitchen turn the joy of cooking into something you dread.
            </p>
          </div>
          <WhiteQuoteBtn />
        </div>
      </div>
 
      <div className='flex justify-center items-center'>
        <div className='flex flex-wrap justify-center items-center gap-8 px-4 my-12'>
          <div className='flex flex-col gap-4 max-w-3xl mx-auto'>
            <h3 className='font-bold text-2xl underline underline-offset-8 decoration-yellow-500'>Our Kitchen Remodeling Process</h3>
            <p>You spend at least some time every day in your kitchen, so when it comes to your kitchen remodeling 
              project, you need an experienced team to help you redesign the space with functionality in mind. 
              We maintain constant and open communication so you know exactly what to expect before we start 
              remodeling your kitchen.
            </p>
            
            <p>From the start, we will go over the designs and plans so you’ll know what to expect every step of the way.
              Throughout the entirety of our remodeling and construction services, you can expect precise work and 
              check-ins to ensure your satisfaction. We only use the best materials and brands to achieve the best 
              results. No matter the scale of your kitchen remodeling needs, we will take care of it all.
            </p>
            
            <p>We understand how important it is for your kitchen to be useable, so we ensure our projects always 
              adhere to the set timelines. This way, you won’t have to worry about not being able to cook or access 
              your fridge throughout the process.
            </p>
          </div>
          
          <div className='flex flex-col gap-4 max-w-3xl mx-auto'>
            <h3 className='font-bold text-2xl underline underline-offset-8 decoration-yellow-500'>Popular Kitchen Remodeling Ideas</h3>
            <p>From small-scale projects to entire kitchen remodels, Massoglia Contracting is the team to call. 
              For over ten years, our kitchen contractors have provided top-notch services to homeowners in St. Paul, 
              Minneapolis, Blaine, Brooklyn Park, Maple Grove, and beyond.
            </p>
            
            <p>Take a look at the wide variety of kitchen remodeling services we offer:</p>
            
            <ul className='list-disc list-inside'>
              <li>Cabinet installation</li>
              <li>Countertop installation</li>
              <li>Floor installation</li>
              <li>New light fixture installation</li>
              <li>Backsplash installation</li>
              <li>Kitchen restoration</li>
              <li>Total kitchen renovation</li>
              <li>Kitchen construction services</li>
            </ul>

            <p>If you don’t see a particular remodeling service, simply call 763-228-2840 to speak with our kitchen remodelers!</p> 
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 flex gap-12 flex-wrap py-12 px-4 justify-center">
        {pastKitchenWork.map(data => {
            return (
                <div key={data.service} id={data.id}>
                    <div className='relative' > 
                      <img src={data.Img} alt={`${data.service} service`} />
                    </div>
                </div>
            )
          })}
        </div>

        <div className='pt-24'>
          <Form />
        </div>

        <Footer />
    </div>
  )
}

export default Roofing