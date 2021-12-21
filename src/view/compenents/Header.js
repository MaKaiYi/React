import React, { Component } from 'react'
import logo192 from '../../static/logo192.png'
// import PropTypes from 'prop-types'
import { LogoutOutlined } from '@ant-design/icons';
import '../pages/css/header.css'

const showTitle = 'Reaact app'
export class header extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	layOutEsc = () => {
		this.props.history.push("/first")
	}
	render () {
		return (
			<div className="header">
				<div className="headercontent">
					<img src={logo192} alt="" width="40" height="40" className="imgPostion" />
					<span className="topText">{showTitle}</span>
				</div>
				<div className="rightIcon" >	<LogoutOutlined title="退出" onClick={this.layOutEsc.bind(this)} /></div>

			</div>
		)
	}
}

export default header
