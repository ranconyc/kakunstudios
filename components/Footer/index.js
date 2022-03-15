import { useState } from 'react';
import { footerLinks } from '../../data';
import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io';
import ContactForm from '../ContactForm';

const Footer = () => {
  const [links] = useState(footerLinks);
  return (
    <footer
      className="pr-4 pl-4 pt-10 pb-5 sm:pr-8 sm:pl-8 border-2 border-green-500
      relative insolate after:content-[''] after:absolute after:inset-0 after:top-1/2 after:bg-sand-200 after:-z-10"
      id="contact"
    >
      <ContactForm />
      <div className="flex justify-around pt-5 pb-5">
        {links.map(({ name, path }) => (
          <div key={name} className="flex justify-around">
            <div className="bg-green-400 rounded-full w-fit p-4 text-2xl">
              <a href={path}>
                {name === 'whatsapp' && <IoLogoWhatsapp />}
                {name === 'instagram' && <IoLogoInstagram />}
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center">
        all rights reserved. {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
