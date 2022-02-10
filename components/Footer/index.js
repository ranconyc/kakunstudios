import { useState, useEffect } from 'react';
import { footerLinks } from '../../data';
import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io';
import { BsPhone, BsFillPersonFill } from 'react-icons/bs';
import Input from '../Input';

const Footer = () => {
  const [links] = useState(footerLinks);
  const [values, setValues] = useState({ name: '', phone: '' });
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((pre) => {
      return { ...pre, [name]: value };
    });
  };

  useEffect(() => {
    const { name, phone } = values;
    if (!name)
      setError((pre) => {
        return { ...pre, name: 'Name is required' };
      });
    if (!phone)
      setError((pre) => {
        return { ...pre, phone: 'Phone is required' };
      });
    if (name && phone) setFilled(true);
  }, [values]);

  const handleSubmit = () => {
    console.log(values);
    // send if by mail or text to tal
  };

  return (
    <footer className="border-2 border-green-400 pr-4 pl-4 pt-10 pb-5 sm:pr-8 sm:pl-8 ">
      <h3 className="mb-2 ">צור קשר</h3>
      <div className="">
        <div className="flex flex-col pt-5 pb-5">
          <p>תשאיר פרטים אחזור אליך בהקדם</p>
          <Input
            icon={<BsFillPersonFill />}
            label="שם"
            value={values.name}
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          />
          <Input
            icon={<BsPhone />}
            label="פלאפון"
            type="tel"
            value={values.phone}
            id="phone"
            name="phone"
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            className={` ${
              filled
                ? 'border-orange-400 bg-orange-400 text-sand-100'
                : 'border-gray-400 bg-gray-400 text-sand-100'
            }  border-2 rounded  text-lg font-bold mt-2`}
          >
            שלח
          </button>
        </div>
        <div className="flex">
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
      </div>
    </footer>
  );
};

export default Footer;
