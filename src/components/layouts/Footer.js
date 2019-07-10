import React, { useEffect } from 'react'
import $ from 'jquery'

import '../../assets/css/footer.css'

function Footer() {

    useEffect(() => {
        //  Smooth Scrool with jQuery
        $('#to_top_btn').on('click', function () {
            const header = $('#header').position().top;
            $('html, body').animate({
                scrollTop: header
            }, 900);
        });
    })

    return (
        <div>
            <footer>
                <p className="text text-center">
                    Designed and coded by <a href="https://ilyaszm.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">izem</a> - &copy; 2019
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