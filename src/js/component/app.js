import React, { useState, useEffect } from 'react';
import Video from './video';

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [insult, setInsult] = useState([]);

    useEffect(() => {
        console.log('you blew it again...')
    })

    let num = Math.floor(Math.random() * 10000);
    console.log(num)
    let fuck = <li key={num + 1}>FUCKER</li>;

    const handleClick = () => {
        setInsult([...insult, fuck])
    };

    return (
        <div className='container d-block '>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center rounded-2 mt-5'>
                    <Video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={isPlaying} />
                </div>
                <div className='col-12 d-flex justify-content-center'>
                    <button className='btn btn-success ml-5 my-2' onClick={handleClick}>Hit me!</button>
                    <button className='btn btn-primary m-2' onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}</button>
                    <ul>{insult}</ul>
                </div>
            </div>
        </div>
    )

};


export default App;

/*
const playlist = async () => {
        const getSong = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await getSong.json();

        setState(data.results);
    };
    useEffect(() => {
        playlist();
    }, []);
    return (
        <div className='App'>
            {state.map((item, index, arr) => {
                return <li key= {index}>{item.name}</li>
            })}
        </div>
    )

    */