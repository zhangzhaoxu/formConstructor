import React from 'react';
import addons from 'react-addons';

export default class ConstructLi extends React.Component{
	render() {
		let classes = addons.classSet({
	      'active': this.props.active,
	    })
		return (
			<li className={classes} onClick={()=>{this.props.handleClick(this.props.index)}}>
				<a href="#">{this.props.type}</a>
			</li>
		)
	}
}