import React from 'react';
import {Stats} from './Stats';
import {Stopwatch} from './Stopwatch';

export const Header = (props) => {
	const total = props.players.length
	return (
		<header className="header">
			<Stats players = {props.players}/>
			<h1 className="h1">{props.title}</h1>

			<Stopwatch/>
		</header>
	);
}
