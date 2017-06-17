import React, { Component } from 'react';
import Header from "./Header";
import axios from "axios";
import {
  Link
} from 'react-router-dom';
import Footer from "./Footer";
import "../static/css/dingdan.css";


class Order extends Component {
  render() {
    return (
          <div>
               <Header title="全部订单" url="/"/>
               <div className="header-jiade"></div>
               {/*<section className='no-user'>
                  <img src="./images/error-load.png" alt="" />
                  <h3>登录后查看外卖订单</h3>
                  <button>立即登录</button>
                </section>*/}
                <div>
                  <div className="dn">
                    
                    <section className='user'>
                      <Link className='active' to="">外卖</Link>
                      <Link to="">早餐</Link>
                    </section>
                    
                    
                    <Dd></Dd>
                    
                    
                    <section className='message'>
                      
                      <p>仅显示近一年外卖订单</p>
                    </section>
                  </div>
                </div>
                <Footer/>
          </div>
   
    );
  }
}


class Dd extends Component {
  constructor(props){
      super(props);
      this.state={
        list:""
      }
  }
  componentWillMount(){
      this.getdata();
  }
  getdata=()=>{
    var that=this
    axios.get("http://localhost:3010/api/order")
        .then(function(res){
            // console.log(res.data.result);
            var text=JSON.stringify(res.data.result);
            that.setState({
              list:text
            })
        }).catch(function(err){
            console.log("err");
        })
  }
    render(){
      return(
        <div>
        {
          this.state.list?<section className="dn-container">
                      <div className="dn-info">
                        <div className="info-msg">
                          <img src="images/l1.png" alt="" />
                          <Link to="">
                            <i>舌尖味道 &nbsp;&gt;</i>
                            <em>2016-08-29 19:56</em>
                          </Link>
                        </div>
                        <span>订单已完成</span>
                      </div>
                      <div className="dn-price">
                        <span>土豆丝等7件商品</span>
                        <span>￥42.00</span>
                      </div>
                    </section>:<p>请求请求服务器失败</p>
        }
        </div>
      )

    }

}



export default Order;
