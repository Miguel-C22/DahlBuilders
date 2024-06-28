import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function About() {
  return (
    <div>
        <Header />
        <div className="z-0 pt-32">
        <h1 className="text-3xl text-center font-bold underline underline-offset-8 decoration-yellow-500">About Us</h1>
          <div className="flex flex-col gap-4 max-w-[80vh] px-4 mt-12 mx-auto">
            <p>If you’re starting a home remodeling project, work with the professionals at Construction Con Dios, 
            LLC and get great results and outstanding service. Located in Andover, 
            MN, this general contractor has served the greater Twin Cities area since 2005.
            Originally focusing on deck building and roofing services, they now also offer 
            additional interior and exterior services.
          </p>
          <p>These licensed and insured professionals have mastered a range of home remodeling services 
            and are ready to work with you. Whether you need your roof replaced, want to build a new deck, 
            or are interested in installing new siding, these exterior renovation experts are here to help. 
            Their knowledge also extends to windows, gutters, cement, and fascia.
          </p>
          <p>Construction Con Dios also offers a variety of interior services, including basement finishing, 
            making them your one-stop shop for all your remodeling needs. From replacing tile to installing beautiful, 
            unique ceilings, they do it all. Other interior services include molding work, drywall installation, 
            and new fixture installation.
          </p>
          <p>If you suspect your house has sustained storm damage, these experts will provide a free inspection to 
            assess your exterior. From there, they will make a recommendation about whether you should contact your 
            insurance company, as well as provide all the repairs you need should you choose to hire them.
          </p>
          <img src="/images/about/family.png" alt="" srcset="" />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default About