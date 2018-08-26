import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default class Client extends Component {

	constructor(props) {
		super(props)
			this.state = {
				firstname	: "" ,
				lastname	: "" ,
				phone			: "" ,
				email			: "" ,
				company 	: "" ,	
				agent 		: "" ,
				id				: "" 
			}
		}


	componentDidMount() {
		// Obtain Client Id
		fetch("http://192.168.1.84:8000/clients/"+ this.props.id)
			.then(response => response.json())
			.then(data => {
				this.setState({
					firstname	: data.firstname,
					lastname	: data.lastname	,
					id				:	data._id			,
					phone			: data.phone		,
					email			: data.email		,
					company 	: data.company	,	
					agent 		: data.agent
				})
				console.log(this.state.firstname);
				console.log(this.state.lastname);
				console.log(this.state.id);
		});
	};


	render() {
		return (
				<tbody>
					<tr>
						<td>1</td>
						<td>{this.state.firstname}</td>
						<td>{this.state.lastname}</td>
						<td>{this.state.company}</td>
						<td>{this.state.email}</td>
						<td>{this.state.phone}</td>
						<td>
							<NavLink to={'/profile/'+this.state.id}>
								View
							</NavLink>
						</td>
					</tr>
				</tbody>
		);
	}
}
