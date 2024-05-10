import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const toggleNav = () => setNavActive(!navActive);
    const closeNav = () => setNavActive(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeNav;
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeNav;
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src='./img/logo.svg' alt='logoipsum' />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeNav} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="HeroSection" className="navbar--content">Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeNav} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">About Me</Link>
                    </li>
                    <li>
                        <Link onClick={closeNav} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar--content">Portfolio</Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeNav} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-outline-primary">Contact Me</Link>
        </nav>
    );
}

export default Navbar;
