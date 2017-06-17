import React, { Component } from 'react';
import Header from "./Header";
import axios from "axios";
import "../static/css/mui.min.css";

class News extends Component {
    constructor(props){
        super(props);
        this.dologin  = this.dologin.bind(this);
    }
    dologin(){
        var username=this.refs.username.value;
        var password=this.refs.password.value;
        console.log(username);
        console.log(password);
        axios.post("http://localhost:3010/api/login",{
            username,
            password
        }).then(function(res){
			console.log(res.data.result.xinxi[0]);
            var userdata = res.data.result.xinxi[0];
            localStorage.setItem("login",JSON.stringify(userdata));
            window.location.href = "/user";
		})
		.catch(function(err){
			console.log(err);
		})
    }
  render() {
    return (
       <div>
           <Header title="登录" url="user"/>
           <div className="hasheight-top"></div>
           <div className="mui-content">
			<form id='login-form' className="mui-input-group">
				<div className="mui-input-row">
					<input id='account' type="text" className="mui-input-clear mui-input" placeholder="手机/邮箱/用户名" ref="username"/>
				</div>
				<div className="mui-input-row">
					<input id='password' type="password" className="mui-input-clear mui-input" placeholder="密码" ref="password"/>
				</div>
			</form>
			<div className="mui-content-padded">
				<button id='login' className="mui-btn mui-btn-block mui-btn-primary" type="button" onClick={this.dologin}>登录</button>
				<div className="link-area"><a id='reg'>关于我们</a> 
				</div>
			</div>
			<div className="mui-content-padded oauth-area">

			</div>
		</div>
           
        
      </div>
    );
  }
}

export default News;
