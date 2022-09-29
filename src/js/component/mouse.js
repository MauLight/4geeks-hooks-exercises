import React, {useState} from 'react';
import Cat from './cat';

const Mouse = (props) => {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
    });

    const handleMouse = (e) => {
        setMouse({
            x: e.clientX,
            y: e.clientY
        })
    }

    return (
        <div className='progress-bar bg-dark rounded-1 my-3' style={{height: '50vh'}} onMouseOver={handleMouse}>
            {props.render(mouse)}
            <p>The mouse current position is {mouse.x} {mouse.y}</p>
        </div>
    )
};

export default Mouse;