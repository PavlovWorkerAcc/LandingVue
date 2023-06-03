<template>
  <div class="about_container"  style="overflow-x: hidden">
    <div class="about_content">

      <div class="about_description" >

        <div class="about_description_label" data-aos="slide-right" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          <span>Whats Netbooks?</span>
        </div>

        <div class="about_description_banner" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="300" data-aos-once="true">
          <span>Why Join to Netbook Social Netwokr?</span>
        </div>

        <div class="about_description_underBantext" data-aos="flip-down" data-aos-duration="2000" data-aos-offset="300" data-aos-once="true">
          <span>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</span>
        </div>

        <div class="about_description_list">
          <ul>
            <li data-aos="fade-right" data-aos-duration="1600" data-aos-once="true">Groups</li>
            <li data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">Message</li>
            <li data-aos="fade-right" data-aos-duration="2400" data-aos-once="true">Share</li>
          </ul>
        </div>
      </div>

      <div class="about_photo_video">

        <div class="about_video" data-aos="flip-left" data-aos-duration="800" data-aos-once="true">

          <video id="player" loading="lazy" playsinline controls data-poster="/path/to/poster.jpg">
            <source style="border-radius: 15px" src="../../assets/PromoVideo.mp4" type="video/mp4" />
            <source style="border-radius: 15px" src="../../assets/PromoVideo.mp4" type="video/webm" />
          </video>

        </div>

        <div class="about_photo" >
          <img src="../../img/AboutFirstImg.png" loading="lazy" alt="" data-aos="flip-up" data-aos-duration="3000" data-aos-once="true">

          <img src="../../img/AboutSecondImg.png" loading="lazy" alt="" data-aos="flip-up" data-aos-duration="3000" data-aos-once="true">
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AboutUs"
}
</script>

<style scoped lang="scss">
$aos-distance: 500px; // It has to be above import
@import '../../../node_modules/aos/src/sass/animations';


  .about_container{
    line-height: 1.5;
    display: flex;
    align-items: center;
    margin: 96px auto 96px auto;

    .about_content{
      display: flex;
      align-items: center;
      .about_description{

        .about_description_label{

          span{
            font-family: 'Inter' , sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 18px;
            color: #217BF4;
          }
        }
        .about_description_banner{

          margin: 10px auto 16px 0 ;
          span{
            font-family: "Inter", sans-serif;
            font-style: normal;
            font-weight: 700;
            line-height: 66px;
            color: #0A093D;
          }
        }
        .about_description_underBantext{
          span{

            font-family: 'Inter' ,sans-serif;
            font-style: normal;
            font-weight: 400;
            line-height: 28px;

            color: #656464;
          }
        }
        .about_description_list{

          ul{
            padding-left: 15px;
            li {
              list-style-position: outside;
              padding-left:10px;


              font-family: 'Inter' , sans-serif;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;


              color: #171648;


              &:not(:last-child){
                margin-bottom: 16px ;
              }
            }
          }
        }
      }
      .about_photo_video{
        display: flex;
        align-items: center;

        .about_photo{
          display: flex;

          img:not(:last-child){
            margin-bottom: 32px ;
          }
        }
        .about_video{
          video{
            border-radius: 15px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1575px){
    .about_description{
      margin-right: 360px;
    }
  }
  @media screen and (max-width: 1575px){
    .about_description{
      margin-right: 30px;
    }
  }
  @media screen and (min-width: 1265px){
    .about_photo{
      flex-flow: column;
    }
    .about_video{
      margin-right: 26px;
    }
  }
  @media screen and (max-width: 1265px){
    .about_photo_video{
      flex-flow: column;
    }
    .about_photo{
      margin-top: 25px;
      img:not(:last-child){
        margin-right: 25px;
      }
    }
  }
  @media screen and (min-width: 1080px){
    .about_description_underBantext{
      margin: 0 auto 36px 0;
    }
  }
  @media screen and (max-width: 1080px ){
    .about_content{
      flex-flow: column;
    }
    .about_description{
      text-align: center;
    }
    .about_description_underBantext{
      margin-bottom: 15px;
    }
    .about_description_list{
      margin: 25px 0;
      ul{
        display: flex;
      }
    }
    .about_description{
      margin:0;
    }
  }
  @media screen and (max-width: 600px){
    .about_photo{
      flex-flow: column;
      img:not(:last-child){
        margin-right: 0;
      }
    }
  }
  @media screen and (max-width: 475px){
    .about_video{

      video{
        height: 175px;
      }
    }
    .about_description_banner {
      span {
        font-size: 34px;
      }
    }
    .about_description_underBantext{
      span{
        font-size: 16px;
      }
    }
  }
  @media screen and (min-width: 475px){
    .about_video{

      video{
        height: 250px;
      }
    }
    .about_description_banner {
      width: 464px;

      span{
        font-size: 46px;
      }
    }
    .about_description_underBantext{
      width: 380px;

      span{
        font-size: 16px;
      }
    }
  }
</style>