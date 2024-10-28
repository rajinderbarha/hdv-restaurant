import React from 'react'
// import Image from 'next/image'
// import appetizers from '@/assets/image/Appetizers_icon.svg'
// import dessert_icon from '@/assets/image/dessert_icon.svg'
// import main_course_icon from '@/assets/image/main_course_icon.svg'
// import Salad_icon from '@/assets/image/Salad_icon.svg'
// import pasta_icon from '@/assets/image/pasta_icon.svg'
// import menu_image from '@/assets/image/menu.png'
import style from './HomeRestaurantMenu.module.css'
import RestaurantMenuBook from '../RestaurantMenuBook'
import AppetizersImage from '@/common/AppetizersImage'
import SaladImage from '@/common/SaladImage'
import MainCourseImage from '@/common/MainCourseImage'
import PastaImage from '@/common/PastaImage'
import DessertImage from '@/common/DessertImage'
import ImageTextContainer from '@/common/ImageTextContainer'
// import RestaurantMenuBook from '../RestaurantMenuBook'

const HomeRestaurantMenu = () => {
    return (
        <>
            <ul className={`nav justify-content-center ${style.menu_list}`} id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className={`${style.tab_btns} nav-link active d-flex align-items-center flex-column`} id="pills-appetizers-tab" data-bs-toggle="pill" data-bs-target="#pills-appetizers" type="button" role="tab" aria-controls="pills-appetizers" aria-selected="true">
                        {/* <Image src={appetizers} alt='menu' /> */}
                        <AppetizersImage />
                        {/* APPETIZERS */}
                        SOUPS
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`${style.tab_btns} nav-link d-flex align-items-center flex-column`} id="pills-salad-tab" data-bs-toggle="pill" data-bs-target="#pills-salad" type="button" role="tab" aria-controls="pills-salad" aria-selected="false">
                        {/* <Image src={Salad_icon} alt='menu' /> */}
                        <SaladImage />
                        {/* SALAD */}
                        DRINKS
                    </button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className={`${style.tab_btns} nav-link d-flex align-items-center flex-column`} id="pills-main-course-tab" data-bs-toggle="pill" data-bs-target="#pills-main-course" type="button" role="tab" aria-controls="pills-main-course" aria-selected="false">
                        {/* <Image src={main_course_icon} alt='menu' /> */}
                        <MainCourseImage />
                        MAIN COURSE
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`${style.tab_btns} nav-link d-flex align-items-center flex-column`} id="pills-pasta-tab" data-bs-toggle="pill" data-bs-target="#pills-pasta" type="button" role="tab" aria-controls="pills-pasta" aria-selected="false">
                        {/* <Image src={pasta_icon} alt='menu' /> */}
                        <PastaImage />
                        PASTA
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`${style.tab_btns} nav-link d-flex align-items-center flex-column`} id="pills-dessert-tab" data-bs-toggle="pill" data-bs-target="#pills-dessert" type="button" role="tab" aria-controls="pills-dessert" aria-selected="false">
                        {/* <Image src={dessert_icon} alt='menu' /> */}
                        <DessertImage />
                        DESSERT
                    </button>
                </li>
            </ul >
            <div className={`tab-content ${style.tab_content}`} id="pills-tabContent">
                {/* <div className="tab-pane fade show active" id="pills-appetizers" role="tabpanel" aria-labelledby="pills-appetizers-tab" tabIndex={0}><RestaurantMenuBook titles={["Dessert", "Lunch"]} /> </div> */}
                <div className="tab-pane fade show active" id="pills-appetizers" role="tabpanel" aria-labelledby="pills-appetizers-tab" tabIndex={0}>
                    <div className={`${style.image_text_container} ${style.image_text_container_top}`}>
                        <ImageTextContainer imageSrc="Tomato_Basil_Soup.webp" title="Tomato Basil Soup" tag="SOUP" description="A rich, creamy blend of ripe tomatoes and fresh basil, topped with a drizzle of olive oil and a sprinkle of Parmesan. Perfectly comforting and flavorful. " btnLabel="Order Now"
                            hasPrice={true} prevPrice=" $7.50" nextPrice="$8.50" />
                    </div>
                    <div className={`${style.image_text_container} ${style.image_text_container_bottom}`}>
                        <ImageTextContainer imageSrc="Tomato_Basil_Soup.webp" title="Chicken Noodle Soup" tag="SOUP" description="A comforting bowl of tender chicken, egg noodles, and fresh vegetables in a clear, aromatic broth. Ideal for a cozy meal." btnLabel="Order Now"
                            hasPrice={true} prevPrice="$7.00" nextPrice="$8.00" />
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-salad" role="tabpanel" aria-labelledby="pills-salad-tab" tabIndex={0}>

                    <div className={`${style.image_text_container} ${style.image_text_container_top}`}>
                        <ImageTextContainer imageSrc="Fresh_Lemonade.jpg" title="Fresh Lemonade" tag="DRINKS" description="A refreshing blend of freshly squeezed lemons, water, and a hint of sweetness. Perfectly balanced and served chilled with ice." btnLabel="Order Now"
                            hasPrice={true} prevPrice=" $3.50 " nextPrice=" $4.00" />
                    </div>
                    <div className={`${style.image_text_container} ${style.image_text_container_bottom}`}>
                        <ImageTextContainer imageSrc="Classic_Iced_Coffee.jpg" title="Classic Iced Coffee" tag="DRINKS" description="Bold coffee brewed and cooled, served over ice with your choice of milk or cream. A perfect way to stay cool and energized." btnLabel="Order Now"
                            hasPrice={true} prevPrice="$4.00" nextPrice="$4.50" />
                    </div>
                </div>
                {/* <div className="tab-pane fade" id="pills-salad" role="tabpanel" aria-labelledby="pills-salad-tab" tabIndex={0}><RestaurantMenuBook /></div> */}
                <div className="tab-pane fade" id="pills-main-course" role="tabpanel" aria-labelledby="pills-main-course-tab" tabIndex={0}><RestaurantMenuBook titles={["Dessert", "Lunch"]} /> </div>
                <div className="tab-pane fade" id="pills-pasta" role="tabpanel" aria-labelledby="pills-pasta-tab" tabIndex={0}><RestaurantMenuBook titles={["Dessert", "Lunch"]} /> </div>
                <div className="tab-pane fade" id="pills-dessert" role="tabpanel" aria-labelledby="pills-dessert-tab" tabIndex={0}><RestaurantMenuBook titles={["Dessert", "Lunch"]} /> </div>
            </div>

        </>
    )
}

export default HomeRestaurantMenu