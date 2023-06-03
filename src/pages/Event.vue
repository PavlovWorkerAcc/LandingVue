<template>
  <HeaderItem/>

  <div class="events_cards_container">
    <div class="events_cards_content">
      <div class="events_heading">
        <span class="events_heading_label" data-aos="fade-left" data-aos-duration="2500">
          Our upcoming events
        </span>
        <span class="events_heading_text" data-aos="fade-left" data-aos-duration="3000">We will be glad to see you</span>
      </div>
      <Event_Carditem v-for="item in events" :key="item" :item="item" data-aos="fade-in " data-aos-duration="3000"></Event_Carditem>
    </div>
  </div>


  <FooterItem/>
  <Footer_Second/>
</template>

<script>
import HeaderItem from "../components/homePageComp/Header.vue";
import FooterItem from "../components/homePageComp/Footer.vue";
import Footer_Second from "../components/homePageComp/Footer_Second.vue";
import Event_Carditem from "../components/Events/Event_Card.vue";

export default {
  name: "Events-item",
  components: {Footer_Second, FooterItem, HeaderItem , Event_Carditem},
  data(){
    return{
      events: [
        {EventTeg: "Productivity" ,
          EventLabel:"7 Skills of Highly Effective Programmers" ,
          EventDate : "22.02.2023",
          EventText:"Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers..." ,
          EventLogo:"https://i.ibb.co/2WtQJph/Laptop.png",
          EventBackGround: "background: #BCD1FF;",
        } ,
        {EventTeg: "Media" ,
          EventLabel:"SMM starter pack, part 2: content promotion" ,
          EventDate : "10.02.2023",
          EventText:"This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media. " ,
          EventLogo:"https://i.ibb.co/HNmjqJw/Social-Media.png",
          EventBackGround: "background: linear-gradient(135deg, #F395BA 0%, #FED182 100%);"
        } ,
        {EventTeg: "Business" ,
          EventLabel:"11 Things I Wish I Knew When I Started My Business" ,
          EventDate : "18.05.2023",
          EventText:"Here are 11 things I wish I knew when I started my business. I hope they will save you some time and some anguish because (experience is a good teacher here) the sodium from your tears acts as a corrosive melting agent..." ,
          EventLogo:"https://i.ibb.co/Ny4wJXq/Business.png",
          EventBackGround: "background: #D2EBF7;"
        } ,
      ],
    }
  },

}
</script>

<style scoped lang="scss">

.events_cards_container {
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  .events_heading {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 30px;
    font-family: "Poppins", monospace;
    font-style: normal;
   .events_heading_label {
      font-size: 45px;
      color: #333333;
    }
    .events_heading_text{
      font-size: 24px;
      color: #333333;
    }
  }
}
</style>