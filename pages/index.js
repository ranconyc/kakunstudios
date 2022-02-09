import Layout from '../components/Layout';
import ProjectsList from '../components/ProjectsList ';
import ServicesList from '../components/ServicesList';
import ImgSlider from '../components/ImgSlider';

export default function Home() {
  return (
    <Layout noPadding title="Kakun Studios">
      <ImgSlider />
      <ServicesList />
      <ProjectsList />
    </Layout>
  );
}
