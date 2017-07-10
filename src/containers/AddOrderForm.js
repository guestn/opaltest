import React from 'react';
import { connect } from 'react-redux';
import menuItems from '../menuItems';

import { addOrder } from '../actions/actions';

//obviously order would not be a plaintext string in real app- some kind of obj representing the food item with price etc...

export const AddOrderForm = ({ dispatch }) => {
	let input;

	return (
		<section>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!input.value) {
						return
					}
					dispatch(addOrder(input.value))
					input.value = "Burger"
				}}
			>
				<label htmlFor="menuSelector">Select Order</label>
				<select
					id="menuSelector"
					ref={node => { input = node}}
				>
					{ menuItems.map((item) =>
						<option value={item} key={item}>{item}</option>
					)}
				</select>
				<button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
					Submit New Order
				</button>
			</form>
		</section>
	)
}
const ConnectedAddOrderForm = connect()(AddOrderForm);

export default ConnectedAddOrderForm;
