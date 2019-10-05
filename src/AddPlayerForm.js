import React,{Component} from "react";



class AddPlayerForm extends Component {
	state = {
		value:''
	}

	handleValueChange = (e) => {
		this.setState({value:e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();


		const form = document.getElementById("form");
		const player = document.getElementById("player");

		console.log(form.checkValidity());
		console.log(player.validity.valid);


		this.props.addPlayer(this.state.value);
		this.setState({
			value : ''
		})

	}


	render() {
		return (
			<form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
				<input id="player" className="input" type="text"  onChange={this.handleValueChange}  value={this.state.value}  placeholder="enter a player's name" required/>
					<input className="input" type="submit" value="Add Player"/>
			</form>
		)
	}
}

export default AddPlayerForm;