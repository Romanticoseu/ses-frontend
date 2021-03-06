import React, { useEffect, useState } from 'react'
import './less/listtable.less'
import { Table, Button, message } from 'antd';
import { ListApi, DropCourseApi } from '../request/api';
import ClassInfo from './ClassInfo'

export default function List() {
    const [arr, setarr] = useState([])
    // 分页
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 10 })
    useEffect(() => {
        ListApi({
            studentId: localStorage.getItem('userId'),
            pageNo: 1,
            pageSize: 10
        }).then(res => {
            let a = res.data;
            for (var i = 0; i < a.length; i++) {
                a[i].key = a[i].courseId;
            }
            let b = a.filter((e) => {
                return e.isSelected
            })
            setarr(b)
        })
    }, [])
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
            title: '课程学分',
            dataIndex: 'courseCredit',
            key: 'courseCredit',
            render: text => <p>{text}</p>
        },
        {
            title: '已选人数',
            dataIndex: 'courseStudentNumber',
            key: 'courseStudentNumber',
            render: text => <p>{text}</p>
        },
        {
            title: '课程容量',
            dataIndex: 'courseMaxStudentNumber',
            key: 'courseMaxStudentNumber',
            render: text => <p>{text}</p>
        },
        {
            title: '教师',
            dataIndex: 'teacherName',
            key: 'teacherName',
            render: text => <p>{text}</p>
        },
        {
            title: '操作',
            key: 'action',
            render: text => {
                return (
                    <div>
                        <Button type='danger' style={{ left: '15px' }} onClick={() => {
                            DropCourseApi({
                                studentId: localStorage.getItem('userId'),
                                courseId: text.courseId
                            }).then(res => {
                                console.log(res)
                                if (res.errorCode == 0) {
                                    message.success(res.message);
                                    window.location.reload();
                                } else if (res.errorCode == 1) {
                                    message.success(res.message);
                                }
                            })
                        }}>退选</Button>
                        <ClassInfo></ClassInfo>
                    </div>
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