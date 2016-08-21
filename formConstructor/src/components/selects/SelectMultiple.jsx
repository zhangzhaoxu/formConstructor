import React from 'react';

export default class SelectMuliple extends React.Component{

	render() {
		let {title,placeholder,help} = this.props.myProps;

		return (
			<div className="control-group component">
				<label className="control-label valtype">{title}</label>
				<div className="controls">
					<select className="input-xlarger valtype">
						<option>Enter</option>
						<option>Your</option>
						<option>Options</option>
						<option>Here!</option>
					</select>
				</div>
			</div>
		)
	}
}	