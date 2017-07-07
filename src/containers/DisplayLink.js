import React from 'react'
import { connect } from 'react-redux'
import { setDisplayFilter } from '../actions/actions'

let DisplayLink  = ({ active, children, onClick }) => {
  if (active) {
    return (
    	<span className="mdl-chip mdl-color--pink">
    		<span className="mdl-chip__text">
					{children}
				</span>
			</span>
		)
  }
  return (
    <a href="#" 
    	className="mdl-chip"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      <span className="mdl-chip__text">{children}</span>
    </a>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.displayFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setDisplayFilter(ownProps.filter))
    }
  }
}

DisplayLink = connect(mapStateToProps, mapDispatchToProps)(DisplayLink)

export default DisplayLink
