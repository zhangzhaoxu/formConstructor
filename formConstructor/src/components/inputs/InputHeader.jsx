import React from 'react'

export default class InputHeader extends React.Component {

	render() {
		let {title} = this.props.myProps;
		return (
			
			<legend className="valtype">
				{title}
			</legend>
			
		)
	}

}