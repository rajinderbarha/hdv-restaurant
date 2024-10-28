import React from 'react'
import style from './Contact.module.css'
import divider from '@/assets/image/heading_divider.svg'
import Image from 'next/image'
const Contact = () => {
    return (
        <>
            <section className={`${style.Contact} Contact`}>
                <div className="outer-spacing">
                    <div className="contact-container">
                        <div className={`${style.team_content_text} text-center`}>
                            <h2>get in touch</h2>
                            <Image src={divider} alt="image" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Contact