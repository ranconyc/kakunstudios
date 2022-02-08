import { useState, useEffect, useLayoutEffect } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { desktopImages, mobileImages } from '../data';
import useMediaQuery from '../hooks/useMediaQuery';
import Section from '../Section';

const ImgSlider = () => {
  const desktop = useMediaQuery('(min-width: 1024px)');
  const [images, setImages] = useState(desktopImages);

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImages(desktop ? desktopImages : mobileImages);
  }, [desktop]);

  useEffect(() => {
    const changeImg = setInterval(() => {
      imgIndex === images.length - 1
        ? setImgIndex(0)
        : setImgIndex((pre) => pre + 1);
    }, 3000);
    return () => clearInterval(changeImg);
  }, [images, imgIndex]);
  return (
    <Section className="h-scree">
      <Image
        className="h-full"
        src={images[imgIndex]}
        alt="img"
        layout="fill"
      />
    </Section>
  );
};

export default ImgSlider;
