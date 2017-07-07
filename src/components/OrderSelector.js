import React from 'react'
import DisplayLink from '../containers/DisplayLink'

const OrderSelector = () => (
  <div>
    Show:
    <DisplayLink filter="DISPLAY_ALL">
      All
    </DisplayLink>
    <DisplayLink filter="DISPLAY_OPEN">
      Open
    </DisplayLink>
    <DisplayLink filter="DISPLAY_COMPLETED">
      Completed
    </DisplayLink>
  </div>
)

export default OrderSelector
