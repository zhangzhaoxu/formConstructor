import {CHANGE_NAV_ACTIVE,CHANGE_EDIT_ACTIVE,INPUT_ADD,SELECT_ADD,FILE_ADD,
	CHECKBOX_ADD,ADD_ALL,ADD_COMPONENT,EDIT_SAVE,EDIT_CANCEL,VALUE_CHANGE,DELETE_COMPONENT,
	MOVE_UP,MOVE_DOWN} from '../actions/constructorAction';
import {combineReducers} from 'redux'
import Immutable from 'immutable'



function AllInfo(state={},action) {
	switch(action.type) {
		case CHANGE_NAV_ACTIVE:
			var newState = Immutable.fromJS(state).toJS();
			newState.componentsList = newState.componentsList.map((li,index) => {
				if(index === action.index) {
					li.active = true;
				} else {
					li.active = false;
				}
				return li;
			});
			return newState;
		case CHANGE_EDIT_ACTIVE:
			var newState = Immutable.fromJS(state).toJS();
			newState.pageSimulate = newState.pageSimulate.map((component,index) => {
				if((index) === parseInt(action.id)) {
					component.editProps.active = !component.editProps.active;
				} else {
					component.editProps.active = false;
				}
				return component;
			})
			return newState;
		case ADD_COMPONENT:
			var newState = Immutable.fromJS(state).toJS();
			let cmt = action.component;
			cmt.editProps = cmt.props;                     //增加编辑props项
			cmt.id = newState.pageSimulate.length;     //增加组件id项
			newState.pageSimulate.push(cmt);
			return newState;
		case EDIT_SAVE:
			var newState = Immutable.fromJS(state).toJS();
			newState.pageSimulate = newState.pageSimulate.map((c,index) => {
				if(c.id == action.id) {
					c.props = c.editProps;
					c.editProps.active = false;
					return c;
				}
				return c;
			})
			return newState;
		case EDIT_CANCEL:
			var newState = Immutable.fromJS(state).toJS();
			newState.pageSimulate = newState.pageSimulate.map((c,index) => {
				if(c.id == action.id){
					c.editProps = c.props;
					c.editProps.active = false;
					return c;
				}

				return c;
			})
			return newState;
		case VALUE_CHANGE:
			var newState = Immutable.fromJS(state).toJS();
			newState.pageSimulate = newState.pageSimulate.map((c,index) => {
				if(c.id == action.obj.id) {
					c.editProps[action.obj.key] = action.obj.value;
					return c;
				}
				return c;
			})
			return newState;
		case DELETE_COMPONENT:
			var newState = Immutable.fromJS(state).toJS();
			newState.pageSimulate.forEach((c,index) => {
				if(c.id == action.id) {
					newState.pageSimulate.splice(index,1);
					return true;
				}
			});
			return newState;
		case MOVE_UP:
			var newState = Immutable.fromJS(state).toJS();
			newState.pageSimulate.every((c,index) => {
				if(c.id == action.id){
					if(index == 1 || index == 0) {
						return false;
					}

					let copy = newState.pageSimulate[index];
					newState.pageSimulate[index] = newState.pageSimulate[index-1];
					newState.pageSimulate[index-1] = copy;

					return false;
				}
				return true;
			});
			return newState;
		case MOVE_DOWN:
			var newState = Immutable.fromJS(state).toJS();
			newState.pageSimulate.every((c,index) => {
				console.log(c.id,action.id);
				if(c.id == action.id) {

					if(index == newState.pageSimulate.length -1 || index == 0) {
						return false;
					}

					let copy = newState.pageSimulate[index];
					newState.pageSimulate[index] = newState.pageSimulate[index+1];
					newState.pageSimulate[index+1] = copy;

					return false;
				}

				return true;
			})
			return newState;
		default:
			return state;
	}
}


const rooterReducer = combineReducers({
	AllInfo
});

export default rooterReducer;



