import React from 'react'
import style from './Gallery.module.css'
import divider from '@/assets/image/heading_divider.svg'
import Image from 'next/image'
import gallery_image_1 from '@/assets/image/gallery_image_1.png'
import gallery_image_2 from '@/assets/image/gallery_image_2.png'
import gallery_image_3 from '@/assets/image/gallery_image_3.png'
import gallery_image_4 from '@/assets/image/gallery_image_4.png'
import gallery_image_5 from '@/assets/image/gallery_image_5.png'
import gallery_image_6 from '@/assets/image/gallery_image_6.png'
import gallery_image_7 from '@/assets/image/gallery_image_7.png'
import gallery_image_8 from '@/assets/image/gallery_image_8.png'
import gallery_image_9 from '@/assets/image/gallery_image_9.png'
const Gallery = () => {
    return (
        <>
            <section className={`${style.Gallery} Gallery`}>
                <div className="outer-spacing">
                    <div className="contact-container">
                        <div className={`${style.gallery_content}`}>

                            <div className={`${style.gallery_heading} text-center`}>
                                <h6 className='mb-0'>Taste the Tradition</h6>
                                <h2>our Gallery</h2>
                                <Image src={divider} alt="image" />
                            </div>
                            <div className={`${style.gallery_image_container}`}>
                                <div className={`row ${style.gallery_layout}`}>
                                    <div className="col-lg-4 col-sm-6 "><Image src={gallery_image_1} alt="galley image" /></div>
                                    <div className="col-lg-4 col-sm-6 "><Image src={gallery_image_2} alt="galley image" /></div>
                                    <div className="col-lg-4 col-sm-6 "><Image src={gallery_image_3} alt="galley image" /></div>
                                    <div className="col-lg-4 col-sm-6 "><Image src={gallery_image_4} alt="galley image" /></div>
                                    <div className="col-lg-4 col-sm-6 "><Image src={gallery_image_5} alt="galley image" /></div>
                                    <div className="col-lg-4 col-sm-6 "><Image src={gallery_image_6} alt="galley image" /></div>
                                    <div className="col-lg-4 col-sm-6 "><Image src={gallery_image_7} alt="galley image" /></div>
                                    <div className="col-lg-4 col-sm-6 "><Image src={gallery_image_8} alt="galley image" /></div>
                                    <div className="col-lg-4 col-sm-6 "><Image src={gallery_image_9} alt="galley image" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Gallery