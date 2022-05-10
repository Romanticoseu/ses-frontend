import React,{useEffect, useState} from "react";
import { Menu } from 'antd';
import { ReadOutlined, DatabaseOutlined } from '@ant-design/icons';
import { useNavigate,useLocation } from "react-router-dom";


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
    getItem('查看可选课程', 'list', <ReadOutlined />),
    // getItem('文章编辑', 'edit', <EditOutlined />),
    getItem('修改资料', 'means', <DatabaseOutlined />),
];


export default function Asider() {
    const location = useLocation()
    const navigate = useNavigate()
    const [defaultkey, setdefaultkey] = useState("")

    useEffect(()=>{
        let path = location.pathname
        setdefaultkey(path.split('/')[1])
    },[])
    
    const onClick = (e) => {
        setdefaultkey(e.key)
        navigate('/'+e.key)
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
            items={items}
        />
    );
}