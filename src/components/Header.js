import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
function Header(){
  const location = useLocation();
  const activeRoute = (r) => location.pathname === `/${r}`;
  const [scrolling, setScrolling] = useState('');
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const swapPoint = 173;
      if(!scrolling && window.scrollY >=swapPoint){
        setScrolling(' scrolling');
      }else if(scrolling && window.scrollY < swapPoint){
        setScrolling('');
      }
    })
  });
  return (
    <header>
      <div className="hero"></div>
      <div className={`header-container overlay${scrolling}`}>
        <div className="headings">
          <h1>Scott Casey</h1>
          <span className="text-2 tiny-text">Kurohyou Studios</span>
        </div>
        <nav>
          <ul>
            <li className={activeRoute('') ? 'active' : ''}>
              <Link to="/">About</Link>
            </li>
            <li className={activeRoute('portfolio') ? 'active' : ''}>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className={activeRoute('contact') ? 'active' : ''}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className={activeRoute('resume') ? 'active' : ''}>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};
export default Header;