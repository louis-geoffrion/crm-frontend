
import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


export default class Navigation extends React.Component {
	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
					<a href="#home">CRM</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
				<Nav>
					<NavItem eventKey={1} href="#">
						<NavLink to="/clients">Clients</NavLink>
					</NavItem>
				<NavItem eventKey={2} href="#">
					<NavLink to="/add"> Add </NavLink>
				</NavItem>
					<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>
					<NavLink to="/profile">Profile</NavLink>
					</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={3.4}>Separated link</MenuItem>
					</NavDropdown>
				</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}