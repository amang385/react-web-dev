import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'


const About = () => {
    return (
        <div>
            <Header />
                <div className="container my-3">
                <h3>Hi , am develop </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus labore molestias consequatur ab ipsa omnis voluptatum unde nulla maxime consequuntur quisquam deleniti, impedit repellat quaerat aliquam alias asperiores maiores.</p>
                </div>
            <Footer company="amang" email="amang@mail.com" />
        </div>
    )
}

export default About;
