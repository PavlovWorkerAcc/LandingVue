<template>
  <div class="Cards_Container">
    <div class="Cards_Content">
        <div class="Card" v-for="item in awards" v-bind:key="item" data-aos-duration="3000" data-aos="flip-left" data-aos-easing="easy-out">
          <div class="Award_Body_Card_Container">
            <div class="Award_Body_Card_Content">
              <div class="Award_Body_Card_Logo">
                <img :src="item.logo">
              </div>
              <div class="Award_Body_Card_Text">
                <div class="Award_Body_Card_Text_Left">
                  <div class="Award_Name">
                    <span class="item_label">Name</span>
                    <span class="item_Name">{{item.AwardName}}</span>
                  </div>
                  <div class="Award_Date">
                    <span class="item_label">Year</span>
                    {{item.Date}}
                  </div>
                </div>
                <div class="Award_Body_Card_Text_Right">
                  <div class="Award_Votes">
                    <span class="item_label">Votes</span>
                    {{item.Votes}}
                  </div>
                  <div class="Award_Place">
                    <span class="item_label">Place</span>
                    {{item.Place}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

export default {
  name: "card-item",
  data() {
    return {
      awards: [
        {AwardName: "Best of Github", Date: "2021", Votes: "1.932.000" , Place: "1st" , logo:'https://cdn-icons-png.flaticon.com/128/25/25231.png'   } ,
        {AwardName: "People Choice", Date: "2022", Votes: "1.200.000" , Place: "1st" , logo: 'https://cdn-icons-png.flaticon.com/128/8980/8980705.png'  } ,
        {AwardName: "Best Vue Project", Date: "2021", Votes: "980.000" , Place: "3st" , logo: 'https://cdn-icons-png.flaticon.com/128/5315/5315314.png'  } ,
        {AwardName: "Best Community Project", Date: "2020", Votes: "420.000" , Place: "6st" , logo:'https://cdn-icons-png.flaticon.com/128/5323/5323697.png'},
      ],
    }
  }
}
</script>

<style scoped lang="scss">

.Cards_Content{
  display: flex;
  flex-wrap: wrap;
  .Award_Body_Card_Container{
    font-family: 'Source Code Pro' , monospace;
    font-style: normal;
    width: 277px;
    height: 450px;
    display: flex;
    background-color: white;
    border-radius: 12px;
    margin: 15px 15px 15px 15px;
    color: #333;
    .Award_Body_Card_Content{
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: end;
      overflow-x: hidden;

      .Award_Body_Card_Text{
        margin-top: 50px;
        display: flex;
        text-align: center;
        flex-direction: column;
        .Award_Body_Card_Text_Left{
          margin-bottom: 15px;
          .Award_Name , .Award_Date{
            display: flex;
            flex-flow: column;
            .item_label{
              font-weight: 900;
            }
            &:not(:last-child){
              margin-bottom: 15px;
            }
          }
        }
        .Award_Body_Card_Text_Right{

          .Award_Votes , .Award_Place{
            display: flex;
            flex-flow: column;
            .item_label{
              font-weight: 900;
            }
            &:not(:last-child){
              margin-bottom: 15px;
            }
          }
        }
      }
    }
  }
}
</style>