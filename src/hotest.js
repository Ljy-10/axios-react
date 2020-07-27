import React from 'react';
import axios from 'axios';
import './App.css';
import { List, Card, } from 'antd';


class Hotest extends React.Component{
    state ={
        list:[]
    }

    componentDidMount(){
        axios.get("/api/topics/hot.json").then((response)=>{
            console.log(response)
            this.setState({list:response.data})
    })}

    render(){
        return(
        <div style={{ padding: 8 }}>
           <List
                  grid={{ gutter: 16, column: 1 }}
                      dataSource={this.state.list}
                      renderItem={item => (
                          <List.Item>
                                <Card title={<a href={item.url}>{item.title}</a>} >{"Writted by "+item.member.username}</Card>
                          </List.Item>
                      )}
              />  
          </div>
        )
    }
}

export default Hotest;
