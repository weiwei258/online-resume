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
      <h2 class="title">简历列表</h2>
      <div class="resume-list">
        <div class="resume-item" v-for="(item, index) in 2">
          <div class="resume-image"></div>
          <div>
            <div class="resume-name"><span>我的简历-z22Nt5</span></div>
            <div class="resume-update">更新:09-04 17:47</div>
            <div class="resume-oprate" @click="oprateClick">
              <span> 编辑 </span>
            </div>
            <div class="resume-oprate" @click="oprateClick">
              <span> 复制 </span>
            </div>
            <div class="resume-oprate" @click="oprateClick">
              <span> 删除 </span>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const oprateClick = () => {
  router.push({ path: '/editor' })
}
</script>

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
      color: #000;
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
  background-color: #fff;

  .title {
    margin: 20px 0 10px;
    font-size: 20px;
  }

  .resume-list {
    display: flex;
  }

  .resume-item {
    position: relative;
    margin-right: 20px;
    margin-bottom: 30px;
    display: flex;
    width: 450px;
    justify-content: space-between;

    .resume-image {
      border: 1px solid #e7e6e6;
      width: 180px;
      height: 250px;
      background: #fff;
      border-radius: 5px;
      cursor: pointer;
    }

    .resume-name {
      margin-top: 3px;
      margin-bottom: 5px;
      font-size: 18px;
      color: #000;
      font-weight: 450;
      width: 230px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .resume-updata {
      margin-bottom: 10px;
      font-size: 13px;
      color: #3f3f3f;
      line-height: 20px;
    }
    .resume-oprate {
      display: flex;
      align-items: center;
      line-height: 40px;
      color: #4a4a4a;
      cursor: pointer;
    }
  }
}
</style>

