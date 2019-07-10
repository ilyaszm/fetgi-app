import React from 'react'
import ReactWOW from 'react-wow'

import '../../assets/css/animate.css'
import BackgroundImage from '../../assets/images/bg.png'

function Header() {
    return (
        <div>
            <header style={ HeaderStyle } id="header">
                <ReactWOW animation="fadeIn">
                    <h1 className="text-center text-uppercase" style={ TitleStyle }>
                        Trending
                    </h1>
                </ReactWOW>
            </header>
        </div>
    )
}

const HeaderStyle = {
    width: "100%",
    minHeight: "280px",
    background: `url(${BackgroundImage})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const TitleStyle = {
    paddingTop: "6rem",
    color: "#ddd"
}

export default Header