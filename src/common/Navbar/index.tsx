import Image from 'next/image'
import React from 'react'
import logo from '@/assets/image/hdv_logo.svg'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import style from './Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
    return (
        <>

            <div className={`${style.navbar_component} navbar_component outer-spacing`}>
                <nav className={`navbar navbar-expand-lg ${style.navbar_div}`}>
                    <div className={`custom-container ${style.navbar_container}`}>
                        {/* <Link className="navbar-brand" href="#">Navbar</Link> */}
                        <div className={`navbar-brand d-inline-block d-lg-none ${style.mobile_nav_logo}`}>  <Image src={logo} alt="logo" className={``} /></div>
                        <button className={`navbar-toggler ${style.mobile_menu_icon}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <div className={`${style.menu_icon} `}><HiOutlineMenuAlt2 /></div>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`${style.navbar_links_list} col-lg-5 navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center`}>
                                <li className='d-none d-lg-flex'> <div className={`${style.menu_icon}`}><HiOutlineMenuAlt2 /></div></li>
                                <li className="nav-item dropdown">
                                    <Link className={`nav-link dropdown-toggle ${style.navbar_links}  ${style.navbar_links_dropdown}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        HOME
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${style.navbar_links}`} href="#">ABOUT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${style.navbar_links}`} href="#">MENU</Link>
                                </li>

                            </ul>
                            <div className=" col-lg-2 navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex">
                                <Image src={logo} alt="logo" className={`${style.navbar_logo}`} />
                            </div>
                            <div className="d-flex col-lg-5 align-items-lg-center flex-column flex-lg-row   justify-content-lg-end">
                                <ul className={`${style.navbar_links_list_right}  navbar-nav me-auto mb-2 mb-lg-0`}>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${style.navbar_links}`} aria-current="page" href="#">BLOG</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${style.navbar_links}`} href="#">GALLERY</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${style.navbar_links}`} href="#">CONTACT</Link>
                                    </li>
                                </ul>
                                <button type="button" className={`navbar_btn ${style.navbar_book_btn}`}>BOOK A TABLE <HiArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar