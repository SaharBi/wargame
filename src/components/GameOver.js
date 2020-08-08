import React from 'react';
import {Button} from 'react-bootstrap';
import '../App.css';
import {Link} from 'react-router-dom';

function GameOver(props) {
    var winlose = '';
    if(props.win>props.lose){
        winlose = 'Win';
        props.playerUpdate('win');
    }
    else if(props.win<props.lose){
        winlose = 'Lose';
        props.playerUpdate('lose');
    }
    else winlose = 'Teko';

    function handleClick(){
        var playerCards = [];
        var computerCards = [];
        let cardsArr = [];
        let x = 1;
        for(let i=0; i<52; i++){
            cardsArr.push(x);
            i++;
            cardsArr.push(x);
            i++;
            cardsArr.push(x);
            i++;
            cardsArr.push(x);
            x++;
        }
                let tArray = [];
                for(let i=0;i<26;i++){
                    let tNum = Math.floor(Math.random() * 52);
                    let afterFilter = tArray.filter(function(i){
                        return i === tNum
                    })
                    if(afterFilter.length===0){
                        tArray.push(tNum);
                    } else {
                        i--;
                    }
                }
                for(let k=0;k<tArray.length;k++){
                    let t = tArray[k];
                    playerCards.push(cardsArr[t]);
                }
                let cArray = [];
                for(let j=0;j<26;j++){
                    let cNum = Math.floor(Math.random() * 52);
                    let afterFilter2 = tArray.filter(function(i){
                        return i === cNum
                    })
                    let afterFilter3 = cArray.filter(function(j){
                        return j === cNum
                    })
                    if(afterFilter2.length===0 && afterFilter3.length===0){
                        cArray.push(cNum);
                    } else {
                        j--;
                    }
                }
                for(let l=0;l<cArray.length;l++){
                    let x = cArray[l];
                    computerCards.push(cardsArr[x]);
                }
                props.gameODetails(playerCards, computerCards);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'><label id='header2'>{winlose}</label></div>
                <div className='col-4'></div>
            </div>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'><label id='header3'>{props.win}-{props.lose}</label></div>
                <div className='col-4'></div>
            </div>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'><Link to='/game'><Button className="btn" onClick={handleClick}>Again?</Button></Link></div>
                <div className='col-4'></div>
            </div>
        </div>
    );
}

export default GameOver;