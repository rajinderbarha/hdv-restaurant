import React from 'react'
import quotes from '@/assets/image/quotes.svg'
import stars from '@/assets/image/Star.png'
import avatar from '@/assets/image/avatar.png'
import style from './TestimonialCard.module.css'
import Image from 'next/image'
import QuotesImage from '@/assets/image/Quotes Hover.svg'
const TestimonialCard = () => {
    return (
        <>
            <div className={`${style.card_container}`}>
                <div className={`${style.card} text-center`} >

                    <Image src={QuotesImage} alt="quotes" className={`${style.quotes} ${style.quotes_hover}`} />
                    <Image src={quotes} alt="quotes" className={`${style.quotes}  ${style.quotes_simple}`} />
                    <p className={`${style.feedback}`}>“Great food at reasonable prices. Great service and the owners are terrific. This was my first time to visit this restaurant, but it will not be my last!”</p>
                    <Image src={stars} alt="image" className={`${style.stars}`} />
                    <div className={`${style.profile}`}>
                        <Image src={avatar} alt="avatar" className={`${style.avatar}`} />
                        <h6>Marry Ellen</h6>
                        <p>Cook</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard