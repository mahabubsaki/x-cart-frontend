import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>SMALL TEXT</p>
                <h3>Mid Text</h3>
                <img src="" alt="headphones" className='hero-banner-image' />
                <div>
                    <Link href={'/products/ID'}>
                        <button type='button'>BUTTON TEXT</button>
                    </Link>
                    <div className='desc'>
                        <h5>Description</h5>
                        <p>DESCRIPTION</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;