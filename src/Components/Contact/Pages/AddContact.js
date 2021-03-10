import React, { Component } from 'react';
import {Consumer} from '../../../Context';
import {InputContact} from '../inputContact';
import axios from 'axios';

class AddContact extends Component {

	state = {
		name:'',
		email:'',
		phone:'',
		errors:{
			name:'',
			email:'',
			phone:''
		}
	}

	onChange=(e)=>this.setState({[e.target.name]: e.target.value});
	checkerror(){
		const {name,email,phone} = this.state;
		if(name===''){
			this.setState({errors:{name:'*Name is required*'}});
			return 1;
		}
		else
			this.setState({errors:{name:''}});
		if(email===''){
			this.setState({errors:{email:'*Email is required*'}});
			return 1;
		}
		if(phone===''){
			this.setState({errors:{phone:'*Phone is required*'}});
			return 1;
		}
		return 0;
	}

	render() {
		const {name,email,phone} = this.state;
		return (
			<Consumer>
				{value=>
					{
						const {dispatch}=value;
						const onSubmit=async (e)=>{
							e.preventDefault();
							if(this.checkerror())
								return;
							const newContact={
								name,
								email,
								phone
							}
							axios.post('https://jsonplaceholder.typicode.com/users',newContact)
							.then(res => dispatch({newContact:res.data,case:'ADD_CONTACT'}))
							this.setState({name:'',email:'',phone:'',errors:{}});
							this.props.history.push('/');
						}
						return(
							<div className="container card my-3 col-md-5 col-sm-8" style={{textAlign:'center'}}>
								<div className="card-body">
									<div className="card-header" style={{textAlign:'center'}}>
										<strong>Add Contact</strong>
									</div>
									<form>
									<InputContact 
										name='name'
										placeholder='Enter Name...'
										value={name}
										onChange={this.onChange}
										error={this.state.errors.name}
									/>
									<InputContact 
										name='email'
										type='email'
										placeholder='Enter Email...'
										value={email}
										onChange={this.onChange}
										error={this.state.errors.email}
									/>
									<InputContact 
										name='phone'
										placeholder='Enter Phone...'
										value={phone}
										onChange={this.onChange}
										error={this.state.errors.phone}
									/>
									<input 
										type='submit' 
										value='Add Contact' 
										onClick={onSubmit}
										className='btn btn-outline-primary'
									/>
									</form>
								</div>	
							</div>
						)
					}
				}
			</Consumer>
		);
	}
}

export default AddContact;
