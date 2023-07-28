// 全局布局
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DingdingOutlined
} from '@ant-design/icons';
import './index.less'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
import {dataMeun ,menuList} from './dataMenu'
import {Link} from 'umi'


class SiderDemo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  getMenuNodes = (MenuList)=>{    //子菜单等于空的时候 渲染列表，不等于空的时候渲染个SubMenu，在调用函数渲染列表
    return MenuList.map(item => {
      if (!item.children) {
        return (<Menu.Item key={item.path} icon={<DingdingOutlined/>}>
              <Link to={item.path}>{item.title}</Link>
          </Menu.Item>)
      } else {
        return (<SubMenu
            key={item.path}
            title={item.title}
            icon={<VideoCameraOutlined/>}
            >
              {this.getMenuNodes(item.children)}
        </SubMenu>)
      }
    })
  }

  render() {
    const path = this.props.location.pathname;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo"></div>
          
          <Menu 
              theme="dark" 
              mode="inline" 
              defaultOpenKeys={['/catalogProduct']}
              multiple = "true"
              selectedKeys = {path}
          >
            {
              this.getMenuNodes(menuList)
            }
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background">
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
          </Header>
          
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: window.innerHeight,
            }}
          >
              {this.props.children}
              Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;