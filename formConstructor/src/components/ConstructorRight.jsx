import React from 'react';
import ConstructNav from './ConstructNav';
import ConstructorTabs from './ConstructorTabs';

export default class ConstructorLeft extends React.Component {



	render(){
		return (
			<div className="span6">
				<h2>添加下面的组件到左侧</h2>
				<hr/>
				<div className="tabbable">
					<ConstructNav dispatch={this.props.dispatch} componentsList={this.props.componentsList}/>
				</div>
				<form className="form-horizontal">
					<fieldset>
						<div className="tab-content">
							<ConstructorTabs dispatch={this.props.dispatch} componentsList={this.props.componentsList}/>
						</div>
					</fieldset>
				</form>
			</div>	
		)
	}
}