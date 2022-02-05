import 'antd/dist/antd.css';
import './App.css';

import { Layout, Menu} from 'antd';
import {
  HomeTwoTone,
  TeamOutlined,
  UnorderedListOutlined,
  TableOutlined,
} from '@ant-design/icons';

import { useState } from 'react/cjs/react.development';
import { Link , Route, Routes } from 'react-router-dom';
import OfficialsTable from './components/OfficialsTable/OfficialsTable';
import AppTableCrud from './components/AppTableCrud/AppTableCrud';
import SimpleTable from './components/ExploreTables/SimpleTable';
import CheckBoxTable from './components/ExploreTables/CheckBoxTable';
import CrudTable from './components/ExploreTables/CrudTable';
import SearchTable from './components/ExploreTables/SearchTable';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;



function App() {

  const [collapsed, setCollapsed] = useState(false)


  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
          <Header className="site-layout-background" style={{ padding:'0 1.25rem' }} >
              <h3 style={{color: 'white', textAlign: 'start'}}>DASHBOARD</h3>
          </Header>
          <Layout className="site-layout">
              <Sider theme='light' collapsible collapsed={collapsed} onCollapse={() => setCollapsed(collapsed => !collapsed)}>
                  <div className="logo" />
                  <Menu theme="" defaultSelectedKeys={['1']} mode="inline">
                      <Menu.Item key="1" icon={<HomeTwoTone />}>
                          <Link to='/todos'>Todos</Link>
                      </Menu.Item>
                      <Menu.Item key="2" icon={<TeamOutlined />}>
                          <Link to='/officials'>Officials</Link>
                      </Menu.Item>
                      <SubMenu icon={<TableOutlined />} title="Tables">
                        <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                            <Link to='/simp_table'>Simple</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UnorderedListOutlined />}>
                            <Link to='/checkbox_table'>Checkbox</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<UnorderedListOutlined />}>
                            <Link to='/crud_table'>Crud</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<UnorderedListOutlined />}>
                            <Link to='/search_table'>Search</Link>
                        </Menu.Item>
                      </SubMenu>
                  </Menu>
              </Sider>
              <Content  style={{ margin: '0 16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <Routes>
                    <Route  path="/" element={<AppTableCrud/>}/>
                    <Route  path="/todos" element={<AppTableCrud/>}/>
                    <Route  path="/officials" element={<OfficialsTable/>}/>
                    <Route  path="/simp_table" element={<SimpleTable/>}/>
                    <Route  path="/checkbox_table" element={<CheckBoxTable/>}/>
                    <Route  path="/crud_table" element={<CrudTable/>}/>
                    <Route  path="/search_table" element={<SearchTable/>}/>
                  </Routes>
                </div>
              </Content>
          </Layout>
      </Layout>
    </div>
  );
}

export default App;
