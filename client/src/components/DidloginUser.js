import React, { Component } from 'react';
import Header from "./Header";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import "../static/css/mui.min.css";
import "../static/font/iconfont.css";
import "../static/css/me.css";
class DidLoginUser extends Component {
  render() {
    return (
                <div>
               <Header title="我的" url="/"/>
               <div className="hasheight-top"></div>
                <div className="mui-content">
		    <section className="headersection clearfix">
			    <div className="left fl">
            		<img src="./images/touxiang.bmp" alt=""/>
			    </div>
			    <div className="right fl">
			    	<span className="gotologin">fgdgt4et5</span>
			           
						<i className="iconfont phone icon-phone"></i>18866668888
			    </div>
			    
				<i className="iconfont return icon-arrowleft"></i>
			</section>
		<section className="guide">
				<ul>
					<li>
						<span className="youhuinum">0</span>个<br/>
						<span>优惠</span>
					</li>
					<li>
						<span className="jifennum">0</span>个<br/>
						<span>积分</span>
					</li>
				</ul>
				
			</section>
			<section className="myul-list">
				<div>
					<aside>
							
							<i className="iconfont icon-wodedingdan mui-media-object mui-pull-left iconleft"></i>
						</aside>
						<div className="myul-list-right">
							<Link to="order">
							<span>
								 我的订单
							</span>
							
							<i className="iconfont iconright icon-arrowleft"></i>
							</Link>
						</div>
				</div>
				<div>
					<aside>
							
							<i className="iconfont mui-media-object mui-pull-left iconleft icon-lnicon03 jifenshangcheng"></i>
						</aside>
						<div className="myul-list-right">
							<span>
								 积分商城
							</span>
							
							<i className="iconfont iconright icon-arrowleft"></i>
						</div>
				</div>
				<div>
					<aside>
							
							<i className="iconfont mui-media-object mui-pull-left iconleft icon-wxbbiaowang huiyuanka"></i>
						</aside>
						<div className="myul-list-right">
							<span>
								 饿了么会员卡
							</span>
							
							<i className="iconfont iconright icon-arrowleft"></i>
						</div>
				</div>
			</section>
			<section className="myul-list">
				<div>
					<aside>
						<i className="iconfont mui-media-object mui-pull-left iconleft icon-hua"></i>
						</aside>
						<div className="myul-list-right">
							<Link to="/fuwu">
							<span>
								 服务中心
							</span>
							<i className="iconfont iconright icon-arrowleft"></i>
							</Link>
						</div>
				</div>
				<div>
					<aside>
							<i className="iconfont mui-media-object mui-pull-left iconleft icon-shoucang"></i>
						</aside>
						<div className="myul-list-right">
							<Link to="/collection">
							<span>
								 我的收藏
							</span>
							<i className="iconfont iconright icon-arrowleft"></i>
							</Link>
						</div>
				</div>
				<div>
					<aside>
						<i className="iconfont mui-media-object mui-pull-left iconleft icon-eleme"></i>
						</aside>
						<div className="myul-list-right">
							<span>
								 下载饿了么APP
							</span>
							<i className="iconfont iconright icon-arrowleft"></i>
						</div>
				</div>
			</section>
			
		</div>
		<Footer/>
                </div>
   
    );
  }
}

export default DidLoginUser;
