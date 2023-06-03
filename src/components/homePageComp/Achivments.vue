<template>
  <div class="ach_container"  style="overflow-x: hidden">
    <div class="ach_content">

      <div class="ach_blocks">
        <div class="ach_block_Rating" data-aos="fade-in" data-aos-duration="1400" data-aos-offset="100" data-aos-once="true">
          <div class="ach_block_Rating_Label" data-aos="fade-in" data-aos-duration="3000" data-aos-offset="150" data-aos-once="true">

            <div class="ach_block_Rating_Label_logo">
              <img src="../../img/Star.png" v alt="">
            </div>

            <div class="ach_block_Rating_Label_Text">
              <span>4.8 Rating</span>
            </div>

          </div>

          <div class="ach_block_Rating_Memembers" data-aos="fade-in" data-aos-duration="3000" data-aos-offset="170" data-aos-once="true">

            <img src="../../img/people.png" loading="lazy" alt="">


            <div class="ach_block_Rating_Memembers_Text">
              <span>Members </span>
            </div>
          </div>

          <div class="ach_block_Rating_Text" data-aos="fade-in" data-aos-duration="3000" data-aos-offset="200" data-aos-once="true">
              <span>
                More than 2 billion we people over countries use socibooks we to stay in touch with friends.
              </span>
          </div>

          <div class="ach_block_Rating_Link" data-aos="fade-in" data-aos-duration="3000" data-aos-offset="230" data-aos-once="true">
            <span><a href="#" @click="$router.push('/LandigVue/Reg')" >Join Our Community ➜</a></span>
          </div>
        </div>
        <!--        Awards-->
        <div class="ach_block_Awards" data-aos="fade-in" data-aos-duration="1400" data-aos-offset="100" data-aos-once="true">
          <div class="ach_block_Awards_Label" data-aos="fade-in" data-aos-duration="3000" data-aos-offset="150" data-aos-once="true">

            <div class="ach_block_Awards_Label_logo">
              <img src="../../img/Trophy.png" loading="lazy" alt="">
            </div>

            <div class="ach_block_AwardsLabel_Text">
              <span>Awards</span>
            </div>

          </div>

          <div class="ach_block_Awards_Award" data-aos="fade-in" data-aos-duration="3000" data-aos-offset="170" data-aos-once="true">
            <div class="ach_block_Awards_Award_Logo">
              <img src="../../img/Ellipse14.png" loading="lazy" alt="">
            </div>

            <div class="ach_block_Awards_Award_Text">
              <span class="first_chp">Best of </span><span> on Github</span>
            </div>
          </div>

          <div class="ach_block_Awards_Text" data-aos="fade-in" data-aos-duration="3000" data-aos-offset="200" data-aos-once="true">
              <span>
                More than 2 billion we people over countries use socibooks we to stay in touch with friends.
              </span>
          </div>

          <div class="ach_block_Awards_Link" data-aos="fade-in" data-aos-duration="3000" data-aos-offset="230" data-aos-once="true">
            <span><a href="#"  @click="$router.push('/LandigVue/Awar')">Go To Awards ➜</a></span>
          </div>
        </div>
      </div>

        <div class="ach_block_Description">

          <div class="ach_block_Description_label" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="150" data-aos-once="true">
            <span>Our Achievement</span>
          </div>

          <div class="ach_block_Description_banner" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="170" data-aos-once="true">
            <span>We are Connecting You The Digital Life.</span>
          </div>

          <div class="ach_block_Description_underBanText" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="200" data-aos-once="true">
            <span>The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</span>
          </div>

          <div class="ach_block_Description_btns" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="230" data-aos-once="true">

            <button class="ach_block_Description_btn" @click="$router.push('/LandigVue/Reg')"><span>Discover me</span><span>➜</span></button>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Achivments-item"
}
</script>

<style scoped lang="scss">
  .ach_container {

    line-height: 1.5;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 125px 0 165px 0;
    background: #F2F3F4;

    .ach_content {

      display: flex;
      align-items: center;

      .ach_blocks {
        display: flex;
        .ach_block_Rating {

          width: 336px;
          height: 340px;
          background: #FFFFFF;
          box-shadow: 0px 26px 49px rgba(146, 165, 184, 0.14);
          border-radius: 14px;
          padding: 46px 18px 40px 44px;

          .ach_block_Rating_Label {
            display: flex;
            align-items: center;
            color: #0A093D;

            .ach_block_Rating_Label_Text {
              margin: 0 0 0 10px;

              span {

                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 20px;


                color: #0A093D;
              }
            }

            .ach_block_Rating_Label_logo {
              margin: 0;
            }
          }

          .ach_block_Rating_Memembers {
            display: flex;
            align-items: center;
            margin: 25px 0 30px 0;

            img {
              position: relative;
              right: 19px;
              margin: 0;

            }

            .ach_block_Rating_Memembers_Text {
              margin: 0 0 0 0;
              display: flex;
              position: relative;
              top: -4px;
              left: -12px;

              span {
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 18px;


                letter-spacing: -0.02em;

                color: #0A093D;

                &:before {
                  content: "+836k  ";
                  color: #217BF4;;
                  font-family: 'Inter', sans-serif;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 18px;
                }
              }
            }
          }

          .ach_block_Rating_Text {
            width: 274px;

            span {
              font-family: 'Inter', sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 26px;

              /* or 162% */

              color: #8C8C8C;
            }
          }

          .ach_block_Rating_Link {
            margin: 20px 0 0 0;

            span {
              a {
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 550;
                font-size: 16px;
                line-height: 16px;

                /* identical to box height, or 100% */

                color: black;
                text-decoration: none;

                transition: 0.5s;

                &:hover {
                  transition: 0.5s;
                  color: #217BF4;
                }
              }
            }
          }
        }

        .ach_block_Awards {

          width: 336px;
          height: 340px;
          background: #FFFFFF;
          box-shadow: 0px 26px 49px rgba(146, 165, 184, 0.14);
          border-radius: 14px;
          padding: 46px 18px 40px 44px;

          .ach_block_Awards_Label {
            display: flex;
            align-items: center;
            color: #0A093D;

            .ach_block_AwardsLabel_Text {
              margin: 0 0 0 10px;

              span {

                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 20px;


                color: #0A093D;
              }
            }

            .ach_block_Awards_Label_logo {
              margin: 0;
            }
          }

          .ach_block_Awards_Award {
            display: flex;
            align-items: center;
            margin: 25px 0 30px 0;

            .ach_block_Awards_Award_Logo {
              position: relative;
              right: 10px;
              margin: 0;

            }

            .ach_block_Awards_Award_Text {
              margin: 0 0 0 0;
              display: flex;
              position: relative;
              top: -6px;
              left: -12px;

              span {
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 18px;


                letter-spacing: -0.02em;

                color: #0A093D;
              }

              .first_chp:after {
                content: "  2021  ";
                color: #217BF4;;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 18px;
                margin: 0 4px 0;
              }
            }
          }

          .ach_block_Awards_Text {
            width: 274px;

            span {
              font-family: 'Inter', sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 26px;

              /* or 162% */

              color: #8C8C8C;
            }
          }

          .ach_block_Awards_Link {
            margin: 20px 0 0 0;

            span {


              a {
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 16px;
                /* identical to box height, or 100% */
                text-decoration: none;
                color: black;
                transition: 0.5s;

                &:hover {
                  transition: 0.5s;
                  color: #217BF4;
                }
              }
            }
          }
        }
      }
    }
  }
      .ach_block_Description {
        height: 340px;

        .ach_block_Description_label {

          span {
            font-family: 'Inter' ,sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 18px;
            margin: 0;
            /* identical to box height, or 100% */

            color: #217BF4;
          }
        }

        .ach_block_Description_banner {


          span {
            font-family: 'Inter' , sans-serif;
            font-style: normal;
            font-weight: 700;

            line-height: 48px;

            /* or 133% */

            color: #0A093D;
          }
        }

        .ach_block_Description_underBanText {

          span {

            font-family: 'Inter' , sans-serif;
            font-style: normal;
            font-weight: 400;
            line-height: 175%;

            /* or 175% */

            color: #656464;


          }
        }

        .ach_block_Description_btns {

          .ach_block_Description_btn {
            width: 192px;
            height: 58px;

            background: #217BF4;
            box-shadow: 0px 7px 22px -6px rgba(33, 123, 244, 0.34);
            border-radius: 14px;
            border: none;

            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 14px;


            text-align: center;
            transition: 0.6s;


            color: #FFFFFF;
            vertical-align: center;
            span:not(:first-child){
              position: relative;
              top: 1px;
              margin: 0 0 0 7px
            }
            &:hover {
              background-color: rgba(33, 123, 244, 0%);
              color: rgba(33, 123, 244, 1);
              transition: 0.6s;
              border: 1px solid #217BF4;
            }
          }
        }
      }
  @media screen and (min-width: 1575px){
    .ach_block_Description{
      margin-left: 250px;
    }
  }
  @media screen and (min-width: 1245px) {
    .ach_block_Description_underBanText {
      margin: 10px auto 18px 0;
    }
    .ach_block_Awards {
      margin-right: 25px;
    }
  }
  @media  screen and (max-width: 1245px) {
    .ach_content {
      flex-flow: column-reverse;
    }
    .ach_block_Description {
      text-align: center;
    }
    .ach_block_Description_banner{
      margin: 10px 0 18px 0;
    }
    .ach_block_Description_underBanText{
      margin: 10px 0 18px 0;
    }
  }
  @media screen and (min-width: 775px){
    .ach_block_Rating{
      margin-right: 25px;
    }
  }
  @media screen and (max-width: 775px){
    .ach_blocks{
      flex-flow: column;
      margin-top: 25px;
      .ach_block_Awards{
        margin-top: 50px;
      }
    }
  }
  @media screen and (min-width: 440px){
    .ach_block_Description_banner{
      width: 381px;
      span{
        font-size: 36px;
      }
    }
    .ach_block_Description_underBanText{
      width: 365px;
      span{
        font-size:16px;
      }
    }
  }
  @media screen and (max-width: 440px){
    .ach_block_Description_banner{

      span{
        font-size: 34px;
      }
    }
  }
</style>