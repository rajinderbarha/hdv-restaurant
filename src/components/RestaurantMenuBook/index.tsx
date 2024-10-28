import React from 'react'
import style from './RestaurantMenuBook.module.css'
// import Image from 'next/image'
// import heading_tag_icon from '@/assets/image/heading_tag_icon.svg'
// import MenuCard from '@/common/MenuCard'
import MenuContent from '../MenuContent'
interface RestaurantMenuBookProps {
    titles: string[]; // This specifies that titles should be an array of strings
}
const RestaurantMenuBook: React.FC<RestaurantMenuBookProps> = ({ titles }) => {
    return (
        <>

            <div className={`${style.RestaurantMenuBook}`}>
                {titles.map((title: string, i: number) => (
                    <MenuContent key={i} title={title} />
                ))}
            </div>

        </>
    )
}

export default RestaurantMenuBook