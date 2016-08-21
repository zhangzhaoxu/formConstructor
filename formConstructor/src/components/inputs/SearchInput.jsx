import React from 'react';

export default class SearchInput extends React.Component{
	render() {
		let {title,placeholder,help} = this.props.myProps;
		return(
			<div className="control-group component">
				<label className="control-label valtype">{title}</label>
				<div className="controls">
					<input type="text" placeholder={placeholder} className="input valtype" />
					<p className="help-blcok valtype">{help}</p>
				</div>
			</div>
		)
	}
}