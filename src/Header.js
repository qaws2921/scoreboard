import React from 'react';
import {Stats} from './Stats';
import {Stopwatch} from './Stopwatch';

export const Header = ({players,title}) => {
	return (
		<header className="header">
			<Stats players = {players}/>
			<h1 className="h1">{title}</h1>

			<Stopwatch/>
		</header>
	);
}
