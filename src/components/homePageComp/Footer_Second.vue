<template>
    <div class="socials_container">
        <div class="social_content">
            <div class="social_creater">
              <span>Dimitriy Pavlov</span>
            </div>

            <div class="social_logo">
              <img src="../../img/logo(1).png" loading="lazy" alt="">
            </div>

            <div class="social_socials">
              <a href="https://twitter.com/home"><img src="../../img/socials/Twitter.png" alt=""></a>
              <a href="https://www.instagram.com/"><img src="../../img/socials/instagram.png" alt=""></a>
              <a href="https://www.facebook.com/"><img src="../../img/socials/facebook.png" alt=""></a>
              <a href="https://ua.linkedin.com/"><img src="../../img/socials/Linkedin.png" alt=""></a>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "Footer_Second"
}
</script>

<style scoped lang="scss">
  .socials_container {
    line-height: 1.5;
    display: flex;
    align-items: center;
    background-color: #20202D;
    justify-content: space-between;

    .social_content {
      display: flex;
     width: 1920px;
      align-items: center;
        .socialr_creater {
          margin: 0 auto;

          span {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 14px;

            /* identical to box height, or 100% */

            color: #F6F6F6;
          }
        }

        .social_logo {
          margin: 0 auto;
          position: relative;

        }

        .social_socials {
          margin: 0 auto;

          a:not(:first-child) {
            margin-left: 8px;
          }
        }
      }
    }
  @media screen and (max-width: 760px) {
    .social_content{
      flex-flow: column;
    }
  }
  @media screen and (min-width: 470px) {
      .socials_container{
        padding: 31px 133px;
      }
  }
</style>