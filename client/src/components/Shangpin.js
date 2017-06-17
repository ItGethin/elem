import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from "axios";
import Todostore from "../stores/store.js";
import "../static/font/iconfont.css";
import "../static/css/product.css";
class Shangpin extends Component {
    constructor(props){
        super(props);
        this.state={
            style:1,
            data:Todostore.alls()[0]
        }
        this.addcollection = this.addcollection.bind(this);
    }
    addcollection(){
        console.log(this.state.data);
        var arr = localStorage.getItem("collection")?JSON.parse(localStorage.getItem("collection")):[];
        arr.push(this.state.data);
        console.log(arr);
        localStorage.setItem("collection",JSON.stringify(arr));
    }
    componentWillMount(){
        if(sessionStorage.getItem("data")){
                var list=JSON.parse(sessionStorage.getItem("data"));
        }else{
             var list=JSON.parse(Todostore.alls()[0]);
        }
         var num=this.props.match.url.split("/")[2];
            for(var i=0;i<list.length;i++){
                if(list[i]["_id"]==num){
                    this.setState({
                        data:list[i]
                    })
                }
            }
    }
    componentDidMount(){
            
           
    }

  render() {
      if(!this.state.style){
            return <Redirect to={{ from: { pathname: '/' } }}></Redirect>
      }
    return (
        <div>
            <header className="top-product">
                <Link to="/"><i className="iconfont icon-arrowleft"></i></Link>
                <h2>商品详情</h2>
            <div>
                <a className="save" onClick={this.addcollection}>
                	<i className="iconfont icon-shoucang"></i><br/>
                    <span>收藏</span>
                </a>
                <a className="nav" onClick={this.addcollection}>
                	<i className="iconfont icon-01"></i><br/>
                    <span>导航</span>
                </a>
            </div>
        </header>
        <div className="container-wrap">
        <section className="shangping-img">
            <img src={`http://localhost:3010/${this.state.data.img}`} alt=""/>
            <h2>藏巴拉素食馆</h2>
            <h3>单人自助餐</h3>
        </section>
        <section className="shopping">
            <h4>{this.state.data.price}</h4><i>元</i><span className="menshijia">门市价：{this.state.data.old_price}元</span><button type="button" className="buyfirst">立即购买</button>
        </section>
        <section className="shangping-shows">
            <div className="shangp-top">
                <span><img src="../images/tui.png"/>不支持随时退款</span>
                <span><img src="../images/file.png"/>支持过期自动退款</span>
            </div>
            <div className="shangp-bu">
                <span><img src="../images/me.png"/>已售{this.state.data.product_content}</span>    
            </div>            
        </section>
        <section className="st-cen">
            <span className="star">
					<span><img src="../images/xing.bmp"/></span>
					<span><img src="../images/xing.bmp"/></span>
					<span><img src="../images/xing.bmp"/></span>
					<span><img src="../images/xing.bmp"/></span>
					<span><img src="../images/xing.bmp"/></span>
			</span>
            <span>4.6</span>
            <span className="pingjia">415人评价<i className="iconfont icon-more"></i></span>
        </section>
        <section className="product-content">
        	 <h3>商品信息</h3>
        	 <div className="product-main">
        	 	<div className="product-content-left">
        		<h2>藏巴拉素食馆</h2>
                <p>{this.state.data.description}</p>
                <i className="iconfont icon-wxbdingwei"></i>
                <span className="distancelest">离我最近</span>
        		
	        	</div>
	        	<div className="product-content-right">
	        		<i className="iconfont icon-dianhua gotogood-content"></i>
	        	</div>
        	 </div>
        	
        </section>
        <section>
        	<Link to="" className="seemore">
        	查看其它商品
            <i className="iconfont icon-arrowleft translate seemore-icon"></i></Link>
        </section>
        
        </div>  
        </div>
    );
  }
}

export default Shangpin;
