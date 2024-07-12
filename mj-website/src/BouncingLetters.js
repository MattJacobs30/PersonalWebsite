import React from 'react';
import 'tailwindcss/tailwind.css';

const BouncingLetters = ({ text, color }) => {
  return (
    <div className={`flex space-x-1`}>
      {text.split('').map((char, index) => (
        <p
            key={index}
            className={`inline-block animate-bounce text-8xl font-bold`}
            style={{ animationDelay: `${index * 0.1}s`,
                color: color
        }}
        >
        {char}
      </p>
      ))}
    </div>
  );
};

export default BouncingLetters;
