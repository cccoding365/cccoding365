<template>
  <div id="main">
    <div class="info">
      <div class="self-introduction">Aloha! <br />
        I'm <span class="name">何聪聪</span> .</div>
      <div class="occupation">Web Front-end Developer.</div>
      <!-- <div class="email"><a href="mailto:992196871@qq.com" target="_blank">Email : 992196871@qq.com</a></div> -->
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
#main {
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;

  .info {

    .self-introduction {
      margin: 10px 0;
      font-size: 60px;
      font-weight: bold;

      .name {
        color: var(--theme-color);
      }
    }

    .occupation {
      font-size: 48px;
      color: rgba(255, 255, 255, 0.3);
      font-family: SonicSurge-nReqV;
    }

    .email {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}

@media screen and (max-width:500px) {
  #main {
    flex-direction: column;
    padding: 0px;

    .info {
      .self-introduction {
        font-size: 36px;
        font-family: SaintCarellPersonalRegular;
      }

      .occupation {
        font-size: 24px;
      }
    }
  }
}
</style>