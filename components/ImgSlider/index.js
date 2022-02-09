import { useState, useEffect } from 'react';
import { desktopImages, mobileImages } from '../../data';
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [images, setImages] = useState(desktopImages);

  const [imgIndex, setImgIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setImages(desktop ? desktopImages : mobileImages);
  }, [desktop]);

  useEffect(() => {
    const changeImg = setInterval(() => {
      imgIndex === images.length - 1
        ? setImgIndex(0)
        : setImgIndex((pre) => pre + 1);
    }, 2000);
    return () => clearInterval(changeImg);
  }, [images, imgIndex]);

  return (
    <Section className="mt--14 h-screen">
      <AnimatePresence initial={false} custom={images[imgIndex]}>
        <motion.div
          id={images[imgIndex]}
          className="h-full relative before:content-[''] before:absolute before:inset-0 before:bg-black/[.2] before:z-9"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2 }}
        >
          <Image src={images[imgIndex]} alt="img" layout="fill" />
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default ImgSlider;
