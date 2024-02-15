import React from 'react'
import john from '../assets/applevisionpro.jpg'
import '../style/About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Your apps live in your space.</p>
                    <p>With Apple Vision Pro, you have an infinite canvas that transforms how you use the apps you love. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you. Browse the web in Safari, create a to-do list in Notes, chat in Messages, and seamlessly move between them with a glance.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
