import React, { Component } from 'react';
import {Panel,Grid, Row, Col, Clearfix} from 'react-bootstrap';
import Notes from './Notes.js';
import './App.css';

export default class Profile extends Component {
	constructor(props) {
		super(props)
			this.state = {
				firstname	: "" ,
				lastname	: "" ,
				phone			: "" ,
				email			: "" ,
				company 	: "" ,	
				agent 		: "" ,
				id				: this.props.match.params.id 
		}
	}
	componentDidMount(){
		fetch("http://192.168.1.84:8000/clients/"+ this.state.id)
			.then(response => response.json())
			.then(data => {
				this.setState({
					firstname	: data.firstname, lastname	: data.lastname	, id				:	data._id			, phone			: data.phone		, email			: data.email		,
					company 	: data.company	,	
					agent 		: data.agent		
				})
		
		})
	};
	render() {
		return (
				<Panel bsClass='Profile-Panel' >
					<Grid>
						<Row className="show-grid">
							<Col xs={12} md={4} lg={4} sm={12}>
								<Row >
										<Col lg = {6} md={6} sm={6} xs={6}> 
											<h4 align="left"> Name </h4> 
										</Col>
										<Col lg = {6} md={6} sm ={6} xs={6}>
											<h4 align="left">{this.state.firstname} {this.state.lastname}</h4>
										</Col>
								</Row>
								<Row >
										<Col lg = {6} md={6} sm ={6} xs={6}> 
											<h4 align="left"> Company Name </h4> 
										</Col>
										<Col lg = {6} md={6} sm={6} xs={6}>
											<h4 align="left"> {this.state.company}</h4>
										</Col>
								</Row>
								<Row >
										<Col lg = {6} md={6} sm ={6} xs={6}> 
											<h4 align="left"> Phone Number </h4> 
										</Col>
										<Col lg = {6} md={6} sm={6} xs={6}>
											<h4 align="left"> {this.state.phone}</h4>
										</Col>
								</Row>
								<Row >
										<Col lg = {6} md={6} sm ={6} xs={6}> 
											<h4 align="left"> Email Address </h4> 
										</Col>
										<Col lg = {6} md={6} sm={6} xs={6}>
											<h4 align="left"> {this.state.email}</h4>
										</Col>
								</Row>
							</Col>
							<Col xs= {12} md = {4} lg={7}>
								<Notes id={this.state.id}/>
							</Col>
						</Row>
					</Grid>
				</Panel>

		);
	}
}