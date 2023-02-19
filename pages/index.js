import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <React.Fragment>
      <HeroBanner />
      <div className='products-heading'>
        <h2>
          Best Selling Products
        </h2>
        <p>Speakets of many variations</p>
      </div>
      <div className='products-container'>
        {
          ['p1', 'p2'].map(product => <div>{product}</div>)
        }
      </div>
      <FooterBanner />
    </React.Fragment>
  );
};

export default Home;