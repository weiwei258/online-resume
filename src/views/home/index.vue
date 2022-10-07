<template>
  <el-container>
    <el-header class="header">
      <el-row class="header--row" justify="space-between" align="middle">
        <el-col :span="12"> <div class="title">在线简历</div> </el-col>
        <el-col :span="12">
          <el-row justify="end">
            <el-space :size="60" class="space">
              <router-link to="/home" class="link"> 首页 </router-link>
              <router-link to="/square" class="link"> 模板 </router-link>
              <router-link to="/editor" class="button">开始使用 </router-link>
            </el-space>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main full-screen">
      <div class="main--header">
        在线 Markdown 简历制作工具
      </div>
    </el-main>
  </el-container>
</template>

<style scoped lang="less">
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 82px;

  .header--row {
    margin: 0 10%;
    height: 100%;

    .title {
      font-size: 20px;
      font-weight: 600;
      color: #000;
    }

    .link {
      color: #000 !important;
    }

    .button {
      padding: 10px 30px;
      display: inline-block;
      border: 0;
      overflow: hidden;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      background: linear-gradient(-45deg, #eeff36, #9f69fe, #27c8b7, #3f00b5);
      background-size: 800% 400%;
      color: white;
      transition: all 0.5s ease-in-out;
      animation: gradient 10s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99) both;
    }

    .space /deep/.el-space__item:last-child {
      margin-right: 0 !important;
    }
  }
}
.main {
  padding-top: 82px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center center;
  background-image: url(./img/blue.jpeg);

  .main--header {
    margin:270px 0 0 10%;
    word-spacing: 5px;
    
    font-size: 50px;
    font-weight: 700;
  }
}
.full-screen {
  height: 100vh;
}
</style>



