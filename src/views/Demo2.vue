<template>
  <div >
    <div v-drag class="drag">

    </div>
  </div>
</template>

<script>
export default {
  props: ["dargval", "index"],
  data() {
    return {
      isClick: false,
    };
  },
  components: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {
    handleDragClick(e) {
      //   console.log(e.target);
      // if(e.clientY <= 100){
      //     e.clientY = 101
      // }
      // 判断拖拽组件的状态
      //   let isDrag = false;
      //   try {
      //     isDrag = e.target.getAttribute('ele-flag') === 'true';
      //   }catch (e) {
      //   	}
      //   if(isDrag){
      //   	return;
      //    }
      // 当推拽组件未在 拖动状态 执行点击事件
      // todo 下面是执行点击事件的代码
    },
  },
  destroyed() {
    console.log("销毁的是组件", this.index);
  },
  //   自定义指令
  directives: {
    drag: {
      bind: function (el, binding, vnode) {
        //指向实例
        let that = vnode.context;
        el.style.left = that.dargval.x + "px";
        el.style.top = that.dargval.y + "px";
      },
      inserted: function (el, binding, vnode) {
        let that = vnode.context;
        el.onmousedown = function (e) {
          var disx = e.pageX - el.offsetLeft;
          var disy = e.pageY - el.offsetTop;
          document.onmousemove = function (e) {
            e.preventDefault();
            e.stopPropagation();
            el.style.left = e.pageX - disx + "px";
            el.style.top = e.pageY - disy + "px";
          };
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
            that.isClick = true;
            if (that.isClick == true) {
              that.$emit("getIndex", that.index);
              that.isClick = false;
            }
          };
          el.onclick = function () {
            //    console.log(that.index)
            //   that.$emit("getIndex", that.index);
          };
        };
        el.mouseup = function () {};
      },
      componentUpdated: function (el, binding, vnode) {
        let that = vnode.context;
        // el.style.left = that.dargval.x + "px";
        // el.style.top = that.dargval.y + "px";
        // el.style.left = that.dargval.x + "px";
        // el.style.top = that.dargval.y + "px";
        // console.log(that.dargval.x);
      },
    },
  },
};
</script>
<style lang='less' scoped>
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