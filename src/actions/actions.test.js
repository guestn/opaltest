import React from 'react';
import * as actions from './actions';
import actionTypes from './types';


global.Date = jest.fn()

describe('actions', () => {

	it('should create an action to add an order', () => {

		const contentExample = 'Burger'

		const expectedAction = {
			type: actionTypes.ADD_ORDER,
			id: 0,
			created: new Date(),
			content: "Burger",
		}
		expect(actions.addOrder(contentExample)).toEqual(expectedAction)
  })

	it('should create an action to edit an order', () => {
		const id = 0;
		const updatedContent = 'Lobster'
		const expectedAction = {
			type: actionTypes.EDIT_ORDER,
			id: 0,
			content: 'Lobster'
		}
		expect(actions.editOrder(id, updatedContent)).toEqual(expectedAction)
  })

	it('should create an action to delete an order', () => {
		const id = 0;
		const expectedAction = {
			type: actionTypes.DELETE_ORDER,
			id: 0,
		}
		expect(actions.deleteOrder(id)).toEqual(expectedAction)
	})

	it('should create an action to set display filter', () => {
		const testFilter = 'DISPLAY_COMPLETED';
		const expectedAction = {
			type: actionTypes.SET_DISPLAY_FILTER,
			filter: 'DISPLAY_COMPLETED'
		}
		expect(actions.setDisplayFilter(testFilter)).toEqual(expectedAction)
	})

	it('should create an action to toggle completed status on order', () => {
		const id = 0;
		const expectedAction = {
			type: actionTypes.TOGGLE_COMPLETED,
			id: 0
		}
		expect(actions.toggleCompleted(id)).toEqual(expectedAction)
	})
})
