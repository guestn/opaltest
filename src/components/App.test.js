import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import App from './App';

describe('<App/>', () => {
	
	const	container = shallow(<App />);

	it('renders the app component', () => {
		expect(container).toHaveLength(1);
	})
		
})