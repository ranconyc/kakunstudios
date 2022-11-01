import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  const { name, cover, slug } = project;

  return (
    <Link
      href={`/project/${slug}`}
      className={`flex relative rounded-lg overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-black/[.1]`}
    >
      <Image src={cover} alt={cover} width={1500} height={2250} />
      <h3 className="p-2 absolute bottom-0 right-0 text-lg font-bold text-slate-50 w-full bg-black/[.5] ">
        {name}
      </h3>
    </Link>
  );
};

export default ProjectCard;
