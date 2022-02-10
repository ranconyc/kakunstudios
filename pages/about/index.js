import { about } from '../../data';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import useMediaQuery from '../../hooks/useMediaQuery';

const AboutPage = () => {
  const desktop = useMediaQuery('(min-width: 1024px)');
  return (
    <Layout title="About" padding>
      <Section
        padding
        className=" pt-10 pb-24 md:pt-24 sm:flex sm:justify-around sm:items-center sm:flex-row-reverse "
      >
        <Image
          src={about.image}
          alt="me"
          width={desktop ? 320 : 640}
          height={desktop ? 447 : 894}
          className="rounded"
        />
        <div
          className="relative isolate mt-12
      sm:w-1/2 sm:p-6 before:content-['']
        before:absolute before:bottom-5 before:right-0  before:h-60 before:w-60 before:rounded-full before:bg-sand-200 before:-z-10 "
        >
          <h1>{about.title}</h1>
          <p>{about.content}</p>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;
