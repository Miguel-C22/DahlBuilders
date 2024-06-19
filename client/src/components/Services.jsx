import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useWindowSize from '../customHooks/useWindowSize';
import services from "../data/services"

function Services() {
    const [selectedService, setSelectedService] = useState(null)
    const windowSize = useWindowSize()

    const navigate = useNavigate(); // Initialize useNavigate
    
        
    

    const handleNavigation = (route) => {
      navigate(route); // Navigate to the desired route
    };
 
  return (
    <div className="bg-zinc-800 flex gap-12 flex-wrap py-12 px-4 justify-center">
        {services.map(data => {
            return (
                <div key={data.service} id={data.id} onClick={(e) => {setSelectedService(e.currentTarget.id)}}>
                    <div className='relative' > 
                        {data.id == selectedService ? 
                        <div className=' relative text-center text-white'>
                            <div className='absolute  flex flex-col gap-4 p-4 z-10 items-center w-full'> 
                                <p className="text-2xl font-bold">{data.service}</p>
                                {windowSize.width > 400 ?  
                                <p>{data.description}</p> 
                                : 
                                <p className={windowSize.width > 360 ? "block" : "hidden"}
                                >{data.description.slice(0, 80)}...</p>
                                }
                            </div>
                            <img className='opacity-40' src={data.Img} alt={`${data.service} service`} />
                            <button className="btn absolute bottom-10 left-24 right-24" onClick={() => {handleNavigation(data.route)}}>Learn More</button>
                        </div> 
                        : 
                        <div> 
                            <img src={data.Img} alt={`${data.service} service`} />
                            <p className="text-white text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{data.service}</p>
                        </div>
                        }
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Services

//bg-yellow-500