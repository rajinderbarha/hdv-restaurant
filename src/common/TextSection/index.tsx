import React from 'react'
import style from './TextSection.module.css'
import heading_tag_icon from '@/assets/image/heading_tag_icon.svg'
import Image from 'next/image'
import CustomButton from '@/common/CustomButton'
interface TextSectionProps {
    title: string;
    tag: string;
    description: string;
    btnLabel: string;
    hasPrice?: boolean;
    prevPrice: string;
    nextPrice: string;

}
const TextSection = ({ title, tag, description, btnLabel, hasPrice, prevPrice, nextPrice }: TextSectionProps) => {
    return (
        <>

            <div className={`${style.our_story_text}`} data-contain="text-content">
                <div className={`${style.our_story_heading_tag} d-flex align-items-center`}>
                    <h6 className='mb-0'>{tag}</h6>
                    <Image src={heading_tag_icon} alt="image" />
                </div>
                <h2>{title}</h2>
                <p className={`${!hasPrice && style.hasNotPrice}`}>{description}</p>
                {hasPrice &&
                    <div className={`${style.price} d-flex align-items-center`}><h5>{prevPrice}</h5><h4>{nextPrice}</h4></div>
                }
                <CustomButton name={btnLabel} />
            </div>
        </>
    )
}

export default TextSection