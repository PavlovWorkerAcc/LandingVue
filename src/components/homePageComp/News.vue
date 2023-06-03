
<template>
  <div class="news_container"  style="overflow-x: hidden">
    <div class="news_content">

      <div class="news_heading">

        <div class="news_label" data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="450" data-aos-once="true">
            <span>Always be aware of events</span>
        </div>
        <div class="news_banner" data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="470" data-aos-once="true">
            <span>Latest News</span>
        </div>

      </div>

      <div class="news_items">

        <div class="news_item" data-aos="flip-left" data-aos-duration="1000" data-aos-offset="500" data-aos-once="true" v-for="item in PageContent" :key="item">

          <div class="news_item_photo">
            <img :src="item.logo"  loading="lazy" alt="">
          </div>

          <div class="news_item_label">
            <div class="news_item_label_container">
              <span class="line"></span>
              <span class="text">{{ item.PageLabel }}</span>
            </div>

          </div>

          <div class="news_item_link">
            <span><router-link :to="`/Page/${item.PageLabel}`" :key="item" :item="item" >Continue Reading ➜</router-link></span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import page from "@/components/NewsPage/Page.vue";
export default {
  name: "News-item",

  data: () => {
    return {

      page: page,
      PageContent: [
        {
          PageLabel: "We Optimised Netbooks Better Navigation",
          logo: "https://i.ibb.co/RjMpYNY/Image.png"
        },
        {
          PageLabel: "Netbook Network Added New Photo Filter",
          logo: 'https://i.ibb.co/NVGYtCW/Image-1.png'
        },
        {
          PageLabel: "It Does Not Matter Hows Slowly go as Long",
          logo: 'https://i.ibb.co/M7ZytNs/Image-2.png'
        },
      ],
    }
  },
  components: page
}
</script>

<style scoped lang="scss">
 .news_container {
   line-height: 1.5;
   display: flex;
   align-items: center;
   margin: 0 auto;
   padding: 125px 0 165px 0;

   .news_content {
     display: flex;
     flex-flow: column;

     .news_heading {
       text-align: center;
       margin-bottom: 80px;

       .news_label {
         margin-bottom: 10px;

         span {
           font-family: 'Inter', sans-serif;
           font-style: normal;
           font-weight: 500;
           font-size: 18px;
           line-height: 18px;

           /* identical to box height, or 100% */

           color: #217BF4;
         }
       }

       .news_banner {

         span {
           font-family: 'Inter', sans-serif;
           font-style: normal;
           font-weight: 700;
           font-size: 36px;
           line-height: 36px;

           /* identical to box height, or 100% */
           text-align: center;

           color: #0A093D;
         }
       }
     }

     .news_items {
       display: flex;
       align-items: center;


       .news_item_label {
         width: 273px;
         .news_item_label_container{
           display: flex;
           .text {
             font-family: 'Inter', sans-serif;
             font-style: normal;
             font-weight: 600;
             font-size: 20px;
             line-height: 32px;

             /* or 160% */

             color: #2F2C4A;
           }
           .line{
             position: relative;
             top: 15px;
             right: 10px;
             width: 50px;
             height: 0px;

             border: 1px solid #FFAF2E;
           }
         }
       }
       .news_item_link{

         span{
            
           a{
             font-family: 'Inter' , sans-serif;
             font-style: normal;
             font-weight: 400;
             font-size: 16px;
             line-height: 16px;

             /* identical to box height, or 100% */
             text-align: center;
             text-decoration: none;
             color: #656464;
             transition: 0.5s;

             &:hover{
               transition: 0.5s;
               line-height: 18px;
               font-size: 18px;
               color: #217BF4;
             }
           }
         }
       }
     }
   }
 }
 @media screen and (min-width: 1225px){
   .news_item:not(:first-child){
     margin-left: 75px;
   }
   .news_item_label{
     margin:25px 0 ;
   }
   .news_item_link{

     span{
       position: relative;
       left: 30px;
     }
   }
 }
 @media screen and (max-width: 1225px) {
   .news_items{
     flex-flow: column;
     text-align: center;
   }
   .news_item:not(:last-child){
     margin-bottom: 25px;
   }
   .line{
     display: none;
   }
   .news_item_label{
     margin: 15px auto;
   }
 }

 @media screen and (max-width: 360px) {
   .news_item_photo{
     img{
       width: 85%;
     }
   }
 }
</style>