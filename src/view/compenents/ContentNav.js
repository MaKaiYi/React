import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import LefeMenu from '../pages/component/LeftMenu'
import RigthContent from '../pages/component/RigthContent'

export class contentNav extends Component {
	static propTypes = {

	}

	render () {
		return (
			<div className="content">
				<LefeMenu className="leftMenu" />
				<RigthContent className="rigthContent" />
			</div>
		)
	}
}

export default contentNav
