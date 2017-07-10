import { connect } from 'react-redux'
import { toggleCompleted, deleteOrder, editOrder } from '../actions/actions'
import OrderList from '../components/OrderList'

const getOrders = (orders, filter) => {
	switch (filter) {
		case 'DISPLAY_ALL':
			return orders
		case 'DISPLAY_OPEN':
			return orders.filter(order => !order.completed)
		case 'DISPLAY_COMPLETED':
			return orders.filter(order => order.completed)
	}
}

const mapStateToProps = state => {
	return {
		orders: getOrders(state.orders, state.displayFilter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClickCompleted: id => {
			dispatch(toggleCompleted(id))
		},
		onClickUpdate: (id, text) => {
			dispatch(editOrder(id, text))
		},
		onClickDelete: id => {
			dispatch(deleteOrder(id))
		}
	}
}

const FilterableOrders = connect(mapStateToProps,mapDispatchToProps)(OrderList)

export default FilterableOrders
