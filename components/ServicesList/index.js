import { useState } from 'react';
import { servicesList } from '../../data';
import Section from '../Section';
import ServiceCard from '../ServiceCard';

const ServicesList = () => {
  const [services] = useState(servicesList);

  return (
    <Section padding id="services" className="pb-4 bt-4">
      <h2>שירותים</h2>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </Section>
  );
};

export default ServicesList;
