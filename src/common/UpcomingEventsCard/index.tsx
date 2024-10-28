import React from 'react'
import style from './UpcomingEventsCard.module.css'
import upcoming_event_card from '@/assets/image/upcoming_event_card.png'
import Image from 'next/image'
import CustomButton from '../CustomButton'
const UpcomingEventsCard = () => {
    return (
        <>
            <div className={`${style.UpcomingEventsCard_container}`}>
                <div className={`${style.Card_container} `}>
                    <div className={`${style.card_detail} hstack align-items-start`}>
                        <div className={`${style.card_date} text-center`}>
                            <h5>14</h5>
                            <p>OCT</p>
                        </div>
                        <div className={`${style.card_detail_text}`}>
                            <p>RECIPES</p>
                            <h5>The secrets to making the best shrimp cocktail.</h5>
                        </div>
                    </div>
                    <div className={`${style.card_bottom} ${style.non_active}`}>
                        {/* <div className={`${style.card_bottom} `}> */}
                        <Image src={upcoming_event_card} alt="image" className={`${style.card_img}`} />
                        <CustomButton name="Read More" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpcomingEventsCard