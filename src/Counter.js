import React from 'react';

class Counter extends React.Component{



	increment=(delta)=>{

		this.props.changeScore(this.props.id,delta);
	}

	render() {
		return(
			<div className="counter">
				<button className="counter-action decrement" onClick={() => this.increment(-1)}>-</button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment" onClick={() => this.increment(1)}>+</button>
			</div>
		)
	}
}


export default Counter;