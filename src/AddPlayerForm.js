import React,{Component} from "react";



class AddPlayerForm extends Component {
	state = {
		value:''
	}

	handleValueChange = (e) => {
		this.setState({value:e.target.value});
	}

	render() {
		return (
			<form className="form">
				<input className="input" type="text"  onChange={this.handleValueChange}  value={this.state.value}  placeholder="enter a player's name"/>
					<input className="input" type="submit" value="Add Player"/>
			</form>
		)
	}
}

export default AddPlayerForm;