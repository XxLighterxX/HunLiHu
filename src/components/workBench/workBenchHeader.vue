<template>
  <div class="WorkBench_Header">
    <div class="left">
      <div class="header_logo">
        <img src="@/assets/image/index/headerLogo.png" alt="婚礼乎" height="60px" width="auto">
      </div>
      <div class="header_ul">
        <ul>
          <a-space>
            <li v-for="(item,index) in headerUl" :key="index">{{item.name}}</li>
          </a-space>
        </ul>
      </div>
    </div>
    <div class="right">
      <a-space v-model="size">
        <div class="header_serch">
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1">
                1st item
              </a-menu-item>
              <a-menu-item key="2">
                2nd item
              </a-menu-item>
              <a-menu-item key="3">
                3rd item
              </a-menu-item>
            </a-menu>
            <a-button> 更多
              <a-icon type="down" />
            </a-button>
          </a-dropdown>
          <a-input-search placeholder="搜索模板" enter-button @search="onSearch" style="width: 450px;" />
        </div>
        <div class="header_user">
          <a-space v-model="this.size">
            <a-button type="primary">
              登录
            </a-button>
            <a-button>注册</a-button>
          </a-space>
        </div>
      </a-space>
    </div>
  </div>
</template>

<script>
//import xxx from 'xxx' WorkLeft_Menu
export default {
  components: {},
  props: {},
  data() {
    return {
      headerUl: [
        {
          name: "免费模板",
        },
        {
          name: "个人会员",
        },
        {
          name: "企业会员",
        },
        {
          name: "手机版",
        },
      ],
      size: 30+'px',
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSearch(value) {
      console.log(value);
    },
    handleMenuClick(e) {
      console.log("click", e);
    },
  },
};
</script>
<style lang="less" scoped>
.WorkBench_Header {
  width: 100%;
  min-width: 1450px;
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px black;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  font-family: CN-Normal;
  .left,
  .right {
    display: flex;
    width: 50%;
  }
  .left {
    justify-content: start;
    div {
      margin-left: 40px;
    }
    .header_ul {
      margin-left: 10px;
    }
  }
  .right {
    justify-content: flex-end;
    .header_serch{
         margin-right: 50px;
    }
    .header_user{
        margin-right: 50px;
    }
  }
  .header_ul {
    line-height: 70px;
    text-align: center;
    li {
      cursor: pointer;
      float: left;
      &:hover {
        color: #a1488e;
      }
    }
  }
  .header_serch,
  .header_user,
  .header_logo {
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-dropdown-trigger {
      padding: 0 5px;
      border-radius: 5px 0 0 5px;
      i {
        margin-left: 3px;
      }
      &:hover {
        i {
          transition: 0.3s;
          transform: rotateZ(-180deg);
        }
      }
    }
  }
}
</style>