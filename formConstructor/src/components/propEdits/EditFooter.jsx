import React from 'react';
import addons from 'react-addons';
import ReactDOM from 'react-dom';

export default class EditFooter extends React.Component {
	render(){

		let {handleCancel,handleSave,handleMoveDown,handleMoveUp,index} = this.props;

		return (
			<div>
				<div onClick={()=>{
                	handleSave(index);
                }} className="btn btn-info">Save</div>
                <div onClick={() => {
                	handleCancel(index);
                }} className="btn btn-danger">Cancel</div>
                <div className="btn btn-success" onClick={() => {
					handleMoveDown(index);
				}} >下移</div>
				<div className="btn btn-success" onClick={() => {
					handleMoveUp(index);
				}} >上移</div>
			</div>
		)
	}
}