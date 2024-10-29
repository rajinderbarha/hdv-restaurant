import ImageTextContainer from '@/common/ImageTextContainer'
import React from 'react'

const Chinese = () => {
    return (
        <>
            <div className={`image_text_container image_text_container_top`}>
                <ImageTextContainer imageSrc="Vegetable_Fried_Rice.jpg" title="Vegetable Fried Rice" tag="chinese" description="Fragrant rice stir-fried with fresh vegetables, seasoned with soy sauce and a hint of sesame oil. Perfect on its own or as a side dish." btnLabel="Order Now"
                    hasPrice={true} nextPrice=" $7.50 " prevPrice=" $8.00" />
            </div>
            <div className={`image_text_container image_text_container_bottom`}>
                <ImageTextContainer imageSrc="Hot_and_Sour_Soup.jpg" title="Hot and Sour Soup" tag="chinese" description="A warming blend of mushrooms, tofu, bamboo shoots, and spices in a tangy and spicy broth. Perfect for a chilly day." btnLabel="Order Now"
                    hasPrice={true} prevPrice="$5.50" nextPrice="$5.00" />
            </div>
        </>
    )
}

export default Chinese