import React, { useState } from 'react';
import FreeDeliveryImg from '../assets/icons/freeDelivery.svg';
import CashOnDelivery from '../assets/icons/cod.svg';
import ReturnImg from '../assets/icons/easyReturns.svg';

// Slider Images
import ProductThumb2 from '../assets/product-thumb2.webp';
import ProductThumb3 from '../assets/product-thumb3.webp';
import ProductThumb4 from '../assets/product-thumb4.webp';
import ProductThumb5 from '../assets/product-thumb5.webp';
import ProductThumb6 from '../assets/product-thumb6.webp';

// Slider NPM
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

// Slick Slider Imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Custom Imports
import { Collection } from './AllProducts';
import { useLocation } from 'react-router-dom';

const images = [
    {
        original: ProductThumb2,
        thumbnail: ProductThumb2,
    },
    {
        original: ProductThumb3,
        thumbnail: ProductThumb3,
    },
    {
        original: ProductThumb4,
        thumbnail: ProductThumb4,
    },
    {
        original: ProductThumb5,
        thumbnail: ProductThumb5,
    },
    {
        original: ProductThumb6,
        thumbnail: ProductThumb6,
    },
];

const ReviewDetails = [
    {
        name: 'Anamika Rathor',
        image: 'https://images.meesho.com/images/reseller/profile_image/927389f459439486b25c26fe49fab3b6_4d9a279793600_1670729458692_512.jpg',
        date: '4 Aug 2022',
        comment: 'Very nice product and exactly same as we think 👗 💝.',
        rating: '5.0',
    },
    {
        name: 'Rubi Agarwal',
        image: 'https://images.meesho.com/images/reseller/profile_image/0ed9e8201c8f34b5a598079a394cd1b7_0ae717db6f692_1650254139632_512.jpg',
        date: '16 Oct 2022',
        comment: 'Ye kapda bahot acha hai is ki quality achi hai or ye dekhane main bhi acha hai aap use try Kare 😊👍👌',
        rating: '4.5',
    },
    {
        name: 'Aman Rathor',
        image: 'https://images.meesho.com/images/reseller/profile_image/927389f459439486b25c26fe49fab3b6_4d9a279793600_1670729458692_512.jpg',
        date: '14 Aug 2021',
        comment: 'This is a very nice product go for it ❤️❤️❤️',
        rating: '5.0',
    },
    {
        name: 'Dolly Arya',
        image: 'https://images.meesho.com/images/reseller/profile_image/0ed9e8201c8f34b5a598079a394cd1b7_0ae717db6f692_1650254139632_512.jpg',
        date: '26 Oct 2022',
        comment: 'As shown as picture,too good dress,thanks meeso 😍',
        rating: '4.5',
    },
    {
        name: 'Anubhav Jaiz',
        image: 'https://images.meesho.com/images/reseller/profile_image/0ed9e8201c8f34b5a598079a394cd1b7_0ae717db6f692_1650254139632_512.jpg',
        date: '16 Feb 2022',
        comment: 'Awesome product and fully satisfied.',
        rating: '5.0',
    },
    {
        name: 'Chandini Badatya',
        image: 'https://images.meesho.com/images/reseller/profile_image/0ed9e8201c8f34b5a598079a394cd1b7_0ae717db6f692_1650254139632_512.jpg',
        date: '16 Oct 2022',
        comment: 'So quiet and clothes is very good fiting very good I am very happy',
        rating: '3.5',
    },
];

export const ProductPage = () => {
    const { state } = useLocation();
    // console.log(state, "Hello")

    const [showData, setShowData] = useState('');
    // const [count, setCount] = useState(0);

    const settings = {
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const showDetails = (info) => {
        setShowData(info);
    }

    return (
        <div className='product-page pt-4 pb-5 py-lg-5'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='prdct-img-wrpr'>
                            <div className='prdct-img mb-4'>
                                <ImageGallery items={images} showBullets showNav={false} />
                            </div>

                            <div className='buy-btn-wrpr d-flex gap-3'>
                                <button className='btn btn-outline-dark rounded-1 w-100 py-2'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="greyBase">
                                        <path d="M4.987 5.469l1.848 7.2a1 1 0 00.968.752h8.675a1 1 0 00.962-.726l1.697-5.952a1 1 0 00-.962-1.274H4.987zm0 0l-.943-3.248a1 1 0 00-.96-.721H1" stroke="#333" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <ellipse cx="9.421" cy="16.744" rx="1.243" ry="1.256" stroke="#333" strokeWidth="1.5"></ellipse>
                                        <ellipse cx="15.221" cy="16.744" rx="1.243" ry="1.256" stroke="#333" strokeWidth="1.5"></ellipse>
                                    </svg> Add to Cart
                                </button>
                                <button className='btn btn-custom rounded-1 w-100 py-2'><i className="bi bi-chevron-double-right"></i> Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-5 mt-lg-0'>
                        <div className='prdct-dtls-wrpr'>
                            <div className="card border prdct-details mb-3">
                                <div className="card-body">
                                    <div className="prdct-detail">
                                        <div className="prdct-name txt-secondary fw-medium mb-2 lh-1 head-4">{state.name}</div>

                                        <div className="prdct-price d-flex flex-wrap align-items-center h5 fw-medium mb-2">
                                            <span className="discounted-price text-body me-2 h4 fw-semibold mb-0">₹{state.discounted_price}</span>
                                            <span className="price me-1 txt-secondary h5 fw-medium mb-0"><s>{state.price}</s></span>
                                            <span className="off-label text-success me-1">10% off</span>
                                            <div className="ve-trusted">VE Trusted</div>
                                        </div>
                                        <div className="prdct-review mb-2">
                                            <div className="d-flex flex-wrap align-items-center gap-2">
                                                <span className="badge rounded-pill text-bg-success p-2">3.5 <i className="bi bi-star-fill"></i></span>
                                                <span className="title-label txt-secondary fw-medium">12842 Ratings, 1438 Reviews</span>
                                            </div>
                                        </div>
                                        <div className="prdct-delivery">
                                            <span className="badge rounded-pill text-bg-secondary fw-medium">{state.delivery_type}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border size-details mb-3">
                                <div className="card-body">
                                    <div className="header-label fs-5 fw-medium mb-2">Select Size</div>
                                    <div className='all-sizes'>
                                        <span className="prdct-size">S</span>
                                        <span className="prdct-size">M</span>
                                        <span className="prdct-size">L</span>
                                        <span className="prdct-size">XL</span>
                                        <span className="prdct-size">XXl</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card border product-details mb-3">
                                <div className="card-body">
                                    <div className="header-label fs-5 fw-medium mb-2">Product Details</div>
                                    <div className="product-description">
                                        <p className='mb-0'>Name&nbsp;:&nbsp;HIP HOP FASHION sweatshirt</p>
                                        <p className='mb-0'>Fabric&nbsp;:&nbsp;Cotton Blend</p>
                                        <p className='mb-0'>Sleeve Length&nbsp;:&nbsp;Long Sleeves</p>
                                        <p className='mb-0'>Pattern&nbsp;:&nbsp;Dyed/ Washed</p>
                                        <p className='mb-0'>Net Quantity (N)&nbsp;:&nbsp;1</p>
                                        <p className='mb-0'>Sizes&nbsp;:&nbsp;</p>
                                        <p className='mb-0'>S (Chest Size&nbsp;:&nbsp;18 in, Length Size: 26.5 in)</p>
                                        <p className='mb-0'>M (Chest Size&nbsp;:&nbsp;19 in, Length Size: 27 in)</p>
                                        <p className='mb-0'>L (Chest Size&nbsp;:&nbsp;20 in, Length Size: 27.5 in)</p>
                                        <p className='mb-0'>XL (Chest Size&nbsp;:&nbsp;21 in, Length Size: 28 in)</p>
                                        <p className='mb-0'>XXL (Chest Size&nbsp;:&nbsp;22 in, Length Size: 29 in)</p>
                                        <p className='mb-0'></p>
                                        <p className='mb-0'>GENTLE MECHINE WASH OR HAND WASH</p>
                                        <p className='mb-0'>Country of Origin&nbsp;:&nbsp;India</p>

                                        {/* Start More Info Modal */}
                                        <div className='more-info-wrpr'>
                                            <button type="button" className="btn btn-link txt-primary fw-medium mt-3 p-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                More Information
                                            </button>

                                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title fw-medium head-5" id="exampleModalLabel">INFORMATION</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div color="white" className="sc-bcXHqe dHAa-dC">
                                                                <div className="border-1 border-bottom border-grey pb-3 mb-3">
                                                                    <div className='info-label text-body mb-1'>Manufacturer Information</div>
                                                                    <div className='info-ans txt-secondary fw-medium'>HIP HOP FASHION</div>
                                                                </div>
                                                                <div className="border-1 border-bottom border-grey pb-3 mb-3">
                                                                    <div className='info-label text-body mb-1'>Importer Information</div>
                                                                    <div className='info-ans txt-secondary fw-medium'>HIP HOP FASHION</div>
                                                                </div>
                                                                <div className="border-1 border-bottom border-grey pb-3 mb-3">
                                                                    <div className='info-label text-body mb-1'>Packer Information</div>
                                                                    <div className='info-ans txt-secondary fw-medium'>HIP HOP FASHION</div>
                                                                </div>
                                                                <div className="border-1 border-bottom border-grey pb-3 mb-3">
                                                                    <div className='info-label text-body mb-1'>Net Weight(g)</div>
                                                                    <div className='info-ans txt-secondary fw-medium'>219</div>
                                                                </div>
                                                                <div className="border-1 border-bottom border-grey pb-3 mb-3">
                                                                    <div className='info-label text-body mb-1'>Supplier Information</div>
                                                                    <div className='info-ans txt-secondary fw-medium'>HIPHOP FASHION APPARELS c/o Meesho</div>
                                                                </div>
                                                                <div className="border-1 border-bottom border-grey pb-3 mb-3">
                                                                    <div className='info-label text-body mb-1'>Contact Information</div>
                                                                    <div className='info-ans txt-secondary fw-medium'>query@meesho.com</div>
                                                                </div>
                                                                <div className="pb-3">
                                                                    <div className='info-label text-body mb-1'>Legal Disclaimer</div>
                                                                    <div className='info-ans txt-secondary fw-medium'>Suppliers listing their products on Meesho are solely responsible for the accuracy of product information. You shall use the products in safe and legal manner, and it shall not be used for any illegal purpose. The actual product packaging, material and design may contain more or different information as mentioned here including nutritional information, declarations, claims, instructions of use, warning, disclaimers et. al. It is recommended you read the product label before using/consuming any products and do not solely rely on the product information provided on this platform. Meesho shall not assume any loss, claims, damages, or injury, that may arise from the violent or illegal use, or misuse of the product sold by the suppliers over Meesho.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End More Info Modal */}
                                    </div>
                                </div>
                            </div>
                            <div className="card border sold-by mb-3">
                                <div className="card-body">
                                    <div className="header-label fs-5 fw-medium mb-2">Sold By</div>
                                    <div className='d-flex align-items-center gap-3 mt-3'>
                                        <div className=''>
                                            <img className='border border-grey rounded-circle' src="https://images.meesho.com/images/pow/shop_profile.png" alt='' style={{ maxWidth: '72px' }} />
                                        </div>
                                        <div className='d-flex align-items-center flex-wrap justify-content-between gap-2 w-100'>
                                            <div className='shop-name head-5'>Pavaishna Fashion</div>
                                            <button className='btn btn-custom-outline rounded-1 fw-medium py-2 px-4'>View Shop</button>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-3 gap-xl-5 mt-1 ps-3' style={{ marginLeft: '72px' }}>
                                        <div className="d-flex flex-column justify-content-between text-left">
                                            <div className='store-rating'>
                                                <span className='badge rounded-pill text-bg-success p-2'>4.0 <i className="bi bi-star-fill"></i></span>
                                            </div>
                                            <div className='store-total-rating txt-secondary'>13,020 Ratings</div>
                                        </div>
                                        <div className='d-flex flex-column justify-content-between text-left'>
                                            <div className='head-5'>332</div>
                                            <div className='txt-secondary'>Followers</div>
                                        </div>
                                        <div className='d-flex flex-column justify-content-between text-left'>
                                            <div className='head-5'>7</div>
                                            <div className='txt-secondary'>Products</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border ratings-and-reviews mb-3">
                                <div className="card-body">
                                    <div className='header-label fs-5 fw-medium mb-4'>Product Ratings & Reviews</div>
                                    <div className='d-flex align-items-center justify-content-between gap-3 gap-xl-4'>
                                        <div className='left-sec'>
                                            <div className='prdct-overall-rating head-1 text-success d-flex align-items-center mb-1'>4.0 <i className="bi bi-star-fill"></i></div>
                                            <div className='total-rate-review'>
                                                <div className='small txt-secondary fw-medium'>12520&nbsp; Ratings,</div>
                                                <div className='small txt-secondary fw-medium'>1418&nbsp; Reviews</div>
                                            </div>
                                        </div>

                                        <div className='right-sec w-100'>
                                            <div className='d-flex align-items-center justify-content-between gap-2 mb-3'>
                                                <div className='rating-status fw-medium text-end'>Excellent</div>
                                                <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: '75%' }}></div>
                                                </div>
                                                <div className='total-rating fw-medium'>7220</div>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-between gap-2 mb-3'>
                                                <div className='rating-status fw-medium text-end'>Very Good</div>
                                                <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: '70%' }}></div>
                                                </div>
                                                <div className='total-rating fw-medium'>1690</div>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-between gap-2 mb-3'>
                                                <div className='rating-status fw-medium text-end'>Good</div>
                                                <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" style={{ width: '55%' }}></div>
                                                </div>
                                                <div className='total-rating fw-medium'>1289</div>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-between gap-2 mb-3'>
                                                <div className='rating-status fw-medium text-end'>Average</div>
                                                <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar bg-cyan progress-bar-striped progress-bar-animated" style={{ width: '40%' }}></div>
                                                </div>
                                                <div className='total-rating fw-medium'>861</div>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-between gap-2 mb-3'>
                                                <div className='rating-status fw-medium text-end'>Poor</div>
                                                <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" style={{ width: '25%' }}></div>
                                                </div>
                                                <div className='total-rating fw-medium'>1460</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border-top border-grey mt-3 pt-3'>
                                        <div className='fw-medium mb-2'>Real Images and videos from customers</div>
                                        <div className='d-flex gap-3 overflow-auto'>
                                            {ReviewDetails.map((info, id) => (
                                                <div className='review-img' key={id}>
                                                    <img className='img-fluid' src={info.image} alt="" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {ReviewDetails.slice(0, 2).map((info, index) => (
                                        <div className='user-review-details border-top border-grey mt-3 pt-3' key={index}>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <img className="user-img rounded-circle" src={info.image} alt="User" />
                                                <span className='user-name fw-medium txt-secondary2'>{info.name}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-1 mb-2">
                                                <div className="user-rating badge rounded-pill text-bg-success p-2">{info.rating} <i className="bi bi-star-fill"></i></div>
                                                <div className="txt-secondary"><i className="bi bi-dot"></i></div>
                                                <div className='user-post-date txt-secondary fw-medium'>Posted on {info.date}</div>
                                            </div>
                                            <div className="user-comment mb-2">{info.comment}</div>
                                            <div className="review-img mb-2">
                                                <img onClick={() => showDetails(info)} className='img-fluid' src={info.image} alt='Review' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                                            </div>
                                            <div className="user-exp d-flex align-items-center">
                                                <svg viewBox="0 0 16 16" width="18" height="18" fill="greyT1" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.712 5.245L8.68 1.13a1.039 1.039 0 011.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943z" fill="#666"></path>
                                                </svg>
                                                <div className="txt-secondary2 ms-2">Helpful (4)</div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="mt-3">
                                        <button className="btn btn-link text-uppercase text-decoration-none fw-medium p-0" data-bs-toggle="offcanvas" data-bs-target="#allReviews" aria-controls="allReviews">View all reviews <i className="bi bi-chevron-right"></i></button>
                                        {/* Sidebar Offcanvas for listing all reviews */}
                                        <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex={1} id="allReviews" aria-labelledby="allReviewsLabel">
                                            <div className="offcanvas-header border-bottom">
                                                <h5 className="offcanvas-title" id="offcanvasRightLabel">{state.name}</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                {ReviewDetails.map((info, indexx) => (
                                                    <div className='user-review-details border-bottom border-grey mb-3 pb-3' key={indexx}>
                                                        <div className="d-flex align-items-center gap-2 mb-2">
                                                            <img className="user-img rounded-circle" src={info.image} alt="User" />
                                                            <span className='user-name fw-medium txt-secondary2'>{info.name}</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-1 mb-2">
                                                            <div className="user-rating badge rounded-pill text-bg-success p-2">{info.rating} <i className="bi bi-star-fill"></i></div>
                                                            <div className="txt-secondary"><i className="bi bi-dot"></i></div>
                                                            <div className='user-post-date txt-secondary fw-medium'>Posted on {info.date}</div>
                                                        </div>
                                                        <div className="user-comment mb-2">{info.comment}</div>
                                                        <div className="review-img mb-2">
                                                            <img onClick={() => showDetails(info)} className='img-fluid xx' src={info.image} alt='Review' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                                                        </div>
                                                        <div className="user-exp d-flex align-items-center">
                                                            <svg viewBox="0 0 16 16" width="18" height="18" fill="greyT1" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.712 5.245L8.68 1.13a1.039 1.039 0 011.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943z" fill="#666"></path>
                                                            </svg>
                                                            <div className="txt-secondary2 ms-2">Helpful (4)</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Sidebar Offcanvas for reviewer info */}
                                <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex={1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header border-bottom">
                                        <h5 className="offcanvas-title" id="offcanvasRightLabel">{state.name}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div className="review-img-wrapper mb-2 px-5">
                                            <Slider {...settings} className="custom-slick-slider rounded-3">
                                                <img className='img-fluid rounded-3' src={showData.image} alt='Review' />
                                            </Slider>
                                        </div>
                                        <div className='user-review-details border-top border-grey mt-3 pt-3'>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <img className="user-img rounded-circle" src={showData.image} alt="User" />
                                                <span className='user-name fw-medium txt-secondary2'>{showData.name}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-1 mb-2">
                                                <div className="user-rating badge rounded-pill text-bg-success p-2">{showData.rating} <i className="bi bi-star-fill"></i></div>
                                                <div className="txt-secondary"><i className="bi bi-dot"></i></div>
                                                <div className='user-post-date txt-secondary fw-medium'>Posted on {showData.date}</div>
                                            </div>
                                            <div className="user-comment mb-2">{showData.comment}</div>
                                            <div className="user-exp d-flex align-items-center">
                                                <svg viewBox="0 0 16 16" width="18" height="18" fill="greyT1" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.712 5.245L8.68 1.13a1.039 1.039 0 011.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943z" fill="#666"></path>
                                                </svg>
                                                <div className="txt-secondary2 ms-2">Helpful (4)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="srvc-wrapr d-flex flex-wrap gap-3 rounded py-4 px-3 mb-4">
                            <div className="col d-flex gap-2 align-items-center pe-3 border-end border-dark">
                                <div className='icon-wrpr'>
                                    <img src={FreeDeliveryImg} className="rounded-circle bg-white" alt='Icon' style={{ width: '30px', height: '30px' }} />
                                </div>
                                <div className="fw-medium lh-sm">Free Delivery</div>
                            </div>
                            <div className="col d-flex gap-2 align-items-center pe-3 border-end border-dark">
                                <div className='icon-wrpr'>
                                    <img src={CashOnDelivery} className="rounded-circle bg-white" alt='Icon' style={{ width: '30px', height: '30px' }} />
                                </div>
                                <div className="fw-medium lh-sm">Cash on Delivery</div>
                            </div>
                            <div className="col d-flex gap-2 align-items-center">
                                <div className='icon-wrpr'>
                                    <img src={ReturnImg} className="rounded-circle bg-white" alt='Icon' style={{ width: '30px', height: '30px' }} />
                                </div>
                                <div className="fw-medium lh-sm">7-day Returns</div>
                            </div>
                        </div>

                        <div className="d-flex gap-2 align-items-center justify-content-center p-4 border rounded-2">
                            <div className="ve-trusted">VE Trusted</div> Best quality products from trusted suppliers
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='head-4 mb-3 fw-medium'>People also viewed</div>
                    <Collection />
                </div>
            </div>
        </div>
    )
}
