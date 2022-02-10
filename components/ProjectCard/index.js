import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  const { name, cover, slug } = project;

  return (
    <Link href={`/project/${slug}`}>
      <a>
        <div
          className={`relative   rounded-lg overflow-hidden before:content-['${slug}'] before:absolute before:inset-0 before:bg-black/[.1] h-96 w-82`}
        >
          <Image src={cover} alt={cover} layout="fill" />
          <h3 className="pr-2 pb-1 pt-2 absolute bottom-0 right-0 text-lg font-bold text-slate-50 w-full bg-black/[.5] ">
            {name}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
