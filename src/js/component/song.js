import React from 'react';

const Song = ({id, category, name, url}) => {

    return (
        <li key={id}>
            {name}
            <small>{category}</small>
        </li>
    )

};

export default Song;