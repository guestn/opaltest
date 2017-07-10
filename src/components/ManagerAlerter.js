import React from 'react';
import { connect } from 'react-redux'
import { toggleCompleted, deleteOrder, editOrder } from '../actions/actions'
import OrderList from '../components/OrderList'


let ManagerAlerter = ({orders}) => (
	<section>
		{(orders.filter(order => !order.completed).length > 4) ?
		<span className="warning">Manager Alert! All hands to the pumps!</span> :
		<span>Open Order Count: {orders.filter(order => !order.completed).length}</span>}
	</section>
)

const mapStateToProps = state => {
	return {
		orders: state.orders
	}
}

ManagerAlerter = connect(mapStateToProps)(ManagerAlerter)

export default ManagerAlerter
