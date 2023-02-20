import { Product } from '@/components';
import { client, urlFor } from '@/lib/client';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
const SingleProduct = ({ product, products }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    return (

        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor(image && image[index])} alt="Product-Image" className='product-detail-image' />
                    </div>
                    <div className='small-images-container'>
                        {
                            image?.map((item, i) => <img src={urlFor(item)} className={i === index ? 'small-image selected-image' : 'small-image'} onMouseEnter={() => setIndex(i)} />)
                        }
                    </div>
                </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            {new Array(4).fill(0).map(x => <AiFillStar />)}
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className='price'>${price}</p>
                    <div className='quantity'>
                        <h3>Quantity: </h3>
                        <p className='quantity-desc'>
                            <span className='minus' onClick={(e) => console.log(e)}><AiOutlineMinus /></span>
                            <span className='minus' onClick={(e) => console.log(e)}>0</span>
                            <span className='plus' onClick={(e) => console.log(e)}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className='buttons'>
                        <button type='button' className='add-to-cart'>Add to Cart</button>
                        <button type='button' className='buy-now'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='maylike-products-wrapper'>
                <h2>You may also like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {
                            products.map(item => <Product key={item._id} product={item} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;
    const products = await client.fetch(query);
    const paths = products.map((pd) => ({
        params: {
            slug: pd.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == 'product' && slug.current == '${slug}'][0]`;
    const product = await client.fetch(query);
    const query2 = '*[_type == "product"]';
    const products = await client.fetch(query2);
    console.log(product);
    return {
        props: { product, products }
    };
};
export default SingleProduct;