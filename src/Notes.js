import React, { Component } from 'react';
import {Well} from 'react-bootstrap';
import AddNote from './AddNote.js';

export default class Notes extends Component {

	constructor (props) {
		super (props)
			this.state = {
				notes : [],
				id : this.props.id
			}
	}
	
	componentDidMount() {
		// Encode a Post response with x-www-form-urlencoded
		var formBody = [];
		var encodedKey = encodeURIComponent('id');
		var encodedValue = encodeURIComponent(this.state.id /*'5b1cf3a628a9b4067f1a3da4'*/);
		formBody.push(encodedKey + "=" + encodedValue);
		formBody = formBody.join("&");

		fetch('http://192.168.1.83:8000/getNotes', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			body: formBody
		}).then(response => response.json())
			.then( data => {
					console.log(data);
					this.setState({
							notes: data
					})
			})
	}	

	update() {
		console.log("updated!");
	}

	render() {
		console.log(Object.keys(this.state.notes));
		var note_list = [];
		note_list.push(<AddNote id={this.state.id}/>);
		for (var key in this.state.notes){
			note_list.push(<Well> {this.state.notes[key]} </Well>);
		}
		return note_list;
	};
}
