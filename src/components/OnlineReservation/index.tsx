import React from 'react'
import style from './OnlineReservation.module.css'
import Image from 'next/image'
import divider from '@/assets/image/heading_divider.svg'
import CustomButton from '@/common/CustomButton'
import { LuUsers2 } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
const OnlineReservation = () => {
    return (
        <>
            <section className={`${style.OnlineReservation} OnlineReservation `}>
                <div className="outer-spacing">
                    <div className="custom-container">
                        <div className={`${style.OnlineReservation_content}`}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className={`${style.form_container} position-relative`}>
                                        <div className={`${style.form_content}`}>

                                            <div className={`${style.form_heading} text-center`}>
                                                <h2>Online<br /> Reservation</h2>
                                                <Image src={divider} alt="image" />
                                                <p>Please fill out the order form</p>
                                            </div>
                                            <form className={`${style.form}`}>


                                                <div className="">
                                                    <label htmlFor="exampleFormControlInput1" className="">Name</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                                                </div>
                                                <div className={`row ${style.input_row}`}>
                                                    <div className="col">
                                                        <label className="" htmlFor="person">Username</label>
                                                        <div className="input-group">
                                                            <div className={`input-group-text ${style.input_icon}`}><LuUsers2 /></div>
                                                            <input type="text" className="form-control" id="person" placeholder="1 Person" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <label className="" htmlFor="date">Username</label>
                                                        <div className="input-group">
                                                            <div className={`input-group-text ${style.input_icon}`}><SlCalender /></div>
                                                            <input type="date" className="form-control" id="date" placeholder="mm/dd/yyyy" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <label className="" htmlFor="time">Username</label>
                                                        <div className="input-group">
                                                            <div className={`input-group-text ${style.input_icon}`}><IoMdTime /></div>
                                                            <input type="time" className="form-control" id="time" placeholder="1:00PM" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                                                </div>
                                                <div className={`${style.submit_btn}`}>

                                                    <CustomButton name="Book a table" />
                                                </div>
                                                {/* <div className="">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" name="name" id="name" placeholder='Your Name' />
                                                </div>
                                                <div className="">

                                                    <div className="">
                                                        <label htmlFor="person">Person</label>
                                                        <input type="number" name="person" id="person" placeholder='          1 Person' />
                                                    </div>
                                                    <div className="">
                                                        <label htmlFor="date">Date</label>
                                                        <input type="text" name="date" id="date" placeholder='Your Name' />
                                                    </div>
                                                </div> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnlineReservation