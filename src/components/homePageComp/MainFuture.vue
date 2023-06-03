<template>
  <div class="Feature_container"  style="overflow-x: hidden">
    <div class="Feature_content">
      <div class="Feature_heading">
        <div class="Feature_heading_label" data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="450" data-aos-once="true">
            <span>Our Community</span>
        </div>
        <div class="Feature_heading_banner" data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="500" data-aos-once="true">
          <span>Community Main Feature</span>
        </div>

        <div class="Feature_heading_UnderBanText" data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="520" data-aos-once="true">
          <span>The wise man therefore always holds in these matters to this principle of selection.</span>
        </div>
      </div>

      <div class="Feature_cards">

        <div class="Feature_cards_left">

          <div class="Feature_cards_card" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="250" data-aos-once="true">

            <div class="Feature_cards_card_logo">
              <img src="../../img/featureicons/Icon.png" loading="lazy" alt="">
            </div>

            <div class="Feature_cards_card_info">
              <span class="Feature_cards_card_info_label">Members, Friends</span>
              <span class="Feature_cards_card_info_text">Members, Friends Connection ( like followers ), Private Message</span>
            </div>

          </div>

          <div class="Feature_cards_card" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="270" data-aos-once="true">
            <div class="Feature_cards_card_logo">

              <img src="../../img/featureicons/Icon-1.png" loading="lazy" alt="">
            </div>

            <div class="Feature_cards_card_info">
              <span class="Feature_cards_card_info_label">Forum</span>
              <span class="Feature_cards_card_info_text">Forum is ready by BBPress. Your users can make topics and talk.</span>
            </div>
          </div>

          <div class="Feature_cards_card" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="300" data-aos-once="true">
            <div class="Feature_cards_card_logo">
              <img src="../../img/featureicons/Icon-2.png" loading="lazy" alt="">
            </div>

            <div class="Feature_cards_card_info">
              <span class="Feature_cards_card_info_label">List Builder</span>
              <span class="Feature_cards_card_info_text">Members, Groups list can be modified by drag & drop live builder.</span>
            </div>
          </div>

        </div>

        <div class="Feature_cards_right">

            <div class="Feature_cards_card" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="250" data-aos-once="true">
              <div class="Feature_cards_card_logo">
                <img src="../../img/featureicons/Icon-3.png" loading="lazy" alt="">
              </div>

              <div class="Feature_cards_card_info">
                <span class="Feature_cards_card_info_label">Groups</span>
                <span class="Feature_cards_card_info_text">Your users can create groups to let other users to join and talk</span>
              </div>
            </div>

            <div class="Feature_cards_card" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="270" data-aos-once="true">
              <div class="Feature_cards_card_logo">
                <img src="../../img/featureicons/Icon-4.png" loading="lazy" alt="">
              </div>

              <div class="Feature_cards_card_info">
                <span class="Feature_cards_card_info_label">Custom Module</span>
                <span class="Feature_cards_card_info_text">You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.</span>
              </div>
            </div>

            <div class="Feature_cards_card" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="300" data-aos-once="true">
              <div class="Feature_cards_card_logo">
                <img src="../../img/featureicons/Icon-5.png" loading="lazy" alt="">
              </div>

              <div class="Feature_cards_card_info">
                <span class="Feature_cards_card_info_label">List Scroll Effects</span>
                <span class="Feature_cards_card_info_text">8 different scroll effects are ready.You can always change by your tastes.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "MainFuture"
}
</script>

<style scoped lang="scss">
  .Feature_container{
    line-height: 1.5;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding-top: 115px;
    background-color: rgba(33 , 123, 244 , 4%);

    .Feature_content{
      display: flex;
      flex-flow: column;

      .Feature_heading{
        text-align: center;
        margin-bottom: 64px ;
        .Feature_heading_label{

          span{
            font-family: 'Inter' , sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 18px;

            /* identical to box height, or 100% */
            text-align: center;

            color: #217BF4;
          }
        }
        .Feature_heading_banner{
          margin-top: 9px;
          span{
            font-family: 'Inter' ,sans-serif;
            font-style: normal;
            font-weight: 700;
            line-height: 36px;

            /* identical to box height, or 100% */
            text-align: center;

            color: #0A093D;
          }
        }
        .Feature_heading_UnderBanText{
          margin-top: 19px;

          span{

            font-family: 'Inter' , sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;

            /* or 175% */
            text-align: center;

            color: #656464;
          }
        }
      }
      .Feature_cards{
        display: flex;

        .Feature_cards_left{

          .Feature_cards_card{
            display: flex;
            border-radius: 14px;
            background-color:white ;
            align-items: center;
            .Feature_cards_card_info{
              display: flex;
              flex-flow: column;
              width: 315px;
              .Feature_cards_card_info_label{

                font-family: 'Inter' , sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 26px;


                color: #2F2C4A;
              }
              .Feature_cards_card_info_text{
                font-family: 'Inter' ,sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;

                /* or 162% */

                color: #656464;
              }
            }
          }
        }
        .Feature_cards_right{

          .Feature_cards_card{
            display: flex;
            border-radius: 20px;
            background-color:white ;
            align-items: center;
            .Feature_cards_card_info{
              display: flex;
              flex-flow: column;
              width: 315px;
              .Feature_cards_card_info_label{

                font-family: 'Inter' , sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 26px;


                color: #2F2C4A;
              }
              .Feature_cards_card_info_text{
                font-family: 'Inter' ,sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;

                /* or 162% */

                color: #656464;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1250px){
    .Feature_cards{
      flex-flow: column;
    }
  }
  @media screen and (min-width: 630px) {
    .Feature_cards_card{
      margin: 44px;
    }
    .Feature_cards_card_info_label{
      margin: 0 auto 0 0;
    }
    .Feature_cards_card_info{
      margin-left: 36px;
    }
  }
  @media screen and (max-width: 630px) {
    .Feature_cards_card{
      flex-flow: column;
      text-align: center;
      margin-bottom: 25px;
    }
  }
  @media screen and (min-width: 495px) {
    .Feature_cards_card{
      padding: 40px 46px 65px 44px;
    }
    .Feature_heading_banner{
      width: 430px;

      span{
        font-size:36px;
      }
    }
    .Feature_heading_UnderBanText{
      width: 421px;

      span{
        font-size: 16px;
      }
    }
    .Feature_cards_card{
      padding: 40px 20px 65px 20px;
    }
  }
  @media screen and (max-width: 495px) {
    .Feature_heading_banner{
      width: 300px;
      span{
        font-size:28px;
      }
    }
    .Feature_heading_UnderBanText{
      width: 250px;

      span{
        font-size: 14px;
      }
    }
    .Feature_cards_card {
      padding: 40px 5px 65px 5px;
    }
  }
</style>