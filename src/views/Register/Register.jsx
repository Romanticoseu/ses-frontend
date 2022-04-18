import React, { Component } from "react";
import { Layout, Input, Form, Button, Divider, message, notification, Select } from "antd";
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone, UserAddOutlined } from '@ant-design/icons';
import '../../style/view-style/login.scss'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";
import { Option } from "antd/lib/mentions";

// class Login extends Component {
//     state = {
//         loading: false
//     }

//     enterLoading = () => {
//         this.setState({
//             loading:true
//         })
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         this.props.form.validateFields((err, values) => {
//             if(!err) {
//                 // let { username, passwd} = values


//                 switch(values.username) {
//                     case 'admin':
//                         values.auth = 0
//                         break
//                     default:
//                         values.auth = 1
//                 }

//                 localStorage.setItem('user', JSON.stringify(values))
//                 this.enterLoading()
//                 this.timer = setTimeout(() => {
//                     message.success('Loging Successful!')
//                     this.props.history.push('/')
//                 }, 2000)
//             }
//         })
//     }

//     componentDidMount() {
//         notification.open({
//             message: 'Welcome to Student course selection system!',
//             duration: null,
//             description: 'Please intput your username and password'
//         })
//     }

//     componentWillUnmount() {
//         notification.destroy()
//         this.timer && clearTimeout(this.timer)
//     }

//     render() {
//         const { getFieldDecorator } = this.props.form
//         return (
// <Layout className="login animated fadeIn">
//     <div className="model">
//         <div className="login-form">
//             <h3>System</h3>
//             <Divider />
//             <Form onSubmit={this.handleSubmit}>
//                 <Form.Item className="item">
//                     {getFieldDecorator('username', {
//                         rules: [{required: true, message: 'Please input username'}]
//                     })(
//                         <Input
//                             placeholder='Username'
//                         />
//                     )}
//                 </Form.Item>
//             </Form>
//         </div>
//     </div>
// </Layout>
//         )
//     }
// }

export default class Login extends Component {
    state = {
        loading: false
    }

    enterLoading = () => {
        this.setState({
            loading: true
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // let { username, passwd} = values

                switch (values.username) {
                    case 'admin':
                        values.auth = 0
                        break
                    default:
                        values.auth = 1
                }

                console.log("6666");
                window.localStorage.setItem('user', JSON.stringify(values))
                this.enterLoading()
                this.timer = setTimeout(() => {
                    message.success('Loging Successful!')
                    this.props.history.push('/')
                }, 2000)
            }
        })
    }
    componentDidMount() {
        // notification.open({
        //     message: 'Welcome to Student course selection system!',
        //     duration: null,
        //     description: 'Please intput your username and password'
        // })
    }

    componentWillUnmount() {
        notification.destroy()
        this.timer && clearTimeout(this.timer)
    }
    render() {
        // const { getFieldDecorator } = this.props.form
        return (
            <Layout className="login animated fadeIn">
                <div className="model">
                    <div className="login-form">
                        <h3>注册</h3>
                        <Divider />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item className="item">
                                {/* {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input username' }]
                                })(
                                    <Input
                                        placeholder='Username'
                                    />
                                )} */}
                                <Input
                                    placeholder="Username"
                                    prefix={<UserOutlined />}
                                ></Input>
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    placeholder='name'
                                    prefix={<UserAddOutlined />}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input.Password
                                    placeholder='password'
                                    prefix={<LockOutlined />}
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>

                            <Form.Item label="用户类型：">
                                <Select defaultValue="student" style={{ width: 120 }}>
                                    <Option value="student">学生</Option>
                                    <Option value="teacher">教师</Option>
                                    <Option value="admin">管理员</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    // className='login-form-button'
                                    loading={this.state.loading}
                                >
                                    确定
                                </Button>
                                <Link to="/">
                                    <Button
                                        className='register-form-button'
                                        loading={this.state.loading}
                                    >
                                        返回
                                    </Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }
}
// export default withRouter(Form.create()(Login()))