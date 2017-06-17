import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swiper from "swiper";
import Footer from "./Footer";
import ShowsAction from "../action/ShowIndex";

import Todostore from "../stores/store.js";

class Home extends Component {

  constructor(props){
    
    super(props);
     this.state = {
            allss:Todostore.alls()[0]
        }
        // console.log(Todostore.alls()[0]);
        // ?Todostore.alls()[0]:'[{"_id":"593a495542cef90f0083b458","img":"images/02.jpg","title":"1234","description":"1234","old_price":"1234","price":"123","product_content":"1234"}]'
  }
  componentWillMount(){
        ShowsAction.ShowItems();
        var that=this;
          Todostore.addChangeListener(function() {
            var todos=Todostore.alls();
            that.setState({
              allss:todos[0]
            });
            sessionStorage.setItem("data",Todostore.alls()[0]);
          })

  }
    componentDidMount(){
       new Swiper ('.swiper-container', {   
		    loop:true,
		    pagination: '.swiper-pagination',
		  });
      // console.log(this.state.allss);
    }
  render() {
    return (
        <div>
               <header id='top'>
                  <div className="h-top">
                    <div className="h-top-left">南山区深圳大学城</div>
                    <div className="h-top right">晴天</div>
                  </div>
                  <div className="h-search">
                    <input type="text" placeholder="搜索商家、商品"/>
                    <div className="uls">
                      <ul>
                        <li><Link to="/">快餐</Link></li>
                        <li><Link to="/">焗饭</Link></li>
                        <li><Link to="/">豆角</Link></li>
                        <li><Link to="/">沙县小吃</Link></li>
                        <li><Link to="/">抢百万红包</Link></li>
                        <li><Link to="/">天天特价</Link></li>
                        <li><Link to="/">尊宝</Link></li>
                        <li><Link to="/">必胜客</Link></li>
                        <li><Link to="/">早餐</Link></li>
                        <li><Link to="/">螺蛳粉</Link></li>
                      </ul>
                    </div>
                  </div>
                </header>
                <section>
                  <div className="swiper-container">
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                              <ul>
                                <li><Link to="/"><img src="./images/s1.jpeg" alt=""/><span>美食</span></Link></li>
                                <li><Link to="/"><img src="./images/s7.jpeg" alt=""/><span>甜品饮品</span></Link></li>
                                <li><Link to="/"><img src="./images/s3.jpeg" alt=""/><span>商超便利</span></Link></li>
                                <li><Link to="/"><img src="./images/s8.jpeg" alt=""/><span>预定早餐</span></Link></li>
                                <li><Link to="/"><img src="./images/s7.jpeg" alt=""/><span>果蔬生鲜</span></Link></li>
                                <li><Link to="/"><img src="./images/s6.jpeg" alt=""/><span>新店特惠</span></Link></li>
                                <li><Link to="/"><img src="./images/s5.jpeg" alt=""/><span>准时达</span></Link></li>
                                <li><Link to="/"><img src="./images/s4.jpeg" alt=""/><span>简餐</span></Link></li>
                              </ul>
                          </div>
                          <div className="swiper-slide">
                              <ul>
                                <li><Link to="/"><img src="/images/s9.jpeg" alt=""/><span>美食</span></Link></li>
                                <li><Link to="/"><img src="/images/s6.jpeg" alt=""/><span>甜品饮品</span></Link></li>
                                <li><Link to="/"><img src="/images/s10.jpeg" alt=""/><span>商超便利</span></Link></li>
                                <li><Link to="/"><img src="/images/s11.jpeg" alt=""/><span>预定早餐</span></Link></li>
                                <li><Link to="/"><img src="/images/s12.jpeg" alt=""/><span>果蔬生鲜</span></Link></li>
                                <li><Link to="/"><img src="/images/s13.jpeg" alt=""/><span>新店特惠</span></Link></li>
                                <li><Link to="/"><img src="/images/s14.jpeg" alt=""/><span>准时达</span></Link></li>
                                <li><Link to="/"><img src="/images/s15.jpeg" alt=""/><span>简餐</span></Link></li>
                              </ul>
                          </div>
                      </div>
                      <div className="swiper-pagination"></div>
                  </div>
                </section>
      <section className="Recommend">
        <h3>推荐商家</h3>
      </section>

{ 

    !this.state.allss?<p>请求服务器失败！！！</p>:JSON.parse(this.state.allss).map(function(text,index){
                 return(

    
       <section className="store" key={text._id}>
		<Link to={`/shangpin/${text._id}`}>
			<div className="st-left">
				<img src={`http://localhost:3010/${text.img}`} alt=""/>
			</div>
			<div className="st-right">
				<div className="st-top">
					<div>
						<span>品牌</span>
						<h4>{text.title}</h4>
					</div>
					<i>票</i>
				</div>
				<div className="st-cen">
					<div className="star">
						<div className="star1">
							<div>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
				    
						<div className="star2">
							<div>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
					<i className="number">本</i>
					<em>月售134单</em>
				</div>
				<div className="st-bo">
					<div className="st-bo-left">
						<span>￥10起送/</span><span>现价:{text.price}/</span><span>原价:{text.old_price}</span>
					</div>
					<div className="st-bo-right">
						<span className="distance">123/</span><span>30分钟</span>
					</div>
				</div>
			</div>
		</Link>
	</section>
  )
  
  

            })
  
}
     
        <div className="jiade"></div>
        <Footer/>  
      </div>
    )
  }
}

 

export default Home;
