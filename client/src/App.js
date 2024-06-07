import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="relative z-0">
        <img className="w-full" src="/images/Home.png" alt="Image of a house"></img>
        <div className="bg-zinc-800 bg-opacity-100 relative bottom-0 right-0 px-4 py-8 md:absolute md:bg-opacity-80 md:py-12">
          <p className="text-xl text-white text-center md:text-3xl">LIMITLESS POTENTIAL 
          FOR ANY JOB IMAGINABLE</p>
        </div>
      </div>
      <div className="
        flex flex-wrap justify-center items-center m-auto max-w-screen-lg
        font-bold sm:justify-between gap-4 sm:gap-0 px-2 sm:px-12 text-center mt-4">
        <p className=" text-xl md:text-3xl">Get A Fast, Free Quote Today! </p>
        <button className="border border-4 border-yellow-500 bg-transparent text-yellow-500 p-2 px-4 sm:px-12 text-md md:text-xl  ">Get A Quote</button>
      </div>
    </div>
  );
}

export default App;
