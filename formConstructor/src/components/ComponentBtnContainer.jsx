import React from 'react';
import PrimaryBtn from './buttons/PrimaryBtn';
import {addComponent} from '../actions/constructorAction';


export default class ConstructorTab extends React.Component{

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(component) {
		this.props.dispatch(addComponent(component));
	}

	render() {
		return (
			<div>
				<this.props.component.example myProps={this.props.component.props}/>
				<PrimaryBtn text="添加" component={this.props.component} btnClick={this.handleClick}/>
			</div>
		)
	}
}