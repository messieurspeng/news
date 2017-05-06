<template>
  <div class="video">
   <div class="videoData" v-for="item in newData">
      <div class="Img"><img :src="item.profile_image"/><span class="Imgleft">{{item.name}}</span><span class="Imgright">{{item.create_time}}</span></div>
      <h3>{{item.text}}</h3>
      <video width="320" height="200" controls>
       <source :src="item.video_uri" type="video/mp4">
      </video>
   </div>
  </div>
</template>
<script>
export default {
  name: 'video',
  data () {
    return {
      newData: []
    }
  },
  created () {
    let self = this
    self.$axios({
      method: 'get',
      url: 'http://route.showapi.com/255-1?showapi_appid=37094&showapi_sign=baa05a09806b4c61bb04f3227cfeadb7&type=&title=&page=&'
    })
       .then(function (res) {
        self.newData = res.data.showapi_res_body.pagebean.contentlist
       })
  }
}
</script>
<style lang="">
    .video{
        width:100vw;
        background:#fff;
        margin-top:60px
        
    }
    .video .videoData{
       width:100%;
       padding:10px
    }
    .videoData .Img{
     width:90%;
     height:30px;
     line-height:30px
    }
    .videoData .Img img{
      float:left;
      width:30px;
      height:30px
    }
    .videoData .Img .Imgleft{
        margin-left:10px;
        float:left
    }
    .videoData .Img .Imgright{
        color:#ccc;
        float:right
    }
    .videoData h3{
        margin:0;
        padding:0;
        height:30px;
        margin-top:6px;
        font-size:14px
    }
</style>
