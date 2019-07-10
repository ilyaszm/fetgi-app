import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

import '../../assets/css/footer.css'

class Footer extends Component {

    componentDidMount() {
        //  Smooth Scrool with jQuery
        $('#to_top_btn').on('click', function () {
            const header = $('#header').position().top;
            $('html, body').animate({
                scrollTop: header
            }, 900);
        });
    }

    render() {
        return (
            <div>
                <footer>
                    <p className="text text-center">
                        Designed and coded by <Link to="#" className="text-decoration-none">izem</Link> - &copy; 2019
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

}

export default Footer