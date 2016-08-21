export const CHANGE_NAV_ACTIVE = "CHANGE_NAV_ACTIVE";
export const INPUT_ADD = "INPUT_ADD";
export const SELECT_ADD = "SELECT_ADD";
export const FILE_ADD = "FILE_ADD";
export const CHECKBOX_ADD = "CHECKBOX_ADD";
export const ADD_ALL = "ADD_ALL";
export const ADD_COMPONENT = "ADD_COMPONENT";
export const CHANGE_EDIT_ACTIVE = "CHANGE_EDIT_ACTIVE";
export const EDIT_SAVE = "EDIT_SAVE";
export const VALUE_CHANGE = "VALUE_CHANGE";
export const EDIT_CANCEL = "EDIT_CANCEL";
export const DELETE_COMPONENT = "DELETE_COMPONENT";
export const MOVE_UP = "MOVE_UP";
export const MOVE_DOWN = "MOVE_DOWN";

export function changeNavActive(index) {
	return {
		type: CHANGE_NAV_ACTIVE,
		index: index
	}
}

export function addInput(obj) {
	return {
		type: INPUT_ADD,
		obj: obj
	}
}

export function addSelect(obj) {
	return {
		type: INPUT_ADD,
		obj: obj
	}
}

export function addFile(obj) {
	return {
		type: INPUT_ADD,
		obj: obj
	}
}

export function addCheckbox(obj) {
	return {
		type: INPUT_ADD,
		obj: obj
	}
}

export function addAll(obj) {
	return {
		type: ADD_ALL,
		obj: obj
	}
}

export function addComponent(component) {
	return {
		type: ADD_COMPONENT,
		component: component
	}
}

export function changeEditActive(id) {
	return {
		type: CHANGE_EDIT_ACTIVE,
		id: id
	}
}

export function editSave(id) {
	return {
		type: EDIT_SAVE,
		id: id
	}
}

export function valueChange(obj) {
	return {
		type: VALUE_CHANGE,
		obj: obj
	}
}

export function editCancel(id) {
	return {
		type: EDIT_CANCEL,
		id: id
	}
}

export function deleteComponent(id) {
	return {
		type: DELETE_COMPONENT,
		id: id
	}
}

export function moveUp(id) {
	return {
		type: MOVE_UP,
		id: id
	}
}

export function moveDown(id) {
	return {
		type: MOVE_DOWN,
		id: id
	}
}

