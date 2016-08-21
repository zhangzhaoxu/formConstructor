import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Main from './containers/main';
import configureStore from './stores/constructorStore';

let JsonData = require('./sources/testJson/constructor.json');




//维护一个全局的所有组件对象
import SearchInput from 'components/inputs/SearchInput';
import TextInput from 'components/inputs/TextInput';
import SelectBasic from 'components/selects/SelectBasic';
import SelectMultiple from 'components/selects/SelectMultiple';
import InputHeader from 'components/inputs/InputHeader';

let arr = [
	[
		{
			example: TextInput,
			"name": "TextInput",
			"props": {
				"active": false,
				"title": "Text Input",
				"name":"TextInput",
				"placeholder":"placeholder",
				"help":"Supporting help text"
			}
		},
		{
			example: SearchInput,
			"name": "SearchInput",
			"props": {
				"active": false,
				"title": "Search Input",
				"name":"SearchInput",
				"placeholder":"placeholder",
				"help":"Supporting help text"
			}
		}
	],
	[
		{
			example: SelectBasic,
			"name": "SelectBasic",
			"props": {
				"active": false,
				"name":"SelectBasic",
				"title": "SelectBasic",
				"placeholder":"placeholder",
				"help":"Supporting help text"
			}
		},
		{
			example: SelectMultiple,
			"name": "SelectMultiple",
			"props": {
				"active": false,
				"name":"Select Multiple",
				"title": "SelectMultiple",
				"placeholder":"placeholder",
				"help":"Supporting help text"
			}
		}
	],
	[],
	[]
];

let pageSimulateInit = {
	"editProps": {
		"active" : false,
		"title": "表单名",
		"action": "#"
	},
	"props": {
		"active" : false,
		"title": "表单名",
		"action": "#"
	},
	"example": InputHeader,
	"name": "表单名",
	"id": 0,
}


JsonData.AllInfo.componentsList.forEach((info,index) => {
	info.components = arr[index];
});

JsonData.AllInfo.pageSimulate.push(pageSimulateInit);





const store = configureStore(JsonData);


render(
	<Provider store={store}>
		<Main />
	</Provider>,
  document.getElementById('app')
);
