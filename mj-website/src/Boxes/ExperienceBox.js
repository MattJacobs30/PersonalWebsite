import React from 'react';
import '../App.css';
import { Carousel } from '@material-tailwind/react';


function ExperienceBox() {
    return (       
        <div className='w-auto h-auto p-4 border-2 border-gray-500 rounded-lg mt-4 bg-amber-200'>
            <p className='text-4xl'>
              Experiences:
            </p>
            <Carousel>
                <div> 
                    <p className='text-1xl'>
                        Setinel Devices - Software Engineer/Application Engineer Intern
                    </p>
                    <p>
                        
                    </p>
                </div>
                <div> 
                    <p className='text-1xl'>
                        Hack4Impact UTK - Software Developer
                    </p>
                </div>
                <div> 
                    <p className='text-1xl'>
                        Epic Lab UTK - Undergraduate Research Assistant
                    </p>
                </div>
                <div> 
                    <p className='text-1xl'>
                        Oak Ridge National Lab - Power Systems Engineering Intern
                    </p>
                </div>
                <div> 
                    <p className='text-1xl'>
                        Subway - Sandwich Artist
                    </p>
                </div>
            </Carousel>
        </div>
    );
}

export default ExperienceBox;