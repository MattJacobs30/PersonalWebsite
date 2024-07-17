import React from 'react';
import '../App.css';


function MyAboutBox() {
    return (       
        <div className='w-auto h-auto p-4 border-2 border-gray-500 rounded-lg mt-4 bg-amber-200'>
            <p className='text-4xl'>
              About Me:
            </p>
            <p>
                Hello, thanks for visiting my website! My name is Matthew Jacobs and I am currently a 
                Junior majoring in Computer Engineering at the University of Tennessee at Knoxville. I 
                also have minors in Integrated Business and Engineering and Machine Learning. In my 
                personal life I love being active, experiencing nature, reading, and baseball. I also 
                love the Peanuts comics, which is what inspired the design of this website. I hope you 
                enjoy my website, and I would really love if you reached out to me using any of the 
                links provided. 
            </p>
        </div>
    );
}

export default MyAboutBox;
