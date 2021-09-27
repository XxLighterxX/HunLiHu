<template>
  <div class="userLoginPage">
    <div class="userLoginBox">
      <div class="userLoginModel">
        <h1>登录</h1>
        <a-input placeholder="请输入账号" v-model="user" />
        <a-input placeholder="请输入密码" v-model="password" />
        <a-button type="primary" @click="loginBtn()">
          登录
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  _userLogin,
  _showPage,
  _addPage,
  _showPageList,
} from "../api/DemoApi/DemoApi.js";
let Base64 = require("js-base64").Base64;
export default {
  components: {},
  props: {},
  data() {
    return {
      user: "",
      password: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    loginBtn() {
      localStorage.removeItem("token");
      _userLogin({ user: this.user, password: this.password }).then((res) => {
          if(res.data.token != null){
              localStorage.setItem("token", res.data.token);
              this.$router.push({name:'ListTest'})
          }else{
              alert('请重新输入')
          }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.userLoginPage {
  height: 100%;
  width: 100%;
  text-align: center;
  position: relative;
  background: url("../assets/image/login/LoginBk.png") no-repeat center center;
  background-size: cover;
  .userLoginBox {
    width: 30em;
    height: 25em;
    position: absolute;
    margin: auto;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .LoginTitle {
      font-size: 3em;
      color: white;
    }
    input {
      width: 20em;
      display: block;
      margin: 1em auto;
      background-color: transparent;
      color: white;
      border: 0;
      border-bottom: 2px solid white;
    }
    input::placeholder{
         color: white;
      }
    button {
      width: 20em;
      background: rgba(161,72,142, 0.3);
      border: 0;
      margin-top: 1.5em;
      &:hover{
          background-color: #a1488e;
      }
    }
    h1{
        color: white;
        margin-bottom: 1.5em;
    }
  }
}
</style>