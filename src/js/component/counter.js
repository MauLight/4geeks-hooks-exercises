import React, {useEffect, useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times!`
    })

    return (
        <div className='justify-content-center'>
            <p>You clicked {count} amount of times</p>
            <button className='btn btn-dark d-block mx-auto' onClick= {() => setCount(count + 1)}>Hit me!</button>
        </div>
    )
};

export default Counter;