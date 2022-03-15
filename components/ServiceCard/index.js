import Image from 'next/image';

const ServiceCard = ({ service }) => {
  const { icon, name, description } = service;
  return (
    <div className="flex items-center bg-white p-5 rounded h-33">
      <div className="bg-sand-200 rounded-full p-2 w-11 h-11 mb-1 ml-4">
        <Image src={icon} alt="icon" width="44" height="44" />
      </div>
      <div>
        <h4 className="">{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
