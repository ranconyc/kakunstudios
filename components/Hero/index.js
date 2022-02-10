import Image from 'next/image';
import React from 'react';
import Section from '../Section';

const Hero = () => {
  return (
    <Section noPadding className=" relative h-screen">
      <h1 className="text-orange-500 absolute top-1/2 right-1/4 left-1/4">
        ביחד נהפוף חלום למציאות
      </h1>
    </Section>
  );
};

export default Hero;
