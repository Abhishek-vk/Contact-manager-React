import React, { Component } from 'react';
import axios from 'axios';

const context=React.createContext();

const altContact=(state,action)=>{
	switch(action.case){
		case "DEL_CONTACT":
			return{
				contacts:state.contacts.filter(contact=>action.id!==contact.id)
			}
		case "ADD_CONTACT":
			return{
				contacts:[action.newContact,...state.contacts]
			}
		case "UPDATE_CONTACT":
			return{
				contacts:state.contacts.map(
					contact=>
						(action.newContact.id===contact.id)?contact=action.newContact:contact
				)
			}
		default:
			return state
	}
}

export class Provider extends Component {
	state={
		contacts:[],
		dispatch: action => this.setState(()=>altContact(this.state,action))
	}

	async componentDidMount(){
		const res= await axios.get('https://jsonplaceholder.typicode.com/users');
		this.setState({contacts:res.data});
	}

	render() {
		return (
			<context.Provider value={this.state}>
				{this.props.children}
			</context.Provider>
		);
	}
}

export const Consumer=context.Consumer;
