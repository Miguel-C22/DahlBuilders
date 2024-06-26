import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import YellowQuoteBtn from "./components/YellowQuoteBtn";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="relative z-0">
        <img className="w-full h-auto sm:h-tall object-cover" src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" alt="Image of a house"></img>
        <div className="bg-zinc-800 bg-opacity-100 relative bottom-0 right-0 px-4 py-8 md:absolute md:bg-opacity-80 md:py-12">
          <p className="text-xl text-white text-center md:text-3xl">LIMITLESS POTENTIAL 
          FOR ANY JOB IMAGINABLE</p>
        </div>
      </div> */}
      <Carousel />
      <div className="
        flex flex-wrap justify-center items-center m-auto max-w-screen-lg
        font-bold sm:justify-between gap-4 sm:gap-0 px-2 sm:px-12 text-center my-12">
        <p className=" text-xl md:text-3xl">Get A Fast, Free Quote Today! </p>
        <YellowQuoteBtn />
      </div>
        <Services />
      <div className="flex flex-col items-center gap-12 my-12">
        <h2 className="text-2xl font-bold underline underline-offset-8 decoration-yellow-500 text-center px-4">MN’s Trusted Remodeler & General Contractor</h2>
        <div className="flex gap-12 px-24 flex-wrap md:flex-nowrap">
          <div>
            <h3 className="text-lg font-bold">Licensed and Insured General Contractor</h3>
            <p>Insured and covered, we have been a trusted contractor in the Twin Cities Metro for many years. Our crews have over 25 years of experience in floor remodeling and construction. MN homeowners love the results when they choose to hire Massoglia Contracting.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Serving in the Twin Cities</h3>
            <p>Based in Blaine, MN we will travel within a 50-mile radius of our home office location. For the right project, we will go even further. Our five-year craftsman’s guarantee is our commitment to you that we will get the job done right.</p>
          </div>
        </div>
          <YellowQuoteBtn />      
        </div>
        <Reviews />
        <Form />
        <Footer />
    </div>
  );
}

export default App;
