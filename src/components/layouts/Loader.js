import React from 'react'

import loader from '../../assets/images/loader.gif'

export default () => {
    return (
        <div>
            <img
                src     = { loader }
                alt     = "Loading..."
                style   = {{ width: '5rem', margin: '5rem auto', display: 'block' }}
            />
        </div>
    )
}