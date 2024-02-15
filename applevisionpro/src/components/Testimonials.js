import React from 'react'
import user1 from '../assets/DavidPogue.jpg'
import user2 from '../assets/ElonMusk.jpeg'
import user3 from '../assets/MarkZuckerberg.jpg'
import '../style/Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1' />
                        <p>As it is, the 2024 Vision Pro is a prize for early adopters and Apple superfans, and maybe a fun purchase for the well-heeled curious who want to take their first steps into headset computing. But with its current issues of price, weight, and comfort, the general public won’t beat a path to the door of Vision Pro 1.0.</p>
                        <p><span>David Pogue</span></p>
                        <p>
                            American writer and presenter

                        </p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1' />
                        <p>While the technology holds promise, it hasn’t yet achieved a breakthrough experience. This reflects a cautious optimism, acknowledging the device’s potential while recognizing its current limitations.His comments suggest that, like the first iPhone, the Vision Pro may not have fully realized its potential at launch </p>
                        <p><span>Elon Musk</span></p>
                        <p>
                            CEO of Tesla Motors
                        </p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1' />
                        <p>Before this,I expected that Quest would be the better value for most people because it’s really good and it’s like seven times less expensive,”he said, referencing Quest 3’s $500 starting price tag compared to $3,500 for the Vision Pro.“But after using it,I don’t just think Quest is the better value,I think Quest is the better product,period.</p>
                        <p><span>Mark Zuckerberg</span></p>
                        <p>
CEO of Facebook
</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
