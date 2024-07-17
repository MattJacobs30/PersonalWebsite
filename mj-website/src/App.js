import React from 'react';
import './App.css';
import Header from './Header';
import NameBox from './NameBox';
import DescribeBox from './DescribeBox';
import PictureBox from './PictureBox';

function App() {
  return (
    <div className='bg-gray-200'>
      <Header />
      <div className='flex justify-evenly mt-8'>
        <div className='flex-row mr-2 ml-4'>
          <NameBox />
          <DescribeBox/>
        </div>
        <PictureBox/>
      </div>
    </div>
  );
}

export default App;
