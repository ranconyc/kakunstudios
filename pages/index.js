import Layout from '../components/Layout';
import ProjectsList from '../components/ProjectsList ';
import ServicesList from '../components/ServicesList';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Layout noPadding title="Kakun Studios">
      <Hero />
      <ServicesList />
      <ProjectsList />
    </Layout>
  );
}
