import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">YF</span>

          <span className="brand-text">
            <strong>YUGA</strong>
            <small>DAIRY FARM</small>
          </span>
        </Link>

        <nav className={`nav-links ${isOpen ? 'nav-open' : ''}`}>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/our-farm"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={closeMenu}
          >
            Our Farm
          </NavLink>

          <a href="#milk" className="nav-link" onClick={closeMenu}>
            Our Milk
          </a>

          <a href="#gallery" className="nav-link" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contact"
            className="nav-contact"
            onClick={closeMenu}
          >
            Talk to us
            <ArrowUpRight size={15} strokeWidth={1.8} />
          </a>

        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;