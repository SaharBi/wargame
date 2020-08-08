import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import '../App.css'

function Game(props) {
const [player,setPlayer] = useState(props.player);
const [i,setI] = useState(0);
const [redirect2, setRedirect2] = useState(false);
const [lose, setLose] = useState(0);
const [win, setWin] = useState(0);

if (redirect2) {
    return <Redirect push to="/gameover" />;
}
    function handleClick(){
        if(player.computerCards[i]>player.playerCards[i]){
            setLose(lose+1);
        } else if(player.computerCards[i]<player.playerCards[i]) {
            setWin(win+1);
        }
        if(i<26){
        setI(i+1);
        } else {
            props.gameOverDetails(lose, win)
            setRedirect2(true)
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-2'>
                    <label className='lbl'>Computer</label>
                </div>
                <div className='col-7'></div>
            </div>
            <div className='row'>
                <div className='col-5'></div>
                <div className='col-2 card'><p>{player.computerCards[i]}</p></div>
                <div className='col-5'></div>
            </div>
            <br />
            <div className='row'>
                <div className='col-5'></div>
                <div className='col-2 card'><p>{player.playerCards[i]}</p></div>
                <div className='col-5'></div>
            </div>
            <div className='row'>
                <div className='col-7'>
                <Button className="btn" onClick={handleClick}>Next</Button>
                </div>
                <div className='col-2'>
                    <label className='lbl'>You</label>
                </div>
                <div className='col-3'></div>
            </div>
        </div>
    );
}

export default Game;