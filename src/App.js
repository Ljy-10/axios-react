import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import axios from 'axios';
import {List,Avatar,Spin} from 'antd'

class App extends React.Component{
    state={
        list:[],
        loading:false
    }

componentDidMount(){
    this.setState({loading:true})
    axios.get("/api/topics/latest.json").then((response)=>{
        console.log(response)
        this.setState({list:response.data,loading:false})
        
    })
    }

    render(){
        return(
            <Spin spinning={this.state.loading}>
                <List
            itemLayout="horizontal"
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.member.avatar_large} />}
                  title={<a href={item.url}>{item.title}</a>}
                  description={item.node.title+item.member.username+"最后回复来自"+item.last_reply_by}
                />
              </List.Item>
            )} 
          /></Spin>
        )
    }   
}


export default App;
