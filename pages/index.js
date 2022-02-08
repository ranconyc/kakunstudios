import { useState, useEffect, useLayoutEffect } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import {
  desktopImages,
  mobileImages,
  servicesList,
  projectsList,
} from '../data';
import useMediaQuery from '../hooks/useMediaQuery';
import ProjectsList from '../components/ProjectsList ';
import ServicesList from '../components/ServicesList';

export default function Home() {
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
    <Layout title="Kakun Studios || Home" padding>
      <section className="bg-cover h-screen before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-black/[.2] before:z-9">
        <Image
          className="h-full"
          src={images[imgIndex]}
          alt="img"
          layout="fill"
        />
      </section>
      <ServicesList />
      <ProjectsList />
    </Layout>
  );
}
