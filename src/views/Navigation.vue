<template>
  <div id="navigation">
    <div id="timeContainer" style="">
      <div id="timeText">{{ TIME }}
      </div>
    </div>
    <div id="searchBar"><input type="text" id="inputSearch" name="word" size="30" placeholder="搜索" autocomplete="off">
      <div class="searchBarBtn" id="btnSearchEng"><i id="iconSearchEng"></i></div>
      <div class="searchBarBtn" id="btnSearch"><i></i></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
let TIME = ref(null)
onMounted(() => {
  setInterval(() => {
    let hours = (new Date().getHours() + '').padStart(2, '0'),
      minutes = (new Date().getMinutes() + '').padStart(2, '0')
    TIME.value = `${hours}:${minutes}`
  }, 1000)
})
</script>

<style lang="less" scoped>
#navigation {
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 48px;
}
</style>