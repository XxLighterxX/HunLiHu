<template>
  <div class="WorkBench_Header">
    <div class="left">
      <div class="header_logo">
        <img src="@/assets/image/index/headerLogo.png" alt="婚礼乎" height="60px" width="auto">
      </div>
      <div class="addVip">

      </div>
    </div>
    <div class="center">
      <div class="materialBox" v-for="(item,index) in material" :key="index+item.name"  @mouseenter="enterBtn(index)" @mouseleave="leaveBtn(index)" >
        <img v-if="item.state == 0" :src="item.imageUrl" alt="">
        <img v-if="item.state == 1" :src="item.imageUrl_A" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
//import xxx from 'xxx' WorkLeft_Menu
export default {
  components: {},
  props: {},
  data() {
    return {
      material: [
        {
          name: "素材",
          imageUrl: require("@/assets/image/common/sucaiku_0.png"),
          imageUrl_A: require("@/assets/image/common/sucaiku_1.png"),
          state:0,
        },
        {
          name: "文本",
          imageUrl: require("@/assets/image/common/wenben_0.png"),
          imageUrl_A: require("@/assets/image/common/wenben_1.png"),
          state:0,
        },
        {
          name: "插件",
          imageUrl: require("@/assets/image/common/wangzhantubiao_0.png"),
          imageUrl_A: require("@/assets/image/common/wangzhantubiao_1.png"),
          state:0,
        },
        {
          name: "照片",
          imageUrl: require("@/assets/image/common/xiangce_0.png"),
          imageUrl_A: require("@/assets/image/common/xiangce_1.png"),
          state:0,
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
      enterBtn(index){
         this.material[index].state = 1
      },
      leaveBtn(index){
        this.material[index].state = 0
      }
  },
};
</script>
<style lang="less" scoped>
.WorkBench_Header {
  width: 100%;
  min-width: 1450px;
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px black;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  font-family: CN-Normal;
  .left,
  .center,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left,
  .right {
    width: 30%;
  }
  .center {
    width: 40%;
    height: 100%;
    .materialBox {
      height: 100%;
      width: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      transition: .3s;
      overflow: hidden;
      p {
        margin: 0;
        font-size: 16px;
      }
      img {
        height: 25px;
        width: 25px;
      }
      &:hover{
        background-color: #a1488e;
        p{
            color: white;
        }
      }
    }
  }
}
</style>