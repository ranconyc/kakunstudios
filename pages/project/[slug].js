import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { projectsList } from '../../data';
const ProjectPage = (props) => {
  const { slug } = props;
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    setCurrentProject(projectsList.filter((project) => project.slug === slug));
  }, [slug]);

  return (
    <Layout title="projects" padding>
      {currentProject?.name}
    </Layout>
  );
};

export default ProjectPage;

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  return { props: { slug } };
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
