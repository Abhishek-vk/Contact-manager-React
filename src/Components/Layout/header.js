import React, { Component } from 'react';
import cx from 'classnames';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon as FA} from '@fortawesome/react-fontawesome';
import {faHome,faPlus,faUsers} from '@fortawesome/free-solid-svg-icons';

export class Header extends Component {
	render() {
		const {brand}=this.props;
		const styles={
			'&:hover':{background:'white'}
		};
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-danger py-0">
					<div className="container">
				      	<a href="/" className="navbar-brand"><strong>{brand}</strong></a>
				      	<div id="menu" className="collapse navbar-collapse">
				      		<ul className="navbar-nav ml-auto">
				      			<li className={cx(styles,"nav-item active px-1")} style={{':hover':{background:'white'}}}>
				      				<Link to="/" className="nav-link">
				      					<FA icon={faHome} /> Home
				      				</Link>
				      			</li>
				      			<li className="nav-item active px-1">
				      				<Link to="/contact/add" className="nav-link">
				      					<FA icon={faPlus} /> Add
				      				</Link>
				      			</li>
				      			<li className="nav-item active px-1">
				      				<Link to="/" className="nav-link">
				      					<FA icon={faUsers} /> About
				      				</Link>
				      			</li>
				      		</ul>
				      	</div>
				    </div>
			    </nav>
			</div>
		);
	}
}

export default Header;
