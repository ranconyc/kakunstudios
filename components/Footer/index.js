import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="pb-4 pt-2">
      <h3 className="mb-2">Contact Me</h3>
      <div className="flex justify-around">
        <div className=" bg-green-400 rounded-full w-fit p-4 text-4xl">
          <a href="whatsapp://send?phone=+19736503349&text=lets%2C%20work!">
            <IoLogoWhatsapp />
          </a>
        </div>
        <div className=" bg-pink-400 rounded-full w-fit p-4 text-4xl">
          <a href="instagram://user?username=tal">
            <IoLogoInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
