import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Menu, } from 'antd';
import {
	AppstoreOutlined,
	// MenuUnfoldOutlined,
	// MenuFoldOutlined,
	PieChartOutlined,
	DesktopOutlined,

	MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const menuList = [{
	key: 1,
	title: '首页',
	icon: <PieChartOutlined />,
	children: [{
		key: '1-1',
		title: '配置页面'
	}]
},
{
	key: 2,
	title: '订单管理',
	icon: <DesktopOutlined />,
	children: [{
		key: '2-1',
		title: '订单列表'
	}]
},
{
	key: 3,
	title: '库存管理',
	icon: <AppstoreOutlined />,
	children: [{
		key: '3-1',
		title: '出入库列表'
	}]
},
{
	key: 4,
	title: '设置',
	icon: <MailOutlined />,
	children: [{
		key: '4-1',
		title: '个人中心'
	}]
}]
export class leftMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			options: ['1']
		}
	}
	state = {
		collapsed: false,
	};

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	onOpenChange = (getData) => {

		if (this.state.options.length == 1 || this.state.options.length == 0) {
			this.setState({ options: getData })
		}

		const lastOpenKey = getData[getData.length - 1]
		if (lastOpenKey.includes(this.state.options[0])) {
			this.setState({ options: [lastOpenKey] })
		} else {

			this.setState({ options: [lastOpenKey] })
		}
	}

	render () {
		return (
			<div style={{ width: 256 }}>
				{/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
					{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
				</Button> */}
				<Menu
					// defaultSelectedKeys={[this.state.options]}
					// defaultOpenKeys={this.state.options}
					openKeys={this.state.options}
					mode="inline"
					theme="dark"
					inlineCollapsed={this.state.collapsed}
					onOpenChange={this.onOpenChange.bind(this)}
					className="menuSetClass"
				>
					{menuList.map((item, index) => {
						return (<SubMenu key={item.key} icon={item.icon} title={item.title}>
							{item.children.map(itemChild => {
								return (<Menu.Item key={itemChild.key}>{itemChild.title}</Menu.Item>)
							})}
						</SubMenu>)

					})
					}
				</Menu>
			</div>
		)
	}
}

export default leftMenu
