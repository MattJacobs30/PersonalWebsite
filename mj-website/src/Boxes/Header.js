import React from 'react';
import 'tailwindcss/tailwind.css';

import { Button } from '@material-tailwind/react';

function Header() {
    return (
        <header>
            {
                <div className='flex justify-evenly bg-amber-300 h-20'>
                    <div className='mt-5'>
                        <Button> Introduction </Button>
                    </div>
                    <div className='mt-5'>
                        <Button> About Me </Button>
                    </div>
                    <div className='mt-5'>
                        <Button> Experiences </Button>
                    </div>
                    <div className='mt-5'>
                        <Button> Projects </Button>
                    </div>
                    <div className='mt-5'>
                        <Button> Contact Me </Button>
                    </div>
                    <div className='mt-5'>
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <span>Resume</span>
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                </div>
            }
        </header>
    );
}

export default Header