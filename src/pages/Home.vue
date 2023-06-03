<script setup>
import Header from "../components/homePageComp/Header.vue";
import CommunityCH from "../components/homePageComp/CommunityCH.vue";
import AboutUs from "../components/homePageComp/AboutUs.vue";
import Achivments from "../components/homePageComp/Achivments.vue";
import MainFuture from "../components/homePageComp/MainFuture.vue";
import Members from "../components/homePageComp/Members.vue";
import Application from "../components/homePageComp/Application.vue";
import News from "../components/homePageComp/News.vue";
import Footer from "../components/homePageComp/Footer.vue";
import Footer_Second from "../components/homePageComp/Footer_Second.vue";
</script>
<template>
  <Header/>
  <CommunityCH/>
  <AboutUs/>
  <Achivments/>
  <MainFuture/>
  <Members/>
  <Application/>
  <News/>
  <Footer/>
  <Footer_Second/>
</template>

<script>
export default {
  name:'Home-page',
}
</script>