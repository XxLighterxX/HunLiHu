<template>
  <div class="WorkPage">
    <!-- 头部高70 -->
    <div class="WorkHeader">
       <Header></Header>
    </div>
    <div class="WorkModel">
      <!-- 左侧导航栏 -->
      <div class="WorkLeftMenu">
        <LeftMenu></LeftMenu>
      </div>
      <!-- 二级修改栏 -->
      <div :class="{'WorkLeftPutMenuNorm':isLeftMenu == true,'WorkLeftPutMenuActive':isLeftMenu == false}">

      </div>
      <!-- 二级修改栏 -->
      <!-- <div class="WorkLeftPutMenuNorm">

      </div> -->
      <!-- 中间绘图区域 -->
      <div class="WorkCenterWorkBox">
         <Work></Work>
      </div>
      <!-- 右侧工具栏 -->
      <div class="WorkRightMenu">

      </div>
      <!-- 右侧小工具栏 -->
      <div class="WorkRightIconMenu">

      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/workBench/workBenchHeader.vue";
import LeftMenu from "../components/workBench/workLeftMenu.vue";
import { mapState, mutations, actions, mapActions, mapMutations } from "vuex";
import Work from "./Box.vue";
export default {
  components: {
    Header,
    Work,
    LeftMenu,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("WorkPageSwitchBtn", ["isLeftMenu"]),
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.WorkPage {
  height: calc(100% - 70px);
  .WorkHeader{}
  .WorkModel {
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
     background-color: #f1f4f5;
    .WorkLeftMenu {
      height: 100%;
      width: 79px;
      background-color: rgb(255, 255, 255);
      border-right: 1px solid #ccd5db;
      box-shadow: -1px 0 0 0 #e6ebed;
      transition: 0.5s;
    }
    .WorkLeftPutMenuNorm {
      width: 300px;
      height: 100%;
      background-color: red;
      transition: 0.5s;
    }
    .WorkLeftPutMenuActive {
      width: 0px;
      height: 100%;
      background-color: blue;
      transition: 0.5s;
    }
    .WorkCenterWorkBox {
        height: 70%;
        margin: 0 auto;
        position: relative;
        right: 120px;
        top: 130px;
        z-index: 0;
    }
    .WorkRightMenu {
      position: absolute;
      right: 0;
      height: 100%;
      width: 279px;
      background-color: rgb(255, 255, 255);
      border-left: 1px solid #ccd5db;
      transition: 0.5s;
    }
    .WorkRightIconMenu{
      position: absolute;
      right: 280px;
      height: 100%;
      width: 50px;
      background-color: rgb(255, 255, 255);
    //   border-left: 1px solid #ccd5db;
      box-shadow: -2px 0px 0px 0px #e6ebed;
    }
  }
}
</style>