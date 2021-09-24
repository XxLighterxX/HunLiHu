<template>
  <div>
    <div class="box">
      <div v-for="(item,index) in temp" :key="index" class="drag" :class="'drag' + item.id" :style="{left:item.x + 'px',top:item.y + 'px'}" v-drag = {index:index}>

      </div>
    </div>
    <div class="btn">
      <button @click="btn">获取数值</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   存放撤销操作
      temp: [
        {
          id: 0,
          x: 200,
          y: 300,
        },
        {
          id: 1,
          x: 200,
          y: 300,
        },
      ],
      Ctemp: [],
    };
  },
  components: {},
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
    btn() {
    //   console.log(this.Ctemp);
      this.temp[0].x = 80
    //   console.log(this.temp[0])
      this.$forceUpdate()
    //   console.log(this)
    },
  },
  //   自定义指令
  directives: {
    drag: {
      bind: function (el, binding, vnode) {
        let _this = vnode.context._data;
        // 获取索引
        let strId = el.className.charAt(el.className.length - 1);
        el.style.left = _this.temp[strId].x + "px";
        el.style.top = _this.temp[strId].y + "px";
        console.log(binding.value.index)
        // binding.value.set[binding.value.index] = el.value;
      },
      inserted: function (el, binding, vnode) {
        //获取实例
        let _this = vnode.context._data;
        let that = vnode.context;
        let oDiv = el;
        el.onmousedown = function (e) {
          var disx = e.pageX - el.offsetLeft;
          var disy = e.pageY - el.offsetTop;
          //   获取最后一步操作
          document.onmousemove = function (e) {
            //   console.log(vnode)
            // el.style.left = e.pageX - disx + "px";
            // el.style.top = e.pageY - disy + "px";
            let l = e.pageX - disx;
            let t = e.clientY - disy;
            if (l < 0) {
              l = 0;
            }
            if (
              l >
              document.documentElement.clientWidth -
                oDiv.getBoundingClientRect().width
            ) {
              l =
                document.documentElement.clientWidth -
                oDiv.getBoundingClientRect().width;
            }
            // console.log(document.documentElement.clientWidth)
            if (t < 0) {
              t = 0;
            }
            if (
              t >
              document.body.clientHeight - oDiv.getBoundingClientRect().height
            ) {
              t =
                document.body.clientHeight -
                oDiv.getBoundingClientRect().height;
            }
            // if (t > document.documentElement.clientHeight - (oDiv.offsetHeight - 400)) {
            //   t = document.documentElement.clientHeight - (oDiv.offsetHeight - 400)
            // }
            // if (t > document.body.clientHeight - oDiv.getBoundingClientRect().height) {
            //   // t = document.body.clientHeight - oDiv.getBoundingClientRect().height - 120
            //   t = 0
            // }
            oDiv.style.left = l + "px";
            oDiv.style.top = t + "px";
          };
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
            //缓存数据
            _this.Ctemp.push({
              id: el.className.charAt(el.className.length - 1),
              x: el.style.left,
              y: el.style.top,
            });
          };
          document.onclick = function () {};
        };
        document.onkeydown = function (e) {
          const ctrlKey = e.ctrlKey || e.metaKey;
          let lastIndex = _this.Ctemp[_this.Ctemp.length - 1];
          //   取最后一步操作
          if (ctrlKey && e.keyCode == 90 && lastIndex != null) {
            let lastId = lastIndex.id;
            let lastX = lastIndex.x;
            let lastY = lastIndex.y;
            // console.log('执行前')
            // _this[0].x = 30
            // console.log(_this.temp[0])
            _this.temp[0].x = 500
            //  console.log('执行后',_this.temp[0].x)
            //  console.log(that)
            console.log('执行')
             that.$forceUpdate()
            // that.$set(_this.temp, 0, lastIndex)
            // _this.temp.filter((item, index, arr) => {
            //   if (item.id == lastId) {
            //     // _this.temp[index] = lastIndex;
            //     _this.temp[index].set = lastIndex
            //   }
            // });
          }
        };
      },
      componentUpdated: function(el, binding, vnode){
        //    let _this = vnode.context._data;
        //    console.log(_this)
      }
    },
  },
};
</script>
<style lang='less' scoped>
.box {
  overflow: hidden;
  margin: 0 auto;
  width: 600px;
  height: 600px;
  border: 1px solid red;
  position: relative;
}
.drag {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  background-image: url("../assets/image/1.jpg");
  background-size: cover;
}
</style>
