import actionTypes from './types';


let newId = 0; // in production no-doubt have a better ID system...

export const addOrder = content => {
	let created = new Date()
  return {
	  type: actionTypes.ADD_ORDER,
    id: newId++,
    created,
    content,
  }
}

export const editOrder = (id, content) => {
	return {
		type: actionTypes.EDIT_ORDER,
		id,
		content
	}
}

export const deleteOrder = id => {
	return {
		type: actionTypes.DELETE_ORDER,
		id
	}
}

export const setDisplayFilter = filter => {
  return {
    type: actionTypes.SET_DISPLAY_FILTER,
    filter
  }
}

export const toggleCompleted = id => {
  return {
    type: actionTypes.TOGGLE_COMPLETED,
    id
  }
}
