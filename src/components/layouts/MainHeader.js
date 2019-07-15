import React from 'react'
import ReactWOW from 'react-wow'

import '../../assets/css/animate.css'
import BackgroundImage from '../../assets/images/bg.png'

function MainHeader() {
    return (
        <div>
            <header style={ HeaderStyle }>
                <ReactWOW animation="fadeIn">
                    <h1 className="text-center text-uppercase" style={ TitleStyle }>
                        Welcome to fetgi app
                    </h1>
                </ReactWOW>
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

export default MainHeader