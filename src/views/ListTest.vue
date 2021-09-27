<template>
  <div class="ListTest">
    <div class="header">
        <WorkBenchHeader></WorkBenchHeader>
    </div>
    <div class="contentBox">
        <IndexAsider></IndexAsider>
        <div class="content">
           <IndexContent></IndexContent>
        </div>
    </div>
  </div>
</template>

<script>
import WorkBenchHeader from '../components/workBench/workBenchHeader.vue'
import IndexAsider from '../components/index/indexAsider.vue'
import IndexContent from '../components/index/indexContent.vue'
import { mapState, mutations, actions, mapActions, mapMutations } from "vuex";
export default {
  components: {
      WorkBenchHeader,
      IndexAsider,
      IndexContent
  },
  props: {},
   computed: {
    // ...mapState({
    //   ...mapState("indexPageData", ["indexList"]),
    // }),
  },
  data() {
    return {

    };
  },
  created() {
    //   this.GetIndexData()
  },
  mounted() {
    //   console.log(this.indexList)
  },
  methods: {
    //   ...mapActions({
    //   ...mapActions("indexPageData", ["GetIndexData"]),
    //   }),
    //   ...mapMutations({
    //       ...mapMutations("indexPageData", ["Get_IndexData"])
    //   })
  },
};
</script>
<style lang="less" scoped>
.ListTest,.contentBox,.content{
    width: 100%;
}
.contentBox{
    margin-top: 70px;
    display: flex;
    .content{
        margin:1em 0 0 300px;
    }
}
</style>