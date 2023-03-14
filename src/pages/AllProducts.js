import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductImg1 from '../assets/product1.jpeg';
import ProductImg2 from '../assets/product2.jpeg';
import ProductImg3 from '../assets/product3.jpeg';
import ProductImg4 from '../assets/product4.jpeg';
import ProductImg5 from '../assets/product5.jpeg';
import ProductImg6 from '../assets/product6.jpeg';
import ProductImg7 from '../assets/product7.jpeg';
import ProductImg8 from '../assets/product8.jpeg';


const ProductInfo = [
    {
        image: ProductImg1,
        name: 'Fancy Sensational Women Gown',
        price: 500,
        discounted_price: 314,
        delivery_type: 'Free Delivery',
        rating: 4.0,
    },
    {
        image: ProductImg2,
        name: 'Fashionable Modern Men Caps & Hats',
        price: 387,
        discounted_price: 300,
        delivery_type: 'Free Delivery',
        rating: 3.5,
    },
    {
        image: ProductImg3,
        name: 'Stylish Latest Men Track Pants',
        price: 361,
        delivery_type: 'Free Delivery',
        rating: 3.8,
        trusted: 'true'
    },
    {
        image: ProductImg4,
        name: 'Pack of 2 Youth First Men Shirts',
        price: 800,
        delivery_type: 'Free Delivery',
        rating: 3.5,
    },
    {
        image: ProductImg5,
        name: 'Comfy Retro Men Sweatshirts',
        price: 379,
        delivery_type: 'Free Delivery',
        rating: 4.3,
    },
    {
        image: ProductImg6,
        name: 'Classic Retro Men Sweatshirts',
        price: 299,
        delivery_type: 'Free Delivery',
        rating: 3.9,
        trusted: 'true'
    },
    {
        image: ProductImg7,
        name: 'Aakarsha Sensational Women Kurta Sets',
        price: 309,
        delivery_type: 'Free Delivery',
        rating: 3.8,
    },
    {
        image: ProductImg8,
        name: 'Austin wood Men Tshirts',
        price: 318,
        delivery_type: 'Free Delivery',
        rating: 4.0,
        trusted: 'true'
    }
]

export const Collection = () => {
    const navigate = useNavigate();

    const Details = (product) => {
        navigate('/product-page', {state: product})
        console.log(product, "fdgsdfgd")
    }

    return (
        <div className='products-wrapper'>
            <div className='row g-3'>
                {ProductInfo.map((product, index) => (
                    <div className='col-6 col-xxl-3 col-lg-4' key={index}>
                        <div className='prdct-item border rounded overflow-hidden h-100' onClick={() => Details(product)}>
                            <div className='prdct-img'>
                                <img className='img-fluid w-100' src={product.image} alt={product.image} />
                                <div className='sale-timer position-absolute bottom-0 start-0 px-2'>20h : 07m : 17s</div>
                            </div>
                            <div className='prdct-detail px-2 px-lg-3 pt-2 pb-3'>
                                <div className='prdct-name fw-medium mb-2 lh-1'>{product.name}</div> 
                                <div className='prdct-price d-flex flex-wrap align-items-center fw-medium mb-1'>
                                    <span className='price fs-5 fw-semibold me-1'>₹{product.price}</span>
                                    <span className='discounted-price fs-5 txt-secondary2 me-1 d-none'>₹450</span>
                                    <span className='me-1'><sub className='txt-secondary'>onwards</sub></span>
                                    <span className='off-label fw-semibold text-success me-1'>10% off</span>
                                </div>
                                <div className='prdct-delivery mb-2'>
                                    <span className="badge rounded-pill text-bg-secondary fw-medium">{product.delivery_type}</span>
                                </div>
                                <div className='prdct-review'>
                                    <div className='d-flex flex-wrap align-items-center gap-2'>
                                        <span className="badge rounded-pill text-bg-success fw-medium">{product.rating} <i className="bi bi-star-fill"></i></span><span className='title-label txt-secondary2 fw-medium'>29 Reviews</span>
                                    { product.trusted ? <div className='ve-trusted'>VE Trusted</div> : '' }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
