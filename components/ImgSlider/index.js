import { useState, useEffect, useRef } from 'react';
import { desktopImages, mobileImages } from '../../data';
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowDownCircle } from 'react-icons/bs';
import Section from '../Section';
import Image from 'next/image';

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const ImgSlider = () => {
  const desktop = useMediaQuery('(min-width: 1024px)');
  const [images, setImages] = useState(desktop ? desktopImages : mobileImages);
  const [imgIndex, setImgIndex] = useState(0);
  const refEl = useRef(null);

  useEffect(() => {
    refEl?.current && console.log(refEl.current);
  }, [refEl]);

  useEffect(() => {
    setImages(desktop ? desktopImages : mobileImages);
  }, [desktop]);

  useEffect(() => {
    console.log(images[imgIndex]);
    const changeImg = setInterval(() => {
      setImgIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(changeImg);
  }, [images, imgIndex]);

  return (
    <Section className="h-screen relative before:content-[''] before:absolute before:inset-0 before:bg-black/[.4] before:z-19">
      <Image src={images[imgIndex].src} alt="img" fill />
      <BsArrowDownCircle className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-8 text-black animate-bounce drop-shadow-lg" />
    </Section>
  );
};

export default ImgSlider;
