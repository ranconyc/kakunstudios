import Layout from '../components/Layout';
import ProjectsList from '../components/ProjectsList ';
import ServicesList from '../components/ServicesList';
import Section from '../components/Section';
import { about } from '../data';
import ImgSlider from '../components/ImgSlider';
import About from '../components/About';

export default function Home() {
  return (
    <Layout
      noPadding
      title="טל קקון כהן עיצוב פנים"
      description="סטודיו לעיצוב פנים טל קקון כהן מציע מגוון שירותים לעיצוב חללים פרקטים ויפים"
    >
      <ImgSlider />
      <About />
      <ProjectsList />
    </Layout>
  );
}
