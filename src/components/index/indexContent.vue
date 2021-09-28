<template>
  <div class="indexContent">
    <div class="header" ref="header">
      <div class="left">
        <p>123</p>
      </div>
      <div class="center">
        <a-input-search placeholder="搜索模板" enter-button @search="onSearch" class="centerInput" />
      </div>
      <div class="right">
        <p>123</p>
      </div>
    </div>
    <!-- 轮播图区域 -->
    <div class="banner">

    </div>
    <!-- 推荐区域 -->
    <div class="top">

    </div>
    <!-- 列表区域 -->
    <div v-if="listWidth != ''" class="list">
      <div class="listTitle">
        <h2>列表区域</h2>
      </div>
      <div v-if="listWidth != ''" class="listContent" :style="{maxWidth:listWidth}">
        <div class="listGoods" v-for="(item,index) in this.indexList" :key="index">
          <div class="listGoodsImg">
            <img src="@/assets/image/index/listImg.jpg" alt="测试图片" height="100%" width="100%" @click="nextWorkPage(item.showId)">
          </div>
          <div class="listGoodsTitle">
            <div class="top">
              <h4 class="stitle">{{item.stitle}}</h4>
              <p class="delBtn" @click="delBtn(item.showId)">删除</p>
            </div>
            <div class="bottom">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mutations, actions, mapActions, mapMutations } from "vuex";
export default {
  components: {},
  props: {},
  data() {
    return {
      listWidth: "",
    };
  },
  computed: {
    ...mapState({
      ...mapState("indexPageData", ["indexList"]),
    }),
  },
  created() {
    this.GetIndexData();
  },
  mounted() {
    //   console.log('this.$refs.barparent.$el.offsetWidth', this.$refs.header.offsetWidth)
    this.listWidth = this.$refs.header.offsetWidth + "px";
    console.log(this.indexList);
  },
  methods: {
    ...mapActions("indexPageData", ["GetIndexData", "DelListData","GetShowsData"]),
    ...mapMutations({
      ...mapMutations("indexPageData", ["Get_IndexData"]),
    }),
    onSearch() {},
    // 进入工作台
    nextWorkPage(id) {
        sessionStorage.removeItem('goods')
        this.GetShowsData(id)
        this.$router.push({name:'WorkPage'})
    },
    // 删除项目
    delBtn(id) {
      this.DelListData(id);
    },
  },
};
</script>
<style lang="less" scoped>
.indexContent {
  width: 100%;
  overflow: hidden;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // p{
    //     margin: 0 auto;
    // }
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 40%;
      .ant-input-search-enter-button input {
        height: 80px !important;
      }
    }
  }
  .list {
    //   border: 1px solid red;
    overflow: hidden;
    .listContent {
      font-family: CN-Bold;
      display: flex;
      justify-content: space-between;
      height: 500px;
      margin-top: 50px;
      .listGoods {
        min-width: 200px;
        margin-right: 30px;
        margin-left: 10px;
        height: 300px;
        //   cursor: pointer;
        transition: 0.3s;
        position: relative;
        .listGoodsTitle {
          position: absolute;
          bottom: 0;
          height: 0px;
          width: 100%;
          border: 1px solid transparent;
          overflow: hidden;
          .top,
          .bottom {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .stitle {
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .delBtn {
              cursor: pointer;
              width: 30%;
              text-align: right;
              color: red;
              font-weight: 500;
            }
          }
        }
        .listGoodsImg {
          height: 80%;
          width: 100%;
          overflow: hidden;
        }
        &:hover {
          transform: translateY(-30px);
          box-shadow: black 0px 0px 10px;
          .listGoodsTitle {
            transition: 0.3s;
            height: 20%;
          }
          .listGoodsImg {
            img {
              transition: 0.3s;
              transform: scale(1.5);
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>