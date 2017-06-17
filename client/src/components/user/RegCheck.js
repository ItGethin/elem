import React, { Component } from 'react';
import Header from "../Header";
import axios from "axios";
import "../../static/css/mui.min.css";


class Reg extends Component {
    constructor(props){
        super(props);
        this.checknum = this.checknum.bind(this);
        this.checkexist = this.checkexist.bind(this);
        this.isReg = false;
    }
    checknum(){
        if(this.state.isReg){
             window.location.href = "reg1";
             this.refs.regbutton.style.background = "#0094ff";

        }else{
            this.refs.regbutton.style.background = "#ccc";
            return;
        }
    }
    checkexist(){
        var tel = this.refs.account.value;
        axios.post("http://localhost:3010/api/regphone",{"tel":tel})
            .then(function(res){
                console.log(res);
                // console.log(JSON.parse(JSON.stringify(res)));
                if(res.data.result.code==0){
                    //已注册
                    alert(res.data.result.msg); 
                }else{
                    this.setState({
                        isReg :true
                    })
                    localStorage.setItem("register",tel);
                }
            }.bind(this))
            .catch(function(err){
                console.log(err);
            });
    }
  render() {
    return (
        <div>
            <Header title="注册" url="/"/>
            <div className="hasheight-top"></div>
            <div className="mui-content">
			<form className="mui-input-group">
				<div className="mui-input-row">
					<input ref='account' type="text" className="mui-input-clear mui-input" placeholder="请输入您的手机号" onBlur={this.checkexist}/>
				</div>
                <button onClick={this.checknum} ref="regbutton" className="getyanzhengma">获取验证码</button>
			</form>
		</div> 
        </div>
    )
  }              
}
class Reg1 extends Component {
    constructor(props){
        super(props);
        this.checknum = this.checknum.bind(this);
    }
    suijishu(){
        var str = "";
        for(var i=0;i<4;i++){
            if(parseInt(Math.random()*10)%2==0){//数字
                str += parseInt(Math.random()*10);
            }else{//字母
                str += String.fromCharCode(65+Math.random()*26);
            }
        }
        return str;
    }
    checknum(){
        this.refs.yanzheng.value = this.suijishu();
        if(this.refs.account.value==this.refs.yanzheng.value){
             window.location.href = "reg2";
        }
    }
  render() {
    return (
        <div>
            <Header title="注册" url="/"/>
            <div className="hasheight-top"></div>
            <div className="mui-content">
			<form className="mui-input-group">
				<div className="mui-input-row">
					<input ref='account' type="text" className="mui-input-clear mui-input" placeholder="请输入验证码"/>
				</div>
				<input onClick={this.checknum} ref="yanzheng">验证码</input>
                <div className="mui-content-padded">
				<button id='reg' className="mui-btn mui-btn-block mui-btn-primary" type="button" onClick={this.gotoregister}>注册</button>
			    </div>
			</form>
		</div> 
        </div>
    )
  }              
}
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
        console.log(`${username}--${password}--${tel}----${address}---${email}`);
        axios.post("http://127.0.0.1:3001/users/registerPost",{
            username,
            password,
            tel,
            address,
            email
        }).then(function(data){
            console.log(data);
            if(data.data.code==1){
                window.location.href = "login";
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }
  render() {
    return (
        <div>
            <Header title="注册" url="/"/>
            <div className="hasheight-top"></div>
            <div className="mui-content">
			<form className="mui-input-group">
				<div className="mui-input-row">
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
export default Reg;
