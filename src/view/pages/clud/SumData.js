import React, { Component } from 'react'
import { Button } from 'antd'
export default class SumData extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dateInfo: '',
			setValue: <h1>测试</h1>
		}
	}
	checkData () {
		this.setState({
			dateInfo: this.props.arr
		})
	}
	render () {

		return (
			<div>
				<Button type="primary" onClick={(e) => this.checkData(e)}>换值</Button>
				{this.props.arr}
				{this.state.dateInfo}
				{this.state.setValue}
			</div>
		)
	}
}
