import React from 'react'
import { Link } from 'react-router-dom'
import ReactWOW from 'react-wow'

function Jumbotron() {
    return (
        <div className="container jumbotron" style={ JumbotronStyle }>
            <ReactWOW animation="fadeInLeft">
                <p className="lead font-weight-normal">
                    This is a small app that fetch some data from Github API.<br/>
                </p>
            </ReactWOW>
            <ReactWOW animation="fadeInLeft">
            <p className="lead">
                Basically the app is going to get the most trending games repos written in JavaScript.<br/>
            </p>
            </ReactWOW>
            <ReactWOW animation="fadeIn">
                <hr className="my-4" />
            </ReactWOW>
            <ReactWOW animation="slideInUp">
                <Link to="/repos" className="btn btn-dark btn-lg">Start fetching</Link>
            </ReactWOW>
        </div>
    )
}

const JumbotronStyle = {
    margin: "6rem auto"
}

export default Jumbotron