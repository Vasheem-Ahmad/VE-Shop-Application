import React from 'react';
import { NavLink } from "react-router-dom";

const navigation = [
    {
        MenuItem: 'Women Ethnic',
        megamenu: [
            {
                title: 'Sarees',
                submenu: ['All Sarees', 'Silk Sarees', 'Cotton Silk Sarees', 'Cotton Sarees', 'Satin Sarees']
            },
            {
                title: 'Kurtis',
                submenu: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
            },
            {
                title: 'Kurta Sets',
                submenu: ['All Kurta Sets', 'Cotton Kurta Sets', 'Embroidered Kurta Sets', 'Chanderi Kurta Sets']
            },
            {
                title: 'Suit & Dresses',
                submenu: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
            },
        ]
    },
    {
        MenuItem: 'Women Western',
        megamenu: [
            {
                title: 'Topwear',
                submenu: ['All Sarees', 'Silk Sarees', 'Cotton Silk Sarees', 'Cotton Sarees', 'Satin Sarees']
            },
            {
                title: 'Bottomwear',
                submenu: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
            },
            {
                title: 'Innerwear',
                submenu: ['All Kurta Sets', 'Cotton Kurta Sets', 'Embroidered Kurta Sets', 'Chanderi Kurta Sets']
            },
            {
                title: 'Sleepwear',
                submenu: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
            },
        ]
    },
    {
        MenuItem: 'Men',
        megamenu: [
            {
                title: 'Topwear',
                submenu: ['All Sarees', 'Silk Sarees', 'Cotton Silk Sarees', 'Cotton Sarees', 'Satin Sarees']
            },
            {
                title: 'Bottomwear',
                submenu: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
            },
            {
                title: 'Men Footwear',
                submenu: ['All Kurta Sets', 'Cotton Kurta Sets', 'Embroidered Kurta Sets', 'Chanderi Kurta Sets']
            },
            {
                title: 'Ethnic Wear',
                submenu: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
            },
        ]
    },
    {
        MenuItem: 'Kids',
        megamenu: [
            {
                title: 'Topwear',
                submenu: ['All Sarees', 'Silk Sarees', 'Cotton Silk Sarees', 'Cotton Sarees', 'Satin Sarees']
            },
            {
                title: 'Bottomwear',
                submenu: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
            },
            {
                title: 'Innerwear',
                submenu: ['All Kurta Sets', 'Cotton Kurta Sets', 'Embroidered Kurta Sets', 'Chanderi Kurta Sets']
            },
            {
                title: 'Suit & Dresses',
                submenu: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
            },
        ]
    },
    {
        MenuItem: 'Home & Kitchen',
        megamenu: [
            {
                title: 'Sarees',
                submenu: ['All Sarees', 'Silk Sarees', 'Cotton Silk Sarees', 'Cotton Sarees', 'Satin Sarees']
            },
            {
                title: 'Kurtis',
                submenu: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
            },
            {
                title: 'Kurta Sets',
                submenu: ['All Kurta Sets', 'Cotton Kurta Sets', 'Embroidered Kurta Sets', 'Chanderi Kurta Sets']
            },
            {
                title: 'Suit & Dresses',
                submenu: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
            },
        ]
    },
    {
        MenuItem: 'Beauty & Health',
        megamenu: [
            {
                title: 'Sarees',
                submenu: ['All Sarees', 'Silk Sarees', 'Cotton Silk Sarees', 'Cotton Sarees', 'Satin Sarees']
            },
            {
                title: 'Kurtis',
                submenu: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
            },
            {
                title: 'Kurta Sets',
                submenu: ['All Kurta Sets', 'Cotton Kurta Sets', 'Embroidered Kurta Sets', 'Chanderi Kurta Sets']
            },
            {
                title: 'Suit & Dresses',
                submenu: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
            },
        ]
    },
    {
        MenuItem: 'Jewellery & Accessories',
        megamenu: [
            {
                title: 'Sarees',
                submenu: ['All Sarees', 'Silk Sarees', 'Cotton Silk Sarees', 'Cotton Sarees', 'Satin Sarees']
            },
            {
                title: 'Kurtis',
                submenu: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
            },
            {
                title: 'Kurta Sets',
                submenu: ['All Kurta Sets', 'Cotton Kurta Sets', 'Embroidered Kurta Sets', 'Chanderi Kurta Sets']
            },
            {
                title: 'Suit & Dresses',
                submenu: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
            },
        ]
    },
    {
        MenuItem: 'Bags & Footwear',
        megamenu: [
            {
                title: 'Sarees',
                submenu: ['All Sarees', 'Silk Sarees', 'Cotton Silk Sarees', 'Cotton Sarees', 'Satin Sarees']
            },
            {
                title: 'Kurtis',
                submenu: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
            },
            {
                title: 'Kurta Sets',
                submenu: ['All Kurta Sets', 'Cotton Kurta Sets', 'Embroidered Kurta Sets', 'Chanderi Kurta Sets']
            },
            {
                title: 'Suit & Dresses',
                submenu: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
            },
        ]
    },
    {
        MenuItem: 'Electronics',
        megamenu: [
            {
                title: 'Sarees',
                submenu: ['All Sarees', 'Silk Sarees', 'Cotton Silk Sarees', 'Cotton Sarees', 'Satin Sarees']
            },
            {
                title: 'Kurtis',
                submenu: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
            },
            {
                title: 'Kurta Sets',
                submenu: ['All Kurta Sets', 'Cotton Kurta Sets', 'Embroidered Kurta Sets', 'Chanderi Kurta Sets']
            },
            {
                title: 'Suit & Dresses',
                submenu: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
            },
        ]
    },
]

export const MegaNavbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg megamenu p-0">
                <div className="container-xl">
                    <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <div className="offcanvas-header border-bottom">
                            <h5 className="offcanvas-title" id="staticBackdropLabel">Browse All</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-flex flex-column justify-content-between p-0">
                            <ul className="navbar-nav position-relative align-items-center justify-content-between w-100 mb-2 mb-lg-0">
                                {navigation.map((item, id) => (
                                    <li className="nav-item dropdown px-3 px-lg-0" key={id}>
                                        <NavLink to="#" className="nav-link px-0 py-3" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className=''>{item.MenuItem}</span></NavLink>
                                        <div className="dropdown-menu bg-white border shadow w-100 p-3 p-lg-4 m-0 mb-3 z-1">
                                            <div className="row">
                                                {item.megamenu.map((value, key) => (
                                                    <div className="col" key={key}>
                                                        <div className='head-5 txt-primary'>{value.title}</div>
                                                        {value.submenu.map((mega, key1) => (
                                                            <li className='nav-item' key={key1}>
                                                                <NavLink to="#" className='nav-link txt-secondary2 p-0 pt-2'>{mega}</NavLink>
                                                            </li>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className='sticky-bottom bg-secondary p-3 d-lg-none'>
                                <div className="mb-3">
                                    <NavLink to="#" className="nav-link text-white fw-medium"><i className="bi bi-arrow-return-right fw-bold"></i> Become a Supplier</NavLink>
                                </div>
                                <hr className='border-light' />
                                <div className="download-app">
                                    <NavLink to="#" className="nav-link d-flex align-items-center mb-2 text-white fw-medium"><i className="bi bi-arrow-return-right"></i>
                                        <svg width="20" height="20" viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg" className='me-2'>
                                            <path fillRule="evenodd" clipPath="evenodd" d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488zM2.672 5.335v11.469h10.656V5.335H2.672zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 01-1.488-1.488zM.8 3.36A3.36 3.36 0 014.16 0h7.68a3.36 3.36 0 013.36 3.36v17.28A3.36 3.36 0 0111.84 24H4.16A3.36 3.36 0 01.8 20.64V3.36zm6 16.447a.6.6 0 000 1.2h2.4a.6.6 0 100-1.2H6.8z" fill='#fff'></path>
                                        </svg> Download App
                                    </NavLink>
                                    <div className="d-flex gap-3">
                                        <NavLink to="#" target="_blank" rel="noopener noreferrer">
                                            <img className="img-fluid" src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="google-playstore-icon" />
                                        </NavLink>
                                        <NavLink to="#" target="_blank" rel="noopener noreferrer">
                                            <img className="img-fluid" src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="apple-appstore-icon" />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}
