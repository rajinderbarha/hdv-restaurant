import React from 'react'
import style from './DishesModule.module.css'
// import Caprese_Salad from '@/assets/image/Caprese_Salad.png'
// import Image from 'next/image'
import ImageTextContainer from '@/common/ImageTextContainer'
import Image from 'next/image'
import photo_badge_1 from '@/assets/image/photo_badge_1.png'
import photo_badge_2 from '@/assets/image/photo_badge_2.png'
const DishesModule = () => {
    return (
        <>

            <section className={`${style.DishesModule} DishesModule`}>
                <Image src={photo_badge_1} alt="" className={`${style.photo_badge_top_right}`} />
                <Image src={photo_badge_2} alt="" className={`${style.photo_badge_bottom_left}`} />
                <div className={`${style.dishes_content_1}`}>
                    <ImageTextContainer imageSrc="Caprese_Salad.png" title="Caprese Salad" tag="Hot & Delicious" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus" btnLabel="order food" hasPrice={true} prevPrice="$14.50" nextPrice="$14.50" />
                </div>
                <div className={`${style.dishes_content_2}`}>
                    <ImageTextContainer imageSrc="mushroom_risotto.png" title="mushroom risotto" tag="Hot & Delicious" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus" btnLabel="order food" hasPrice={true} prevPrice="$14.50" nextPrice="$14.50" />
                </div>
            </section>

        </>
    )
}

export default DishesModule