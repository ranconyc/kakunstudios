import Image from 'next/image';
import React from 'react';
import Section from '../Section';

const Hero = () => {
  return (
    <Section
      noPadding
      className="relative isolate after:absolute after:inset-0 after:bg-withe/[.5] h-screen overflow-hidden"
    >
      <Image
        src="/image3mb.jpg"
        alt="My work"
        width="768"
        height="1524"
        fixed="fixed"
      />
      <h2 className="absolute  top-1/2 left-1/4 -translate-x-1/4 -translate-y-3/4 text-orange-500 ">
        יחד נוכל להפוך את החלום למציאות
      </h2>
    </Section>
  );
};

export default Hero;
