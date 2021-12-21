import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';



require('../css/frist.css')
export default class frist extends Component {
	onFinish = () => { }
	toLogin = () => {
		this.props.history.push("/seccend")
	}
	render () {
		return (
			<div className="content-background">
				<div className="login-in-index">
					<div className="top-title">落日余晖</div>
					<div className="form-content">
						<Form
							name="basic"
							labelCol={{ span: 5 }}
							wrapperCol={{ span: 13 }}
							initialValues={{ remember: true }}
							autoComplete="off"
						>
							<Form.Item
								label="账号"
								name="username"
								rules={[{ required: true, message: '亲 漏掉了账号!' }]}
							>
								<Input />
							</Form.Item>

							<Form.Item
								label="密码"
								name="password"
								rules={[{ required: true, message: '密码都不输入吗！' }]}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 5, span: 10 }}>
								<Checkbox>记住我</Checkbox>
							</Form.Item>

							<Form.Item wrapperCol={{ offset: 5, span: 16 }}>
								<Button type="primary" htmlType="submit" onClick={this.toLogin.bind(this)}>
									戳我进去
        </Button>
							</Form.Item>
						</Form>

					</div>

				</div>
			</div>
		)
	}
}
