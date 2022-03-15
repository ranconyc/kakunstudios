import { useState } from 'react';
import { projectsList } from '../../data';
import ProjectCard from '../ProjectCard';
import Section from '../Section';

const ProjectsList = () => {
  const [projects] = useState(projectsList);

  return (
    <Section padding id="projects" className="py-10">
      <h2 className="w-fit">פרויקטים</h2>
      <div className="grid mt-3 sm:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsList;
