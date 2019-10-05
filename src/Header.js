import React from 'react';
import {Stats} from './Stats';
import {Stopwatch} from './Stopwatch';
import PropTypes from 'prop-types';

export const Header = ({players,title}) => {
	return (
		<header className="header">
			<Stats players = {players}/>
			<h1 className="h1">{title}</h1>

			<Stopwatch/>
		</header>
	);
}


Header.propTypes = {
	players: PropTypes.arrayOf(PropTypes.shape({
		id:PropTypes.number,
		score:PropTypes.number,
		name:PropTypes.string
	})),
	title: PropTypes.string
}

Header.defaultProps ={
	title : 'sss'
}