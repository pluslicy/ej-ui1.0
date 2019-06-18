import React from 'react'
import {Button,Tabs} from 'antd'
import axios from '../utils/axios';

class CustomerDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      customer:{},
      address:[],
      orders:[]
    }
  }

  componentDidMount(){
    let payload = this.props.location.payload;
    if(payload){
      this.setState({customer:payload})
      this.loadAddress();
      this.loadOrders();
    } else {
      this.props.history.push("/customer")
    }
  }
  //加载地址信息
  loadAddress(){
    axios.get("/address/query",{
      params:{customerId:this.props.location.payload.id}
    })
    .then((result)=>{
      this.setState({
        address:result.data
      })
    })
  }
   //加载订单信息
   loadOrders(){
    axios.get("/order/queryBasic",{
      params:{customerId:this.props.location.payload.id}
    })
    .then((result)=>{
      this.setState({
        orders:result.data
      })
    })
  }



  render(){
    const { TabPane } = Tabs;
    
    function callback(key) {
      console.log(key);
    }

    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="基本信息" key="1">
            <p>{this.state.customer.realname}</p>
            <p>{this.state.customer.telephone}</p>
            <img alt="图片找不到..." src={this.state.customer.photo}/>
          </TabPane>
          <TabPane tab="服务地址" key="2">
            {JSON.stringify(this.state.address)}
          </TabPane>
          <TabPane tab="订单" key="3">
            {JSON.stringify(this.state.orders)}
          </TabPane>
        </Tabs>
        <Button type="link" onClick={()=>{this.props.history.goBack()}}>返回</Button>
      </div>
    )
  }
}

export default CustomerDetails;