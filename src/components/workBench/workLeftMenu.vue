<template>
  <div class="WorkLeft_Menu">
    <div class="WorkLeft_Menu-li" :class="{'Menu-li_Active':index == isLeftMenuIndex}" @click="SET_LeftMenu({type:isLeftMenu,index:index})" v-for="(item,index) in menuList" :key="index">
      <!-- <img src="@/assets/image/1.jpg" alt="图文" class="Menu_Img"> -->
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mutations, actions, mapActions, mapMutations } from "vuex";
import '../../assets/font/font.css'
export default {
  components: {},
  props: {},
  data() {
    return {
      menuList: [
        {
          name: "页面",
        },
        {
          name: "页面",
        },
        {
          name: "全局设置",
        },
        {
          name: "全局设置",
        },
        {
          name: "全局设置",
        },
        {
          name: "全局设置",
        },
      ],
    };
  },
  computed: {
    ...mapState("WorkPageSwitchBtn", ["isLeftMenu","isLeftMenuIndex"]),
  },
  created() {},
  mounted() {
    
  },
  methods: {
    ...mapMutations("WorkPageSwitchBtn", ["SET_LeftMenu"]),
  },
};
</script>
<style lang="less" scoped>
.WorkLeft_Menu {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .WorkLeft_Menu-li {
    height: 80px;
    width: 100%;
    transition: 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: rgb(0, 110, 255);
      color: white;
    }
    .Menu_Img {
      width: 100%;
      height: 100%;
    }
    p {
      margin: 0;
      font-size: 16px;
      font-family: CN-Normal;
    }
  }
  .Menu-li_Active{
     background-color: rgb(0, 110, 255);
     color: white;
  }
}
</style>