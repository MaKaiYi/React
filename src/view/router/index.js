import React, { Component } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Frist from '../compenents/home/frist'
import Seccend from '../compenents/home/seccend'
import Thrid from '../compenents/home/thrid'
class RouterIndex extends Component {
	render () {
		return (
			<Router>
				<div>
					<Route path="/first" component={Frist} title="登陆"></Route>
					<Route path="/seccend" component={Seccend}></Route>
					<Route path="/thrid" component={Thrid}></Route>
				</div>
			</Router>
		)
	}
}
export default RouterIndex