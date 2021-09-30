<template>
  <div class="WorkRightMenu">
    <div class="header">
      <h2 class="title">图层管理</h2>
    </div>
    <div class="content">
      <div class="PagePutModel" v-for="(item,index) in this.PageData" :key="index + '-' + item.pno">
         <a-button @click="selecTpageBtn(item)">第{{item.pageId}}页</a-button>
         <div class="delBtnModel" @click="delPageBtn(item)">
             <p>删除</p>
         </div>
      </div>
    </div>
    <div class="bottom">
      <a-button type="primary" @click="addPage">
        +常规页
      </a-button>
      <a-button type="primary" @click="savePage">
        保存
      </a-button>
    </div>
  </div>
</template>

<script>
import { mapState, mutations, actions, mapActions, mapMutations,mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      showId: this.$route.query,
      NewData: {
        autoPlay: 0,
        changeType: "tit",
        dateCreate: "2021-09-29 14:33:05",
        dateUpdate: "2021-09-29 14:33:05",
        isHide: 0,
        ismuban: 0,
        muOUrl: "",
        mubanImgUrl: "",
        mubanType: "1",
        musicLoop: "0",
        musicName: "",
        pageDirection: 0,
        pageId: 1839608,
        pageTop: "0",
        pageingTime: "0",
        pbcolor: "#FFCCFF",
        playMusic: "0",
        pno: 19,
        showId: 348983,
        userId: 13,
      },
    };
  },
  computed: {
    ...mapGetters("WorkPageSwitchBtn", ["PageData"]),
    ...mapState("WorkPageSwitchBtn", ["PageData"])
  },
  //  监听数据变化   
  watch:{
    //  PageData:function(newVal){
    //      if(newValue) {
    //         console.log(newVal)
    //      }
    //  }
  }, 
  created() {},
  mounted() {
    // console.log(this.PageData2);
  },
  methods: {
    ...mapActions("WorkPageSwitchBtn", ["GetPageData","AddPageData", "SavePageData","DelPageData"]),
    addPage() {
      this.AddPageData(this.showId);
    },
    savePage() {
      // console.log(JSON.stringify(this.NewData))
      //   this.SavePageData(this.NewData);
    },
    // 选中当前项
    selecTpageBtn({pageId}){
        console.log(pageId)
    },
    // 删除当前项
    delPageBtn(delData){
        this.DelPageData(delData)
    }
  },
};
</script>
<style lang="less" scoped>
.WorkRightMenu {
  width: 100%;
  height: 100%;
  position: relative;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f4f5;
    .title {
      margin: 0;
      font-size: 22px;
      font-weight: 400;
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    border-top: 1px solid red;
    position: absolute;
    bottom: 0;
    button {
      width: 40%;
      font-size: 16px;
      height: 40px;
      margin: 0 auto;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    .PagePutModel {
      width: 100%;
      height: 30px;
      margin: 10px 0;
      position: relative;
      .delBtnModel{
          position: absolute;
          right: 0px;
          top: 0;
          width: 0px;
          height: 100%;
          line-height: 30px;
          p{
              color: white;
              text-align: center;
              cursor: pointer;
          }
      }
      &:hover{
          .delBtnModel{
              border-left: 1px solid blue;
              background-color: blue;
              width: 40px;
              transition: .3s;
              z-index: 1;
          }
      }
      button{
          width: 100%;
          height: 100%;
      }
    }
  }
}
</style>