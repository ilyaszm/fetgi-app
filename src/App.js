import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ReactWOW from 'react-wow'

import Jumbotron from './components/layouts/Jumbotron'
import Repos from './components/repos/Repos'

import BackgroundImage from './assets/images/bg.png'
import './assets/css/animate.css'

class App extends Component {
    render() {
        return(
            /*  To switch between pages, we used react-router  */
            <Router>
                <div>
                    <Switch>
                        {/* the "exact" attribut makes us navigate to the other page, otherwise it will stop and render only the Home (/) */}
                        <Route path="/" exact component={ Home } />
                        <Route path="/repos" component={ Repos } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const Home = () => (
    <div>
        <MainHeader />
        <Jumbotron />
        <MainFooter />
    </div>
)

const MainHeader = () => (
    <header style={ MainHeaderStyle }>
        <ReactWOW animation="fadeIn">
            <h1 className="text-center text-uppercase" style={ TitleStyle }>
                Welcome to fetgi app
            </h1>
        </ReactWOW>
    </header>
)

const MainFooter = () => (
    <footer>
        <p className="text text-center">
            Designed and coded by <a href="https://ilyaszm.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">izem</a> - &copy; 2019
        </p>
    </footer>
)

const MainHeaderStyle = {
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

export default App