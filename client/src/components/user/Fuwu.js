import React, { Component } from 'react';
import Header from "../Header";
import axios from "axios";
import {Link} from "react-router-dom";
import Footer from "../Footer";
import "../../static/css/mui.min.css";
import "../../static/css/me.css";

class Fuwu extends Component {
	constructor(props){
		super(props);
		this.state = {
			articlelist:[]
		}
	}
	componentWillMount(){
		axios.get("http://localhost:3010/api/article")
		.then(function(res){
			// console.log(res);
			this.setState({
				articlelist:res.data.result
			})
		}.bind(this))
		.catch(function(err){
			console.log(err);
		})
	}
  render() {
    return (
       <div>
         <Header title="服务中心" url="/user"/>
				 <div className="hasheight-top"></div>
         <div className="mui-content">
				 		<ul className="mui-table-view">
							 {
								 this.state.articlelist.map((item,index)=>{
									 return (
											<li className="mui-table-view-cell mui-media" key={index}>
												<Link to="article">
															<img className="mui-media-object mui-pull-left article-img" src={item.img}/>
															<div className="mui-media-body content-title">
																	<h4>{item.title}</h4>
																	<p className="mui-ellipsis">{item.description}</p>
															</div>
												</Link>
											</li>
									 )
								 })
							 }
		        
		       
		    </ul>
				<Footer/>
		</div>  
      </div>
    );
  }
}

export default Fuwu;
