import React from 'react'
import style from './Team.module.css'
import Image from 'next/image'
import divider from '@/assets/image/restaurant_menu_svg.svg'
import TeamCard from '@/common/TeamCard'
const Team = () => {
    return (
        <section className={`${style.Team} Team`}>
            <div className="outer-spacing">
                <div className="custom-container">
                    <div className={`${style.team_content} `}>
                        <div className={`${style.team_content_text} text-center`}>
                            <h6 className='mb-0'>Amazing Team</h6>
                            <h2>Meet our chef</h2>
                            <Image src={divider} alt="image" />
                        </div>
                        <div className={`${style.team_card_conatiner}`}>
                            <div className="hstack gap-3 flex-wrap justify-content-center">
                                <TeamCard />
                                <TeamCard />
                                <TeamCard />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Team
