import React from 'react'
import '../style/Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>A Guided Tour of</p>
                    <p>Apple Vision Pro</p>
                    <p>Take a closer look at using Apple Vision Pro, which seamlessly blends your digital content with your physical surroundings. So you can do the things you love in ways never before possible.</p>
                    <button className='button'>Watch the full film</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320'   src={`https://www.youtube.com/embed/IY4x85zqoJM?autoplay=0`} title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo
