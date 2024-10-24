import React from 'react'
import cheif_image from '@/assets/image/chef_image.png'
import style from './TeamCard.module.css'
import Image from 'next/image'

const TeamCard = () => {
    return (
        <>
            <div className={`${style.team_card_conatiner}`}>
                <div className={`${style.team_card}`}>
                    <Image src={cheif_image} alt="image" className={`${style.team_card_image}`} />
                    <div className={`${style.profile_content}  d-flex align-items-center justify-content-center flex-column`}>
                        <h4>Chester Rodrigues </h4>
                        <p>chef</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard