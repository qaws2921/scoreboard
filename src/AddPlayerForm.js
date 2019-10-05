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
		this.props.addPlayer(this.state.value);
		this.setState({
			value : ''
		})

	}


	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<input className="input" type="text"  onChange={this.handleValueChange}  value={this.state.value}  placeholder="enter a player's name"/>
					<input className="input" type="submit" value="Add Player"/>
			</form>
		)
	}
}

export default AddPlayerForm;