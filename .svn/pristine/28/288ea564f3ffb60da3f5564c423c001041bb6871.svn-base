import React, { Component } from 'react';
import Header from "../Header";
import axios from "axios";
import "../../static/css/mui.min.css";


class Reg2 extends Component {
    constructor(props){
        super(props);
        this.gotoregister = this.gotoregister.bind(this);
    }
    gotoregister(){
        var username = this.refs.account.value;
        var password = this.refs.password.value;
        var tel = this.refs.tel.value;
        var address = this.refs.address.value;
        var email = this.refs.email.value;
        var time = new Date();
        var add_time = time.getTime();
        var status = 1;

        console.log(add_time);
        console.log(`${username}--${password}--${tel}----${address}---${email}`);
        axios.post("http://localhost:3010/api/register",{
            username,
            password,
            tel,
            address,
            email,
            add_time,
            status
        }).then(function(res){
            console.log(res);
            if(res.data.result.code==1){
                window.location.href = "login";
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }
    componentDidMount(){
        // console.log(this.refs);
        this.refs.tel.value = localStorage.getItem("register");
    }
  render() {
    return (
        <div>
            <Header title="注册" url="/"/>
            <div className="hasheight-top"></div>
            <div className="mui-content">
			<form className="mui-input-group">
				<div className="mui-input-row">
                    <label>用户名</label>
					<input ref='account' type="text" className="mui-input-clear mui-input" placeholder="请输入验证码"/>
				</div>
				<div className="mui-input-row">
					<label>密码</label>
					<input ref='password' type="password" className="mui-input-clear mui-input" placeholder="请输入密码"/>
				</div>
				<div className="mui-input-row">
					<label>确认</label>
					<input ref='password_confirm' type="password" className="mui-input-clear mui-input" placeholder="请确认密码"/>
				</div>
                <div className="mui-input-row">
					<label>电话号码</label>
					<input ref='tel' type="tel" className="mui-input-clear mui-input" placeholder="请输入电话号码"/>
				</div>
				<div className="mui-input-row">
					<label>邮箱</label>
					<input ref='email' type="email" className="mui-input-clear mui-input" placeholder="请输入邮箱"/>
				</div>
                <div className="mui-input-row">
					<label>地址</label>
					<input ref='address' type="text" className="mui-input-clear mui-input" placeholder="请输入地址"/>
				</div>
                <div className="mui-content-padded">
				<button id='reg' className="mui-btn mui-btn-block mui-btn-primary" type="button" onClick={this.gotoregister}>注册</button>
			    </div>
			</form>
		</div> 
        </div>
    )
  }              
}
export default Reg2;
