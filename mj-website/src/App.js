import React from 'react';
import './App.css';
import Header from './Boxes/Header';
import NameBox from './Boxes/NameBox';
import DescribeBox from './Boxes/DescribeBox';
import PictureBox from './Boxes/PictureBox';
import Footer from './Boxes/Footer';
import MyAboutBox from './Boxes/AboutBox';
import ExperienceBox from './Boxes/ExperienceBox';
import ProjectsBox from './Boxes/ProjectsBox';
import ContactBox from './Boxes/ContactBox';

function App() {
  return (
    <div>
      <div className='bg-gray-200 flex-col justify-start'>
        <Header />
        <div className='flex justify-evenly mt-8'>
          <div className='flex-row mr-2 ml-4'>
            <NameBox />
            <DescribeBox/>
          </div>
          <PictureBox/>
        </div>
        <MyAboutBox/>
        <ExperienceBox />
        <ProjectsBox />
        <ContactBox />
      </div>
      <Footer />
    </div>
  );
}

export default App;
