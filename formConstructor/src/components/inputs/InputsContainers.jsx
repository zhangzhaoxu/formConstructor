import React from 'react';
import TextInput from './TextInput';
import SearchInput from './SearchInput';

let componetsContainer = [];
componetsContainer.push(TextInput);
componetsContainer.push(SearchInput);

export default class InputContainer extends React.Component{
	render() {
		return(
			<div className="control-group component">
				
			</div>
		)
	}
}