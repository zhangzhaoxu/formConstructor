require('styles/Main.less');

import React from 'react';
import {connect} from 'react-redux';
import ConstructorLeft from '../components/ConstructorLeft';
import ConstructorRight from '../components/ConstructorRight';
import {addInput,addSelect,addCheckbox,addFile,addAll} from '../actions/constructorAction';


//维护一个全局的所有组件对象
import SearchInput from '../components/inputs/SearchInput';
import TextInput from '../components/inputs/TextInput';
import SelectBasic from '../components/selects/SelectBasic';
import SelectMultiple from '../components/selects/SelectMultiple';


class Main extends React.Component{


	render() {	
		return (
			<div className="container">
				<div className="row">
					<ConstructorLeft dispatch={this.props.dispatch} pageSimulate={this.props.pageSimulate} />
					<ConstructorRight dispatch={this.props.dispatch} componentsList = {this.props.componentsList} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const {componentsList,pageSimulate} = state.AllInfo;
	// 此处可进行数据默认值处理，暂不处理
	return {componentsList,pageSimulate};
}

export default connect(mapStateToProps)(Main);






