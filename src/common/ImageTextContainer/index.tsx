import React, { useEffect, useState } from 'react'
import our_story_content from '@/assets/image/our_story_image.png'
// import heading_tag_icon from '@/assets/image/heading_tag_icon.svg'
import style from './ImageTextContainer.module.css'
import Image from 'next/image'
// import CustomButton from '@/common/CustomButton'
import TextSection from '@/common/TextSection'
import ImagePath from '../ImagePath'

interface ImageTextContainerProps {
    imageSrc: string;

    title: string;
    tag: string;
    description: string;
    btnLabel: string;
    hasPrice?: boolean;
    prevPrice: string;
    nextPrice: string;

}
const ImageTextContainer = ({ imageSrc, title, tag, description, btnLabel, hasPrice, prevPrice, nextPrice }: ImageTextContainerProps) => {


    const [imageSrcResolved, setImageSrcResolved] = useState<string | null>(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const img = await ImagePath(imageSrc);
                setImageSrcResolved(img.default); // Use .default to access the image path
            } catch (error) {
                console.error("Error loading image:", error);
            }
        };

        loadImage();
    }, [imageSrc]);
    return (
        <>
            {/* <section className={`OurStory ${style.OurStory}`}> */}
            <div className="outer-spacing">
                <div className="custom-container">
                    <div className={`${style.img_text_content}`}>
                        <div className={`row align-items-center flex-column-reverse flex-md-row ${style.img_text_layout}`} data-contain="layout">
                            <div className="col-md-6">
                                <div className={`${style.image_container} `} data-contain="image">
                                    {imageSrcResolved ? <Image src={imageSrcResolved} alt="Our Story" /> : <Image src={our_story_content} alt="Our Story" />}
                                    {/* <Image src={ require(`@/assets/image/${imageSrc}`)} alt="Our Story" /> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <TextSection title={title} tag={tag} description={description} btnLabel={btnLabel} hasPrice={hasPrice} prevPrice={prevPrice} nextPrice={nextPrice} />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* </section> */}

        </>
    )
}

export default ImageTextContainer