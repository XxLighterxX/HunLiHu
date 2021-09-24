<template>
  <div class="test">
    <!-- <div class="btnBox">
      <a-space>
        <a-button type="primary" @click="addBtn">
          新增组件
        </a-button>
        <a-button type="danger" @click="delBtn(delIndex)">
          删除组件
        </a-button>
        <a-button type="primary" @click="putBtn(delIndex)">
          修改组件
        </a-button>
      </a-space>
    </div> -->
    <div class="box">
      <Darg v-for="(item,index) in dargVal" :key="item.x + item.y" :dargval="item" :index='index' @getIndex='getIndex'></Darg>
    </div>
     <!-- <div class="btnBox">
      <a-space>
        <a-button type="primary" @click="addBtn">
          新增组件
        </a-button>
        <a-button type="danger" @click="delBtn(delIndex)">
          删除组件
        </a-button>
        <a-button type="primary" @click="putBtn(delIndex)">
          修改组件
        </a-button>
      </a-space>
    </div> -->
  </div>
</template>

<script>
import { _getTestJson } from "../api/testApi";
import { addDate } from "../utils/utils.js";
import { mapState, mutations, actions, mapActions, mapMutations } from "vuex";
import Darg from "./Demo2.vue";
export default {
  components: {
    Darg,
  },
  props: {},
  data() {
    return {
      dargVal: [],
      delIndex: "",
    };
  },
  created() {
    this.AXIOS_GETTEST();
  },
  computed: {
    ...mapState({
      ...mapState("darg", ["temp", "test1"]),
    }),
  },
  mounted() {
    // console.log(JSON.parse(sessionStorage.getItem("vuex")).val.test1.test);
  },
  methods: {
    ...mapActions({
      ...mapActions("darg", ["AXIOS_GETTEST"]),
    }),
    ...mapMutations({
      ...mapMutations("darg", ["GET_DARGDATA"]),
    }),
    // 刷新页面

    //新增数据
    addBtn() {
      this.dargVal.push({
        x: Math.ceil(Math.random() * 300),
        y: Math.ceil(Math.random() * 200),
        key: addDate(),
      });
    },
    //删除数据
    getIndex(index) {
      this.delIndex = index;
    },
    delBtn(index) {
      console.log("即将删除", index);
      if (index !== "") {
        this.dargVal.splice(index, 1);
        this.getIndex("");
        console.log("删除成功");
      }
    },
    //修改数据
    putBtn(index) {
      if (index !== "") {
        this.dargVal[index].x = 90;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.test {
  height: 100%;
  display: flex;
  .box {
    height: 100%;
    margin: 0 auto;
    width: 400px;
    border: 1px solid rgb(143, 141, 141);
    border-radius: 10px;
    background-color: white;
  }
  .btnBox {
  }
}
</style>