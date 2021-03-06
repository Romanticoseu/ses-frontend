import React, { useEffect, useState } from "react";
import { Menu } from 'antd';
import { ReadOutlined, DatabaseOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from "react-router-dom";


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}


const items = [
    [//学生
        getItem('查看可选课程', 'list', <ReadOutlined />),
        getItem('已选课程', 'courses', <ReadOutlined />),
        getItem('修改资料', 'means', <DatabaseOutlined />),
    ],
    [//教师
        getItem('所授课程', 'teacher/list', <ReadOutlined />),
        getItem('增加课程', 'teacher/addCourse', <PlusCircleOutlined />),
        getItem('修改资料', 'teacher/means', <DatabaseOutlined />),
    ],
    [//教务处
        getItem('所有课程信息', 'jwc/list', <ReadOutlined />),
        getItem('教室课程信息', 'jwc/roomList', <ReadOutlined />),
        getItem('修改资料', 'jwc/means', <DatabaseOutlined />),
    ]
];


export default function Asider() {
    const location = useLocation()
    const navigate = useNavigate()
    const auth = localStorage.getItem("auth");//获取用户类型，登录时已经本地存储 
    let temp = items[auth][0].key
    const [defaultkey, setdefaultkey] = useState(temp)
    // setdefaultkey(temp)
    
    useEffect(() => {
        let path = location.pathname
        path = path.slice(1,path.length)
        console.log(path)
        setdefaultkey(path)
    }, [])
    // console.log(defaultkey)

    const onClick = (e) => {
        // console.log(e.key)
        setdefaultkey(e.key)
        navigate('/' + e.key)
    };

    return (
        <Menu
            onClick={onClick}
            style={{
                width: 185,
            }}
            className="aside"
            selectedKeys={[defaultkey]}
            mode="inline"
            theme="dark"
            items={items[auth]}//0学生1教师2教务处
        // items={items[0]}//调试用
        />
    );
}