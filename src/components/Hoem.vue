<template>
  <el-container class="hoem-container">
    <!-- 头部 -->
    <el-header>
      <div>
        <!-- login图片 -->
        <img src="../assets/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <!-- 退出主页按钮 -->
      <el-button type="info" @click="loginout">退出</el-button>
    </el-header>
    <!-- 主页主体部分 -->
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
        >
          <!-- 一及菜单 -->
          <el-submenu index="1">
            <!-- 一及菜单模板 -->
            <template slot="title">
              <!-- 文字图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>导航一</span>
            </template>
            <!-- 二及菜单 -->
            <el-menu-item index="1-4-1">
              <!-- 二及菜单 -->
              <template slot="title">
                <!-- 文字图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
    created(){
        // 页面渲染
        this.getMenuList()
    },
  // 方法
  methods: {
    // 点击退出按钮
    loginout() {
      // 清除token值
      sessionStorage.removeItem("token");
      // 通过router编程导航跳转到login页面
      this.$router.push("/login");
    },
    // 发起axios请求 获取所有菜单
    async getMenuList() {
        var {data:res} = await this.$http.get('menus');
        console.log(res);
    }
  },
};
</script>

<style lang="less" scoped>
// scoped 防止让各种组件发生冲突
// less 可以使用less.css方法
.hoem-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #fff;
  padding-left: 0;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
</style>