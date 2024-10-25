import React from 'react'
import cheif_image from '@/assets/image/chef_image.png'
import chef_image_divider from '@/assets/image/chef_image_divider.svg'
import style from './TeamCard.module.css'
import Image from 'next/image'
import { LiaFacebookSquare, LiaInstagram } from "react-icons/lia";
// import { CgInstagram } from "react-icons/cg";
import { TiSocialTwitter } from "react-icons/ti";
import Link from 'next/link'

const TeamCard = () => {
    return (
        <>
            <div className={`${style.team_card_conatiner}`}>
                <div className={`${style.team_card}`}>
                    <Image src={cheif_image} alt="image" className={`${style.team_card_image}`} />
                    <div className={`${style.profile_content}  d-flex align-items-center justify-content-start flex-column`}>
                        <h4>Chester Rodrigues </h4>
                        <p>chef</p>
                        <div className={`${style.social_content}  align-items-center justify-content-start flex-column`}>
                            <div className={`${style.team_card_divider}`}>
                                <Image src={chef_image_divider} alt="image" className={`${style.chef_image_divider}`} />
                            </div>
                            <div className={`${style.social_links} d-flex`}>
                                <div className={`${style.facebook}`}>
                                    <Link href="https://www.facebook.com/" target="_blank"><LiaFacebookSquare /></Link>
                                </div>
                                <div className={`${style.instagram}`}>
                                    <Link href="https://www.facebook.com/" target="_blank"><LiaInstagram /></Link>
                                </div>
                                <div className={`${style.twitter}`}>
                                    <Link href="https://www.facebook.com/" target="_blank"><TiSocialTwitter /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard