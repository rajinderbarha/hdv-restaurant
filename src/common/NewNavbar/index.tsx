import Image from 'next/image'
import React from 'react'
import logo from '@/assets/image/hdv_logo.svg'
import style from './NewNavbar.module.css'
const NewNavbar = () => {
    return (
        <>
            <nav className={`${style.navbar}`}>
                <Image src={logo} alt="hvd Logo" className={`${style.navbar_logo}`} />
            </nav>
        </>
    )
}

export default NewNavbar