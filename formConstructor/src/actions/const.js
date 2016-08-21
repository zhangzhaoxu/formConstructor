export const CHANGE_SHOW = 'CHANGE_SHOW';
export const ADD_ITEMS = 'ADD_ITEMS';
export const DELETE_ITEMS = 'DELETE_ITEMS';	

export function changeShow(key) {
	return {
		type: CHANGE_SHOW,
		key: key
	}
}

export function addItems(item) {
	return {
		type: ADD_ITEMS,
		item: item
	}
}

export function deleteItems(item) {
	return {
		type: DELETE_ITEMS,
		item: item
	}
}