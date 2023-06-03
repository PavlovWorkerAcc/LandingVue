import { createApp  } from 'vue'
import App from './App.vue'
import './assets/main.scss'
import './img/logo.png'
import './components/homePageComp/Header.vue'
import router from "./router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypeIt from "typeit";
const app = createApp(App)
app.use(router)
app.mount('#app');
AOS.init()



window.onload = () => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    async function typeIt() {
        new TypeIt("#error_label_type", {
            afterComplete: function (instance) {
                instance.destroy();
            }
        })
            .exec(async () => {
                //-- Return a promise that resolves after something happens.
                await new Promise((resolve) => {
                    setTimeout(() => {
                        return resolve();
                    }, 3000);
                });
            })
            .type("PAGE NOT FOUND")
            .go();

        new TypeIt("#error_text_type", {
            speed: 15,
            afterComplete: function (instance) {
                instance.destroy();
            }
        })
            .exec(async () => {
                //-- Return a promise that resolves after something happens.
                await new Promise((resolve) => {
                    setTimeout(() => {
                        return resolve();
                    }, 5000);
                });
            })
            .type('The page you are looking for doesn`t exist or an other error occurred. ')
            .go();
        new TypeIt('#error_link_type', {
            speed: 15,
            afterComplete: function (instance) {
                instance.destroy();
            }
        })
            .exec(async () => {
                //-- Return a promise that resolves after something happens.
                await new Promise((resolve) => {
                    setTimeout(() => {
                        return resolve();
                    }, 8000);
                });
            })
            .type('Go Back to Home Page')
            .go();
    }

    typeIt()


    function hamburger() {
        let hamburger = document.querySelector(".hamburger");

        hamburger.addEventListener("click", function () {

            hamburger.classList.toggle("is-active");

        });
    }

    hamburger()

    function checkWidth() {
        let div = document.querySelector('#header_media_ch')
        console.log(document.documentElement.clientWidth)
        if (document.documentElement.clientWidth < 700) {
            div.style.display = 'none'
        }
    }
    checkWidth()

}