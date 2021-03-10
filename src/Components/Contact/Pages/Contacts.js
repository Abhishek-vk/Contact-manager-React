import React, { Component } from 'react';
import Contact from '../Contact.js';
import {Consumer} from '../../../Context';

class Contacts extends Component {

	onClickDel=(id)=>{
		let newContact=this.state.contacts.filter(contact=>contact.id!==id);
		this.setState({
			contacts:newContact
		});
	}
	render() {
		return(
			<Consumer>
				{value => {
					const {contacts} = value;
					return(
						<React.Fragment>
							<h2 className='container my-4'><span className='text-danger'>Contact</span> List</h2>
							{contacts.map(contact => (
								<Contact key={contact.id} contact={contact} />
							))}
						</React.Fragment>
					)
				}}
			</Consumer>
		);
	}
}

export default Contacts;