import React,{useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import '../App.css';

function Enter(props) {
    const [name,setName] = useState('');
    const [redirect2, setRedirect2] = useState(false);

    if (redirect2) {
        return <Redirect push to="/game" />;
    }

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

    

    function handleChange(e){
        let value=e.target.value;
        setName(value);
    }

    function handleClick(){
        if(name === ''){
            alert('Error')
        } else {
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
            props.gameDetails(name, playerCards, computerCards);
            setRedirect2(true)
            }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <label id="header">Ready for WAR</label>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <Form>
                    <Form.Group>
                        <Form.Control className="input" type="text" placeholder="enter your name" onChange={handleChange} />
                    </Form.Group>
                </Form>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <Button className="btn" onClick={handleClick}>Start</Button>
            </div>
            <div className="col-4"></div>
            </div>
            
        </div>
    );
}

export default Enter;