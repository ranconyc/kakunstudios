import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Image from 'next/image';
import { projectsList } from '../../data';
const ProjectPage = ({ project, ...props }) => {
  console.log(project);
  return (
    <Layout title="projects" padding>
      <Section title={project.name}>
        <h1>{project?.name}</h1>
        {project.images.map((image) => (
          <Image
            key={image.name}
            src={image.path}
            alt={image.name}
            width={100}
            height={300}
          />
        ))}
      </Section>
    </Layout>
  );
};

export default ProjectPage;

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const project = projectsList.filter((project) => project.slug === slug)[0];

  return { props: { project } };
};

export const getStaticPaths = async () => {
  const paths = projectsList.map((project) => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });
  return { paths, fallback: false };
};
