<template>  
	<div class="login_bg" >
		<div class="lr dsb">
			<button class="login_btn btn_l" type="submit">登&nbsp;&nbsp;录</button>
			<button class="login_btn btn_r" type="submit">注&nbsp;&nbsp;测</button>
		</div>
		<div class="Login_end dsn">
			<h1>欢迎登录</h1>
		</div>
	    <div class="login dsn">
	    	<div id="logo">
		        <img  src="http://demo.mycodes.net/shouji/app_demo/images/logo.png">
		    </div>
		    <form action="">
		        <div class="userName">
		            <span>用户名：</span>
		            <input id="userName_l" type="text" name="name" placeholder="请输入用户名" pattern="[0-9A-Za-z]{6,16}" >
		        </div>
		        <div class="passWord">
		            <span>密&nbsp;&nbsp;&nbsp;码：</span>
		            <input id="password_l" type="password" name="password" placeholder="请输入密码" pattern="[0-9A-Za-z]{6,25}">
		        </div>
		        <div class="choose_box">
		            <div>
		                <input type="checkbox" checked="checked" name="checkbox">
		                <span>记住密码</span>
		            </div>
		            <a href="#">忘记密码</a>
		        </div>
		        <button class="login_btn Login">登&nbsp;&nbsp;录</button>
		        <div class="fan" style="background:#e0ebf4;position: absolute;top: 15vh; left: 4vw;">返  回</div>
		    </form>
		    <div class="other_login">
		        <div class="other"></div>
		        <span>其他方式登录</span>
		        <div class="other"></div>
		    </div>
		    <div class="other_choose">
		        <a href="#user">
		            <img alt="" src="http://demo.mycodes.net/shouji/app_demo/images/qq.png">
		        </a>
		        <a href="#user">
		            <img alt="" src="http://demo.mycodes.net/shouji/app_demo/images/wx.png">
		        </a>
		        <a href="#user">
		            <img alt="" src="http://demo.mycodes.net/shouji/app_demo/images/wb.png">
		        </a>
		    </div>
	    	
	    </div>
	    
	    
	    
	   	<div class="content dsn">
	        <div class="point">
	            <span>注册成功后，手机号也可为登录账号。</span>
	        </div>
	        <form action="">
	            <div class="message">
	                <input id="userName" type="tel" placeholder="输入手机号" pattern="[0-9]{11}" title="请输入正确的手机号">
	                <input id="password" type="password" placeholder="请输入6-25位密码" pattern="[0-9A-Za-z]{6,25}" title="请输入6-25位密码">
	                <input id="password1" type="password" placeholder="请再次输入密码" pattern="[0-9A-Za-z]{6,25}" title="输入的内容不一致">
	            </div>
	            <div class="agree">
	                <input type="checkbox"><span>&nbsp;同意&nbsp;</span><a href="">《注册协议》</a>
	            </div>
	            <button class="submit">注册</button>
	        </form>
	        <div class="fan" style="background:#e0ebf4;position: absolute;top: 12vh; left: 4vw;">返回</div>
	    </div>
	</div>
	
	
	
</template>
<script>
import jQuery from "../assets/js/jquery.min"
window.jQuery = window.$ = $;
export default {
	name: 'user',
	mounted:function(){
		$(".lr .btn_l").click(function () {
		    $(".lr" ).addClass("dsn")
		    $(".login").removeClass("dsn");
		})
		$(".lr .btn_r").click(function () {
		    $(".lr" ).addClass("dsn")
		    $(".content").removeClass("dsn");
		})
		$(".fan").click(function () {
		    $(".lr").removeClass("dsn")
		    $(".content").addClass("dsn");
		    $(".login").addClass("dsn");
		})
		$(".submit").click(function(){
			var re1 = /[a-z0-9]{6,18}/
			if(re1.test($("#userName").val()) == false || $("#userName").val() == ""){
	             
	               alert("账号：请输入6~18位字符")
	       		return
	       	}
			if(re1.test($("#password").val()) == false || $("#password").val() == ""){
	               
	               alert("密码：请输入6~18位字符")
	       		return
	       	}
			if($("#password").val() !=  $("#password1").val()){
                alert("两次输入的密码不一致")
                return
	       	}
			
			var userName = $("#userName").val()
			var password = $("#password").val()
	                
	          	$.ajax({
	              	type:"get",
	              	url:"http://datainfo.duapp.com/shopdata/userinfo.php",
	              	async:"true",
	              	data:{status:"register",userID:userName,password:password },
	              	success:(function(data){
	                  	if(data == 0){
	                   	    
	                   	    alert("用户重名了，请重新输入用户名")
	                  	}else if(data == 1){
	                   	    alert("恭喜，注册成功")
		    				$(".login").removeClass("dsn");
		    				$(".content").addClass("dsn");
	                   	}
	              	})
	          	})
		})
		$(".Login").click(function(){
			var userName =  $("#userName_l").val()
        	var password = $("#password_l").val()
        	if( userName == "" || password == ""){
	            alert("请输入账号和密码")
	            return
	        }
        	$.ajax({
             	type:"post",
             	url:"http://datainfo.duapp.com/shopdata/userinfo.php",
              	async:"true",
              	data:{status:"login",userID:userName,password:password },
             	success:(function(data){
                  
                 	var data1 = $.parseJSON(data)
                  	console.log(data1.userID)
                  	if(data1.userID == userName ){
                  		alert("登陆成功")
                   	$(".login").addClass("dsn");
                   	$(".Login_end").removeClass("dsn");
                  	}
					else if(data == 0){
                   	    alert("用户名不存在")
                  	}else if(data == 2){
                    	  alert("用户名密码不符")
                  	}
              	})
          	})
		})
		
	}
}

</script>
<style scoped>

.login_bg{
	height: 85vh;
    width:100%;
    min-height: 100%;
    text-align: center;
    background: #e0ebf4;
    opacity: 0.9;
}
#logo{
    margin: 0 auto;
    width: 30.25%;
}
img{
    width: 100%;
}
form{
    width: 80%;
    margin: 0 auto;
    text-align: left;
}
form div.userName,form div.passWord{
    border: 1px solid #c1c1c1;
    padding:3.5% 0 4% 3%;
    height: 22%;
    background: #ffffff;
}
form div.userName{
    border-bottom:0;
    -webkit-border-top-left-radius: 0.45em;
    -webkit-border-top-right-radius: 0.45em;
    -moz-border-radius-topleft: 0.45em;
    -moz-border-radius-topright: 0.45em;
    border-top-left-radius: 0.45em;
    border-top-right-radius: 0.45em;
}
form div.passWord{
    -webkit-border-bottom-left-radius: 0.45em;
    -webkit-border-bottom-right-radius: 0.45em;
    -moz-border-radius-bottomleft: 0.45em;
    -moz-border-radius-bottomright: 0.45em;
    border-bottom-left-radius: 0.45em;
    border-bottom-right-radius: 0.45em;
}
form div.userName input,form div.passWord input{
    width: 68%;
    height: 80%;
    border:none;
    background: transparent;
    font-size: 1em;
    font-family: "Microsoft YaHei";
    color: #b3b3b3;
    letter-spacing: 1px;
    padding-left: 2px;
}
.choose_box{
    height: 4.5em;
    line-height: 4.5em;
    padding: 0 5px;
}
.choose_box div{
    float: left;
}
.choose_box a{
    float: right;
}
.login_btn{
    width: 90%;
    display: block;
    padding:3% 0 ;
    background: #ffffff;
    border: 0;
    font-size: 1em;
    font-family: "Microsoft YaHei";
    color:#374782;
    -webkit-box-shadow: #8f9bad 0px 0px 20px;
    -moz-box-shadow: #8f9bad 0px 0px 20px;
    box-shadow: #8f9bad 0px 0px 20px;
    text-align: center;
    margin: auto;
}
.lr{
	
	margin: 10 auto;
	padding-top: 30vh;
}
.lr .login_btn{ 
	
	margin-bottom:5vh ;
}
.other_login{
    width: 80%;
    height: 15px;
    position: absolute;
    top:75%;
    margin: 0 10%;
}
.other_login .other,.other_login span{
    display: inline-block;
    vertical-align: middle;
}
.other_login .other{
    width: 28%;
    height: 8px;
    border-bottom:1px solid #2f2c59;
}
.other_login span{
    width:40%;
}
.other_choose{
    width: 74%;
    top:83.5%;
    position: absolute;
    margin: 0 13%;
}
.login_bg .other_choose a{
    display: block;
    float: left;
    border: 2px solid #505887;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
}
.other_choose a:nth-child(2) {
    left:42%;
}
.other_choose a:nth-child(3) {
    left:80%;
}
.other_choose a img{
    width: 60%;
    padding: 14% 0;
}


.point{
    padding: 6% 5%;
}
.content form input:not(:nth-child(6)){
    border: 0;
    border-bottom: 1px solid #c3c3c5;
}
.content form{
    width: 100%;
    height: 35.21%;
}
.message{
    background: #ffffff;
    padding:2% 5% 0 5%;
    position: relative;
}
.message input{
    width: 90%;
    padding: 4% 0 4% 10%;
    font-size: 0.875em;
    font-family: "Microsoft YaHei";
}
.message .icons b{
    position: absolute;
    width: 3.75%;
    height: 4%;
    top: 7%;
    left: 7%;
}
.message .icons b img{
    width: 100%;
}
.message .icons b:nth-child(2){
    width: 5%;
    top: 26%;
    left: 6%;
}
.message .icons b:nth-child(3){
    top: 43%;
}
.message .icons b:nth-child(4){
    top: 61%;
}
.code{
    position: absolute;
    top: 60%;
    right:10%;
    color: #21a9f5;
    font-size: 0.875em;
    font-family: "Microsoft YaHei";
}
select{
    width: 33%;
    padding: 2% 1%;
    margin: 5%;
    font-size: 1em;
    color: #909093;
    border: solid 1px #909093;
    font-family: "Microsoft YaHei";
}
.agree{
    margin: 6% 5%;
}
.submit{
    width: 84%;
    margin: 2% 8%;
    background: #21a9f5;
    color: #ffffff;
    border: 0;
    padding: 3.25% 0;
    font-size: 1em;
    font-family: "Microsoft YaHei";
}
form .agree input[type="checkbox"] :default{
    outline: 2px solid #21a9f5;
}

.dsb{
	display: block !important;
}
.dsn{
	display: none !important;
}


</style>
