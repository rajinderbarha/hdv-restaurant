import React from 'react';
import style from './Feedback.module.css'
import divider from '@/assets/image/restaurant_menu_svg.svg'
import Image from 'next/image'
import TestimonialCard from '@/common/TestimonialCard'
import Slider from "react-slick";
const Feedback = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992, // screens smaller than 992px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // screens smaller than 576px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, // optional: hide arrows on extra small screens
                }
            }
        ]
    };

    return (
        <>
            <section className={`${style.Feedback} Feedback`}>
                <div className="outer-spacing">
                    <div className="custom-container">
                        <div className={`${style.Feedback_content} `}>
                            <div className={`${style.Feedback_content_text} text-center`}>
                                <h6 className='mb-0'>Happy customer</h6>
                                <h2>Happy customer</h2>
                                <Image src={divider} alt="image" />
                            </div>
                            {/* <div className={`${style.Feedback_card_container}`}>
                               
                        </div> */}
                            <div className={`${style.slider_container}`}>

                                <Slider {...settings}>
                                    <div className={`${style.slider_card}`}>
                                        <TestimonialCard />
                                    </div>
                                    <div className={`${style.slider_card}`}>
                                        <TestimonialCard />
                                    </div>
                                    <div className={`${style.slider_card}`}>
                                        <TestimonialCard />
                                    </div>
                                    <div className={`${style.slider_card}`}>
                                        <TestimonialCard />
                                    </div>
                                    <div className={`${style.slider_card}`}>
                                        <TestimonialCard />
                                    </div>
                                </Slider>
                            </div>

                            {/* <div className="hstack gap-3 flex-wrap justify-content-center">
                            <TestimonialCard />
                                <TestimonialCard />
                                <TestimonialCard />
                            </div> */}
                        </div>
                    </div>
                </div>


            </section >
        </>
    )
}

export default Feedback