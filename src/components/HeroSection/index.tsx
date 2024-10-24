import React from 'react'
import style from './HeroSection.module.css'
import CustomButton from '@/common/CustomButton'
// import hero_section_image from '@/assets/image/hero_section_image.png'
const HeroSection = () => {
    return (
        <>
            <section className={`HeroSection ${style.HeroSection} d-flex align-items-center justify-content-center`}>
                <div className="outer-spacing">
                    <div className="custom-container">
                        <div className={`${style.hero_content}`}>
                            <p className="mb-0">discover</p>
                            <h1 className={`${style.hero_heading} mb-0`}>Delicious<br />
                                Food</h1>
                            <h5>Join us at the table as you dine for the perfect meal.</h5>
                            <CustomButton name="Explore More" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection