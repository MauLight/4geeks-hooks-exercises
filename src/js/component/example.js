import React from 'react';
import Name from './name';

const Example = (props) => {

    return (
        <div className='mt-5'>
            <Name user= {props.name} />
            {props.url}
            {props.time}
        </div>
    )
};

export default Example;
