import React from 'react';

export const Stats = (props) => {

	const playerTotal = props.players.length;
	const totalScore = props.players.reduce((total, player) => total + player.score, 0);



	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players:</td>
				<td>{playerTotal}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalScore}</td>
			</tr>
			</tbody>
		</table>
	)
}