import { useRef, useEffect } from 'react'

const HeaderNavMenu = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navlistRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current.classList.toggle('sticky', window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggledMenu = () => {
    menuRef.current.classList.toggle('bx-x');
    navlistRef.current.classList.toggle('open');
  };

  return (
    <header ref={headerRef}>
      <a href="#" className="logo">
        <img src="src/img/logo.png" style={{ width: "40px", height: "auto" }} />
      </a>
      <ul className="navlist" ref={navlistRef}>
        <li>
          <a href="#home" className="active" onClick={toggledMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggledMenu}>Información</a>
        </li>
        <li>
          <a href="#gallery" onClick={toggledMenu}>Galería</a>
        </li>
        <li>
          <a href="#contacto">
            <i className="bx bx-phone" onClick={toggledMenu}></i> Contacto
          </a>
        </li>
      </ul>
      <div className="bx bx-menu" id="menu-icon" ref={menuRef} onClick={toggledMenu}></div>
    </header>
  );
};

export default HeaderNavMenu;