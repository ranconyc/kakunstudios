import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  const { name, cover, slug } = project;

  return (
    <Link href={`/project/${slug}`}>
      <a>
        <div
          className={`relative rounded-lg overflow-hidden before:content-['${slug}'] before:absolute before:inset-0 before:bg-black/[.1]`}
        >
          <img src={cover} alt={cover} />
          <h3 className="absolute bottom-1 right-2 text-lg font-bold text-slate-50">
            {name}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
