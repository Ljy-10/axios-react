import React from 'react';
import {Layout, BackTop} from 'antd';
import App from './App.js'
import Drawers from './drawer.js';

class Layouts extends React.Component{
    render(){
        const { Header, Footer, Sider, Content } = Layout;
        const style = {
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#1088e9',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14,
          };
        return(
        <div style={{ padding: 8 }}>
            <Layout>
            <Header>Header</Header>
            <Layout>
                <Content><App /></Content>
                <Sider><Drawers /></Sider>
                <BackTop>
                    <div style={style}>UP</div>
                </BackTop>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
          </div>
        )
    }
}

export default Layouts