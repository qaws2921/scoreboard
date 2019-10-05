import React from 'react';
import './App.css';
import {Header} from './Header';
import {Player} from './Player';
import AddPlayerForm from "./AddPlayerForm";






// function component  만드는 법
// 2.	React Elemement를  리턴

// 1. 첫글자가 대문자


class App extends React.Component{

  state={
    maxId:4,
    players : [
      {name:"kim", score:30,id:1},
      {name:"lee", score:40,id:2},
      {name:"che", score:50,id:3},
      {name:"ji", score:60,id:4},
    ]
  }

  render() {
    return(
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} />

        {
          this.state.players.map(player => <Player name={player.name} score={player.score} key={player.id}

                                                   removePlayer={this.handleRemovePlayer}
                                                   changeScore={this.handleChangeScore}
                                                   id={player.id}/>)

        }


        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
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

  handleChangeScore = (id,delta)=>{
    console.log(id,delta);

    this.setState(prevState =>{
      const player = prevState.players.find(player => player.id === id);
      player.score += delta;
      return {
        player: [...prevState.players]
      }
    })

  }

  handleAddPlayer = (name) =>{
    this.setState(prevState => {
      // prevState.players.push({name:name, score:0, id:++this.maxId});
      // return {
      //   players:[...prevState.players]

      // }
    const players = [...prevState.players];
    players.push({name:name, score:0, id:++prevState.maxId});
    return {
      players
    }


    })
  }
}





export default App;
