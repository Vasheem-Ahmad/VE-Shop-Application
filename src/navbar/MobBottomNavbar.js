import React from 'react';
import { NavLink } from "react-router-dom";

export const MobBottomNavbar = () => {
    return (
        <header className='bottom-navbar bg-white shadow fixed-bottom w-100 py-2 d-lg-none'>
            <div className='container-xl'>
                <ul className="list-inline d-flex align-items-center justify-content-between m-0">
                    <li className="nav-item list-inline-item text-center">
                        <NavLink to="/" className="navbar-brand lh-1">
                            <div className='ve_logo d-flex align-items-center justify-content-center rounded-circle text-white m-auto'>VE</div>
                            <div className='title-label txt-primary mt-1'>Home</div>
                        </NavLink>
                    </li>
                    <li className="nav-item list-inline-item text-center">
                        <NavLink to="/" className="nav-link py-0 d-flex flex-column align-items-center">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#fff" d="M0 0h28v28H0z"></path>
                                <g clipPath="url(#categories_svg__clip0_1410_32081)" fill="#333">
                                    <path d="M11.664 7.865v5.049H6.615V7.865h5.049zm.402-1.365H6.212a.96.96 0 00-.962.963v5.853a.96.96 0 00.963.963h5.853a.96.96 0 00.963-.963V7.462a.96.96 0 00-.963-.962zM21.385 7.865v5.049h-5.049V7.865h5.049zm.402-1.365h-5.853a.96.96 0 00-.963.963v5.853a.96.96 0 00.963.963h5.853a.96.96 0 00.963-.963V7.462a.96.96 0 00-.963-.962zM11.664 17.586v5.049H6.615v-5.049h5.049zm.402-1.365H6.212a.96.96 0 00-.962.963v5.853a.96.96 0 00.963.963h5.853a.96.96 0 00.963-.963v-5.853a.96.96 0 00-.963-.963zM21.385 17.586v5.049h-5.049v-5.049h5.049zm.402-1.365h-5.853a.96.96 0 00-.963.963v5.853a.96.96 0 00.963.963h5.853a.96.96 0 00.963-.963v-5.853a.96.96 0 00-.963-.963z"></path>
                                </g>
                                <defs>
                                    <clipPath id="categories_svg__clip0_1410_32081">
                                        <path fill="#fff" transform="translate(5.25 6.5)" d="M0 0h17.5v17.5H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='title-label text-body'>Categories</div>
                        </NavLink>
                    </li >
                    <li className="nav-item list-inline-item text-center">
                        <NavLink to="/" className="nav-link py-0 d-flex flex-column align-items-center">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#fff" d="M0 0h28v28H0z"></path>
                                <g clipPath="url(#orders_svg__clip0_1410_32086)" fill="#333">
                                    <path d="M20.032 10.89c.227 0 .418.19.418.418v10.811c0 .228-.19.418-.418.418H7.89a.422.422 0 01-.417-.418V11.308c0-.228.19-.418.418-.418h12.14zm0-1.473H7.89A1.89 1.89 0 006 11.308v10.811C6 23.154 6.846 24 7.89 24h12.142a1.89 1.89 0 001.89-1.89V11.308a1.902 1.902 0 00-1.89-1.89z"></path>
                                    <path d="M13.961 5a4.87 4.87 0 00-4.873 4.864v2.84h.009c.019.39.333.704.732.704a.736.736 0 00.731-.723V9.864a3.404 3.404 0 013.401-3.401 3.398 3.398 0 013.401 3.401v2.812c.01.399.333.722.732.722.389 0 .712-.313.731-.703h.01V9.864A4.875 4.875 0 0013.96 5z"></path>
                                </g>
                                <defs><clipPath id="orders_svg__clip0_1410_32086"><path fill="#fff" transform="translate(6 5)" d="M0 0h15.912v19H0z"></path></clipPath></defs>
                            </svg>
                            <div className='title-label text-body'>My Orders</div>
                        </NavLink>
                    </li >
                    <li className="nav-item list-inline-item text-center">
                        <NavLink to="/" className="nav-link py-0 d-flex flex-column align-items-center">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#fff" d="M0 0h28v28H0z"></path>
                                <g clipPath="url(#help_svg__clip0_1860_6159)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.688 7.623C18.802 5.877 16.328 5 13.852 5c-2.475 0-4.95.877-6.834 2.623-2.775 2.568-2.997 9.595-2.93 13.157.03 1.217 1.074 2.193 2.388 2.211.348.009.735.009 1.14.009 4.051 0 10.547-.385 13.06-2.721 3.78-3.49 3.78-9.166.01-12.656zm-1.064 11.671c-1.585 1.468-5.955 2.31-11.996 2.31-.397 0-.774 0-1.112-.01-.503-.008-.909-.384-.918-.85-.126-6.041.802-10.58 2.484-12.137 1.537-1.423 3.586-2.21 5.771-2.21 2.175 0 4.224.787 5.771 2.21 3.18 2.945 3.18 7.743 0 10.687zm-6.1-2.246c-.55 0-.995.43-.995.94 0 .5.434.94.995.94.57 0 1.015-.44 1.015-.94 0-.52-.464-.94-1.015-.94zm-2.416-5.478c0-.653.812-1.63 2.59-1.63 1.683 0 2.804.87 2.804 2.015 0 1.146-1.112 1.969-1.47 2.229-.724.519-.734.886-.734 1.521 0 .233-.126.501-.773.501-.542 0-.725-.179-.725-.814 0-1.047.502-1.548.88-1.853.077-.06.165-.123.257-.188.417-.296.912-.647.912-1.19 0-.564-.532-.833-1.19-.833-.77 0-.998.314-1.192.578-.141.194-.264.362-.567.362-.357 0-.792-.224-.792-.698z" fill="#333"></path>
                                </g>
                                <defs>
                                    <clipPath id="help_svg__clip0_1860_6159">
                                        <path fill="#fff" transform="translate(4.08 5)" d="M0 0h19.44v18H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='title-label text-body'>Help</div>
                        </NavLink>
                    </li >
                    <li className="nav-item list-inline-item text-center cart">
                        <NavLink to="/" className="nav-link py-0 d-flex flex-column align-items-center" href="#">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#fff" d="M0 0h28v28H0z"></path>
                                <g clipPath="url(#account_svg__clip0_1473_30545)">
                                    <path d="M16.763 14.847c1.26-.882 2.097-2.331 2.097-3.987A4.863 4.863 0 0014 6a4.863 4.863 0 00-4.86 4.86c0 1.656.828 3.114 2.097 3.987C7.619 15.909 5 18.996 5 22.641v.018C5 23.406 5.702 24 6.521 24h14.958c.819 0 1.521-.594 1.521-1.341v-.018c0-3.645-2.619-6.732-6.237-7.794zm-6.219-3.987a3.457 3.457 0 016.912 0 3.457 3.457 0 01-6.912 0zm10.935 11.736H6.521a.204.204 0 01-.117-.027c.045-3.708 3.438-6.714 7.596-6.714 4.158 0 7.542 2.997 7.596 6.714a.204.204 0 01-.117.027z" fill="#333"></path>
                                </g>
                                <defs>
                                    <clipPath id="account_svg__clip0_1473_30545">
                                        <path fill="#fff" transform="translate(5 6)" d="M0 0h18v18H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='title-label text-body'>Account</div>
                        </NavLink>
                    </li>
                </ul >
            </div>
        </header>
    )
}