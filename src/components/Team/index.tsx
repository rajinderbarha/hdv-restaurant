import React from 'react'
import style from './Team.module.css'
import Image from 'next/image'
import divider from '@/assets/image/heading_divider.svg'
import TeamCard from '@/common/TeamCard'
import top_right_photo from '@/assets/image/photo_badge_3.png'
import bottom_left_photo from '@/assets/image/photo_badge_4.png'
const Team = () => {
    return (
        <section className={`${style.Team} Team position-relative`}>
            {/* <div className={`${style.top_right_photo_container}`} > */}
            <Image src={top_right_photo} alt="image" className={`${style.top_right_photo}`} />
            {/* </div> */}
            <div className="outer-spacing">
                <div className="main-container">
                    <div className={`${style.team_content} `}>
                        <div className={`${style.team_content_text} text-center`}>
                            <h6 className='mb-0'>Amazing Team</h6>
                            <h2>Meet our chef</h2>
                            <Image src={divider} alt="image" />
                        </div>
                        <div className={`${style.team_card_conatiner}`}>
                            {/* <div className={`row ${style.card_layout}`}>
                                <div className="col-lg-4"><div className={`${style.card_div} ${style.card_div1}`}> <TeamCard /></div></div>
                                <div className="col-lg-3"><div className={`${style.card_div} ${style.card_div2}`}> <TeamCard /></div></div>
                                <div className="col-lg-3"><div className={`${style.card_div} ${style.card_div3}`}> <TeamCard /></div></div>

                            </div> */}
                            <div className={`${style.card_layout} `}>
                                <div className={`${style.card_layout1} row `}>
                                    <div className="col-lg-4 col-sm-6"><TeamCard name="Walter White " imgName="chef_image.png" position="Master Chef" /></div>
                                    <div className="col-lg-4 col-sm-6"><TeamCard name="Chester Rodrigues " imgName="chef_image1.png" position="chef" /></div>
                                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"><TeamCard name="William Anderson " imgName="chef_image2.png" position="Cook" /></div>
                                </div> <br />
                            </div>
                            {/* <div className={`${style.card_layout} d-flex flex-row  flex-wrap flex-lg-nowrap justify-content-center`}>
                                <div className={`${style.card_div} ${style.card_div1}`}> <TeamCard name="Walter White " imgName="chef_image.png" position="Master Chef" /></div>
                                <div className={`${style.card_div} ${style.card_div2}`}> <TeamCard name="Chester Rodrigues " imgName="chef_image1.png" position="chef" /></div>
                                <div className={`${style.card_div} ${style.card_div3}`}> <TeamCard name="William Anderson " imgName="chef_image2.png" position="Cook" /></div>
                           

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Image src={bottom_left_photo} alt="image" className={`${style.bottom_left_photo}`} />

        </section>
    )
}

export default Team
