import React from 'react'
import { Link } from 'react-router-dom'

function Jumbotron() {
    return (
        <div className="container jumbotron" style={ JumbotronStyle }>
            <p className="lead font-weight-normal">
                This is a small app that fetch some data from Github API.<br/>
            </p>
            <p className="lead">
                Basically the app is going to get the most trending games repos written in JavaScript.<br/>
            </p>
            <hr className="my-4" />
            <Link to="/repos" className="btn btn-dark btn-lg">Start fetching</Link>
        </div>
    )
}

const JumbotronStyle = {
    marginTop: "5rem",
    marginBottom: "5rem"
}

export default Jumbotron