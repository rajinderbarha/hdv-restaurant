import ImageTextContainer from '@/common/ImageTextContainer'
import React from 'react'

const Drinks = () => {
    return (
        <>
            <div className={`image_text_container image_text_container_top`}>
                <ImageTextContainer imageSrc="Fresh_Lemonade.jpg" title="Fresh Lemonade" tag="DRINKS" description="A refreshing blend of freshly squeezed lemons, water, and a hint of sweetness. Perfectly balanced and served chilled with ice." btnLabel="Order Now"
                    hasPrice={true} nextPrice=" $3.50 " prevPrice=" $4.00" />
            </div>
            <div className={`image_text_container image_text_container_bottom`}>
                <ImageTextContainer imageSrc="Classic_Iced_Coffee.jpg" title="Classic Iced Coffee" tag="DRINKS" description="Bold coffee brewed and cooled, served over ice with your choice of milk or cream. A perfect way to stay cool and energized." btnLabel="Order Now"
                    hasPrice={true} nextPrice="$4.00" prevPrice="$4.50" />
            </div>
        </>
    )
}

export default Drinks