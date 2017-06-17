import React, { Component } from 'react';
import Header from "./Header";
import "../static/css/mui.min.css";

class News extends Component {
	componentDidMount(){
		axios.get("http://route.showapi.com/109-35?showapi_appid=36575&showapi_sign=40ec312d4d9c413f90a2cf5b11fe8ef2&title=%E4%BA%92%E8%81%94%E7%BD%91").then(function(res){
			console.log(res);
		})
		.catch(function(err){
			console.log(err);
		})
	}
  render() {
    return (
       <div>
         <Header title="文章列表"/>
         <div class="mui-content">
		    <ul class="mui-table-view">
		            <li class="mui-table-view-cell">
		                <a class="mui-navigate-right">
		                    fdsfsafasfdsafdsfads
		                </a>
		            </li>
		            <li class="mui-table-view-cell">
		                <a class="mui-navigate-right">
		                     fdsfdsafdsfdsafdsaf
		                </a>
		            </li>
		            <li class="mui-table-view-cell">
		                <a class="mui-navigate-right">
		                     fdsafdsafdsaf
		                </a>
		            </li>
		        </ul>
		</div>
      </div>
    );
  }
}

export default News;
