<template>
  <div>
    <div style="position:absolute;width:100px;height:100px;border:1px solid red" v-drag="{set:set}"></div>
    <div>
        <button @click="set(100,200)">点击</button>
    </div>
  </div>
</template>

<script>
//import xxx from 'xxx'
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    set(x, y) {
      this.data.x = x;
      this.data.y = y;
    },
  },
  directives: {
    // 拖动的自定义指令

    drag(el, binding) {
      //el为拖动的元素
      var oDiv = el;
      oDiv.onmousedown = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var disX = e.offsetX;
        var disY = e.offsetY;
        document.onmousemove = function (e) {
          e.preventDefault();
          e.stopPropagation();
          var x = e.pageX - disX;
          var y = e.pageY - disY;
          oDiv.style.left = x;
          oDiv.style.top = y;
          // 通过传参的形式，将methods中的函数传进来，以此来改变data中的值
          binding.value.set(x, y);
        };
        document.onmouseup = function () {
          document.οnmοusemοve = null;
          document.οnmοuseup = null;
        };
      };
    },
  },
};
</script>
<style lang="less" scoped>
.drag {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  background-image: url("../assets/image/1.jpg");
  background-size: cover;
  border: 3px solid black;
  border-radius: 10px;
  &:hover {
    border: 3px solid red;
  }
}
</style>