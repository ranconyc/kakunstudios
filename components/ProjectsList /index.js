import { useState } from 'react';
import { projectsList } from '../../data';
import ProjectCard from '../ProjectCard';
import Section from '../Section';

const ProjectsList = () => {
  const [projects] = useState(projectsList);

  return (
    <Section padding id="projects" className="pb-4">
      <h2>פרויקטים</h2>
      <div className="grid sm:grid-cols-3 gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsList;
