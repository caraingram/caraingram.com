import React from 'react'
import Picture from './websitepic.png'
function Homepage() {
    return (
        <div>
            <div>
                <img src={Picture.default} height = {100} width = {200} />
            </div>
            <div id="rectangle">
                <h1>Cara Ingram</h1>
            </div>
        </div>


    )
}

export default Homepage
