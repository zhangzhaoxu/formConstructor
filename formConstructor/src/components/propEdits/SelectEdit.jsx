import React from 'react';
import addons from 'react-addons';
import ReactDOM from 'react-dom';
import EditFooter from './EditFooter';

export default class SelectEdit extends React.Component {

	render() {
		let info = this.props.myProps;
		let {handleCancel,handleSave,handleMoveDown,handleMoveUp,index} = this.props;
		let infos = [];

		for(let key in info) {
			if(key !== 'active' && key != "Options") {
				infos.push((
					<div>
						<label>{key}</label>
						<input onChange={(ev) => {
							this.props.valueChange({
								id: this.props.index,
								key: key,
								value: ev.target.value
							})
						}} className="input-large" type="text" value={info[key]}/>
					</div>
				))
			} else if(key == "Options") {
				infos.push((
					<div>
						<label>{key}</label>
						<textarea className="edit-textarea"></textarea>
					</div>
				))
			}
		}

		let classes = addons.classSet({
			'popover fade right in': true,
	      'active': info.active
	  	});

    

		return (
			<div className={classes}>
				<div className="arrow"></div>
				<div className="popover-inner">
					<h3 className="popover-title">{info.title}</h3>
					<div className="popover-content">
						<form className="form">
							<div>
				                {infos}
				                <hr/>
				                <EditFooter handleSave={handleSave}
				                handleCancel={handleCancel}
				                handleMoveDown={handleMoveDown}
				                handleMoveUp={handleMoveUp}
				                index={index} />
				              </div>
						</form>
					</div>
				</div>
			</div>
		)
	}

}