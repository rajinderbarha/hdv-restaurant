import React from 'react'
import style from './Footer.module.css'
import Image from 'next/image'
import footer_logo from '@/assets/image/footer_logo.svg'
import Link from 'next/link'
import { LiaFacebookSquare, LiaInstagram, LiaLinkedin } from 'react-icons/lia'
import { TiSocialTwitter } from 'react-icons/ti'
const Footer = () => {
    return (
        <>
            <section className={`${style.Footer} Footer position-relative`}>
                <div className="outer-spacing">
                    <div className={`${style.footer_container}`}>
                        <div className={`${style.grid_container}`}>
                            <div className={`${style.footer_left_part} `}>
                                <div className={`${style.footer_links} text-center`}>
                                    <h5 className={`${style.links_heading}`}>IMORTANT LINKS</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item "><a href="#" className="nav-link p-0 ">Favorite Place
                                        </a></li>
                                        <li className="nav-item "><a href="#" className="nav-link p-0 ">Our History</a></li>
                                        <li className="nav-item "><a href="#" className="nav-link p-0 ">Contact Us</a></li>
                                        <li className="nav-item "><a href="#" className="nav-link p-0 ">Places To Get Lost</a></li>
                                        <li className="nav-item "><a href="#" className="nav-link p-0 ">Our Brand</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${style.footer_center_part} `}>
                                <div className={`${style.footer_center} text-center`}>
                                    <Image src={footer_logo} alt="logo" />
                                    <p className={`${style.address}`}>84 Valley View Street, Monsey, NY</p>
                                    <h5 className={`${style.phone}`}>+ (03) 5333 5036</h5>
                                    <p className={`${style.mail}`}><Link href="mailto:Zvqg8@example.com">cornert@domain.com</Link></p>
                                    <div className={`${style.social_links} d-flex justify-content-center`}>
                                        <div className={`${style.facebook}`}>
                                            <Link href="https://www.facebook.com/" target="_blank"><LiaFacebookSquare /></Link>
                                        </div>
                                        <div className={`${style.instagram}`}>
                                            <Link href="https://www.facebook.com/" target="_blank"><LiaInstagram /></Link>
                                        </div>
                                        <div className={`${style.linkedin}`}>
                                            <Link href="https://www.linkedin.com" target="_blank"><LiaLinkedin /></Link>
                                        </div>
                                        <div className={`${style.twitter}`}>
                                            <Link href="https://www.facebook.com/" target="_blank"><TiSocialTwitter /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.footer_right_part} `}>
                                <div className={`${style.footer_links} text-center`}>
                                    <h5 className={`${style.links_heading}`}>FAVORTE PICKS</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item "><a href="#" className="nav-link p-0 ">Cafe Latter</a></li>
                                        <li className="nav-item "><a href="#" className="nav-link p-0 ">Esspreso</a></li>
                                        <li className="nav-item "><a href="#" className="nav-link p-0 ">Cafe Americano</a></li>
                                        <li className="nav-item "><a href="#" className="nav-link p-0 ">Ice Coffee</a></li>
                                        <li className="nav-item "><a href="#" className="nav-link p-0 ">Mocha een</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <p className={`${style.copyright_text}`}>© 2024 HVD All Rights Reserved</p>
            </section>
        </>
    )
}

export default Footer