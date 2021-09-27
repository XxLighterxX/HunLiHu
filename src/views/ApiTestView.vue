<template>
  <div class="ApiTestPage">
    <div class="loginModel">
      <h1>登录接口测试</h1>
      <a-input placeholder="请输入账号" v-model="loginModel.user" />
      <a-input placeholder="请输入密码" v-model="loginModel.password" />
      <a-button type="primary" @click="loginBtn()">
        登录
      </a-button>
    </div>
    <div class="showModel">
      <h1>请柬接口测试</h1>
      <a-button type="primary"  @click="copyshow">
        复制一份请柬
      </a-button>
      <a-button type="primary" @click="createshow">
        新建一份请柬
      </a-button>
      <a-button type="primary" @click="deleteshow">
        删除请柬
      </a-button>
      <a-button type="primary" @click="enableshow">
        开启/关闭请柬
      </a-button>
      <a-button type="primary" @click="getshowpro">
        获取请柬属性
      </a-button>
      <a-button type="primary" @click="getshows">
        获取请柬列表
      </a-button>
      <a-button type="primary" @click="saveshowpro">
        保存请柬属性
      </a-button>
    </div>
    <div class="pageModel">
      <h1>页面接口测试</h1>
      <a-button type="primary" @click="addpage">
        添加一个空白页面
      </a-button>
      <a-button type="primary" @click="copypage">
        复制一个页面
      </a-button>
      <a-button type="primary" @click="deletepage">
        删除一个空白页面
      </a-button>
      <a-button type="primary" @click="getpages">
        获取page页面
      </a-button>
      <a-button type="primary" @click="savepage">
        保存页面
      </a-button>
      <a-button type="primary" @click="savepagesorder">
        保存页面页码
      </a-button>
    </div>
    <div class="smaModel">
      <h1>素材接口测试</h1>
      <a-button type="primary">
        获取page下素材
      </a-button>
      <a-button type="primary">
        获取page下素材
      </a-button>
      <a-button type="primary">
        保存素材
      </a-button>
    </div>
  </div>
</template>

<script>
import { _userLogin } from "../api/CommonApi";
import {
  _copyshow,
  _createshow,
  _deleteshow,
  _enableshow,
  _getshowpro,
  _getshows,
  _saveshowpro,
} from "../api/Show/showApi";
import {
  _addpage,
  _copypage,
  _deletepage,
  _getpages,
  _savepage,
  _savepagesorder,
} from "../api/Page/pageApi";
import {
  _deletepagesmaterials,
  _getpagesmaterials,
  _savepagesmaterials,
} from "../api/Sma/smaApi";
export default {
  components: {},
  props: {},
  data() {
    return {
      // 公共模块
      loginModel: {
        user: "",
        password: "",
      },
      //  请柬模块
      //  请求ID
      showId: "",
      //   请柬列表
      showList: [],
    };
  },
  created() {
    this.getshows();
  },
  mounted() {
    //   this.showId = this.showList[ Math.ceil(Math.random()*(this.showList.length-1))].showId
    // if(this.showList >= 0 ){
    //      console.log(Math.ceil(Math.random()*(this.showList.length-1)))
    // }
    //   console.log(this.showId)
    // console.log(this.showId)
  },
  methods: {
    //   公共模块  -------------------------------------------------------
    //   登录
    loginBtn() {
      _userLogin({
        username: this.loginModel.user,
        password: this.loginModel.password,
      }).then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("登录模块");
        console.log(res.data);
      });
    },
    //   请柬模块 -------------------------------------------------------
    //   复制新建一份请柬
    copyshow() {
      _copyshow({ id: this.showId, user: 13 }).then((res) => {
        console.log(res.data);
      });
    },
    //   新建一份请柬
    createshow() {
      _createshow({}).then((res) => {
        console.log(res.data);
      });
    },
    //   删除请柬
    deleteshow() {
      this.showId = this.showList[0].showId;
      _deleteshow({ showId: this.showId }).then((res) => {
        this.getshows();
      });
    },
    //   开启/关闭请柬
    enableshow() {
      _enableshow({}).then((res) => {
        // console.log(res.data)
      });
    },
    //   获取请柬属性
    getshowpro() {
      _getshowpro({ id: this.showId }).then((res) => {
        // console.log(res.data)
      });
    },
    //   获取请柬列表
    getshows() {
      _getshows({}).then((res) => {
        console.log(res.data.content);
        this.showList = res.data.content;
        this.showId =
          this.showList[
            Math.ceil(Math.random() * (this.showList.length - 1))
          ].showId;
      });
    },
    //   保存请柬属性
    saveshowpro() {
      _saveshowpro({}).then((res) => {
        console.log(res.data);
      });
    },
    //   页面模块 ------------------------------------------------------------------------------------------------------
    //   新建一份页面
    addpage() {
      _addpage({ showId: this.showId }).then((res) => {
        console.log(res.data);
      });
    },
    // 复制一个页面
    copypage() {
      _copypage({ showId: "", pageId: "" }).then(
        (res) => {},
        (err) => {
          console.log(err);
        }
      );
    },
    // 删除一个页面
    deletepage() {
      _deletepage({ showId: "", pageId: "" }).then(
        (res) => {},
        (err) => {
          console.log(err);
        }
      );
    },
    // 获取页面
    getpages() {
      _getpages({}).then((res) => {
        console.log(res.data);
      });
    },
    // 保存页面
    savepage() {
      _savepage({}).then((res) => {
        console.log(res.data);
      });
    },
    // 保存页面页码
    savepagesorder() {
      _savepagesorder({}).then(
        (res) => {
            console.log(res.data)
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>
<style lang="less" scoped>
.ApiTestPage {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  .loginModel,
  .showModel,
  .pageModel,
  .smaModel {
    margin: 50px 0;
    button {
      margin: 20px 80px;
    }
  }
  input {
    width: 50%;
    margin: 0 auto;
    display: block;
  }
}
</style>