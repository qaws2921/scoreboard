import React from 'react';
import Counter from './Counter';

export const Player = (props) => (
	<div className="player">
		<span className="player-name">
			{/*3. 콜백함수 */}
			<button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
			{props.name}</span>
		<Counter score={props.score} changeScore = {props.changeScore} id={props.id}/>
	</div>
);