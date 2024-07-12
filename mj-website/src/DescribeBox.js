import React from 'react';
import './App.css';
import BouncingLetters from './BouncingLetters';

function DescribeBox() {
    return (       
        <div className='w-auto h-auto p-4 border-2 border-gray-300 rounded-lg mt-4'>
            <p className='font-serif text-4xl'>
              I am a
            </p>
            <div>
              <BouncingLetters text='Matthew' color='#F3B71D' />
              <BouncingLetters text='Jacobs' color='#14130F' />
            </div>
          </div>
    );
}

export default DescribeBox;
