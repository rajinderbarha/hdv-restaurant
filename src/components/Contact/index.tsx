import React from 'react'
import style from './Contact.module.css'
import divider from '@/assets/image/heading_divider.svg'
import Image from 'next/image'
import ContactUsForm from '../ContactUsForm'
const Contact = () => {
    return (
        <>
            <section className={`${style.Contact} Contact`}>
                <div className="outer-spacing">
                    <div className="main-container">
                        <div className={`${style.contactus_content}`}>

                            <div className={`${style.contactus_heading} text-center`}>
                                <h2>get in touch</h2>
                                <Image src={divider} alt="image" />
                            </div>
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24194.89157059023!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1730113048443!5m2!1sen!2sus" width="100%" height="450" style={{ border: "0", marginBottom: "-6px" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>



        </>
    )
}

export default Contact