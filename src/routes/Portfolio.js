import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

import { PortfolioDisplay } from '../components';

import './Portfolio.scss';

function Portfolio(){
  const { sheets } = useOutletContext();

  return (
    <section className="portfolio" aria-labelledby="portfolio-header">
      <h2>Portfolio</h2>
      <p>From Roll20 character sheets to full stack applications, here are some of my favorite projects.</p>
      <PortfolioDisplay sheets={ sheets } />
    </section>
  )
};
export default Portfolio;