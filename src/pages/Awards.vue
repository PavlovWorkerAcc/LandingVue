<script setup>
import Card from "../components/Award/Cards.vue";
import Footer from "../components/homePageComp/Footer.vue";
import Footer_Second from "../components/homePageComp/Footer_Second.vue";
import Header from "../components/homePageComp/Header.vue";
</script>
<template>
  <Header/>
    <div class="award_container">
      <div class="award_content">
        <div class="award_heading">
            <span>
              We are proud of ourselves
            </span>
        </div>
        <div class="award_label">
          <span>
           We will achieve great success thanks to you
          </span>
        </div>
        <Card/>
      </div>
    </div>
    <Footer/>
    <Footer_Second/>
</template>

<script>

export default {
  name: "Awards-page",
}
</script>
<style scoped lang="scss">

  .award_container{
    line-height: 1.5;
    display: flex;
    align-items: center;
    margin: 0 auto;
    background-color: rgba(22, 99, 199, 0.85);
    padding: 50px 0;
    .award_content{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      text-align: center;
      .award_heading{
        margin-bottom: 20px;

        span{
          font-family: 'Poppins' , monospace;
          font-style: normal;
          font-size: 45px;
          color: white;
        }
      }
      .award_label{
        margin-bottom: 40px;
        span{
          font-family: 'Poppins' , monospace;
          font-style: normal;
          font-size: 16px;
          color: white;
        }
      }
      .cards{

        display: flex;
        flex-wrap: wrap;
      }
    }
  }
</style>