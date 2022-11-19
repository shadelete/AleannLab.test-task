import React from 'react'
import PropTypes from 'prop-types'
import {ReactPropTypes} from "react";

export default (WrappedComponent:any) => {
	const hocComponent = ({...props}) => <WrappedComponent {...props}/>

	hocComponent.propTypes = {}

	return hocComponent
}