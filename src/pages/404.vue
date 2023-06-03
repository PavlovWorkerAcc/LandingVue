<template>
  <div class="error_container"  >
    <div class="error_content">
      <div class="error_heading" data-aos="fade-down" data-aos-duration="3000">
        <span>
          404
        </span>
      </div>

      <div class="error_label">
        <span id="error_label_type">
        </span>
      </div>

      <div class="error_text">
        <span id="error_text_type"></span>
        <RouterLink to="/LandigVue/" class="home_link" @click="changeHrefVis" data-aos="fade-in" data-aos-duration="3000"><span id="error_link_type"></span></RouterLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NotFound",
  methods: {
    changeHrefVis() {
      setTimeout(() => {
        let link = document.querySelector('.home_link')
        link.style.display = 'none'
      }, 2000);
    },
  },
}
</script>

<style scoped lang="scss">
.error_container {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .error_content {
    margin-top: 30px;
    display: flex;
    text-align: center;
    flex-flow: column;
    .error_heading{

      span{
        font-weight: 800;
        color: black;
      }
    }
    .error_label{

      span{
        font-size: 36px;
        color: black;
      }
    }
    .error_text{
      span{
        font-size: 16px;
        color: black;
      }
      a{
        color: #217BF4;
        font-style: italic ;
      }
    }
  }
}
@media screen and (min-width: 600px) {
  .error_heading {

    span {
      font-size: 250px;
    }
  }
  .error_text{

    width: 550px;
  }
}
@media screen and (max-width: 601px) {
  .error_heading {

    span {
      font-size: 180px;
    }
  }
  .error_text{
    display: flex;
    flex-flow: column;
  }
}
@media screen and (min-width: 400px) {

}
@media screen and (max-width: 401px) {
  .error_heading {

    span {
      font-size: 125px;
    }
  }
}
</style>