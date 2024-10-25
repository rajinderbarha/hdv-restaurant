import Image from 'next/image'
import React from 'react'
import appetizers from '@/assets/image/Appetizers_icon.svg'
import dessert_icon from '@/assets/image/dessert_icon.svg'
import main_course_icon from '@/assets/image/main_course_icon.svg'
import Salad_icon from '@/assets/image/Salad_icon.svg'
import pasta_icon from '@/assets/image/pasta_icon.svg'
import menu_image from '@/assets/image/menu.png'
import style from './HomeRestaurantMenu.module.css'
// import RestaurantMenuBook from '../RestaurantMenuBook'

const HomeRestaurantMenu = () => {
    return (
        <>
            <ul className={`nav  mb-3 justify-content-center ${style.menu_list}`} id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active d-flex align-items-center flex-column" id="pills-appetizers-tab" data-bs-toggle="pill" data-bs-target="#pills-appetizers" type="button" role="tab" aria-controls="pills-appetizers" aria-selected="true">
                        <Image src={appetizers} alt='menu' />
                        APPETIZERS
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link d-flex align-items-center flex-column" id="pills-salad-tab" data-bs-toggle="pill" data-bs-target="#pills-salad" type="button" role="tab" aria-controls="pills-salad" aria-selected="false">
                        <Image src={Salad_icon} alt='menu' />
                        SALAD</button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className="nav-link d-flex align-items-center flex-column " id="pills-main-course-tab" data-bs-toggle="pill" data-bs-target="#pills-main-course" type="button" role="tab" aria-controls="pills-main-course" aria-selected="false">
                        <Image src={main_course_icon} alt='menu' />
                        MAIN COURSE
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link d-flex align-items-center flex-column" id="pills-pasta-tab" data-bs-toggle="pill" data-bs-target="#pills-pasta" type="button" role="tab" aria-controls="pills-pasta" aria-selected="false">
                        <Image src={pasta_icon} alt='menu' />
                        PASTA
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link d-flex align-items-center flex-column" id="pills-dessert-tab" data-bs-toggle="pill" data-bs-target="#pills-dessert" type="button" role="tab" aria-controls="pills-dessert" aria-selected="false">
                        <Image src={dessert_icon} alt='menu' />
                        DESSERT
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-appetizers" role="tabpanel" aria-labelledby="pills-appetizers-tab" tabIndex={0}><Image src={menu_image} alt='menu' /></div>
                <div className="tab-pane fade" id="pills-salad" role="tabpanel" aria-labelledby="pills-salad-tab" tabIndex={0}><Image src={menu_image} alt='menu' /></div>
                {/* <div className="tab-pane fade" id="pills-salad" role="tabpanel" aria-labelledby="pills-salad-tab" tabIndex={0}><RestaurantMenuBook /></div> */}
                <div className="tab-pane fade" id="pills-main-course" role="tabpanel" aria-labelledby="pills-main-course-tab" tabIndex={0}><Image src={menu_image} alt='menu' /></div>
                <div className="tab-pane fade" id="pills-pasta" role="tabpanel" aria-labelledby="pills-pasta-tab" tabIndex={0}><Image src={menu_image} alt='menu' /></div>
                <div className="tab-pane fade" id="pills-dessert" role="tabpanel" aria-labelledby="pills-dessert-tab" tabIndex={0}><Image src={menu_image} alt='menu' /></div>
            </div>

        </>
    )
}

export default HomeRestaurantMenu