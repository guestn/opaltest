import { combineReducers } from 'redux';
import actionTypes from '../actions/types';


// can take just part of state as array, for order-handling
const orders = (state = [], action) => {
	switch (action.type) {
		case actionTypes.ADD_ORDER:
			return [
				...state,
				{
					id: action.id,
					created: action.created,
					content: action.content,
					completed: false
				}
			]
		case actionTypes.DELETE_ORDER:
			return state.filter(order => order.id != action.id) // create new arr excluding the id t.b. deleted
		case actionTypes.EDIT_ORDER:	
			return state.map(order =>
				(order.id === action.id) ? {...order, content: action.content} : order
      )
		case actionTypes.TOGGLE_COMPLETED:
			return state.map(order =>
				(order.id === action.id) ? {...order, completed: !order.completed} : order
      )
		default:
			return state
	}
}

// can take other small part of state for the display filters
const displayFilter = (state = 'DISPLAY_ALL', action) => {	
	switch (action.type) {
		case actionTypes.SET_DISPLAY_FILTER:	
			return action.filter
		default:
			return state
	}
}


const rootReducer = combineReducers({
	orders,
	displayFilter
})

export default rootReducer