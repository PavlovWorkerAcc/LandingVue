<template>
 <div class="container_community" >
   
   <div class="content_community">
     
     <div class="description_community" data-aos="fade-right" data-aos-duration="2500">

       <div class="description_community_label">
         <span>Netbook Community</span>
       </div>

       <div class="description_community_banner">
         <span>Your Solution For Community!</span>
       </div>

       <div class="description_community_underBanText">
         <span>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</span>
       </div>

       <div class="description_community_btns">

         <button class="description_community_btn" @click="slideScroll">About More</button>

         <button class="description_community_btn" @click="copyLink" >Invite Friend</button>

         <div class="link_msg_window">
           <span class="link_msg_text">
             Coppied!
           </span>
         </div>
       </div>
     </div>
     
     <div class="image_community" data-aos="fade-left" data-aos-duration="2500">
       <img src="../../img/Iamge.png" loading="lazy">
     </div>
   </div>
 </div>
</template>

<script>
import * as clipboard from "clipboard-polyfill";
export default {
  /* eslint-disable */
  name: "CommunityCH",

  methods:{
    copyLink(){
      let link = window.location.href
      clipboard.writeText(link)
      let msg_window = document.querySelector('.link_msg_window')
      msg_window.style.visibility = 'visible'
      setTimeout(function visible() {
        msg_window.style.visibility = 'hidden'
      } , 2000)
    },
    slideScroll(){
      let about = document.querySelector('.about_container')
      about.scrollIntoView({behavior: 'smooth' ,  block:"center"})
    }
  }
}
</script>

<style scoped lang="scss">

.container_community{
  line-height: 1.5;
  display: flex;
  align-items: center;
  background-color: rgba(33 , 123, 244 , 4%) ;
  margin: 0 auto;
  padding: 125px 0 200px 0 ;
  box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25)); ;
  .content_community{
    display: flex;
    align-items: center;
  }
  .description_community{

    .description_community_label{
      width: 177px;
      height: 36px;
      color: red;
      background-color: rgba(33 , 123, 244 , 20%) ;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      span{
        font-family: 'Inter' , sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 12px;
        color: rgba(33, 123, 244, 1);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
    }
    .description_community_banner{
      margin: 20px auto 20px 0;
      span{
        font-family: 'Inter' , sans-serif;
        font-style: normal;

        font-weight: 700;
        line-height: 66px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        color: #0A093D;
      }
    }
    .description_community_underBanText{

      margin: 0  auto 42px 0 ;
      span{

        font-family: 'Inter' , sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;


        color: #656464;
      }
    }
    .description_community_btns{

      .description_community_btn{
        width: 162px;
        height: 62px;

        background: #217BF4;
        box-shadow: 0px 7px 22px -6px rgba(33, 123, 244, 0.34);
        border-radius: 14px;
        border: none;

        font-family: 'Inter' , sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;


        text-align: center;
        transition: 0.6s;

        color: #FFFFFF;
        &:hover{
          background-color: rgba(33 , 123, 244 , 0%);
          color:rgba(33, 123, 244, 1);
          transition: 0.6s;
          border: 1px solid #217BF4;
        }
      }
      .link_msg_window{
        visibility: hidden;
        width: 140px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        margin-top: 15px;
        left: 190px;
        &::after {
          content: "";
          position: absolute;
          top: -30%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: #555 transparent transparent transparent;
          transform: rotate(180deg);
        }
      }
    }
  }
}
@media screen and (min-width: 1700px) {
  .description_community {
    margin-right: 350px;
  }
}
@media screen and (min-width: 1315px) {
  .description_community_label {
    margin-left: 0;
  }
}
  @media screen and (max-width: 1315px) {
    .description_community {
      text-align: center;
    }
    .content_community {
      display: flex;
      flex-flow: column;
    }
  }
@media screen and (max-width: 740px){
  .image_community{
    margin-top: 50px;
    img{
      width: 95%;
    }
  }
}
@media screen and (min-width: 575px) {
  .description_community {

    .description_community_banner {
      width: 515px;

      span {
        font-size: 56px;
      }
    }

    .description_community_underBanText {
      width: 491px;
    }
  }
}
  @media screen and (max-width: 575px) {
    .description_community_banner {
      span {
        font-size: 34px;
      }
    }
  }
@media screen and (min-width:345px ){
  .description_community_btn{
    &:not(:first-child){
      margin-left: 20px;
    }
  }
}
@media screen and (max-width: 344px){
  .description_community_btns{
    display: flex;
    flex-flow: column;

    .description_community_btn{
      &:not(:last-child){
        margin-bottom: 20px;
      }
    }
  }
}
</style>