<template>
  <div class="WorkLeftPutMenu">
    
  </div>
</template>

<script>
import { mapState, mutations, actions, mapActions, mapMutations } from "vuex";
export default {
  components: {},
  props: {},
  data() {
    return {

    };
  },
  computed:{
      ...mapState("WorkPageSwitchBtn", ['PageData']),
  },
  created() {},
  mounted() {

  },
  methods: {

  },
};
</script>
<style lang="less" scoped>
.WorkLeftPutMenu{
    width: 100%;
    height: 100%;
    // background-color: red;
    
}
</style>