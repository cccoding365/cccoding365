<template>
  <div style="height: 100px;">
    <div id="header">
      <div class="logo">
        <img src="https://www.hecongcong.com/image/LOGO.png" alt="">
      </div>
      <div class="navBox">
        <router-link class="navItem" to="/">首页</router-link>
        <!-- <router-link class="navItem" to="/navigation">导航</router-link> -->
        <router-link class="navItem" to="/about">关于</router-link>
        <router-link class="navItem" to="/works">作品</router-link>
        <router-link class="navItem" to="/other">其他</router-link>
      </div>
    </div>
  </div>

</template>

<script setup>

</script>

<style lang="less" scoped>
#header {
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 200px;
  z-index: 99;

  .logo {
    display: flex;
    margin-right: auto;
    width: 180px;

    img {
      width: 100%;
    }
  }

  .navBox {

    .navItem {
      font-size: 16px;
      margin: 0 10px;
      position: relative;
      cursor: pointer;
      transition: all .25s ease-in;
      border-radius: 5px;
      padding: 5px 20px;
      
      &:hover {
        background-color: rgba(255, 255, 255, .2);
        color: var(--theme-color);
      }

      &::after {
        content: '';
        left: 50%;
        transform: translateX(-50%);
        top: 120%;
        position: absolute;
        width: 0%;
        height: 3px;
        background-color: var(--theme-color);
        transition: all .25s ease-in-out;
      }

      &:hover:after {
        width: 100%;
      }
    }

    .router-link-active {
      color: var(--theme-color);
      background-color: rgba(255, 255, 255, 0.2);

      &::after {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width:500px) {
  #header {
    padding: 0px;
    justify-content: center;

    .logo {
      width: 150px;
    }

    .navBox {
      .navItem {
        font-size: 14px;
        margin: 0 5px;
      }
    }
  }
}
</style>