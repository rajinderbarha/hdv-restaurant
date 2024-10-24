import React from 'react'
// import our_story_content from '@/assets/image/our_story_image.png'
// import heading_tag_icon from '@/assets/image/heading_tag_icon.svg'
import style from './OurStory.module.css'
// import Image from 'next/image'
// import CustomButton from '@/common/CustomButton'
// import TextSection from '@/common/TextSection'
import ImageTextContainer from '@/common/ImageTextContainer'

const OurStory = () => {
    return (
        <>
            <section className={`OurStory ${style.OurStory}`}>
                <div className="outer-spacing">
                    <div className="custom-container">
                        <ImageTextContainer imageSrc="our_story_image.png" title="Good Food, Drinks & Company." tag="OUR STORY" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " btnLabel="Explore More"
                            hasPrice={false} prevPrice="" nextPrice="" />

                    </div>
                </div>
            </section>

        </>
    )
}

export default OurStory