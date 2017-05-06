<template>
  <div id="app">
    <div class="page">
      <app-head></app-head>
      <router-view></router-view>
       <footer class="foot">
       <Menu mode="horizontal" :theme="theme1" active-name="1">
        <Menu-item name="1">
               <Icon type="home"></Icon>
                <router-link class="linka" to="/">新闻</router-link>
       </Menu-item>
        <Menu-item name="2">
                <Icon type="ios-videocam"></Icon>
                <router-link class="linka" to="/video">视频</router-link>
       </Menu-item>
        <Menu-item name="3">
                <Icon type="ios-heart"></Icon>
                <router-link class="linka" to="/live">关注</router-link>
        </Menu-item>
         <Menu-item name="4">
                <Icon type="person"></Icon>
                <router-link class="linka" to="/user">我的</router-link>
         </Menu-item>
        </Menu>
       </footer>
    </div>
  </div>
</template>

<script>
import AppHead from '@/components/Head'
import AppNav from '@/components/Nav'
export default {
  name: 'app',
  components: {
    'app-head': AppHead,
    'app-nav': AppNav
  },
  data () {
     return {
          theme1: 'light'
      }
  }
}
</script>

<style lang="stylus">
html{
  font-size:15.625vw !important;
}
body{
  font-size:12px !important;
}
.page{
  position: relative;
  z-index: 99;
  transition: all 0.5s;
}
.toggle{
  transform: translateX(-120px);
}
.foot{
  background:#fafafa;
  position:fixed;
  left:0;
  bottom:0;
  height:1rem;
  width:100vw;

}
.foot ul{
  border-top:1px solid #ccc;
  border-radius:3px;
  width:100%
}
.foot ul li{
  text-align:center;
  padding:0!important;
  width:25%
}
.linka {
  color:#333
}
.detail{
    margin-bottom:1rem;
    min-height:5rem;
    color:#000;
    width:97vw;
    padding:5px;
    display:none;
}
.detail .biao{
  display:block;
  font-size:0.3rem ;
  text-indent:0.4rem;
  hieght:1rem;
  width:100vw
}
.detail .de .detime{
  float:left
}
.detail .de .descore{
  float:right;
  font-size:0.12rem
}
.detail img{
  width:95vw;
  height:20%;
}
.detail .xiang{
  display:block;
  text-indent:0.25rem;
}
</style>
