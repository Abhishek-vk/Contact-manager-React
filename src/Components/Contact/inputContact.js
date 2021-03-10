import React, { Component } from 'react';
import cn from 'classnames';

export class InputContact extends Component {

	render() {
		const {type,name,placeholder,value,onChange,error}=this.props;
		const feedback={float:'left',color:'red',fontSize:'12px',textAlign:'left'};
		return (
			<div className="from-group my-3 mr-3">
				<input 
					type={type} 
					name={name} 
					className={cn("form-control form-control-md",{'is-invalid':error})}
					placeholder={placeholder} 
					value={value} 
					onChange={onChange}
					required
				/>
				<div className="invalid-feedback mb-1" style={feedback}>{error}</div>
			</div>
		);
	}
		static defaultProps = {
			type:'text'
		};
}
