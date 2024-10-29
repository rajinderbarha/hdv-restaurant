import ImageTextContainer from '@/common/ImageTextContainer'
import React from 'react'

const Indian = () => {
    return (
        <>
            <div className={`image_text_container image_text_container_top`}>
                <ImageTextContainer imageSrc="Butter_Chicken.webp" title="Butter Chicken" tag="Indian" description="A rich and creamy North Indian dish featuring tender chicken pieces cooked in a spiced tomato-based curry sauce. Served with naan or rice" btnLabel="Order Now"
                    hasPrice={true} nextPrice=" $12.00 " prevPrice=" $13.00" />
            </div>
            <div className={`image_text_container image_text_container_bottom`}>
                <ImageTextContainer imageSrc="Biryani.webp" title="Biryani" tag="Indian" description="Aromatic basmati rice cooked with marinated chicken or mixed vegetables, saffron, and Indian spices. Served with raita on the side." btnLabel="Order Now"
                    hasPrice={true} prevPrice="$10.50" nextPrice="$9.00" />
            </div>

        </>
    )
}

export default Indian