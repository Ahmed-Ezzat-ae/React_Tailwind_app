import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [contact] = useState([
    {
      icon: 'icon-phone.svg',
      text: '+201212121212',
    },
    {
      icon: 'icon-email.svg',
      text: 'example@gmail.com',
    },
  ]);

  const [links] = useState([
    'About Us',
    'Contact Us ',
    'Jobs',
    'Terms',
    'Press',
    'Privacy',
    'Blog',
  ]);

  const [socialIcons] = useState(['facebook', 'twitter', 'instagram']);

  return (
    <footer className="bg-footerBG pt-[320px] pb-[100px] md:pt-[200px] text-white">
      <div className="container">
        <a href="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>

        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="/src/assets/images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="text-small tracking-[.8px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              libero odit, inventore sequi, fuga sint unde nam veniam nulla enim
              dolorum dicta.
            </p>
          </div>

          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/src/assets/images/${item.icon}`}
                  alt="contact-img"
                  className="w-[18px] h-[18px]object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-btnBG2 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((item) => (
              <li key={item}>
                <a href="/" className="group" aria-label={item}>
                  <div className="w-[40px] h-[40px] element-center border-[1px] rounded-full">
                    {item === 'facebook' ? (
                      <FaFacebookF className="group-hover:text-btnBG transition-colors duration-300" />
                    ) : item === 'twitter' ? (
                      <FaTwitter className="group-hover:text-btnBG transition-colors duration-300" />
                    ) : (
                      <FaInstagram className="group-hover:text-btnBG transition-colors duration-300" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
