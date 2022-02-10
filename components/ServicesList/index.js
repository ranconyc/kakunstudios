import { useState } from 'react';
import { servicesList } from '../../data';
import Section from '../Section';
import ServiceCard from '../ServiceCard';

const ServicesList = () => {
  const [services] = useState(servicesList);

  return (
    <Section
      padding
      id="services"
      className="pb-10 pt-10 relative insolate overflow-hidden before:absolute before:top-0 before:-left-1/2 before:-z-10 before:w-96 before:h-96 before:bg-sand-200 before:rounded-full
      after:absolute after:bottom-0 after:-right-1/2 after:-z-10 after:w-96 after:h-96 after:bg-sand-200 after:rounded-full
      md:after:-right-1/4 md:before:-left-1/4 "
    >
      <h2>שירותים</h2>
      <div className="grid gap-5 mt-3 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </Section>
  );
};

export default ServicesList;
