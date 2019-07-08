import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer style={ FooterStyle }>
                <p style={ FooterParagraphStyle } className="text-center">
                    Designed and coded by <Link to="#" className="text-decoration-none">izem</Link> - &copy; 2019
                </p>
            </footer>
        </div>
    )
}

const FooterStyle = {
    background: "#222",
    width: "100%",
    position: "absolute",
    left: "0"
}

const FooterParagraphStyle = {
    color: "#eee",
    padding: "1.5rem"
}

export default Footer