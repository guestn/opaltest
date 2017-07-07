import React from 'react';
import reducer from './index'
import * as actions from '../actions/actions';
import actionTypes from '../actions/types';
import rootReducer from './index';
import { Provider } from 'react-redux';


global.Date = jest.fn()

const initialState = {
  displayFilter: "DISPLAY_ALL",
	orders: [{
		content:'Burger', 
		id: 0, 
		created: new Date(), 
		completed: false
	}],
}

describe('orders reducer', () => {
	

	it('should return the inital state', () => {
		expect(
			reducer(undefined, {})
		).toEqual(
			{
				displayFilter: "DISPLAY_ALL",
				orders: []	
			}
		)
  })
  

  it('should handle new order submission to store', () => {
		expect(
			reducer({}, {
				type: actionTypes.ADD_ORDER,
				content: 'Burger',
				id: 0,
				created: new Date()
			})
		).toEqual(
			{
				displayFilter: "DISPLAY_ALL", 
				orders: [{
					completed: false, 
					content: 'Burger', 
					created: new Date(), 
					id: 0
				}]
			}
		)
  })
  
  it('should handle update of orders', () => {

		expect(
			reducer(initialState, {
				type: actionTypes.EDIT_ORDER,
				content:'Lobster',
				id: 0,
				created: new Date()
			})
		).toEqual(
			{
				displayFilter: "DISPLAY_ALL", 
				orders: [{
					completed: false, 
					content: 'Lobster', 
					created: new Date(), 
					id: 0
				}]
			}
		)
	})
  
  it('should handle deletion of an order', () => {

	  expect(
			reducer(initialState, {
			  type: actionTypes.DELETE_ORDER,
				id: 0,
		  })
		).toEqual(
			{
				displayFilter: "DISPLAY_ALL", 
				orders: []
			}
		)
	})
	
})

describe('displayFilter reducer', () => {
	
	it('should set display filter', () => {
		
		expect(
			reducer(initialState, {
				type:actionTypes.SET_DISPLAY_FILTER,
				filter: 'DISPLAY_COMPLETED'
			})
		).toEqual(
			{ 
				displayFilter: "DISPLAY_COMPLETED", 
				orders: [{
					completed: false, 
					content: 'Burger', 
					created: new Date(), 
					id: 0
				}]
			}
		)
	})
	
})
