import React from 'react';
import { Collection } from './AllProducts';
import { ProductFilter } from './filter/ProductFilter';
import FreeDeliveryImg from '../assets/icons/freeDelivery.svg';
import CashOnDelivery from '../assets/icons/cod.svg';
import ReturnImg from '../assets/icons/easyReturns.svg';

export const Home = () => {
  return (
    <div className='container-xl my-4 my-md-5'>
      {/* Top Banner Section */}
      <section className='banner-section rounded-1 overflow-hidden'>
        <div className='row align-items-center g-0'>
          <div className='col-lg-6'>
            <div className='bnr-cnt px-3 px-md-4 py-5 p-lg-5'>
              <h1 className='head-1 mb-4 pb-1'>Lowest Prices<br /> Best Quality Shopping</h1>

              <div className="srvc-wrapr d-flex flex-wrap gap-3 bg-white rounded py-2 px-3 mb-4">
                <div className="col d-flex gap-2 align-items-center pe-3 border-end border-dark">
                  <div className='icon-wrpr'>
                    <img src={FreeDeliveryImg} className="rounded-circle" alt='Icon' />
                  </div>
                  <div className="fw-medium lh-sm">Free<br /> Delivery</div>
                </div>
                <div className="col d-flex gap-2 align-items-center pe-3 border-end border-dark">
                  <div className='icon-wrpr'>
                    <img src={CashOnDelivery} className="rounded-circle" alt='Icon' />
                  </div>
                  <div className="fw-medium lh-sm">Cash on<br /> Delivery</div>
                </div>
                <div className="col d-flex gap-2 align-items-center">
                  <div className='icon-wrpr'>
                    <img src={ReturnImg} className="rounded-circle" alt='Icon' />
                  </div>
                  <div className="fw-medium lh-sm">Easy<br /> Returns</div>
                </div>
              </div>

              <div className="btn-wrpr pt-1">
                <button className='d-flex align-items-center btn btn-custom rounded-1 px-4 py-2 fw-medium'>
                  <img src='https://images.meesho.com/images/pow/playstoreSmallIcon.webp' alt="Logo" className='pe-3' />
                  Download the VEshop App
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='bnr-img'>
              <img className='w-100' src='https://images.meesho.com/images/marketing/1631722939962.webp' alt="Logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Heading Section */}
      <div className='designed-heading text-center mt-4 mt-md-5'>
        <h1 className='head-2 bg-white d-inline-block position-relative px-4'>Top Categories to choose from</h1>
      </div>

      {/* Fashion Store Section */}
      <section className='fashion-store rounded-1 overflow-hidden p-3 p-md-4 mt-4 mt-md-5' style={{ backgroundImage: "url('https://images.meesho.com/images/marketing/1649759774600.jpg')" }}>
        <div className='row align-items-end'>
          <div className='col-md-5 mb-4 mb-md-0'>
            <div className='bnr-img'>
              <img className='w-100' src="https://images.meesho.com/images/marketing/1649760442043.webp" alt="" />
            </div>
          </div>
          <div className='col-md-7'>
            <div className='row'>
              <div className='col bnr-img'>
                <img className='w-100' src='https://images.meesho.com/images/marketing/1649760423313.webp' alt="" />
              </div>
              <div className='col bnr-img'>
                <img className='w-100' src='https://images.meesho.com/images/marketing/1649759799809.webp' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Section */}
      <section className='essential-section bg-img-property rounded-1 overflow-hidden p-3 p-md-3 p-lg-5 mt-4 mt-md-5' style={{ backgroundImage: `url(${require("../assets/essentials-banner.jpg")})` }}>
        <div className='row py-4'>
          <div className='col-md-5 mb-5 mb-md-0'>
            <div className='left-sec text-center mt-md-5'>
              <h1 className='display-4 essential-title mb-4'>Essentials</h1>
              <button className='btn btn-view-all rounded-1 fw-medium py-2 px-4'>View All</button>
            </div>
          </div>
          <div className='col-md-7'>
            <div className='row g-3'>
              <div className='col-6 col-md-4 essen-prdct text-center'>
                <img className='img-fluid w-100' src={require('../assets/essential-1.webp')} alt="" />
                <button className='btn essential-btn bg-white rounded-1 fw-medium px-4 mt-2'>Beauty</button>
              </div>
              <div className='col-6 col-md-4 essen-prdct text-center'>
                <img className='img-fluid w-100' src={require('../assets/essential-2.webp')} alt="" />
                <button className='btn essential-btn bg-white rounded-1 fw-medium px-4 mt-2'>Home</button>
              </div>
              <div className='col-6 col-md-4 essen-prdct text-center'>
                <img className='img-fluid w-100' src={require('../assets/essential-3.webp')} alt="" />
                <button className='btn essential-btn bg-white rounded-1 fw-medium px-4 mt-2'>Electronics</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reseller Section */}
      <section className='reseller-section rounded-1 overflow-hidden mt-4 mt-md-5'>
        <div className='bnr-cover position-relative'>
          <img className='img-fluid w-100' src={require('../assets/reseller-banner.webp')} alt="Reseller Banner" />
          <div className='position-absolute top-0 end-0 text-md-end px-md-4 py-md-5 p-lg-5 mt-4 mt-md-0'>
            <h4 className='head-3 reseller-subtitle mb-3'>Become a Reseller and</h4>
            <h1 className='head-1 reseller-title mb-4 mb-lg-5'>Start your Online Business<br /> with Zero Investment</h1>
            <div className="app-wrapper d-flex gap-3 justify-content-md-end">
              <div className="google-play" style={{ maxWidth: 180 }}>
                <a href="https://app.meesho.com/2yoV?pid=pow_website&amp;c=pow&amp;af_dp=supply%3A%2F%2Fopen&amp;af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.meesho.supply" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="google-playstore-icon" /></a>
              </div>
              <div className="app-store" style={{ maxWidth: 180 }}>
                <a href="https://apps.apple.com/us/app/meesho/id1457958492" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="apple-appstore-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Collection Section */}
      <section className='collection-section rounded-1 overflow-hidden mt-4 mt-md-5'>
        <div className='row'>
          <div className='col-xl-3 col-md-4'>
            <ProductFilter />
          </div>
          <div className='col-xl-9 col-md-8 mt-4 mt-md-0'>
            <Collection />
          </div>  
        </div>
      </section>

      {/* Register Supplier Section */}
      <section className='regis-suppl-section bg-img-property rounded-1 overflow-hidden p-3 p-md-4 p-lg-5 mt-4 mt-md-5' style={{ backgroundImage: `url(${require("../assets/supplier-banner.webp")})` }}>
        <div className='row py-3'>
          <div className='col-lg-9'>
            <h4 className='head-3 text-white mb-3'>Register as a VEshop Supplier</h4>
            <div className='text-white mb-4'>Sell your products to crores of customers at 0% commission</div>
            <div className="srvc-wrapr text-white d-flex flex-wrap gap-3 mb-4">
              <div className="col pe-3 border-end border-white">
                <div className="d-flex align-items-center fw-medium text-nowrap"><i className="bi bi-check-circle-fill fs-5 me-2" style={{ color: '#01a758' }}></i> Grow your business 10x</div>
              </div>
              <div className="col pe-3 border-end border-white">
                <div className="d-flex align-items-center fw-medium text-nowrap"><i className="bi bi-check-circle-fill fs-5 me-2" style={{ color: '#01a758' }}></i> Enjoy 100% Profit</div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center fw-medium text-nowrap"><i className="bi bi-check-circle-fill fs-5 me-2" style={{ color: '#01a758' }}></i> Sell all over India</div>
              </div>
            </div>
            <div className="btn-wrapper pt-1">
              <button className='btn sign-up-btn bg-white fw-medium py-2 px-4 rounded-1'>Sign up now</button>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}
