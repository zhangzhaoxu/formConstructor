import React from 'react';
import addons from 'react-addons';
import ComponetBtnContainer from './ComponentBtnContainer';



export default class ConstructorTab extends React.Component{
	render() {
		let classes = addons.classSet({
	      'active': this.props.active,
	      'tab-pane': true
	    });

	    let components = this.props.components.map((component,index) => {
	    	return (
	    		<ComponetBtnContainer dispatch={this.props.dispatch} key={this.props.type+index} component={component} />
    		);
	    })

		return (
			<div className={classes}>
				{components}
			</div>
		)
	}
}