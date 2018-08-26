// Designed to Add Notes for a given client
import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export	default	class AddNote extends Component {

	constructor (props) {
		super(props);
		this.state = {
			note: '' ,
			id :  this.props.id /*'5b1cf3a628a9b4067f1a3da4'*/
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleChange(event) {
		this.setState ({
			note: event.target.value
		});
	}

	
	handleSubmit (event) {
		var details = {
		id : this.state.id ,
		note: this.state.note 
	};
	
	// Encode Note and send to database
	var formBody = [];
	for (var property in details) {
			var encodedKey = encodeURIComponent(property);
			var encodedValue = encodeURIComponent(details[property]);
			formBody.push(encodedKey + "=" + encodedValue);
	}
	formBody = formBody.join("&");
	console.log(formBody);
	fetch('http://192.168.1.83:8000/addNote', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
		body: formBody
	})
		alert('Note Added');
	}

	
	render () {
		return(
				<form onSubmit={this.handleSubmit}>
					<FormControl
					componentClass="textarea" rows={4}
					bsSize = "lg"
						type = "text"
						nanme = "note"
						value = {this.state.note}
						placeholder = "note"
						onChange = {this.handleChange}
						/>
						<Button type="submit" > Add </Button> 
				</form>
		)
	}
}
