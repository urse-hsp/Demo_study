import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DingdingOutlined
  } from '@ant-design/icons';


export const menuList = [
    {
        "title": "首页",
        "icon": "home",
        "path": "/home"
    },
    {
        "title": "商品",
        "icon": "home",
        "path": "/catalogProduct",
        "children": [
            {
                "title": "品类管理",
                "icon": "home",
                "path": "/products"
            },
            {
                "title": "商品管理",
                "icon": "home",
                "path": "/users"
            }
        ]
    },
    {
        "title": "用户管理",
        "icon": "user",
        "path": "/administration"
    },
    {
        "title": "角色管理",
        "icon": "role",
        "path": "/role"
    },
    {
        "title": "图形图标",
        "icon": "home",
        "path": "/pieline",
        "children": [
            {
                "title": "饼图",
                "icon": "home",
                "path": "/pie"
            },
            {
                "title": "折线图",
                "icon": "home",
                "path": "/line"
            }
        ]
    }
]