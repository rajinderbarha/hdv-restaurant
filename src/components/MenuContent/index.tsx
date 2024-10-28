import React from 'react'
import style from './MenuContent.module.css'
import Image from 'next/image'
import heading_tag_icon from '@/assets/image/heading_tag_icon.svg'
import MenuCard from '@/common/MenuCard'

const MenuContent = ({ title }: { title: string }) => {
    return (
        <>

            <div className={`${style.dessert}`} data-contain="menu-content">
                <div className={`${style.book_tag} d-flex align-items-center`}>
                    <h5 className='mb-0 '>{title}</h5>
                    <Image src={heading_tag_icon} alt="image" />
                </div>
                <div className={`${style.dessert_content}`}>
                    <div className={`row gx-0 gy-0 ${style.layout}`}>
                        <div className="col-xl-4 col-md-6"> <MenuCard /></div>
                        <div className="col-xl-4 col-md-6"> <MenuCard /></div>
                        <div className="col-xl-4 col-md-6"> <MenuCard /></div>
                        <div className="col-xl-4 col-md-6"> <MenuCard /></div>
                        <div className="col-xl-4 col-md-6"> <MenuCard /></div>
                        <div className="col-xl-4 col-md-6"> <MenuCard /></div>
                        <div className="col-xl-4 col-md-6"> <MenuCard /></div>
                        <div className="col-xl-4 col-md-6"> <MenuCard /></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MenuContent