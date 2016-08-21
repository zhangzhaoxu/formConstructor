import React from 'react';
import PrimaryBtnWithEdit from './buttons/PrimaryBtnWithEdit';
import {changeEditActive,valueChange,editCancel,editSave,deleteComponent,moveUp,moveDown} from '../actions/constructorAction';
import ReactDOM from 'react-dom'

export default class FormConstructor extends React.Component{

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.valueChange = this.valueChange.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handlelSave = this.handleSave.bind(this);
	}

	initialComponent(components) {
		let coms = components.map((component,index) => {
			return (
				<div>
					<component.example ref="pageSimulate" myProps={component.props} key={"pageSimulate"+index}/>
					<PrimaryBtnWithEdit handleCancel={this.handleCancel} handleSave={this.handlelSave}
					 valueChange={this.valueChange} id={component.id} 
					 name={component.name} myProps={component.editProps} text={"编辑"} 
					 btnClick={this.handleClick} btnDeleteClick={this.handleDelete} 
					 handleMoveDown={this.handleMoveDown} handleMoveUp={this.handleMoveUp} />
				</div>
			);
		})
		return coms;
	}

	handleCancel(id) {
		this.props.dispatch(editCancel(id));
	} 

	handleSave(id) {
		console.log(id);
		this.props.dispatch(editSave(id));
	}

	handleClick(id) {
		this.props.dispatch(changeEditActive(id));
	}

	valueChange(obj) {
		this.props.dispatch(valueChange(obj));
	}

	handleDelete = (id) => {
		this.props.dispatch(deleteComponent(id));
	}

	handleMoveUp = (id) => {
		this.props.dispatch(moveUp(id));
	}

	handleMoveDown = (id) => {
		this.props.dispatch(moveDown(id));
	}

	render() {
		let coms = this.initialComponent(this.props.components);
		return(
			<form className="form-horizontal form-border">
				<div className="component">
					{coms}
					<div className="clear"></div>
				</div>
			</form>	
		)
	}
}

