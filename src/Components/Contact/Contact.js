import React, { Component } from 'react';
import {Consumer} from '../../Context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortDown,faTimesCircle,faPen} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {
	state={
		show:false
	}
	onClickshow=()=>{
		this.setState({
			show:!this.state.show
		});
	}
	render() {
		const {id,name,email,phone}=this.props.contact;
		
		return (
			<Consumer>
			{value=>{
				const {dispatch}=value;
				const onClickDel=async ()=>{
					let action={
						case:'DEL_CONTACT',
						id
					}
					axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
					dispatch(action);
				}
				return(
					<div className="container">
						<div className="card card-body my-3 pt-2 pb-0">
							<h5>
								{name.toUpperCase()}
								<FontAwesomeIcon onClick={this.onClickshow} icon={faSortDown} 
									style={{cursor:'pointer'}} className="ml-4" />
								<FontAwesomeIcon onClick={onClickDel} icon={faTimesCircle} 
									style={{cursor:'pointer',float:'right', margin:'7px 10px',color:'red'}} />
								<Link to={`/contact/update/${id}`} params={{id}}>
								<FontAwesomeIcon icon={faPen} 
									style={{cursor:'pointer',float:'right', margin:'7px 10px'}} />
								</Link>
							</h5>
							{this.state.show?
							(	<ul className="list-group mb-3">
									<li className="list-group-item"><small>Email: {email}</small></li>
									<li className="list-group-item"><small>Phone: {phone}</small></li>
								</ul>
							):null
							}
						</div>
					</div>
				)
			}}
			</Consumer>
		);
	}
}

export default Contact;
