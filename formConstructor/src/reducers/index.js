import {CHANGE_SHOW,ADD_ITEMS,DELETE_ITEMS} from '../actions/const'
import {combineReducers} from 'redux'
import Immutable from 'immutable'


function handleComponentsList(state = {
		show: true,
		items: [{
		  active: true,
	      text: '默认',
	      key: 1,
	      children: {
	        show: false,
	        items: []
	      }
		}]},action) {
	switch (action.type) {
		case CHANGE_SHOW:
			let newState = Immutable.fromJS(state).toJS();
			let items = newState.items;
			for(var i=1; i<action.key.length; i++) {
				items = items[action.key[i-1]].children.items;
			}

			items.map(function(item){
				if(item.key[action.key.length-1] == action.key[action.key.length-1]) {
					item.active = "true";
					if(item.children.items.length > 0) {
						item.children.show = "true";
					}
				} else {
        			item.active = "false";
        			if(item.children.items.length > 0) {
        				item.children.show = "false";
        			}
				}

				return item;
			})

			
			return newState;
		case ADD_ITEMS:
			return Object.assign({},state,{});
		case DELETE_ITEMS:
			return Object.assign({},state,{});
		default:
			return state;
	}
}



const rooterReducer = combineReducers({
	handleComponentsList
});

export default rooterReducer;
