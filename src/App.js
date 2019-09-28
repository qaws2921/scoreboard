import React from 'react';
import './App.css';



const players = [
  {name:"kim", score:30,id:1},
  {name:"lee", score:40,id:2},
  {name:"che", score:50,id:3},
  {name:"ji", score:60,id:4},
];


// function component  만드는 법
// 2.	React Elemement를  리턴
const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

// 1. 첫글자가 대문자
const Player = (props) => (
  <div className="player">
		<span className="player-name">
			{/*3. 콜백함수 */}
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      {props.name}</span>
    <Counter score={props.score}/>
  </div>
);

class App extends React.Component{

  state={
    players : [
      {name:"kim", score:40,id:1},
      {name:"lee", score:40,id:2},
      {name:"che", score:50,id:3},
      {name:"ji", score:60,id:4},
    ]
  }

  render() {
    return(
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={11} />

        {
          this.state.players.map(player => <Player name={player.name} score={player.score} key={player.id}

                                                   removePlayer={this.handleRemovePlayer} id={player.id}/>)

        }



      </div>
    )
  }

  // 1. 콜백 평션 정의
  handleRemovePlayer = (id)=>{
    console.log("handleRemovePlayer",id);
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }
}


class Counter extends React.Component{
  state = {
    score:30
  }


  increment=()=>{

    this.setState((prevState) => ({

      score: prevState.score +1

    }));
  }

  render() {
    return(
      <div className="counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.increment}>+</button>
      </div>
    )
  }
}



export default App;
