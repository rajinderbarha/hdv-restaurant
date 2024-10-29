import React from 'react'
import style from './UpcomingEvents.module.css'
import Image from 'next/image'
import divider from '@/assets/image/heading_divider.svg'
import UpcomingEventsCard from '@/common/UpcomingEventsCard'
const UpcomingEvents = () => {
    return (
        <>

            <section className={`${style.UpcomingEvents} UpcomingEvents`}>
                <div className="outer-spacing">
                    <div className="main-container">
                        <div className={`${style.UpcomingEvents_content} text-center`}>
                            {/* <h6 className='mb-0'>From Blog</h6> */}
                            <h2>Upcoming Events</h2>
                            <Image src={divider} alt="image" />
                        </div>
                        <div className={`${style.UpcomingEvents_card_container}`}>
                            <div className={`row ${style.card_layout}`}>
                                <div className="col-lg-4"><div className={`${style.card_div}`}><UpcomingEventsCard /></div></div>
                                <div className="col-lg-4"><div className={`${style.card_div}`}><UpcomingEventsCard /></div></div>
                                <div className="col-lg-4"><div className={`${style.card_div}`}><UpcomingEventsCard /></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpcomingEvents