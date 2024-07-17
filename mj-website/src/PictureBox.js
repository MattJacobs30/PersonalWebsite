import React from 'react';
import { Carousel } from "@material-tailwind/react";
import Lakepic from './pictures/lake.png';
import Parkpic from './pictures/park.png';
import Posterpic from './pictures/poster.png';
import Snowmanpic from './pictures/snowman.png';
import Sumopic from './pictures/sumo.png';
import Sunsetpic from './pictures/sunset.png';
import Sunspherepic from './pictures/sunsphere.png';
import Waterfallpic from './pictures/waterfall.png';

function PictureBox() {
    return (
        <div style={{ height: '552px' }} className="ml-2 mr-4 flex justify-center p-4 border-2 border-gray-500 rounded-lg bg-brown-500">
            <Carousel className="rounded-xl" autoplay={true} autoplayDelay={3000} loop={true}>
                <div className='flex justify-evenly items-center h-full'>
                    <div className="flex-1 h-full flex justify-center items-center p-2">
                        <img src={Lakepic} alt="Lakepic" className="max-h-full max-w-full object-contain rounded-xl" />
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center p-2">
                        <img src={Snowmanpic} alt="Snowmanpic" className="max-h-full max-w-full object-contain rounded-xl" />
                    </div>
                </div>
                <div className="h-full flex justify-center items-center p-2">
                    <img src={Parkpic} alt="Parkpic" className="max-h-full max-w-full object-contain rounded-xl" />
                </div>
                <div className="h-full flex justify-center items-center p-2">
                    <img src={Posterpic} alt="Posterpic" className="max-h-full max-w-full object-contain rounded-xl" />
                </div>
                <div className="h-full flex justify-center items-center p-2">
                    <img src={Sumopic} alt="Sumopic" className="max-h-full max-w-full object-contain rounded-xl" />
                </div>
                <div className="h-full flex justify-center items-center p-2">
                    <img src={Sunsetpic} alt="Sunsetpic" className="max-h-full max-w-full object-contain rounded-xl" />
                </div>
                <div className='flex justify-evenly items-center h-full'>
                    <div className="flex-1 h-full flex justify-center items-center p-2">
                        <img src={Waterfallpic} alt="Waterfallpic" className="max-h-full max-w-full object-contain rounded-xl" />
                    </div>
                    <div className="flex-1 h-full flex justify-center items-center p-2">
                        <img src={Sunspherepic} alt="Sunspherepic" className="max-h-full max-w-full object-contain rounded-xl" />
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default PictureBox;
