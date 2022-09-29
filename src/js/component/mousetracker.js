import React from 'react';
import Mouse from './mouse';
import Cat from './cat';

const MouseTracker = () => {
    return (
        <div>
            <h1>Move the Mouse!</h1>
            <Mouse render= {(mouse) => (
                <Cat mouse= {mouse} />
            )} />
        </div>
    );
}

export default MouseTracker;