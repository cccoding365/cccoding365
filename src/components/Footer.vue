<template>
  <div id="footer">
    <div>© All Rights Reserved DoubledConG @{{ new Date().getFullYear() }}</div>
    <span><a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备2023000976号-1</a></span>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
#footer {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(128, 128, 128, .5);

  span {
    margin: 0 15px;
  }
}

@media screen and (max-width:500px) {
  #footer {
    flex-direction: column;
    padding: 0px;
    font-size: 12px;

    span {
      margin: 5px 0;
    }
  }
}
</style>