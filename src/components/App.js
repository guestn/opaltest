import React from 'react';
import OrderSelector from './OrderSelector';
import AddOrderForm from '../containers/AddOrderForm';
import FilterableOrders from '../containers/FilterableOrders';
import ManagerAlerter from './ManagerAlerter';


const App = () => (
	<div>
		<AddOrderForm />
		<FilterableOrders />
		<OrderSelector />
		<ManagerAlerter />
	</div>
)

export default App;
