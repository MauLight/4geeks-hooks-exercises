import React, { useState } from 'react';

const Clock = (props) => {

    return (
        <h3 className='float-start'>time is {props.time}.</h3> 
    )
};

export default Clock;