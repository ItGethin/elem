import React, { Component } from 'react';
import Header from "../Header";
import {Link} from "react-router-dom";
import axios from "axios";
import "../../static/css/mui.min.css";

class Reg1 extends Component {
    constructor(props){
        super(props);
        this.gotoregister = this.gotoregister.bind(this);
        this.suijishu = this.suijishu.bind(this);
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
        this.refs.yanzheng.value = str;
        console.log(this.refs);
        this.refs.submit.style.background = "#0094ff";
        this.refs.submit.style.color = "#fff";
        return str;
    }
    gotoregister(){
        console.log(0);
        
        // this.refs.yanzheng.value = this.suijishu();
        // if(this.refs.account.value==this.refs.yanzheng.value){
        //     // console.log(this.refs.yanzheng.value);
        //     // console.log(this.refs.account.value);
        //      window.location.href = "reg2";
        // }else{
        //     console.log("验证码不正确，请重新输入");
        // }
    }
  render() {
    return (
        <div>
            <Header title="注册" url="/"/>
            <div className="hasheight-top"></div>
            <div className="yanzheng">
                <input type="text" ref="account" className="yanzhengma-left" placeholder="请输入验证码"/>
                <input type="text" ref="yanzheng" className = "yanzhengma"  onClick={this.suijishu} placeholder="点击获取验证码"/>
                <button onClick = {this.gotoregister} ref="submit" className="yanzhengbutton">下一步</button>
            </div>
           
        </div>
    )
  }              
}
export default Reg1;
