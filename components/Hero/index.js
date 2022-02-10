import Image from 'next/image';
import React from 'react';
import Section from '../Section';

const Hero = () => {
  return (
    <Section
      noPadding
      className="relative isolate after:absolute after:inset-0 after:bg-black/[.2] h-screen overflow-hidden"
    >
      <Image
        src="/image3mb.jpg"
        alt="My work"
        width="768"
        height="1024"
        layout="fixed"
      />

      <h1 className="text-orange-500 absolute top-1/2 left-1/4">
        יחד נוכל להפוך את החלום למציאות
      </h1>
    </Section>
  );
};

export default Hero;
