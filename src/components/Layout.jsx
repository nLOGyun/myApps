import { Layout, Menu, Breadcrumb, Input } from "antd";
import React from 'react';
import Layout2 from './Layout2';
import '../style/layout.css';
import { debounce, _debounce } from '../scripts/used';

class LayoutComponent extends React.Component{

    render() {
        return(
            <Layout className='layout' >
                <Layout.Header>
                    <div className='logo'/>
                    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
                        <Menu.Item key='1'> nav 1 </Menu.Item>
                        <Menu.Item key='2'> nav 2 </Menu.Item>
                        <Menu.Item key='3'> nav 3 </Menu.Item>
                    </Menu>
                </Layout.Header>
                <Layout.Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item> Home </Breadcrumb.Item>
                        <Breadcrumb.Item> List </Breadcrumb.Item>
                        <Breadcrumb.Item> App </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='site-layout-content'>
                        <Layout2/>
                        Content
                        <Input placeholder="Basic usage" onChange={ debounce( () => console.log( 99 ) , 1000 ) } />
                    </div>
                </Layout.Content>
                <Layout.Footer style={{ textAlign: 'center' }}>
                    that's all thank you
                </Layout.Footer>
            </Layout>
        );
    }
}

export default LayoutComponent;