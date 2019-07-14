import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component"

import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Repo from './Repo'
import Loader from '../layouts/Loader'

function Repos() {

    const [repos, setRepos] = useState([])
    const [page, setPage] = useState(2)

    // grab repos when when we load repos
    useEffect(() => {
        axios
            .get(`https://api.github.com/search/repositories?q=game+language:javascript&sort=stars&order=desc`)
            .then(result => {
                setRepos(result.data.items)
            })
            .catch(error => {
                console.log(error)
            })
    }, []) // the empty array above is for fetching only once and avoiding the loop of fetching

    const loadMoreRepos = () => {
        axios
            .get(`https://api.github.com/search/repositories?q=game+language:javascript&sort=stars&order=desc&page=${page}`)
            .then(
                result => {
                    setPage(page + 1)
                    setRepos(repos.concat(result.data.items))
                }
            )
    }
    
    return(
        <div>
            <Header />
            <h4 style={ LinkStyle }>
                <Link to="/" className="text-decoration-none">Back To Home</Link>
            </h4>
            <hr style={ HrStyle } />
            <InfiniteScroll
                dataLength  = {repos.length}
                next        = {loadMoreRepos}
                hasMore     = {true}
                loader      = {<Loader />}
            >
                {
                    repos.map(repo => (
                        <Repo
                            key     = { repo.id }
                            repo    = { repo }
                        />
                    ))
                }
            </InfiniteScroll>
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