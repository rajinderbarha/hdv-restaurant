import React from 'react'
import style from './RestaurantMenu.module.css'
import Image from 'next/image'
import divider from '@/assets/image/restaurant_menu_svg.svg'
import HomeRestaurantMenu from '../HomeRestaurantMenu'
const RestaurantMenu = () => {
    return (
        <>
            <section className={`${style.RestaurantMenu} RestaurantMenu`}>
                <div className="outer-spacing">
                    <div className="custom-container">
                        <div className={`${style.RestaurantMenu_content} text-center RestaurantMenu_content`}>
                            <h6 className='mb-0'>Our Menu</h6>
                            <h2>RESTAURANT MENU</h2>
                            <Image src={divider} alt="image" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="outer-spacing">
                <div className="custom-container">
                    <div className={`${style.all_menus}`}>
                        <HomeRestaurantMenu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantMenu