<template>
  <div class="indexAsiderBox">
    <a-button class="btn" type="primary" style="width:100%;font-size:16px;height:50px" @click="addClass">
      +新建请柬
    </a-button>
    <a-menu class="indexAsider" style="width: 100%" :default-selected-keys="['1']" :open-keys.sync="openKeys" mode="inline" @click="handleClick">
      <!-- <a-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title">
          <a-icon type="mail" /><span>Navigation One</span>
        </span>
        <a-menu-item-group key="g1">
          <template slot="title">
            <a-icon type="qq" /><span>Item 1</span>
          </template>
          <a-menu-item key="1">
            Option 1
          </a-menu-item>
          <a-menu-item key="2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group key="g2" title="Item 2">
          <a-menu-item key="3">
            Option 3
          </a-menu-item>
          <a-menu-item key="4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title">
          <a-icon type="appstore" /><span>Navigation Two</span>
        </span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title">
          <a-icon type="setting" /><span>Navigation Three</span>
        </span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-menu-item key="11">
          Option 11
        </a-menu-item>
        <a-menu-item key="12">
          Option 12
        </a-menu-item>
      </a-sub-menu> -->
      <!-- <a-sub-menu key="sub6">
        <span slot="title">
          <a-icon type="setting" /><span>Navigation Three</span>
        </span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-menu-item key="11">
          Option 11
        </a-menu-item>
        <a-menu-item key="12">
          Option 12
        </a-menu-item>
      </a-sub-menu> -->
      <a-sub-menu v-for="(item,index) in showPage" :key="item + index" @titleClick="titleClick">
        <span slot="title">
          <a-icon type="setting" /><span>{{item.name}}</span>
        </span>
        <a-menu-item v-for="(itemD,indexD) in item.list" :key="itemD.name + indexD">
          {{itemD.name}}
        </a-menu-item>
      </a-sub-menu>

    </a-menu>
    <!-- <a-button class="btn" type="primary" style="width:100%;margin-top:2em">
        确认勾选
      </a-button> -->
  </div>
</template>
<script>
import { mapState, mutations, actions, mapActions, mapMutations } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1", "sub2", "sub4", "sub5", "sub6"],
      showPage: [],
    };
  },
  watch: {
    // openKeys(val) {
    //   console.log("openKeys", val);
    // },
  },
  methods: {
    ...mapActions("indexPageData", ["AddListData"]),
    handleClick(e) {
      var reg = /[\u4e00-\u9fa5]/g;
      var str = e.key;
      console.log(str.replace(reg, ""));
      //   console.log("click", e.key);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
    getListData() {
      axios.get("/js/showList.json").then((res) => {
        this.showPage = res.data.showPage;
      });
    },
    addClass() {
      this.AddListData();
      const hide = this.$message.loading("Action in progress..", 0);
      setTimeout(hide, 2500);
    },
  },
  created() {},
  mounted() {
    this.getListData();
  },
};
</script>

<style lang="less" scoped>
.indexAsiderBox {
  width: 280px;
  position: fixed;
  left: 0;
  overflow-y: scroll;
  // z-index: 2;
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: 0;
  }
}
.indexAsider {
  height: 93.5%;
  width: 100%;
  //   position: fixed;
  //   left: 0;
  //   overflow-y: scroll;
}
.indexAsiderBox::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 1px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.indexAsiderBox::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px transparent;
  background: transparent;
}

.indexAsiderBox::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px transparent;
  border-radius: 10px;
  background: transparent;
}
</style>