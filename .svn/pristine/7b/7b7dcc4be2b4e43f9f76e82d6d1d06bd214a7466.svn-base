import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "../../static/css/mui.min.css";
import "../../static/css/me.css"
class Collection extends Component {
	constructor(props){
		super(props);
	}
	// componentWillMount(){
	// 	var arr = localStorage.getItem("collection");
	// 	console.log(arr);
	// }
  render() {
	  var arr = JSON.parse(localStorage.getItem("collection"));
	//   console.log(arr);
      return (
                <div>
               		<div className="fund">
						<header> 
							<Link to="/user"><img src="../images/back-shows.jpg" alt=""/></Link>
							<h3>我的收藏</h3>
						</header>
					</div>
					<div className="hasheight-top"></div>
               		<div className="mui-content">
						<div className="shoucang-tab">
							<ul>
								<li className="active"><span>收藏商品</span></li>
								<li><span>收藏商家</span></li>
							</ul>
						</div>
						{
							arr!=null?<Child arr={arr}/>:<p>暂无收藏</p>
						}
					</div>
				</div>
				)
  }
}
class Child extends Component{
	render(){
		console.log(this.props.arr);
		return (
			<section className="advise">
				<ul className="mui-table-view">
					
					{
						this.props.arr.map((item,index)=>{
						return (
							<li className="mui-table-view-cell mui-media" key={index}>
								<a href="javascript:;">
									<img className="mui-media-object mui-pull-left" src={item.img}/>
									<div className="mui-media-body">
										<div className="good-title"><h2>{item.title}</h2><i>票</i></div>
										<div>
											<span></span>
											<span className="rate">4.8</span>
											<span>月售274单</span>
										</div>
										<div className="needxiegang">
											<span>¥0起送</span>
											<span>配送费¥9</span>
											<span>{item.price}/人</span>
											<div className="distance">
												<span>961m</span>
												<span className="minute">40分钟</span>
											</div>
										</div>	
									</div> 
									</a>
						</li>
							)
						})
					}
				</ul>
			</section>

		)	
	}	
}
export default Collection;
