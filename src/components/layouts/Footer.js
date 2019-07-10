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
    background: "#232323",
    opacity: .95,
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "auto"
}

const FooterParagraphStyle = {
    color: "#eee",
    padding: "1rem",
    margin: 0
}

export default Footer