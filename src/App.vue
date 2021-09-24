<template>
  <div id="app" :style="{width:windowWidth + 'px',height:windowHeight + 'px'}">

    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight, //实时屏幕高度
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
#app {
 
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
