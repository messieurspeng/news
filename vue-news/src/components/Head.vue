<template>
  <header class="head">
    <a href="javascript: void(0)"><img class="baijia" src="../assets/head/news3.jpg"/></a>
    <div class="tou">京州头条</div>
      <div  class="icon">
        <Icon type="refresh"></Icon>
      </div>
               

  </header>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      imgs: []
    }
  }
}
</script>

<style lang="stylus">
.head{
  width:100vw;
  height: 60px;
  background: #d33f3d;
  position:fixed;
  z-index:1000;
  left:0px;
  top:0;
  img{
    height: 50px;
    position: absolute;
    top: 5px;
  }
  .tou{
    position:absolute;
    font-size:20px;
    color:#fff;
    top:0.25rem;
    left:40%
  }
  .baijia{
    height: 0.7rem;
    top:0.15rem;
    left:0.2rem;
  }
  .baidu{
    right: 30%;
  }
  
}
.icon {
  position:absolute;
  right:0.2rem;
  top:0.3rem
}
.icon .ivu-icon{
  color:#fff;
   font-size:0.5rem
}
</style>
