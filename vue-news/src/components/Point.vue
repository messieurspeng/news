<template>
  <section class="point" v-if="loading">
   <div class="banner">
        <swiper :options="swiperOption"  ref="mySwiper">
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide v-for='img in banner' :key="img.channelId">
          <img :src="img"/>
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div  class="swiper-pagination" slot="pagination"></div>
      </swiper>
   </div>
    <!--加载动画-->
    <div class="spinner" v-show='loadAnimation'></div>
    <div class="news">
      <div v-for="item in newData" class="loop">
        <a @click="getdata(item.channelId)" :data-index="item.channelId" href="javascript:;" class="new">
         <img :src="item.imageurls[0].url"/>
         <div class="intro">
          <h3>{{item.title}}</h3>
          <p class="time"><span>{{item.source}}</span> | <span>{{item.pubDate}}</span></p>
         </div>
        </a>
      </div>
    </div>
    <div class="detail">
        <div class="detailData"></div>
        <button @click="goback">返回继续浏览</button>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Iscroll from 'iscroll'

export default {
  name: 'point',
  data () {
            return {
                newData: [],
                banner:[],
                loadAnimation: true,
                   swiperOption: {
                    // autoplay:1000,
                    pagination: '.swiper-pagination',
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    paginationClickable: true,
                    spaceBetween: 30,
                },
                loading:true
           }
        },
     created(){
      let self = this
      self.$axios({
          method:'get',
          url: 'http://route.showapi.com/109-35?showapi_appid=34477&showapi_sign=cfa5957a730f43d38886bd16469b2a86&channelId=&channelName=&title=热点&page=1&needContent=0&needHtml=1&needAllList=0&maxResult=20&'
      }).then(function(res){
          let data = res.data.showapi_res_body.pagebean.contentlist
          console.log(data)
         if (data.length > 2) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].imageurls[0]) {
                    self.newData.push(data[i])
                    }
           }
          for (let i = 0; i < 4; i++) {
            if (self.banner.length < 4) {
              self.banner.push(self.newData[i].imageurls[0].url)
            }
          }
          // 数据请求成功显示加载更多按钮
        }
         self.loadAnimation = false
      })
 },
 methods:{
     setBannerSrc(url){
         return url
     },
     getdata (x) {
      var detailurl = 'http://route.showapi.com/109-35?showapi_appid=34477&showapi_sign=cfa5957a730f43d38886bd16469b2a86&channelId=' + x + '&channelName=&title=热点&page=1&needContent=0&needHtml=0&needAllList=0&maxResult=20&'
      let self = this
      self.$axios({
        method: 'get',
        url: detailurl
      })
      .then(function (data) {
         $('.banner').css({display: 'none'})
        $('.news').css({display: 'none'})
        $('.detail').css({display: 'block'})
        var detaildata = data.data.showapi_res_body.pagebean.contentlist[0]
        console.log(detaildata)
        var str = `
                    <h1 class="biao">${detaildata.title}</h1>
                    <div class="de"><span class="detime">${detaildata.pubDate}</span><span class="descore">来源：${detaildata.source}</span></div>
                    <img class="url" src="${detaildata.imageurls[0].url}"/>
                    <span class="xiang">${detaildata.desc}</span>
                    <a class="link" href="${detaildata.link}">浏览原网页</div>
                  `
        $('.detailData').html(str)
      })
    },
    goback () {
      $('.banner').css({display: 'block'})
      $('.detail').css({display: 'none'})
      $('.news').css({display: 'block'})
    }
  },
 components: {
    swiper,
    swiperSlide
  }
 }

</script>

<style lang="stylus" scoped>

.point{
  position:absolute;
  left:0;
  top:1.8rem;
  color: #fff;
  background: #fff;
  margin-bottom:1rem
}
.swiper-wrapper{
    height: 3.5rem;
}
.swiper-slide img{
    width: 100%;
    height: 3.5rem;
}
.swiper-pagination .swiper-pagination-clickable .swiper-pagination-bullets{
    display:block !important
}
.news{
    margin:0 10px;
}

.detail .biao{
  font-size:0.2rem !important;
  text-indent:0.4rem !important
}
.new{
    display:block;
    width:100%;
    height:100px;
    padding:10px 0;
    border-bottom:1px solid #ccc
}
.new img{
    float:left;
    width:1.5rem;
    height:80px
}
.new .intro{
    position:relative;
    padding:0 8px;
    color:#000;
    width:4.3rem;
    float:left
}
.new .intro h3{
    text-indent:0.1rem;
    font-size:0.25rem
}
.new .intro .time{
    position:absolute;
    left:0.1rem;
    top:1rem
}
/*加载动画*/
.spinner {
  position: fixed;
  left: 40%;
  bottom: 10%;
  width: 80px;
  height: 80px;
  margin: 50px auto;
  background-color: #69C61D
  border-radius: 100%; 
  -webkit-animation: scaleout 1.0s infinite ease-in-out;
  animation: scaleout 1.0s infinite ease-in-out;
}
 
@-webkit-keyframes scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
 
@keyframes scaleout {
  0% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
</style>



