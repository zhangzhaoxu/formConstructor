import React from 'react';
import ConstructLi from './ConstructLi';
import {changeNavActive} from '../actions/constructorAction';

export default class ConstructNav extends React.Component{

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	InitialLis(lis) {
		let lisCon = lis.map((li,index) => {
			return (<ConstructLi dispatch={this.props.dispatch} index={index} key={li.key} type={li.type} active={li.active} handleClick={this.handleClick}/>)
		})

		return lisCon;
	}

	handleClick(index){
		this.props.dispatch(changeNavActive(index));
	}

	render() {
		let lisCon = this.InitialLis(this.props.componentsList);
		return (
			<ul className="nav nav-tabs">
				{lisCon}
			</ul>
		)
	}
}

