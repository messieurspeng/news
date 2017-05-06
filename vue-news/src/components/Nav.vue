<template>
  <section class="nav">
    <!--v-for遍历路由-->
    <Menu mode="horizontal" :theme="theme1" active-name="1" class="navlist">
        <Menu-item name="1">
               <Icon type="eye"></Icon>
               <router-link  to="/select">头条</router-link>
       </Menu-item>
        <Menu-item name="2">
                <Icon type="flame"></Icon>
                <router-link  to="/point">热点</router-link>
       </Menu-item>
        <Menu-item name="3">
                <Icon type="speakerphone"></Icon>
                <router-link  to="/author">娱乐</router-link>
        </Menu-item>
        <Menu-item name="4">
         <Icon type="social-dribbble-outline"></Icon>
                <router-link  to="/hot">体育</router-link>
        </Menu-item>
        <Menu-item name="5">
                <Icon type="social-vimeo"></Icon>
                <router-link  to="/other">其他</router-link>
        </Menu-item>
        </Menu>
        <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'nav',
  data () {
            return {
                theme1: 'dark'
            }
        }
}
</script>

<style lang="stylus" scoped>
.nav{
  width: 100vw;
  height: 1.0rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
.nav .ivu-menu-dark{
  z-index:100;
  position:fixed;
  left:0;
  top:1.0rem;
  width:100vw;
  height:0.7rem;
  background:#ccc
}
.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu{
  height:0.7rem;
  padding:0 13px !important
}
.ivu-menu-horizontal{
  line-height:0.7rem;
}
.ivu-menu-horizontal .ivu-menu-item a{
  color:#000
}
.ivu-menu-horizontal .ivu-menu-item a:hover{
  color:#f00
}
</style>
