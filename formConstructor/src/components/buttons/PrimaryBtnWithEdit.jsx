import React from 'react';
import InputEdit from '../propEdits/InputEdit';
import addons from 'react-addons';

export default class PrimaryBtnWithEdit extends React.Component{
	render() {
		let {component,btnClick,name,btnDeleteClick,handleMoveDown,handleMoveUp,handleCancel,
			handleSave,valueChange,id,myProps} = this.props;

		let classes = addons.classSet({
			"btn": true,
			"btn-primary": true,
			"btn-0": id == 0
		})	

		return (
			<div className="EditContainer">
				<div className={classes} onClick={() => {
				btnClick(id);
				}}>编辑</div>
				{
					id == 0 ? "":
					<div className="btn btn-danger" onClick={() => {
						btnDeleteClick(id);
					}} >删除</div>
				}
				<InputEdit handleCancel={handleCancel} 
				handleSave={handleSave} valueChange={valueChange} 
				index={id} myProps={myProps}
				handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown} />
			</div>
		)
	}
}