import React from 'react';
import {Button,message} from 'antd'
import axios from '../utils/axios'

class OrderPage extends React.Component {
  saveOrder(){
    let data = {
      customerId:10,
      addressId:3,
      orderLines:[{
        number:3,
        productId:1
      },{
        number:2,
        productId:2
      }]
    }
    axios.post("/order/save",data)
    .then((result)=>{
      message.success(result.statusText)
    })
  }
  render(){
    return (
      <div>
        <div className="title">订单管理</div>
        <Button onClick={this.saveOrder.bind(this)}>保存</Button>
      </div>

    )
  }
}
export default OrderPage;