import { useEffect, useState } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

import './PortfolioNav.scss';

function PortfolioNav({ sheets }){
  const [ searchParams ] = useSearchParams();
  const [ navIMod, setNavMod ] = useState(Math.floor(sheets.length / 2));

  const projectLinks = sheets.map((sheet,index) => {
    return {index,jsx:(
      <li className={index === +searchParams.get('project') ? 'active-highlight py-gap' : 'py-gap'} key={index}>
        <Link to={`?project=${index}`}>{sheet.shortName || sheet.Name}</Link>
      </li>
    )}
  });
  const sortedProjectLinks = projectLinks.sort(({index:a},{index:b}) => {
    const pi = +searchParams.get('project') || 0;
    let calcAIndex = a - pi + navIMod;
    if(calcAIndex < 0){
      calcAIndex = projectLinks.length + calcAIndex;
    }else if(calcAIndex >= projectLinks.length - 1){
      calcAIndex = 0 + projectLinks.length - calcAIndex;
    }
    let calcBIndex = b - pi + navIMod;
    if(calcBIndex < 0){
      calcBIndex = projectLinks.length + calcBIndex;
    }else if(calcBIndex >= projectLinks.length - 1){
      calcBIndex = 0 + projectLinks.length - calcBIndex;
    }
    return (calcAIndex % projectLinks.length) - 
      (calcBIndex % projectLinks.length);
  }).map(o => o.jsx);
  const incrementNav = ()=>{
    console.log('old navI',navIMod);
    setNavMod(navIMod + 1)
  };
  const decrementNav = ()=>{
    console.log('old navI',navIMod);
    setNavMod(navIMod - 1)
  };
  return (
    <div className="portfolio-nav octagon-container">
      <div className="shadow-container">
        <nav className="octagon">
          <button className='material-icons btn' onClick={incrementNav}>navigate_before</button>
      
          <div className="marquee-wrapper">
            <ul className="no-marker m-0">
              { sortedProjectLinks.length ?
                  sortedProjectLinks :
                  <li className="py-gap"><span className="loading material-icons">rotate_right</span></li>
              }
            </ul>
          </div>
          <button className='material-icons btn' onClick={decrementNav}>navigate_next</button>
        </nav>
      </div>
    </div>
  );
};
export default PortfolioNav;