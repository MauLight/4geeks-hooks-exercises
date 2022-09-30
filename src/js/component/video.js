import React, { useEffect, useState, useRef } from 'react';

const Video = (props) => {

    const [write, setWrite] = useState('');

    const ref = useRef(null);

    const handleChange = (e) => {
        setWrite(e.target.value);
        console.log(write);
    }

    useEffect(() => {
        if (props.isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [props.isPlaying]);

    return (
        <div>
            <video className='rounded-3' ref={ref} src={props.src} loop playsInline />
            <div className='d-block mx-auto' style={{ width: '200px' }}>
                <input className='input-group-text' type='text' value={write} onChange={handleChange} />
            </div>
        </div>

    )
};

export default Video;