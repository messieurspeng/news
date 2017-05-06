<template>
  <div class="live">
   <div class="liveData" v-for="item in newData">
      <div class="Img">
	      <img v-lazy='item.imageurls' :src="item.imageurls" />
	      <h3 class="Imgleft">{{item.title}}</h3>
      </div>
      <span class="desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.desc}}</span>
      <span class="Imgright">{{item.pubDate}}</span>
   </div>
  </div>
</template>
<script>
export default {
  name: 'live',
  data () {
    return {
      newData: [],
      page: 1,
      newsUrl: 'http://route.showapi.com/109-35?showapi_appid=37211&showapi_sign=19243867e4c74725b779bbcb2278ae17&channelId=&channelName=&title=%E7%94%9F%E6%B4%BB&page=1&needContent=0&needHtml=1&needAllList=0&maxResult=20&'
    }
  },
  created () {
    this.requestData(this.newsUrl + this.page)
  },
  methods:{
  	setNewSrc(url){
  		return url
  	},
  	requestData(url){
  		let self = this
	    self.$axios({
	      method: 'get',
	      url: url
	    })
	    .then(function (res) {
	      self.newData = res.data.showapi_res_body.pagebean.contentlist
	      
	    })
  	}	
  }
}
</script>
<style lang="">
    .live{
        width:100vw;
        background:#fff;
        
    }
    .live .liveData{
       width:100%;
       padding:10px;
       margin-bottom: 1.5rem;
    }
    .liveData .Img{
     width:90%;
     height:30px;
     line-height:30px
    }
    .desc{
    	text-align: left;
    	display: block;
    	margin-top:10px ;
    }
    .liveData .Img img{
      float:left;
      width:30px;
      height:30px
    }
    .liveData .Img .Imgleft{
        margin-left:10px;
    }
    .liveData .Imgright{
        color:#ccc;
        float:right;
        margin-top:0.3rem ;
    }
    .liveData h3{
        margin:0;
        padding:0;
        height:30px;
        margin-top:6px;
        font-size:14px
    }
    @import "https://cdn.bootcss.com/semantic-ui/2.2.10/semantic.min.css";
</style>


