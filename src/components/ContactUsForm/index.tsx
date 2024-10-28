import React from 'react'
import style from './ContactUsForm.module.css'
import contact_us_image from '@/assets/image/contact_us_image.png'
import Image from 'next/image'
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
const ContactUsForm = () => {
    return (
        <>
            <div className={`${style.ContactUs_address}`}>
                <div className={`${style.ContactUsForm}`}>
                    <div className={`${style.contact_us_layout} row align-items-center `}>
                        <div className="col-lg-6">
                            <div className={`${style.contact_us_image_container}`}>
                                <Image src={contact_us_image} alt="image" className={`${style.contact_us_image}`} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={`${style.form_container}`}>
                                <h3>Have be any question?feel free to <span>Contact</span></h3>
                                <form className={`${style.from_div}`}>
                                    <div className={`${style.full_name} row `}>
                                        <div className="col-xl-6"> <input type="text" placeholder='First Name' /></div>
                                        <div className="col-xl-6"><input type="text" placeholder='Last Name' /></div>
                                        {/* <input type="text" placeholder='First Name' />
                                    <input type="text" placeholder='Last Name' /> */}
                                    </div>
                                    <div className={`${style.contact_input} row`}>
                                        <div className="col-xl-6"> <input type="number" placeholder='Your Phone No' /></div>
                                        <div className="col-xl-6"> <input type="email" placeholder='Your Email' /></div>
                                    </div>
                                    <div className={`${style.contact_textarea}`}>
                                        <textarea name="message" id="message" rows={3} placeholder='Type Your Message'></textarea>
                                    </div>
                                    <button type='button' className='common_btn'>SUBMIT </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.address}`}>
                    <div className={`${style.card_layout} row`}>
                        <div className="col-lg-4"> <div className={`${style.address_card} `}>

                            <div className={`${style.card_img}`}>
                                <MdOutlinePhone />
                            </div>
                            <div className={`${style.card_text}`}>
                                <h5 className={`${style.card_title}`}>Call Us On</h5>
                                <h5 className={`${style.card_desc}`}>+98 060 712 34 & 812 34</h5>
                            </div>
                        </div></div>
                        <div className="col-lg-4"> <div className={`${style.address_card} `}>

                            <div className={`${style.card_img}`}>
                                <MdOutlineEmail />
                            </div>
                            <div className={`${style.card_text}`}>
                                <h5 className={`${style.card_title}`}>Email us</h5>
                                <h5 className={`${style.card_desc}`}>supportyou@info.com</h5>
                            </div>
                        </div></div>
                        <div className="col-lg-4"> <div className={`${style.address_card} `}>

                            <div className={`${style.card_img}`}>
                                <RiMapPin2Line />
                            </div>
                            <div className={`${style.card_text}`}>
                                <h5 className={`${style.card_title}`}>Address</h5>
                                <h5 className={`${style.card_desc}`}>141, First Floor, 12 St Roots<br /> Terrace, Los Angeles 90010.</h5>
                            </div>
                        </div></div>
                    </div>
                    {/* <div className={`${style.address_card} `}>

                        <div className={`${style.card_img}`}>
                            <MdOutlinePhone />
                        </div>
                        <div className={`${style.card_text}`}>
                            <h5 className={`${style.card_title}`}>Call Us On</h5>
                            <h5 className={`${style.card_desc}`}>+98 060 712 34 & 812 34</h5>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default ContactUsForm