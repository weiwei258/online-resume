<template>
  <el-container>
    <el-header class="header">
      <el-row class="row" align="middle" justify="space-between">
        <el-col :span="21">
          <el-space :size="30">
            <div class="title">在线简历</div>
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
      <div class="template-detail-container">
        <div class="template-left"></div>
        <div class="template-right">
          <h1 class="h1">互联网通用简历模板</h1>
          <router-link to="/editor">
            <el-button type="primary" class="button">使用此模板</el-button>
          </router-link>
        </div>
      </div>
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

  .template-detail-container {
    margin: 0 auto;
    display: flex;
    width: 1010px;

    .template-left {
      width: 680px;
      height: 959px;
      background-color: #ffffff;
    }

    .template-right {
      margin-left: 30px;
      padding: 20px;
      width: 300px;
      background-color: #fff;

      .h1 {
        font-size: 20px;
        padding: 0px 0px 10px;
        margin: 0;
      }

      .button{
        margin: auto;
        display: block;
        width:200px;
      }
    }
  }
}
</style>