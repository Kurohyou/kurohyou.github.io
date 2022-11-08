import { useEffect, useState } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

import './PortfolioDisplay.scss';

function PortfolioDisplay({ sheets }){
  const [ searchParams ] = useSearchParams();
  const projectIdx =+searchParams.get('project') || 0
  const nextIdx = projectIdx === sheets.length - 1 ?
    0 :
    projectIdx + 1;
  const previousIdx = projectIdx === 0 ?
    sheets.length - 1 :
    projectIdx - 1;
  const project = sheets[projectIdx];
  return project ?
      <div className="portfolio-display octagon-container">
        <div className="shadow-container">
          <div className="octagon">
            <Link className="btn nav-buttons" to={`?project=${previousIdx}`}><span className="btn material-icons">navigate_before</span></Link>
            <div className="image">
              <img loading="lazy" src={`/assets/images/${project.image}`} alt={project.imageAlt} />
            </div>
            <div className="header overlay">
              <h3>{project.Name}</h3>
              <a target="_blank" href={project.repositoryLink}>Github</a>
              <a target="_blank" href={project.siteLink}>Live</a>
            </div>
            <Link className="btn nav-buttons" to={`?project=${nextIdx}`}><span className="btn material-icons">navigate_next</span></Link>
            <p className="content">{project.fullDescription}</p>
          </div>
        </div>
      </div> :
      <span className="heading loading material-icons">rotate_right</span>;
};
export default PortfolioDisplay;