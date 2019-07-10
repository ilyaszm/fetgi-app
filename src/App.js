import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import MainHeader from './components/layouts/MainHeader'
import Jumbotron from './components/layouts/Jumbotron'
import Repos from './components/repos/Repos'

class App extends Component {
    
    render() {
        return(
            <Router>
                <div>
                    <Switch>
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

const MainFooter = () => (
    <footer>
        <p className="text text-center">
            Designed and coded by <a href="https://ilyaszm.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">izem</a> - &copy; 2019
        </p>
    </footer>
)

export default App