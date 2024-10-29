import React from 'react'

import style from './HomeRestaurantMenu.module.css'
import AppetizersImage from '@/common/AppetizersImage'
import SaladImage from '@/common/SaladImage'
import MainCourseImage from '@/common/MainCourseImage'
import PastaImage from '@/common/PastaImage'
import DessertImage from '@/common/DessertImage'
import Soup from '../Soup'
import Chinese from '../Chinese'
import Drinks from '../Drinks'
import Indian from '../Indian'
import Continental from '../Continental'

const HomeRestaurantMenu = () => {
    return (
        <>
            <ul className={`nav justify-content-center ${style.menu_list}`} id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className={`${style.tab_btns} nav-link active d-flex align-items-center flex-column`} id="pills-appetizers-tab" data-bs-toggle="pill" data-bs-target="#pills-appetizers" type="button" role="tab" aria-controls="pills-appetizers" aria-selected="true">
                        <AppetizersImage />
                        SOUPS
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`${style.tab_btns} nav-link d-flex align-items-center flex-column`} id="pills-salad-tab" data-bs-toggle="pill" data-bs-target="#pills-salad" type="button" role="tab" aria-controls="pills-salad" aria-selected="false">
                        <SaladImage />
                        DRINKS
                    </button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className={`${style.tab_btns} nav-link d-flex align-items-center flex-column`} id="pills-main-course-tab" data-bs-toggle="pill" data-bs-target="#pills-main-course" type="button" role="tab" aria-controls="pills-main-course" aria-selected="false">
                        <MainCourseImage />
                        Chinese
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`${style.tab_btns} nav-link d-flex align-items-center flex-column`} id="pills-pasta-tab" data-bs-toggle="pill" data-bs-target="#pills-pasta" type="button" role="tab" aria-controls="pills-pasta" aria-selected="false">
                        <PastaImage />
                        Indian
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`${style.tab_btns} nav-link d-flex align-items-center flex-column`} id="pills-dessert-tab" data-bs-toggle="pill" data-bs-target="#pills-dessert" type="button" role="tab" aria-controls="pills-dessert" aria-selected="false">
                        <DessertImage />
                        Continental
                    </button>
                </li>
            </ul >
            <div className={`tab-content ${style.tab_content}`} id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-appetizers" role="tabpanel" aria-labelledby="pills-appetizers-tab" tabIndex={0}>
                    {/* <div className={`${style.image_text_container} ${style.image_text_container_top}`}>
                        <ImageTextContainer imageSrc="Tomato_Basil_Soup.webp" title="Tomato Basil Soup" tag="SOUP" description="A rich, creamy blend of ripe tomatoes and fresh basil, topped with a drizzle of olive oil and a sprinkle of Parmesan. Perfectly comforting and flavorful. " btnLabel="Order Now"
                            hasPrice={true} nextPrice=" $7.50" prevPrice="$8.50" />
                    </div>
                    <div className={`${style.image_text_container} ${style.image_text_container_bottom}`}>
                        <ImageTextContainer imageSrc="Chicken_noodle_soup.jpg" title="Chicken Noodle Soup" tag="SOUP" description="A comforting bowl of tender chicken, egg noodles, and fresh vegetables in a clear, aromatic broth. Ideal for a cozy meal." btnLabel="Order Now"
                            hasPrice={true} nextPrice="$7.00" prevPrice="$8.00" />
                    </div> */}

                    <Soup />
                </div>
                <div className="tab-pane fade" id="pills-salad" role="tabpanel" aria-labelledby="pills-salad-tab" tabIndex={0}>

                    <Drinks />
                </div>
                <div className="tab-pane fade" id="pills-main-course" role="tabpanel" aria-labelledby="pills-main-course-tab" tabIndex={0}>

                    <Chinese />

                </div>
                <div className="tab-pane fade" id="pills-pasta" role="tabpanel" aria-labelledby="pills-pasta-tab" tabIndex={0}>


                    <Indian />
                </div>
                <div className="tab-pane fade" id="pills-dessert" role="tabpanel" aria-labelledby="pills-dessert-tab" tabIndex={0}>

                    <Continental />

                </div>
            </div>

        </>
    )
}

export default HomeRestaurantMenu