import React from 'react'
import '../less/means.less'
import { Form, Input, Button, InputNumber, Select, TimePicker } from 'antd';
import moment from 'moment';

const { Option } = Select;

const format = "HH:mm"

export default function List() {
    return (
        <div className='means'>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="课程名"
                    name="courseName"
                    rules={[{ required: true, message: '请输入课程名!' }]}
                >
                    <Input style={{ width: 360 }} />
                </Form.Item>

                {/* <Form.Item
                    label="课程编号"
                    name="courseNumber"
                    rules={[{ required: true, message: '请输入课程编号!' }]}
                >
                    <Input style={{ width: 360 }} />
                </Form.Item> */}

                <Form.Item
                    label="课程容量"
                    name="maxStudentNum"
                    rules={[{ required: true, message: '请设置课程容量!' }]}
                ><InputNumber min={10} max={150} defaultValue={50} /></Form.Item>

                <Form.Item
                    label="课程时间"
                    name="courseDay"
                    rules={[{ required: true, message: '请设置课程信息!' }]}
                >
                    <Select defaultValue="one" style={{ width: 120 }} >
                        <Option value="one">周一</Option>
                        <Option value="two">周二</Option>
                        <Option value="three" >周三</Option>
                        <Option value="four">周四</Option>
                        <Option value="five">周五</Option>
                        <Option value="six">周六</Option>
                        <Option value="seven">周日</Option>
                    </Select>
                    &nbsp;&nbsp;上课时间：
                    {/* <InputNumber min={1} max={13} defaultValue={1} /> */}
                    <TimePicker defaultValue={moment('12:08', format)} format={format} />
                    &nbsp;~&nbsp;
                    {/* <InputNumber min={1} max={13} defaultValue={13} /> */}
                    <TimePicker defaultValue={moment('12:08', format)} format={format} />
                    &nbsp;教室：
                    <Input style={{ width: '100px' }} />
                </Form.Item>

                <Form.Item
                    label="课程时间（可选）"
                    name="courseDay"
                >
                    <Select defaultValue="one" style={{ width: 120 }} >
                        <Option value="one">周一</Option>
                        <Option value="two">周二</Option>
                        <Option value="three" >周三</Option>
                        <Option value="four">周四</Option>
                        <Option value="five">周五</Option>
                        <Option value="six">周六</Option>
                        <Option value="seven">周日</Option>
                    </Select>
                    &nbsp;&nbsp;上课时间：
                    <TimePicker defaultValue={moment('12:08', format)} format={format} />
                    &nbsp;~&nbsp;
                    <TimePicker defaultValue={moment('12:08', format)} format={format} />
                    &nbsp;教室：
                    <Input style={{ width: '100px' }} />
                </Form.Item>

                <Form.Item
                    label="课程时间（可选）"
                    name="courseDay"
                >
                    <Select defaultValue="one" style={{ width: 120 }} >
                        <Option value="one">周一</Option>
                        <Option value="two">周二</Option>
                        <Option value="three" >周三</Option>
                        <Option value="four">周四</Option>
                        <Option value="five">周五</Option>
                        <Option value="six">周六</Option>
                        <Option value="seven">周日</Option>
                    </Select>
                    &nbsp;&nbsp;上课时间：
                    <TimePicker defaultValue={moment('00:00', format)} format={format} />
                    &nbsp;~&nbsp;
                    <TimePicker defaultValue={moment('00:00', format)} format={format} />
                    &nbsp;教室：
                    <Input style={{ width: '100px' }} />
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}