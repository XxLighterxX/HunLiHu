<template>
  <div id="app" :style="{maxWidth:windowWidth + 'px',height:windowHeight -1 + 'px'}">

    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      windowWidth: document.body.clientWidth, //实时屏幕宽度
      windowHeight: document.body.clientHeight, //实时屏幕高度
      path:this.$route.path,
    };
  },
  
watch:{
  path:function(){
    // this.msg = '我改变了，新的msg为：'+msg;
    // console.log(path)
  }
},
  created() {},
  mounted() {
    //   this.hasScrollbar()
  },
  methods: {
    // hasScrollbar() {
    //   if(document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) === false){
    //       console.log('2')
    //   }
    // },
  },
};
</script>

<style>
#app {
  min-width: 1200px;
  min-height: 400px;
  /* overflow: hidden; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
