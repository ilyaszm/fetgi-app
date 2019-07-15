import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component"

import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Loader from '../layouts/Loader'
import Repo from './Repo'

function Repos() {

    const [repos, setRepos]     = useState([])
    // setting the page to number "2" to use it in the next fetch
    const [page, setPage]       = useState(2)
    const [isError, setIsError] = useState(false)

    /*  Fetch repos from Github API  */
    useEffect(() => {
        setIsError(false)
        try {
            axios
                // by default the page value here is set to "1"
                .get(`https://api.github.com/search/repositories?q=game+language:javascript&sort=stars&order=desc`)
                // store the fetched data into repos array
                .then(result => { setRepos(result.data.items) })
        }
        catch (error) { setIsError(true) }
    }, []) // passing an empty [] to let our "setRepos" state inside the hook always have the initial value

    /*  Fetch more repos  */
    const loadMoreRepos = () => {
        setIsError(false)
        try {
            axios
                // passing page state to get repos of the second page
                .get(`https://api.github.com/search/repositories?q=game+language:javascript&sort=stars&order=desc&page=${page}`)
                .then( result => {
                    // Adding the new fetched repos to the first ones,
                    // 'repos': are the first repos,
                    // 'result.data.items': are the new ones
                    setRepos(repos.concat(result.data.items))
                    // setting the page state to a new value
                    setPage(page + 1)
                })
        }
        catch (error) { setIsError(true) }
    }
    
    return(
        <div>
        
            <Header />
            <h4 style={ LinkStyle }>
                <Link to="/" className="text-decoration-none">
                    Back To Home
                </Link>
            </h4>
            <hr style={ HrStyle } />
            { isError && <h5 style={ ErrorStyle }>Something went wrong...!!</h5> }

            {/* To make infinite pagination we used the InfiniteScroll component */}
            <InfiniteScroll
                dataLength  = { repos.length }
                next        = { loadMoreRepos } // the loadMoreRepos() will be called after we reach the bottom
                hasMore     = { true }
                loader      = { <Loader /> }
            >
                {
                    // mapping through the repos array to display the fetched data
                    repos.map(repo => (
                        <Repo
                            key     = { repo.id }   // Adding key to make every repo unique
                            repo    = { repo }      // passing repo as a prop to use data from repos[]
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

const ErrorStyle = {
    textAlign: "center"
}

export default Repos