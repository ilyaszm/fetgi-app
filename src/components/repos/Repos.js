import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Repo from './Repo'


function Repos() {

    useEffect(() => {
        fetchRepos()
    }, [])

    const [repos, setRepos] = useState([])

    const fetchRepos = async () => {
        const data = await fetch('https://api.github.com/search/repositories?q=game+language:javascript&sort=stars&order=desc')
        const repos = await data.json()
        console.log(repos.items)

        setRepos(repos.items)
    }

    return(
        <div>
            <Header />
            <h4 style={ LinkStyle }>
                <Link to="/" className="text-decoration-none">Back To Home</Link>
            </h4>
            <hr style={ HrStyle } />
            {
                repos.map(repo => (
                    <Repo
                        key     = { repo.id }
                        repo    = { repo }
                    />
                ))
            }
            <Footer />
        </div>
    )
    
}

const LinkStyle = {
    textAlign: "center",
    padding: "2rem"
}

const HrStyle = {
    width: "20rem",
    marginBottom: "3rem"
}

export default Repos