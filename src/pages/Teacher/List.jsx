import React, { useEffect, useState } from 'react'
import '../less/listtable.less'
import { Table, Button, Space } from 'antd';
import monment from 'moment'
import ClassInfo from '../ClassInfo'

export default function List() {

    const [arr, setarr] = useState([
        {
            key: 'c1',
            courseId: 'c1',
            courseName: '软件工程',
            courseCapcity: '0/50',
            courseTeacher: '李四',
            courseState: "已审核"
        }
    ])
    // 分页
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 10 })
    const temp = 1

    const columns = [
        {
            title: '课程名称',
            dataIndex: 'courseName',
            key: 'courseName',
            render: text => {
                return (
                    <div>{text}</div>
                )
            }

        },
        {
            title: '课程号',
            dataIndex: 'courseId',
            key: 'courseId',
            render: text => <p>{text}</p>
        },
        {
            title: '课程容量',
            dataIndex: 'courseCapcity',
            key: 'courseCapcity',
            render: text => <p>{text}</p>
        },
        {
            title: '教师',
            dataIndex: 'courseTeacher',
            key: 'courseTeacher',
            render: text => <p>{text}</p>
        },
        {
            title: '状态',
            dataIndex: 'courseState',
            key: 'courseState',
            render: text => <p>{text}</p>
        },
        {
            title: '操作',
            key: 'action',
            render: text => {
                return (
                    <Space size="right" style={{ top: '-5px' }}>
                        <Button type='danger' style={{ left: '15px' }} onClick={() => console.log(text.key)}>删除</Button>
                        <ClassInfo></ClassInfo>
                    </Space >
                )
            },
        },
    ];

    //分页
    const pageChange = (arg) => {
        console.log(arg)
        // getArticleList(arg.current, arg.pageSize);
    }

    return (
        <div className='list_table'>
            <Table
                columns={columns}
                dataSource={arr}
                onChange={pageChange}
                pagination={pagination}
            />
        </div>
    )
}