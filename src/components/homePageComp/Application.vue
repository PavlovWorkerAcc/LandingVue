<template >
  <div class="appl_container"  style="overflow-x: hidden">
    <div class="appl_content">
      <div class="appl_description">
        <div class="appl_description_label"  data-aos="fade-right" data-aos-duration="3000" data-aos-offset="150" data-aos-once="true">
          <span>Get Our Aplication</span>
        </div>

        <div class="appl_description_banner" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="170" data-aos-once="true">
          <span>You Can Easily Find This App…!</span>
        </div>

        <div class="appl_description_underBanText" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="200" data-aos-once="true" >
          <span>I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</span>
        </div>

        <div class="appl_description_btns">

          <a href="https://www.apple.com/ua/app-store/"><img src="../../img/download_btn/image288.png" alt="" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="230" data-aos-once="true"></a>
          <a href="https://play.google.com/store/apps?hl=ru&gl=US&pli=1"><img src="../../img/download_btn/image289.png" alt="" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="230" data-aos-once="true"></a>

        </div>
        
      </div>
      
      <div class="appl_photo" data-aos="fade-right" data-aos-duration="3000" data-aos-offset = '200' data-aos-once="true" data-aos-anchor-placement="top-center">
        <img src="../../img/MaskGroup.png" alt="">
      </div>
    </div>
  </div>
</template >

<script>
export default {
  name: "Application-item",
}
</script>

<style scoped lang="scss">
.appl_container {
  line-height: 1.5;
  display: flex;
  align-items: center;
  padding: 125px 0 0 0 ;
  margin-bottom: 100px;
  background: #E5F0FD;

  .appl_content {
    display: flex;
    align-items: center;

    .appl_description {


      .appl_description_label {

        span {
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 18px;
          margin: 0;
          /* identical to box height, or 100% */

          color: #217BF4;
        }
      }

      .appl_description_banner {


        span {
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 700;
          line-height: 48px;
          font-size: 36px;
          /* or 133% */

          color: #0A093D;
        }
      }

      .appl_description_underBanText {


        span {

          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 175%;

          /* or 175% */

          color: #656464;


        }
      }

      .appl_description_btns {
        display: flex;
        align-items: center;

      }
    }

    .appl_photo{

      img{
        position: relative;
        top: 5px;
      }
    }
  }
}
@media screen and (min-width: 1750px) {
  .appl_photo {
    margin-left: 350px
  }
}
@media screen and (min-width: 1401px){
  .appl_description{
    margin-left: 250px;
  }

}
@media screen and (max-width: 1400px){
  .appl_content{
    flex-flow: column;
  }
  .appl_description{
    text-align: center;
  }
  .appl_description_banner{
    width: 351px;
    margin: 10px 36px 18px 36px;
  }
  .appl_description_underBanText{
    width: 340px;
    margin: 0 36px 36px 36px;
  }
  .appl_description_btns{
    margin-left: 50px;
  }
}
@media screen and (max-width: 950px){
  .appl_photo{
    text-align: center;

    img{
      width: 95%;
    }
  }

}
@media screen and (min-width: 411px) {
  .appl_description_banner{
    width: 351px;

  }
  .appl_description_underBanText{
    width: 340px;

  }
  .appl_description_btns{
    a{
      position: relative;
      right: 30px;
    }
  }
}
@media screen and (max-width: 410px) {
  .appl_description_banner{
    width: 250px;
    margin: 10px auto 18px 36px;
  }
  .appl_description_underBanText{
    width: 240px;
  }
  .appl_description_btns{
    flex-flow: column;
  }
  .appl_description_btns{
    margin-left: 0;
  }
  .appl_photo{
    margin-top: 50px;
  }
}
</style>