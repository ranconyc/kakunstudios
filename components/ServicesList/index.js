import { useState } from 'react';
import { servicesList } from '../../data';
import Section from '../Section';
import ServiceCard from '../ServiceCard';

const ServicesList = () => {
  const [services] = useState(servicesList);

  return (
    <Section padding id="services">
      <div className=" py-10">
        <h2 className="text-center">שירותים</h2>
        <div className="grid gap-5 mt-3 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServicesList;
