import React, {Component} from 'react';
import Client from './Client.js';
import {Table} from 'react-bootstrap';
import "./App.css";

export default class ClientList extends Component {

	constructor (props) 	{
		super(props)
			this.state = {
				client_list: [] 
			}
	}

	
	componentDidMount() {
		fetch("http://192.168.1.84:8000/all")
			.then(response => response.json())
			.then(
					data => {
					this.setState({
						client_list: JSON.parse(JSON.stringify(data))	
							})
					}
				)
	};
	
	
	render(	) {
		return (
			<Table striped bordered condensed hover>
				<thead class="Table-Head">
					<tr>
						<th> </th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Company</th>
						<th>email</th>
						<th>phone</th>
						<th> </th>
					</tr>
				</thead>
				{this.state.client_list.map((item)=>
					<Client id={item} num/>				
				)}
			</Table>
		); 
	};
}
