import React from 'react';
import PropTypes from 'prop-types';
import menuItems from '../menuItems';

export default class Order extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			currentlyEditing: false
		}
	}

	onClickEdit = () => {
		this.setState({currentlyEditing:true})
	}

	onClickUpdate = (id, input) => {
		this.props.onClickUpdate(input.value)
		this.setState({currentlyEditing:false})
	}

	parseDate = (date) => {
		let dd = date.getHours();
		(dd < 10) ? '0' + dd : dd;
		let mm = date.getMinutes();
		(mm < 10) ? '0' + mm : mm;
		return dd + ':' + mm;
	}

	render() {
		const { completed, content, id, onClickCompleted, onClickDelete, created } = this.props;
		let input
		return (
	  	<tr className={this.state.currentlyEditing ? 'editing' : ''}>
				<td>{id}</td>
				<td>{this.parseDate(created)}</td>
				<td className="mdl-data-table__cell--non-numeric">
					{(this.state.currentlyEditing) ?
						<form
							onSubmit={e => {
								e.preventDefault()
								if (!input.value) {
									return;
								}
								this.onClickUpdate(id, input)
							}}
							>
							<select
								ref={node => { input = node}}
								defaultValue={content}
							>
								{ menuItems.map((item) =>
									<option value={item} key={item} >{item}</option>
								)}
							</select>
							<button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
								Update
							</button>
						</form> :
						content
					}
				</td>
				<td className="mdl-data-table__cell--non-numeric"><input type="checkbox" checked={completed} onChange={onClickCompleted}/></td>
				<td className="mdl-data-table__cell--non-numeric">
					<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"
					onClick={this.onClickEdit}
					disabled={completed}
					>
						<i className="material-icons">mode_edit</i>
					</button>
				</td>
				<td className="mdl-data-table__cell--non-numeric">
					<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"
					onClick={onClickDelete}>
						<i className="material-icons">delete_forever</i>
					</button>
				</td>
			</tr>
		)
	}
}
