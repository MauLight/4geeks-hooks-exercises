import React from 'react';

const Cat = (props) => {
    const mouse = props.mouse;

    return (
        <h2 style={{position: 'absolute', left: mouse.x, top: mouse.y}}>CAT!</h2>
    )
};

export default Cat;