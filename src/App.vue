<template>
  <Header />
  <transition>
    <router-view />
  </transition>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="less" scoped>
.v-enter-active {
  transition: all 1s ease;
}

.v-enter-from {
  transform: translateY(30px);
  opacity: 0;
}
</style>