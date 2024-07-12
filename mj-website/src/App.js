import React from 'react';
import './App.css';
import Picture from './picture.png'
import Header from './Header';
import NameBox from './NameBox';
import DescribeBox from './DescribeBox';
import PictureBox from './PictureBox';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='flex justify-evenly mt-8'>
        <div className='flex-row'>
          <NameBox />
          <DescribeBox/>
        </div>
        <PictureBox/>
      </div>
    </div>
  );
}

export default App;
