<script setup>

</script>
<template>
  <div class="log_container" style="overflow-x: hidden">
    <div class="log_content">

      <div class="log_form" data-aos="fade-down" data-aos-duration="2500">
        <div class="log_form_header">
          <div class="log_form_header_label">
            <span>Sign In</span>
          </div>

          <div class="log_form_header_text">
            <span>If you don’t have an account register</span>
            <span>You can  <RouterLink to="/LandigVue/Reg">Register here !</RouterLink></span>
          </div>
        </div>

        <form class="log_inputsANDbtns" action="../../../check.php" METHOD="post">
          <div class="log_input email">
            <div class="email_label">
              <img src="../../img/Log_Reg_Icons/messageIcon.png" alt="">
              <span>Email</span>
            </div>
            <input  placeholder="Enter your email address" v-model="email"
                    type="email"
                    @blur="isEmailTouched = true"
                    :class="{ error: isEmailError  , correct: isEmailCorrect}">
            <hr>
            <div v-if="isEmailError" style="color: red">
              Email is not correct
            </div>
            <div v-if="isEmailCorrect" style="color: green">
              Email is Correct
            </div>
          </div>

          <div class="log_input password">
            <div class="password_label">
              <img src="../../img/Log_Reg_Icons/padlockIcon.png" alt="">
              <span>Password</span>
            </div>
            <input type="password" placeholder="Enter your Password"
                   v-model="password"
                   @blur="isPasswordTouched = true"
                   :class="{ error: isPasswordError  , correct:isPasswordCorrect}">
            <hr>
            <div v-if="isPasswordError" style="color: red">
              Password is not correct
            </div>
            <div v-if="isPasswordCorrect" style="color: green">
              Password is  correct
            </div>
          </div>


          <button class="log_btn form_btn" >
            <span>Login</span>
          </button>

          <div class="link_to_home">
            <RouterLink to="/LandigVue/" class="homelink"><span class="btn_header">Return to Home Page</span></RouterLink>
            <RouterView/>
          </div>


        </form>
      </div>

      <div class="log_photo">

        <div class="log_photo_container" >

          <img src="../../img/Reg_Log_Photo.png" loading="lazy" alt="" data-aos="fade-left" data-aos-duration="3000">

          <div class="log_photo_text"  data-aos="fade-right" data-aos-duration="3000">
            <span class="log_photo_text_heading">Sign Up to Netbook</span>
            <span class="log_photo_text_label">Lorem Ipsum is simply</span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
const emailCheckRegex = /\b[a-zA-Z0-9._]+@[a-z]{2,5}\.[a-z]{2,6}\b/

const passwordCheckRegex = /^[A-Za-z]\w{7,14}$/

export default {
  name: "Login-page",
  data() {
    return {
      email: null,
      password: null,

      isEmailTouched: false,
      isPasswordTouched: false,
    };
  },
  computed: {
    //Email Validation start
    isEmailValid() {
      return emailCheckRegex.test(this.email);
    },

    isEmailError() {
      return !this.isEmailValid && this.isEmailTouched;
    },
    isEmailCorrect() {
      return this.isEmailValid && this.isEmailTouched
    },
    //Email Validation end

    //Password Validation start
    isPasswordValid() {
      return passwordCheckRegex.test(this.password);
    },
    isPasswordError() {
      return !this.isPasswordValid && this.isPasswordTouched;
    },
    isPasswordCorrect() {
      return this.isPasswordValid && this.isPasswordTouched
    },
    //Password Validation end
  }
}

</script>

<style scoped lang="scss">

.log_container{
  font-family: 'Poppins' ,  sans-serif;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .log_content{
    margin-top: 30px;
    display: flex;
    align-items: center;

    .log_form{

      .log_form_header{
        margin-bottom: 52px ;

        .log_form_header_label{
          margin-bottom: 22px;
          span{
            font-weight: 500;
            font-size: 30px;
            line-height: 45px;
            color: #000000  ;
          }
        }
        .log_form_header_text{
          display: flex;
          flex-flow: column;
          span{
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #000842;
          }
        }
      }
      .log_inputsANDbtns{

        .log_input{
          margin-bottom: 42px;
          display: flex;
          flex-flow: column;
          .email_label , .password_label{
            display: flex;
            align-items: center;
            margin-left: 0;
            img{
              margin-bottom: 5px;
            }
          }
          span , input , hr{
            margin: 0 0 5px 0;
          }
          span{
            font-weight: 500;
            font-size: 13px;
            line-height: 20px;

            /* identical to box height */

            color: #999999;
          }
          input{
            border: none;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;

            /* identical to box height */

            color: #000842;
            outline: none;
          }
        }
        .email{
          span{
            display: flex;
          }
        }
        .password{
          span{
            display: flex;
          }
        }
        .log_btn{
          background-color: #217BF4;
          box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.25);
          border-radius: 32px;
          border: none;
          height: 53px;
          transition: 0.6s;
          margin-top: 40px;
          span{
            font-weight: 500;
            font-size: 17px;
            line-height: 26px;

            /* identical to box height */

            color: #FFFFFF;
          }
          &:hover{
            background-color: rgba(33 , 123, 244 , 0%);
            color:rgba(33, 123, 244, 1);
            transition: 0.6s;
            border: 1px solid #217BF4;
            span{
              color: #217BF4;
              transition: 0.6s;
            }
          }
        }
        .log_btn_back{
          margin-top: 15px;
          background-color: #217BF4;
          box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.25);
          border-radius: 32px;
          width: 50%;
          border: none;
          height: 53px;
          transition: 0.6s;
        }
      }
      .link_to_home{
        text-align: center;
        margin-top: 10px;

        .homelink{
          text-decoration: none ;
        }
        span{
          color: #217BF4;
          text-decoration: none;
        }
      }
    }
    .log_photo{
      padding: 130px 88px;
      background: #000842;
      border-radius: 15px;

      .log_photo_container{

        img{

          margin-bottom: 90px;
        }

        .log_photo_text{
          display: flex;
          flex-flow: column;
          .log_photo_text_heading{
            margin: 0;
            font-weight: 600;
            font-size: 40px;
            line-height: 60px;

            /* identical to box height */

            color: #FFFFFF;
          }
          .log_photo_text_label{
            margin: 0;
            font-weight: 300;
            font-size: 20px;
            line-height: 30px;

            /* identical to box height */

            color: #FFFFFF;


          }
        }
      }
    }
  }
}
@media screen and (min-width: 1311px){
  .log_form{
    margin-right: 127px;
  }
}


@media screen and (max-width: 1312px) {
  .log_photo{
    display: none;
  }
  .log_form{
    text-align: center;
  }
}
@media screen and (min-width: 460px) {
  .log_btn{
    width: 100%;
  }
  .log_form{
    width: 400px;
  }
}
@media screen and (max-width: 461px) {
  .log_btn{
    width: 65%;
  }
}
</style>