import React from 'react'
import style from './RestaurantMenuBook.module.css'
import Image from 'next/image'
import heading_tag_icon from '@/assets/image/heading_tag_icon.svg'
import MenuCard from '@/common/MenuCard'
const RestaurantMenuBook = () => {
    return (
        <>

            <div className={`${style.RestaurantMenuBook}`}>

                <div className={`${style.dessert}`}>
                    <div className={`${style.book_tag} d-flex align-items-center`}>
                        <h5 className='mb-0'>DESSERT</h5>
                        <Image src={heading_tag_icon} alt="image" />
                    </div>
                    <div className={`${style.dessert_content}`}>

                        <MenuCard />
                    </div>
                </div>
            </div>

        </>
    )
}

export default RestaurantMenuBook