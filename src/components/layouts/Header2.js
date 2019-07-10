import React from 'react'

import '../../assets/css/animate.css'
import BackgroundImage from '../../assets/images/bg.png'

function Header2() {
    return (
        <div>
            <header style={ HeaderStyle } id="header">
                <h1 className="animated fadeIn text-center text-uppercase" style={ TitleStyle }>
                    Trending
                </h1>
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

export default Header2