import React from 'react';
import style from './Feedback.module.css'
import divider from '@/assets/image/restaurant_menu_svg.svg'
import Image from 'next/image'
import TestimonialCard from '@/common/TestimonialCard'
const Feedback = () => {

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
                            <div className="hstack gap-3 flex-wrap justify-content-center">

                                <TestimonialCard />
                                <TestimonialCard />
                                <TestimonialCard />
                            </div>
                        </div>
                    </div>
                </div>


            </section >
        </>
    )
}

export default Feedback