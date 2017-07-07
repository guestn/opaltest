import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order';

const OrderList = ({ orders, onClickCompleted, onClickDelete, onClickUpdate }) => (
	<section>
		<span></span>
	  <table className="mdl-data-table mdl-data-table--selectable mdl-shadow--2dp">
	  	<thead>
	  		<tr>
	  			<th>OrderId</th>
	  			<th>Time</th>
	  			<th className="mdl-data-table__cell--non-numeric">Order Content</th>
	  			<th>Completed</th>
	  			<th>Edit</th>
	  			<th>Delete</th>
	  		</tr>
	  	</thead>
	  	<tbody>
	  		{(orders.length == 0) ?
	  			<tr><td colSpan="6">No orders to show!</td></tr> :
		    	orders.map(order => (
		      <Order key={order.id} 
		      	onClickCompleted={() => onClickCompleted(order.id)}
		      	onClickDelete={() => onClickDelete(order.id)}
						onClickUpdate={(text) => onClickUpdate(order.id, text)}
		      	{...order} 
		      />
		    ))}
	    </tbody>
	    <tfoot>
	    	 <tr><td colSpan="6">Orders shown: {orders.length}</td></tr>
			</tfoot>
	  </table>
  </section>
)

export default OrderList;