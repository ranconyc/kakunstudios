import React from 'react';
import Slider from '../../components/Slider';
import { desktopImages, mobileImages } from '../../data';

const TestPage = () => {
  return (
    <div>
      <Slider slides={mobileImages} autoPlay />
    </div>
  );
};

export default TestPage;
