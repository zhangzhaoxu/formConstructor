import React from 'react';
import FormConstructor from './FormConstructor';

export default class ConstructorLeft extends React.Component {
	render(){
		return (
			<div className="span6">
				<div className="clearfix">
					<h2>Your form</h2>
					<hr/>
					<FormConstructor dispatch={this.props.dispatch} components={this.props.pageSimulate} />
				</div>
			</div>	
		)
	}
}