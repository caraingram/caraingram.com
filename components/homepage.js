import React from 'react'
import Picture from '../public/websitepic.png'

function Homepage() {
    return (
        <div>
          
            <div class="flex-container">
                <div class="flex-child">
                    <img src={'/websitepic.png'}/>
                </div>
                <div class="flex-child2">
                    <h1>Hello, I'm Cara</h1>
                    <h2>About</h2>
                </div>

            </div>
        </div>


    )
}

export default Homepage
