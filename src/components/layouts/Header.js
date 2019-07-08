import React from 'react'

import '../../assets/css/animate.css'
import BackgroundImage from '../../assets/images/bg.png'

function Header() {
    return (
        <div>
            <header style={ HeaderStyle }>
                <h1 className="animated fadeIn text-center text-uppercase" style={ TitleStyle }>
                    Welcome to fetgi app
                </h1>
            </header>
        </div>
    )
}

const HeaderStyle = {
    width: "100%",
    minHeight: "500px",
    background: `url(${BackgroundImage})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const TitleStyle = {
    paddingTop: "10rem",
    color: "#ddd"
}

export default Header