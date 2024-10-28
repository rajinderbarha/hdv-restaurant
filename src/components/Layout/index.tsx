import Footer from '@/common/Footer'
// import Navbar from '@/common/Navbar'
import NewNavbar from '@/common/NewNavbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {/* <Navbar /> */}
            <NewNavbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout