<template>
  <!-- <section class="header">
    <transition
      mode="out-in"
      name="custom-classes-transition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOut"
    >
      <ul class="ul">
        <li class="li">
          <router-link
            class="routerJump"
            :style="{ color: currentPath === '/home' ? 'bisque' : 'white' }"
            to="/home"
            >首页</router-link
          >
        </li>
        <li class="li">
          <router-link
            class="routerJump"
            :style="{ color: currentPath === '/article' ? 'bisque' : 'white' }"
            to="/article"
            >文章分类</router-link
          >
        </li>
        <li class="li">
          <router-link
            class="routerJump"
            :style="{ color: currentPath === '/comment' ? 'bisque' : 'white' }"
            to="/comment"
            >留言</router-link
          >
        </li>
      </ul>
    </transition>
  </section> -->
  <div class="container">
    <el-menu
      default-active="/home"
      class="el-menu-vertical"
      router
      :collapse="isCollapse"
    >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-location"></i>
        <span slot="title">文章分类</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="el-icon-document"></i>
        <span slot="title">留言</span>
      </el-menu-item>
      <!-- <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
    <div
      :class="isCollapse ? 'el-menu-btn-left' : 'el-menu-btn-right'"
      @click="handlerClickMenu"
    >
      <i class="el-icon-s-fold"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class HeaderNav extends Vue {
  value = null
  isCollapse: boolean = false

  get currentPath() {
    return this.$route.path
  }
  handlerClickMenu() {
    this.isCollapse = !this.isCollapse
    this.$forceUpdate()
  }
}
</script>

<style lang="less" scoped>
.header {
  z-index: 100;
  width: 100%;
  position: relative;
  height: 60px;
  background-color: #7387fe;
  .icon {
    color: white;
    font-size: 30px;
    display: inline-block;
    margin-left: 140px;
    margin-top: 20px;
    line-height: 30px;
  }

  .ul {
    padding-left: 0;
    width: 85%;
    height: 60px;
    margin: 0 auto;

    .li {
      color: white;
      width: 120px;
      font-size: 18px;
      list-style: none;
      float: left;
      text-align: left;
      line-height: 60px;
      .routerJump {
        text-decoration: none;
        color: white;
      }
      .routerJump:hover {
        color: bisque;
      }
      .input {
        margin-left: 60px;
        width: 200px;
        line-height: 60px;
      }
    }
  }
}
.el-menu-vertical {
  // width: 199px;
  position: sticky;
  top: 0;
  left: 0;
  height: calc(100vh);
  background: #fff;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-btn-right {
  margin-top: calc((100vh / 2) - 30px);
  width: 14px;
  line-height: 60px;
  border-radius: 0 10px 10px 0;
  background: #bac4cf;
  font-size: 14px;
  cursor: pointer;
}
.el-menu-btn-left {
  margin-top: calc((100vh / 2) - 30px);
  width: 14px;
  line-height: 60px;
  border-radius: 0 10px 10px 0;
  background: #bac4cf;
  font-size: 14px;
  cursor: pointer;
}
</style>
