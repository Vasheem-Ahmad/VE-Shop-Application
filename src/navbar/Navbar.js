import React from 'react';
import { NavLink } from "react-router-dom";
import { MegaNavbar } from './MegaNavbar';

export const Navbar = () => {
    return (
        <header className='main-header bg-white sticky-top shadow-sm'>
            <nav className="navbar navbar-expand-lg border-bottom top-header">
                <div className="container-xl">
                    <div className="d-flex align-items-center justify-content-between for-mobile">
                        <div className="col left-nav">
                            <button className="navbar-toggler shadow-none border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="col middle-nav text-center">
                            <NavLink to="/" className="navbar-brand head-3 p-0 me-0 me-lg-3 lh-1">VEshop</NavLink>
                        </div>
                        <div className="col right-nav">
                            <ul className="list-inline d-flex align-items-center justify-content-end mb-0 d-lg-none">
                                <li className="list-inline-item whislist pe-1">
                                    <NavLink to="#" className="nav-link p-0">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#wishlist-header_svg__clip0_12339_532)">
                                                <path d="M5.77 2.56c1.07 0 2.09.48 3.02 1.43a1.687 1.687 0 002.42 0c.93-.95 1.95-1.42 3.02-1.42 1.6 0 3.15 1.11 3.85 2.75.73 1.72.33 3.57-1.11 5.07l-6.55 6.86c-.15.15-.31.19-.42.19-.11 0-.27-.03-.42-.19l-6.55-6.86C1.59 8.88 1.19 7.03 1.92 5.31c.7-1.64 2.25-2.75 3.85-2.75zm0-1.56C1.29 1-2.38 6.98 1.91 11.47l6.55 6.86c.42.45.98.67 1.54.67s1.12-.22 1.54-.67l6.55-6.86C22.37 6.99 18.7 1 14.22 1c-1.37 0-2.81.56-4.12 1.89-.03.03-.06.04-.1.04-.04 0-.07-.01-.1-.04C8.59 1.56 7.14 1 5.77 1z" fill="#333"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="wishlist-header_svg__clip0_12339_532"><path fill="#fff" transform="translate(0 1)" d="M0 0h20v18H0z"></path></clipPath>
                                            </defs>
                                        </svg>
                                    </NavLink>
                                </li>
                                <li className="list-inline-item cart">
                                    <NavLink to="#" className="nav-link p-0">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="greyBase">
                                            <path d="M4.987 5.469l1.848 7.2a1 1 0 00.968.752h8.675a1 1 0 00.962-.726l1.697-5.952a1 1 0 00-.962-1.274H4.987zm0 0l-.943-3.248a1 1 0 00-.96-.721H1" stroke="#333" strokeWidth="1.5" strokeLinecap="round"></path>
                                            <ellipse cx="9.421" cy="16.744" rx="1.243" ry="1.256" stroke="#666" strokeWidth="1.5"></ellipse><ellipse cx="15.221" cy="16.744" rx="1.243" ry="1.256" stroke="#666" strokeWidth="1.5"></ellipse>
                                        </svg>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form className="search-wrpr border rounded-1 w-100 d-lg-none mt-2 mb-1" role="search">
                        <div className="input-group head-search">
                            <button className="input-group-text bg-transparent border-0 p-0" type="submit">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="#999999" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M19.77 18.6702L16.01 14.9102C17.33 13.3302 18.13 11.3002 18.13 9.08024C18.13 4.06024 14.07 0.000244141 9.06 0.000244141C4.06 0.000244141 0 4.06024 0 9.08024C0 14.1002 4.06 18.1602 9.06 18.1602C11.29 18.1602 13.33 17.3502 14.91 16.0102L18.67 19.7702C18.97 20.0702 19.47 20.0702 19.77 19.7702C20.08 19.4702 20.08 18.9702 19.77 18.6702ZM9.06 16.6002C4.92 16.6002 1.55 13.2302 1.55 9.08024C1.55 4.93024 4.92 1.56024 9.06 1.56024C13.2 1.56024 16.57 4.93024 16.57 9.08024C16.57 13.2302 13.2 16.6002 9.06 16.6002Z" fill="999999"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="20" height="20" fill="white" transform="translate(0 0.000244141)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <input type="text" className="form-control border-0 px-2 py-0" placeholder="Try Saree, Kurti or Search by Product Code" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            <button className="input-group-text bg-transparent border-0 p-0 d-none" type="submit"><i className="bi bi-x-lg fw-bold"></i></button>
                        </div>
                    </form>

                    <div className="collapse navbar-collapse d-none d-lg-block" id="topbar">
                        <form className="search-wrpr border rounded-1" role="search">
                            <div className="input-group head-search">
                                <button className="input-group-text bg-transparent border-0 p-0" type="submit">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#999999" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0)">
                                            <path d="M19.77 18.6702L16.01 14.9102C17.33 13.3302 18.13 11.3002 18.13 9.08024C18.13 4.06024 14.07 0.000244141 9.06 0.000244141C4.06 0.000244141 0 4.06024 0 9.08024C0 14.1002 4.06 18.1602 9.06 18.1602C11.29 18.1602 13.33 17.3502 14.91 16.0102L18.67 19.7702C18.97 20.0702 19.47 20.0702 19.77 19.7702C20.08 19.4702 20.08 18.9702 19.77 18.6702ZM9.06 16.6002C4.92 16.6002 1.55 13.2302 1.55 9.08024C1.55 4.93024 4.92 1.56024 9.06 1.56024C13.2 1.56024 16.57 4.93024 16.57 9.08024C16.57 13.2302 13.2 16.6002 9.06 16.6002Z" fill="999999"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="20" height="20" fill="white" transform="translate(0 0.000244141)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <input type="text" className="form-control border-0 px-2 py-0" placeholder="Try Saree, Kurti or Search by Product Code" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                <button className="input-group-text bg-transparent border-0 p-0 d-none" type="submit"><i className="bi bi-x-lg fw-bold"></i></button>
                            </div>
                        </form>
                        <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown download-app border-2 bdr-end me-lg-3 pe-lg-3">
                                <NavLink to="#" className="nav-link d-flex align-items-center active">
                                    <svg width="20" height="20" viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg" className='me-2'>
                                        <path fillRule="evenodd" clipPath="evenodd" d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488zM2.672 5.335v11.469h10.656V5.335H2.672zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 01-1.488-1.488zM.8 3.36A3.36 3.36 0 014.16 0h7.68a3.36 3.36 0 013.36 3.36v17.28A3.36 3.36 0 0111.84 24H4.16A3.36 3.36 0 01.8 20.64V3.36zm6 16.447a.6.6 0 000 1.2h2.4a.6.6 0 100-1.2H6.8z" fill="#333"></path>
                                    </svg> Download App
                                </NavLink>
                                <ul className="dropdown-menu dropdown-menu-end border-1 shadow p-3 pb-4 m-0" style={{ width: '215px' }}>
                                    <div className="details-wrapper">
                                        <div className="head-5 mb-3">Download From</div>
                                        <div color="white" className="mb-3">
                                            <NavLink to="#" target="_blank" rel="noopener noreferrer">
                                                <img className="img-fluid" src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="google-playstore-icon" />
                                            </NavLink>
                                        </div>
                                        <div color="white" className="">
                                            <NavLink to="#" target="_blank" rel="noopener noreferrer">
                                                <img className="img-fluid" src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="apple-appstore-icon" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item border-2 bdr-end me-lg-3 pe-lg-3">
                                <NavLink to="#" className="nav-link">Become a Supplier</NavLink>
                            </li>
                            <li className="nav-item dropdown profile border-2 bdr-end me-lg-3 pe-lg-3">
                                <NavLink to="#" className="nav-link py-0 d-flex flex-column align-items-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#user_svg__clip0)">
                                            <path d="M15.316 13.016c1.512-1.058 2.516-2.797 2.516-4.784A5.835 5.835 0 0012 2.4a5.835 5.835 0 00-5.832 5.832 5.79 5.79 0 002.517 4.784C4.343 14.291 1.2 17.996 1.2 22.37v.022c0 .896.843 1.609 1.825 1.609h17.95c.983 0 1.825-.713 1.825-1.61v-.02c0-4.375-3.143-8.08-7.484-9.354zM7.853 8.232a4.148 4.148 0 018.294 0 4.148 4.148 0 01-8.294 0zm13.122 14.083H3.025a.245.245 0 01-.14-.032c.054-4.45 4.126-8.057 9.115-8.057 4.99 0 9.05 3.596 9.115 8.057a.245.245 0 01-.14.032z" fill="#333"></path>
                                        </g>
                                        <defs><clipPath id="user_svg__clip0"><path fill="#fff" transform="translate(1.2 2.4)" d="M0 0h21.6v21.6H0z"></path></clipPath></defs>
                                    </svg> Profile
                                </NavLink>

                                <ul className="dropdown-menu dropdown-menu-end border-1 shadow p-3 m-0" style={{ width: '250px' }}>
                                    <div className="details-wrapper">
                                        <div className="head-5">Hello User</div>
                                        <div className='small title-label fw-semibold'>To access your Meesho account</div>
                                        <button className="btn btn-custom fw-semibold rounded w-100 mt-3">Sign Up</button>
                                        <hr className="dropdown-divider my-3" />
                                        <div className="d-flex align-items-center gap-2">
                                            <svg width="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#fff" d="M0 0h28v28H0z"></path>
                                                <g clipPath="url(#orders_svg__clip0_1410_32086)" fill="#333">
                                                    <path d="M20.032 10.89c.227 0 .418.19.418.418v10.811c0 .228-.19.418-.418.418H7.89a.422.422 0 01-.417-.418V11.308c0-.228.19-.418.418-.418h12.14zm0-1.473H7.89A1.89 1.89 0 006 11.308v10.811C6 23.154 6.846 24 7.89 24h12.142a1.89 1.89 0 001.89-1.89V11.308a1.902 1.902 0 00-1.89-1.89z"></path>
                                                    <path d="M13.961 5a4.87 4.87 0 00-4.873 4.864v2.84h.009c.019.39.333.704.732.704a.736.736 0 00.731-.723V9.864a3.404 3.404 0 013.401-3.401 3.398 3.398 0 013.401 3.401v2.812c.01.399.333.722.732.722.389 0 .712-.313.731-.703h.01V9.864A4.875 4.875 0 0013.96 5z"></path>
                                                </g>
                                                <defs><clipPath id="orders_svg__clip0_1410_32086"><path fill="#fff" transform="translate(6 5)" d="M0 0h15.912v19H0z"></path></clipPath></defs>
                                            </svg>
                                            <span className='head-5'>My Orders</span>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item cart">
                                <NavLink to="#" className="nav-link py-0 d-flex flex-column align-items-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="greyBase">
                                        <path d="M4.987 5.469l1.848 7.2a1 1 0 00.968.752h8.675a1 1 0 00.962-.726l1.697-5.952a1 1 0 00-.962-1.274H4.987zm0 0l-.943-3.248a1 1 0 00-.96-.721H1" stroke="#333" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <ellipse cx="9.421" cy="16.744" rx="1.243" ry="1.256" stroke="#333" strokeWidth="1.5"></ellipse><ellipse cx="15.221" cy="16.744" rx="1.243" ry="1.256" stroke="#333" strokeWidth="1.5"></ellipse>
                                    </svg> cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <MegaNavbar />
        </header>
    )
}
