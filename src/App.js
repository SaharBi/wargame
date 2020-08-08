import React, {useState} from 'react';
import {HashRouter as Router , Route , Switch} from 'react-router-dom';
import Enter from './components/Enter';
import Game from './components/Game';
import GameOver from './components/GameOver';
import './App.css';

function App() {
  const [player,setPlayer] = useState('');
  const [lose, setLose] =  useState(0);
  const [ win, setWin] = useState(0);

  function gameDetails(name, playerCards, computerCards){
    setPlayer({fullName: name, numOfWins: 0, numOfLoses: 0, numOfGames: 0, playerCards: playerCards, computerCards: computerCards})
  }

  function gameOverDetails(lose, win){
    setLose(lose);
    setWin(win);
  }

  function playerUpdate(result){
    if(result === 'win'){
      player.numOfWins = player.numOfWins+1;
    } else {
      player.numOfLoses = player.numOfLoses+1;
    }
  }
  function gameODetails(playerCards,computerCards){
    player.playerCards = playerCards;
    player.computerCards = computerCards;
  }

  return (
    <div>
      <Router>
         <Switch>
            <Route exact path="/" render={() => (<Enter gameDetails={gameDetails}/>)}/>
            <Route path='/game' render={() => (<Game player={player} gameOverDetails={gameOverDetails} />)} />
            <Route path='/gameover' render={() => (<GameOver gameODetails={gameODetails} lose={lose} win={win} playerUpdate={playerUpdate} />)} />
            </Switch> 
            </Router>
    </div>
  );
}

export default App;
