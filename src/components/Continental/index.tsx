import ImageTextContainer from '@/common/ImageTextContainer'
import React from 'react'

const Continental = () => {
    return (
        <>

            <div className={`image_text_container image_text_container_top`}>
                <ImageTextContainer imageSrc="BBQ_Chicken_Pizza.jpg" title="BBQ Chicken Pizza" tag="Continental " description=" Hand-tossed pizza crust topped with barbecue sauce, grilled chicken, red onions, mozzarella, and fresh cilantro." btnLabel="Order Now"
                    hasPrice={true} nextPrice=" $12.00 " prevPrice=" $13.00" />
            </div>
            <div className={`image_text_container image_text_container_bottom`}>
                <ImageTextContainer imageSrc="Caesar_Salad.webp" title="Caesar Salad" tag="Continental " description="Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese. Available with grilled chicken for an additional charge." btnLabel="Order Now"
                    hasPrice={true} prevPrice="$8.50" nextPrice="$8.00" />
            </div>
        </>
    )
}

export default Continental