<template>
  <div class="indexContent">
    <div class="header">
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
  </div>
</template>

<script>
import { mapState, mutations, actions, mapActions, mapMutations } from "vuex";
export default {
  components: {},
  props: {},
  data() {
    return {};
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
    console.log(this.indexList);
  },
  methods: {
    ...mapActions({
      ...mapActions("indexPageData", ["GetIndexData"]),
    }),
    ...mapMutations({
      ...mapMutations("indexPageData", ["Get_IndexData"]),
    }),
  },
};
</script>
<style lang="less" scoped>
.indexContent {
  width: 100%;
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
      .ant-input-search-enter-button input{ 
               height: 80px !important
      }
    }
  }
}
</style>