import React from 'react';
import './App.css';
import BouncingLetters from './BouncingLetters';

function NameBox() {
    return (
        <div className='w-auto h-auto p-4 border-2 border-gray-500 rounded-lg bg-yellow-200'>
            <p className='font-serif text-4xl'>
                Hello my name is
            </p>
            <BouncingLetters text='Matthew' color='#F3B71D' />
            <BouncingLetters text='Jacobs' color='#14130F' />
        </div>
    );
}

export default NameBox;
