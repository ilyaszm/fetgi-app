import React, { useEffect } from 'react'
import $ from 'jquery'

import '../../assets/css/footer.css'

function Footer() {

    /*  Smooth Scrool with jQuery  */
    useEffect(() => {
        // get id of the toTopBtn button
        $('#to_top_btn').on('click', function () {
            // get id of the header
            const header = $('#header').position().top;
            // animate the scroll to top
            $('html, body').animate({
                scrollTop: header
            }, 900);
        });
    })

    return (
        <div>
            <footer>
                <p className="text text-center">
                    Designed and coded by <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">izem</a> - &copy; 2019
                </p>
                <div className="toTopBtn">
                    <a href="#header" id="to_top_btn" className="text-decoration-none">
                        <i className="fas fa-long-arrow-alt-up"></i>
                    </a>
                </div>
            </footer>
        </div>
    )

}

export default Footer
