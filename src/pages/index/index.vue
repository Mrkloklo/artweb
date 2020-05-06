<template>
  <div>
    <el-container>
      <el-header>
        <div class="block">
          <el-avatar :size="40" :src="circleUrl"></el-avatar>
        </div>
        <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select" @change="vSearch">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <div class="register">
          <el-button type="primary">注销</el-button>
        </div>
      </el-header>
      <el-main>
       
        <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
const Console = console;

import vueWaterfallEasy from 'vue-waterfall-easy';
import axios from 'axios'
export default {
  components: {
    vueWaterfallEasy
  },
  created() {
    this.getData()
  },
  data() {
    return {
      count: 0,
      loading: false,
      keyword: "", //关键词
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png", //头像
     imgsArr: [],
      group: 0, // request param
    };
  },
  methods: {
    vSearch(e) {
      console.log(e);
    },
    preView(idx) {
      console.log(idx);
    },
    imgScrooll(e) {
      console.log(e);
    },
   getData() {
      axios.get('./mock/data.json?group=' + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，static/mock这里我用一个惊呆json文件模拟
        .then(res => {
          this.imgsArr = this.imgsArr.concat(res.data)
          this.group++
        }).catch(function(err) {
          console.log(err)
        })
    },
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  position: fixed;
  width: 100%;
}
.el-header {
  top: 0;
}
.el-footer {
  bottom: 0;
}
.el-aside {
}

.el-main {
  background-color: #e9eef3;
  position: fixed;
  width: 100%;
  height: calc(100% - 120px);
  top: 60px;
}

// 搜索框

.el-input {
  width: calc(100% - 200px);
  margin-left: 100px;
  margin-top: 14px;
}

.block {
  position: absolute;
  top: 10px;
}

.el-input__icon {
  width: 100%;
}
// 注销
.register {
  position: absolute;
  right: 20px;
  top: 14px;
}
.el-col {
  overflow: hidden;
  float: left;
}
</style>
