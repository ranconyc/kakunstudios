import { about } from '../../data';
import Image from 'next/image';
import Section from '../Section';
import useMediaQuery from '../../hooks/useMediaQuery';
import ServicesList from '../ServicesList';

const About = () => {
  const desktop = useMediaQuery('(min-width: 1024px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <Section padding id="about">
        <div className="border-2 border-green-500 py-10 md:flex md:justify-around md:items-center md:flex-row-reverse sm:flex sm:justify-around sm:items-center sm:flex-row-reverse">
          <div className="md:w-72">
            <Image
              src={about.image}
              alt="me"
              width={512}
              height={768}
              className="rounded"
            />
          </div>
          <div
            className="mt-12 flex-1
      md:mt-0 md:w-1/2 sm:w-1/3 sm:p-6  "
          >
            <h1>{about.title}</h1>
            <p>{about.content}</p>
          </div>
        </div>
      </Section>
      <ServicesList />
    </>
  );
};

export default About;
