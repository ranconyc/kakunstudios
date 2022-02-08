import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { desktopImages, mobileImages } from '../data';
import useMediaQuery from '../hooks/useMediaQuery';
import ProjectsList from '../components/ProjectsList ';
import ServicesList from '../components/ServicesList';
import ImgSlider from '../components/ImgSlider';

export default function Home() {
  return (
    <Layout title="Kakun Studios || Home">
      <ImgSlider />
      <ServicesList />
      <ProjectsList />
    </Layout>
  );
}
