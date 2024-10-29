import ImageTextContainer from '@/common/ImageTextContainer'
import React from 'react'

const Soup = () => {
    return (
        <>

            <div className={`image_text_container image_text_container_top`} >
                <ImageTextContainer imageSrc="Tomato_Basil_Soup.webp" title="Tomato Basil Soup" tag="SOUP" description="A rich, creamy blend of ripe tomatoes and fresh basil, topped with a drizzle of olive oil and a sprinkle of Parmesan. Perfectly comforting and flavorful. " btnLabel="Order Now"
                    hasPrice={true} nextPrice=" $7.50" prevPrice="$8.50" />
            </div>
            <div className={`image_text_container image_text_container_bottom`}>
                <ImageTextContainer imageSrc="Chicken_noodle_soup.jpg" title="Chicken Noodle Soup" tag="SOUP" description="A comforting bowl of tender chicken, egg noodles, and fresh vegetables in a clear, aromatic broth. Ideal for a cozy meal." btnLabel="Order Now"
                    hasPrice={true} nextPrice="$7.00" prevPrice="$8.00" />
            </div>
        </>
    )
}

export default Soup