<template>
  <div class="members_container"  style="overflow-x: hidden">
    <div class="members_content">
      
      <div class="members_heading">
        <div class="members_heading_label" data-aos="zoom-out" data-aos-duration="3000" data-aos-offset="450" data-aos-once="true">
            <span>Valuable Team</span>
        </div>

        <div class="members_heading_banner" data-aos="zoom-out" data-aos-duration="3000" data-aos-offset="470" data-aos-once="true">
            <span>Our Team</span>
        </div>

        <div class="members_heading_underBanText" data-aos="zoom-out" data-aos-duration="3000" data-aos-offset="500" data-aos-once="true">
            <span>when an unknown printer took a galley of type and meeting fari scrambled it.</span>
        </div>

      </div>
      
      <div class="members_cards">
        <div class="members_cards_fANDs" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="570" data-aos-once="true">
          <div class="members_card">

            <div class="members_logo">
              <img src="../../img/members_img/Group1000001767.png" loading="lazy" alt="">
            </div>

            <div class="members_label">
              <span>Fahim Rahman</span>
            </div>

            <div class="members_social">
              <span>@rahman</span>
            </div>
          </div>

          <div class="members_card">

            <div class="members_logo">
              <img src="../../img/members_img/Group1000001769.png" loading="lazy" alt="">
            </div>

            <div class="members_label">
              <span>Kazi Rahman</span>
            </div>

            <div class="members_social">
              <span>@Rahman</span>
            </div>
          </div>
        </div>
        <div class="members_cards_tandf"  data-aos="fade-left" data-aos-duration="3000" data-aos-offset="570" data-aos-once="true">
          <div class="members_card">

            <div class="members_logo">
              <img src="../../img/members_img/Group1000001770.png" loading="lazy" alt="">
            </div>

            <div class="members_label">
              <span>Masterero Ali</span>
            </div>

            <div class="members_social">
              <span>@Master</span>
            </div>
          </div>

          <div class="members_card">
            <div class="members_logo">
              <img src="../../img/members_img/Group1000001771.png" loading="lazy" alt="">
            </div>

            <div class="members_label">
              <span>Alia Karon</span>
            </div>

            <div class="members_social">
              <span>@Alia</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Members-item"
}
</script>

<style scoped lang="scss">
.members_container {
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin: 130px auto;


  .members_content {
    display: flex;
    flex-flow: column;

    .members_heading {
      text-align: center;

      .members_heading_label {
        margin-bottom: 10px;

        span {

          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 18px;

          /* identical to box height, or 100% */
          text-align: center;

          color: #217BF4;
        }
      }

      .members_heading_banner {
        margin-bottom: 18px;

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

      .members_heading_underBanText {
        margin-bottom: 38px;

        span {
          font-family: 'Inter', sans-serif;
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

    .members_btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 52px;

      .member_btn {
        border: none;
        background-color: rgba(0, 0, 0, 0%);
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;

        letter-spacing: 0.01em;
        border-radius: 14px;
        color: #2F2C4A;
        width: 150px;
        height: 56px;
        transition: 0.5s;

        &:hover {
          background: #217BF4;
          box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
          border-radius: 14px;
          transition: 0.5s;
          color: white;
        }
      }
    }

    .members_cards {
      display: flex;
      align-items: center;
      .members_cards_fANDs , .members_cards_tandf{
        display: flex;
      }
      .members_card {
        padding: 30px 52px;
        background: #FFFFFF;
        box-shadow: 0px 34px 68px rgba(116, 115, 128, 0.1);
        border-radius: 14px;
        margin-bottom: 30px;

        .members_label {
          margin: 29px 0 14px 0;
          text-align: center;

          span {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 26px;

            /* identical to box height, or 108% */
            text-align: center;
            color: #2F2C4A;
          }
        }

        .members_social {
          margin-top: 30px;
          text-align: center;

          span {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;

            /* identical to box height, or 100% */
            text-align: center;

            color: #656464;
          }
        }

        &:hover {
          text-align: center;
          transition: 1.25s;
          position: relative;
          bottom: 50px;
          margin-right: 50px;

          &:hover {
            transition: 0.5s;
            box-shadow: 0px 34px 68px rgba(116, 115, 128, 0.5);
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1260px){
  .members_cards_fANDs{
    margin-right: 30px;
  }
}
@media screen and (max-width: 1259px){
  .members_cards{
    flex-flow: column;
  }
  .members_cards_fANDs{
    margin-bottom: 30px;
  }
}
@media screen and (min-width: 631px){
  .members_card:not(:first-child) {
    margin-left: 30px;
  }
}
@media screen and (max-width: 630px) {
  .members_cards_fANDs , .members_cards_tandf {
    flex-flow: column;
  }
  .members_card{
    margin-bottom: 30px;
  }
}
@media screen and (min-width: 521px){
  .members_btns{
    background-color: rgba(33, 123, 244, 5%);
    border-radius: 14px;
    width: 474px;
    height: 72px;
  }
  .members_heading_underBanText{
    width: 425px;
  }
}
@media screen and (max-width: 520px) {
  .members_btns{
    flex-flow: column;
  }
    .member_btn {
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

      span:not(:first-child) {
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
      &:not(:last-child){
        margin-bottom: 15px;
      }
    }
  }
</style>