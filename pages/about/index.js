import { about } from '../../data';
import Image from 'next/image';
import Layout from '../../components/Layout';

const AboutPage = () => {
  return (
    <Layout title="About" padding>
      <section className="pt-12 sm:flex sm:justify-between sm:items-center">
        <Image
          src={about.image}
          alt="me"
          width={640}
          height={894}
          className="rounded"
        />
        <div className="sm:w-1/2 sm:p-2">
          <h1>{about.title}</h1>
          <p>{about.content}</p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
