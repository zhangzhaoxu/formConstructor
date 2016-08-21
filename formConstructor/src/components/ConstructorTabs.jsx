import React from 'react';
import ConstructorTab from './ConstructorTab';

export default class ConstructorTabs extends React.Component{

	initialTabs(tabs) {
		let Tabs = tabs.map((tab,index) => {
			return (
				<ConstructorTab dispatch={this.props.dispatch} type={tab.key} components={tab.components} active={tab.active} key={tab.key}  />
			)
		})

		return Tabs;
	}

	render() {
		let Tabs = this.initialTabs(this.props.componentsList);
		return (
			<div>
				{Tabs}
			</div>
		)
	}
}