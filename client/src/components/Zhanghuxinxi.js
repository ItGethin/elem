import React, { Component } from 'react';
import Header from "./Header";
import "../static/css/mui.min.css";
import "../static/font/iconfont.css";
import "../static/css/me.css";

class Zhanghuxinxi extends Component {
  render() {
    return (
                <div>
               <Header title="我的"/>
               <div class="mui-content">
		    <section class="maincontent">
		    	<ul>
		    		<li>
		    			<span>头像</span>
		    			<span>
		    				<img src="images/find2.webp" alt="" />
                            <i className="iconfont icontranslate icon-arrowleft"></i>
		    			</span>
		    		</li>
		    		<li>
		    			<span>用户名</span>
		    			<span>hgfh65y765</span>
		    		</li>
		    	</ul>
		    </section>
		    <h2>账号绑定</h2>
		    <section class="maincontent">
		    	<ul>
		    		<li>
		    			<span>
                            <i className="iconfont phone icon-phone"></i>
		    				手机</span>
		    			<span>hgfh65y765
                            <i className="iconfont icontranslate icon-arrowleft"></i>
                            
                            </span>
		    		</li>
		    	</ul>
		    </section>
		    <h2>安全设置</h2>
		    <section class="maincontent">
		    	<ul>
		    		<li>
		    			<span>
		    				登录密码</span>
		    			<span>未设置
                            <i className="iconfont icontranslate icon-arrowleft"></i>
		    			</span>
		    		</li>
		    	</ul>
		    </section>
		    
		    
		</div>
                </div>
   
    );
  }
}

export default Zhanghuxinxi;
