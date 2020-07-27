import React from 'react'
import './drawer.css'
import { Drawer, Button } from 'antd';
import Hotest from './hotest';


class Drawers extends React.Component {
    state = { visible: false };
  
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <div className="site-drawer-render-in-current-wrapper">
          今日热点
          <div style={{ marginTop: 16 }}>
            <Button type="primary" onClick={this.showDrawer}>
              Open
            </Button>
          </div>
          <Drawer
            title="今日热点"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            getContainer={false}
            style={{  }}
          >
            <p><Hotest/></p>
          </Drawer>
        </div>
      );
    }
  }

  export default Drawers