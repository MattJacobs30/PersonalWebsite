import React from 'react';
import 'tailwindcss/tailwind.css';

function Header() {
    return (
        <header>
            {
                <div className='flex justify-evenly bg-amber-200 h-20'>
                    <div>
                        <button> Introduction </button>
                    </div>
                    <div>
                        <button> About Me </button>
                    </div>
                    <div>
                        <button> Experiences </button>
                    </div>
                    <div>
                        <button> Projects </button>
                    </div>
                    <div>
                        <button> Contact Me </button>
                    </div>
                    <div>
                        <button> Resume</button>
                    </div>
                </div>
            }
        </header>
    );
}

export default Header