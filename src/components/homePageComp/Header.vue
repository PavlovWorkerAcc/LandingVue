
<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
  <header>
    <div class="logo_header">
      <img src="../../img/logo.png" loading="lazy" alt="">
    </div>

    <nav class="nav_header">
        <ul class="ul_header_elem">
          <li class="li_header_elem"><a href="" @click="$router.push('/LandigVue/')">Home</a></li>
          <li class="li_header_elem"><a @click="slideScrollCommunity" style="cursor: pointer" >Community</a></li>
          <li class="li_header_elem"><a @click="slideScrollNews" style="cursor: pointer" >News</a></li>
          <li class="li_header_elem"><router-link to="/LandigVue/Events">Events</router-link></li>
        </ul>
    </nav>
    
    <form class="form_header">
      <button class="btn_header" @click="$router.push('/LandigVue/Reg')" >Sign Up</button>
      <button class="btn_header" @click="$router.push('/LandigVue/Login')" >Log in</button>
    </form>

    <div class="media_container">
      <div id="header_media_ch">
        <nav class="nav_header_media">
          <ul class="ul_header_elem_media">
            <li class="li_header_elem_media" ><a @click="$router.push('/LandigVue/')">Home</a></li>
            <li class="li_header_elem_media"><a @click="slideScrollCommunity" style="cursor: pointer" >Community</a></li>
            <li class="li_header_elem_media"><a @click="slideScrollNews" style="cursor: pointer" >News</a></li>
            <li class="li_header_elem_media"><router-link to="/LandigVue/Events">Events</router-link></li>
          </ul>
        </nav>

        <form class="form_header_media">
          <button class="btn_header_media" @click="$router.push('/LandigVue/Reg')">Sign Up</button>
          <button class="btn_header_media" @click="$router.push('/LandigVue/Login')">Log in</button>
        </form>
      </div>

      <button @click="openMediaNav"  class="hamburger hamburger--collapse" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>




  </header>
  <hr>
</template>

<script>

export default {
  name: "Header-item",

  methods: {

    openMediaNav(){
      let div = document.querySelector('#header_media_ch')

      div.classList.toggle('active')
      if (div.classList.contains('active')){
        div.style.display = 'flex'
      }
      else {
        div.style.display = 'none'
      }
    },
    slideScrollCommunity(){
      let about = document.querySelector('.Feature_container')
      about.scrollIntoView({behavior: 'smooth' ,  block:"center"})
    },
    slideScrollNews(){
      let about = document.querySelector('.news_container')
      about.scrollIntoView({behavior: 'smooth' ,  block:"center"})
    }
  }
}

</script>

<style scoped lang="scss">
hr{
  opacity: 0.1;
  border: 1px solid #217BF4;
}
header {
  line-height: 1.5;
  display: flex;
  align-items: center;
  background-color: rgba(33 , 123, 244 , 4%) ;
  margin: 0 auto;
}
.logo_header {
  margin-right: 0;
}
.nav_header{
  margin-left: 0;
  margin-right: 0;
  .ul_header_elem {
    display: flex;
    margin: 40px 72px;
    padding: 0;
  }
  .li_header_elem {
    list-style-type: none;
    font-family: 'Inter' , sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    letter-spacing: 0.01em;
    &:not(:first-child) {
      margin-left: 32px;
    }

    a {
      color: #656464;
      text-decoration: none;
      transition: 0.5s;
      font-weight: 700;
    }
    a:hover{
      transition: 0.5s;
      color: rgba(43, 43, 57, 1);
    }
    a:after {
      display: block;
      content: "";
      margin-top: 1px;
      height: 2px;
      width: 0%;
      background-color: #101010;
      transition: width .3s ease-in-out;
    }
    a:hover:after,
    a:focus:after {
      width: 100%;
    }
  }
}

.form_header {
  display: flex;
  align-items: center;
  margin-left: 379px;
  padding-left: 379px;

  .btn_header {
    width: 123px;
    height: 50px;
    background: #217BF4;
    box-shadow: 0 7px 22px -6px rgba(33, 123, 244, 0.34);
    border: none;
    border-radius: 14px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;

    text-align: center;
    transition: 0.4s;
    color: #FFFFFF;

    &:hover{
      background-color: rgba(33 , 123, 244 , 0%);
      color:rgba(33, 123, 244, 1);
      transition: 0.6s;
      border: 1px solid #217BF4;
    }
    &:not(:first-child){
      margin-left: 15px;
    }
  }
}
.hamburger {
  border: none;
  background-color: rgba(123, 123, 123, 0%);
  display: none;
}
.media_container{
  display: flex;
  flex-flow: column-reverse;
  #header_media_ch{
    display: none;
    flex-flow: column;
    margin: 0 auto;
    align-items: center;
    padding-bottom: 30px;
    .nav_header_media{
      margin-bottom: 15px;
      .ul_header_elem_media{
        padding: 0;
        display: flex;
        flex-flow: column;
        .li_header_elem_media {
          list-style-type: none;
          font-family: 'Inter' , sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 14px;
          letter-spacing: 0.01em;
          margin-bottom: 5px;
          a {
            color: #656464;
            text-decoration: none;
            transition: 0.5s;
            font-weight: 700;
          }
          a:hover{
            transition: 0.5s;
            color: rgba(43, 43, 57, 1);
          }
          a:after {
            display: block;
            content: "";
            margin-top: 1px;
            height: 2px;
            width: 0%;
            background-color: #0061ff;
            transition: width .3s ease-in-out;
          }
          a:hover:after,
          a:focus:after {
            width: 100%;
          }
        }
      }
    }
    .form_header_media {
     text-align: center;

      .btn_header_media {
        width: 123px;
        height: 50px;
        background: #217BF4;
        box-shadow: 0 7px 22px -6px rgba(33, 123, 244, 0.34);
        border: none;
        border-radius: 14px;

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;

        text-align: center;
        transition: 0.4s;
        color: #FFFFFF;

        &:hover{
          background-color: rgba(33 , 123, 244 , 0%);
          color:rgba(33, 123, 244, 1);
          transition: 0.6s;
          border: 1px solid #217BF4;
        }
        &:not(:first-child){
          margin-left: 15px;
        }
      }
    }
  }
}

@media screen and (max-width: 1700px) {
  .form_header {
    margin-left: 0;
  }
}
@media screen and (max-width: 1315px){
  .form_header {
    padding-left: 0;
  }
}
@media screen and (max-width: 890px){
  .hamburger{
    display: initial;
    margin: 0 auto;
  }
  .nav_header{
    display: none;
  }
  .btn_header{
    display: none;
  }
  .logo_header{
    margin: 15px auto;
  }
  header{
    display: flex;
    flex-flow: column;
  }
  .glass_logo_form_header , .form_header_input {
    display: none;
  }

}
@media screen and (min-width: 891px){
    .media_container{
      display: none;
    }
  .nav_header_media{
    display: none;
  }
  form{
    display: none;
  }
}

</style>