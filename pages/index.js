import React from 'react';


import { client } from '@/lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  console.log(products, bannerData);
  return (
    <React.Fragment>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>
          Best Selling Products
        </h2>
        <p>Products of many variations</p>
      </div>
      <div className='products-container'>
        {
          products?.map(product => <Product key={product._id} product={product} />)
        }
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </React.Fragment>
  );
};

export const getServerSideProps = async () => {
  const pdQuery = '*[_type == "product"]';
  const products = await client.fetch(pdQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData }
  };
};

export default Home;