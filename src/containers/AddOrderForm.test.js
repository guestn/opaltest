import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

import * as actions from '../actions/actions';
import actionTypes from '../actions/types';
import ConnectedAddOrderForm, { AddOrderForm } from './AddOrderForm';


const mockStore = configureStore();
let store, connectedContainer, wrapper;
let initialState = {}
beforeEach(() => {
	store = mockStore(initialState)
	connectedContainer = mount(<AddOrderForm store={store}/> )  
	wrapper = mount(<Provider store={store}><AddOrderForm /></Provider> )
})


describe('Dumb <AddOrderForm />', () => {
	
	let	container = shallow(<AddOrderForm/>)
		
	it('should render the dumb component', () => {
		expect(container.length).toEqual(1);
	});

})

describe('Connected <AddOrderForm />', () => {
	
	it('should render the connected component', () => {
		expect(wrapper.find('section').length).toEqual(1);
	});

		
	it('should use correct actions on dispatching ', () => {
			let action;
			store.dispatch(actions.addOrder('Lobster'));
			store.dispatch(actions.editOrder(0,'Burger'));
			store.dispatch(actions.deleteOrder(0));
			store.dispatch(actions.setDisplayFilter('DISPLAY_COMPLETED'));
			store.dispatch(actions.toggleCompleted(0));

			action = store.getActions();
			expect(action[0].type).toBe("ADD_ORDER");
			expect(action[1].type).toBe("EDIT_ORDER");
			expect(action[2].type).toBe("DELETE_ORDER");
			expect(action[3].type).toBe("SET_DISPLAY_FILTER");
			expect(action[4].type).toBe("TOGGLE_COMPLETED");

  });

})