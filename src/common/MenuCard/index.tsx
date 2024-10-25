import React from 'react'
import style from './MenuCard.module.css'
import Image from 'next/image'
import MenuCard_image from '@/assets/image/MenuCard_image.png'
const MenuCard = () => {
    return (
        <>
            <div className={`${style.menu_card} d-flex `}>
                <div className={`${style.menu_card_image}`}>
                    <Image src={MenuCard_image} alt="menu card image" />
                </div>
                <div className={`${style.menu_card_content} d-flex justify-content-between w-100`}>

                    <div className={`${style.menu_card_text}`}>
                        <h6>Roast Chicken (4 Sticks)</h6>
                        <p>Chicken / Veggies / Shoyu</p>
                    </div>
                    <div className={`${style.menu_card_price_btn}`}>

                        <div className={`${style.menu_card_price} d-flex`}>
                            <p className='mb-0'>......</p>
                            <h5>$17.50</h5>
                        </div>
                        <button className={`${style.menu_card_btn} navbar_btn`}>Order now</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MenuCard
