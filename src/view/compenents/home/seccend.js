import React, { Component } from 'react'
import Header from '../Header'
import Fotter from '../Fotter'
import ContentNavs from '../ContentNav'
export default class seccend extends Component {
	render () {
		return (
			<div>
				{/* <h1>seccend_index.html</h1> */}
				<Header history={this.props.history} />
				<ContentNavs />
				<Fotter />
			</div>
		)
	}
}
