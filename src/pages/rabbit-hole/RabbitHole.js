import React from 'react'
import './rabbithole.css'
import gif from '../../imgs/rabbitholeGif.gif'
import { GitHub } from '@mui/icons-material'

function RabbitHole() {
    return (
        <>
            <div className='rabbit-header'>The Rabbit Hole</div>
            <div className='rabbit-bio'>The Rabbit Hole is my final and captstone project that I did for my coding bootcamp. I was on a four man team and we constructed an online arcade. You can view the code for the front end and back end via the links below the rabbit. The migration of this page is underway. Please come back later to view the Rabbit Hole.</div>
            <img src={gif} alt="my-gif" className='rabbit-gif' />

            <div className='rabbit-hole-icon-link'>
                <a href='https://github.com/rvrios22/team-baby-face-boys-frontend' target='_blank' rel='noreferrer'>
                    <GitHub sx={{ fontSize: "3.5em", color: 'whitesmoke' }}></GitHub>
                    <p>Front End</p>
                </a>
                <a href='https://github.com/rvrios22/team-baby-face-boys-backend' target='_blank' rel='noreferrer'>
                    <GitHub sx={{ fontSize: "3.5em", color: 'black' }}></GitHub>
                    <p>Back End</p>
                </a>
            </div>
        </>
    )
}

export default RabbitHole