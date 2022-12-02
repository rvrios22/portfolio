import React from 'react'
import './rabbithole.css'
import gif from '../../../imgs/rabbitholeGif.gif'

function RabbitHole() {
    return (
        <>
            <div className='rabbit-header'>The Rabbit Hole</div>
            <div className='rabbit-bio'>This page is under construction. Please come back later to view the Rabbit Hole.</div>
            <img src={gif} alt="my-gif" className='rabbit-gif'/>
        </>
    )
}

export default RabbitHole