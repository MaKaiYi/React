import React, { Component } from 'react'
import { Tabs } from 'antd';
import SumData from '../clud/SumData'

const { TabPane } = Tabs;
let refData = <h3>编写JSX页面</h3>
// let mytitle = <h1>Hello WOrld</h1>

export default class rigthContent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tabsIndex: '1'
		}
	}

	callback = (value) => {

	};
	render () {
		return (
			<div className="setContentWidth">
				<Tabs defaultActiveKey={this.state.tabsIndex} onTabClick={this.callback}>
					<TabPane tab="统计" key="1">
						<SumData arr={refData}></SumData>
					</TabPane>
					<TabPane tab="计算" key="2">
						Content of Tab Pane 2
    </TabPane>
					<TabPane tab="查看" key="3">
						Content of Tab Pane 3
    </TabPane>
				</Tabs>
			</div>
		)
	}
}
