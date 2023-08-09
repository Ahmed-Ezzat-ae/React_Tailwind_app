import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [links] = useState(['Features', 'Team', 'Sign In']);

  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        headerRef.current.style.background = '#0c1524';
        headerRef.current.style.padding = '20px 0px';
      } else {
        headerRef.current.style.background = 'transparent';
        headerRef.current.style.paddingTop = '60px';
      }
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed w-full top-0 left-0 z-50 transition-all duration-300"
    >
      <div className="container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src="../assets/images/logo.svg" alt="logo" />
        </a>

        <nav>
          <ul className="flex items-center gap-[10px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="/"
                  className="text-white opacity-90 hover:opacity-100 hover:underline transition-opacity duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
