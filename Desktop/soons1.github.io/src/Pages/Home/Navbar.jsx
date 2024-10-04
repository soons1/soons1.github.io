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
                <p className="hero--section--description">Soon Wei Soh</p>
                
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
                        <Link onClick={closeNav} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="MySkills" className="navbar--content">Tech Stack</Link>
                    </li>
                    <li>
                        <Link onClick={closeNav} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar--content">Projects</Link>
                    </li>
                    <li>
                        <Link onClick={closeNav} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="MyExperience" className="navbar--content">Experiences</Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeNav} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-outline-primary">Contact Me</Link>
        </nav>
    );
}

export default Navbar;
