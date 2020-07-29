import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Divider } from "antd";

const Styles = require("./index.css");

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 6, span: 16 },
};

const login = () => {
	const onFinish = (values) => {};

	return (
		<div className={Styles.content_login}>
			<div className={Styles.loginContent}>
				<h2>综合信息系统</h2>
				<Divider />
				<Form name="basic" {...layout} onFinish={onFinish} initialValues={{ remember: true }}>
					<Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
						<Input />
					</Form.Item>
					<Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
						<Input.Password />
					</Form.Item>
					<Form.Item {...tailLayout} name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default login;
