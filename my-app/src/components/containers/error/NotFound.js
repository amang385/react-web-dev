import React , {Component} from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

const NotFound = () => {
    return  (
        <div>
            <Header/>
                <div className="container text-center my-3">
                    <h1 style={{fontSize:120}}>404</h1>
                    <h2> NOT FOUND</h2>
                    <p className="title">ขออภัยคราบ เราไม่พบหน้าที่คุณกำลังค้นหา</p>
                </div>
            <Footer/>
        </div>
    )
}

export default NotFound