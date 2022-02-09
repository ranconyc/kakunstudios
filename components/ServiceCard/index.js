import Image from 'next/image';

const ServiceCard = ({ service }) => {
  const { icon, name, description } = service;
  return (
    <div className="bg-white p-3 rounded h-33">
      <div className="bg-sand-200 rounded-full p-2 w-11 h-11 mb-1">
        <Image src={icon} alt="icon" width="44" height="44" />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
