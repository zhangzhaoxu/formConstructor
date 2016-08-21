import React from 'react';

export default class PrimaryBtn extends React.Component{
	render() {
		let {component,btnClick} = this.props;
		return (
			<div className="btn btn-primary" onClick={() => {
				btnClick(component);
			}}>{this.props.text}</div>
		)
	}
}