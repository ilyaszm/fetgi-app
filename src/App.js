import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './components/layouts/Header'
import Jumbotron from './components/layouts/Jumbotron'
import Footer from './components/layouts/Footer'
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
        <Header />
        <Jumbotron />
        <Footer />
    </div>
)

export default App