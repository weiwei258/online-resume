<template>
  <el-container>
    <el-header class="header">
      <el-row class="row" align="middle" justify="space-between">
        <el-col :span="21">
          <el-space :size="30">
            <router-link to="/" class="title">
              <div>在线简历</div>
            </router-link>
            <el-menu class="menu" mode="horizontal" router>
              <el-menu-item index="/square">热门模板</el-menu-item>
              <el-menu-item index="/mine">我的简历</el-menu-item>
            </el-menu>
          </el-space>
        </el-col>
        <el-col :span="3" style="text-align: right">
          <span>登陆</span>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main">
      <el-space class="square-container" :size="30">
        <div class="square-card" v-for="item in 40">
          <img class="img" src="/img/package.png" />
          <div class="desc">互联网通用简历模板</div>
          <div class="mask">
            <router-link to="/resume-template">
              <el-button type="primary"> 查看模板 </el-button>
            </router-link>
          </div>
        </div>
      </el-space>
    </el-main>
  </el-container>
</template>

<style scoped lang="less">
.header {
  position: relative;
  width: 100%;
  height: 60px;
  z-index: 90;
  padding: 0 10px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 #d0d3db;
  transition: background 0.5s;

  .row {
    margin: 0px 5%;
    height: 100%;

    .title {
      font-size: 24px;
      vertical-align: middle;
      display: inline-block;
      color:#000;
    }
    .menu {
      width: 300px;
      border: none;
    }
  }
}
.main {
  padding: 20px;
  min-height: calc(100vh - 60px);
  background-color: #f0f9ff;
}

.square-container {
  display: flex;
  flex-wrap: wrap;
  .square-card {
    margin-bottom: 20px;
    position: relative;
    width: 200px;
    padding: 10px;
    height: 311px;
    border-radius: 2px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      .mask {
        display: flex;
      }
    }
    .mask {
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.66);
    }

    .img {
      width: 100%;
      height: 250px;
      background-color: rgb(242, 242, 242);
    }

    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 10px 0;
      font-size: 14px;
    }
  }
}
</style>