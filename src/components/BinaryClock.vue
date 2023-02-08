<template>
  <div class="projectBox">
    <div class="container">
      <div class="timeBox" v-for="i in binaryTime">
        <div class="timePoint" :class="{ active: j == 1 }" v-for="j in i"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      binaryTime: [
        [0, 0, 0, 0], [0, 0, 0, 0],
        [0, 0, 0, 0], [0, 0, 0, 0],
        // [0, 0, 0, 0], [0, 0, 0, 0],
      ]
    }
  },
  mounted() {
    this.time2Binary()
  },
  methods: {
    time2Binary() {
      setInterval(() => {
        let hours = new Date().getHours(),
          minutes = new Date().getMinutes(),
          seconds = new Date().getSeconds();
        let a = Math.floor(hours / 10).toString(2).padStart(4, 0),
          b = (hours % 10).toString(2).padStart(4, 0),
          c = Math.floor(minutes / 10).toString(2).padStart(4, 0),
          d = (minutes % 10).toString(2).padStart(4, 0),
          e = Math.floor(seconds / 10).toString(2).padStart(4, 0),
          f = (seconds % 10).toString(2).padStart(4, 0);
        // this.binaryTime = [[...a], [...b], [...c], [...d], [...e], [...f]]
        this.binaryTime = [[...a], [...b], [...c], [...d]]
      }, 1000)
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  /* background-color: #000; */
  /* padding: 30px; */
}

.timeBox:nth-child(2) {
  margin-right: 5px;
}

.timeBox:nth-child(3) {
  margin-left: 5px;
}

.timeBox:nth-child(4) {
  margin-right: 5px;
}

.timeBox:nth-child(5) {
  margin-left: 5px;
}

.timePoint {
  width: 20px;
  height: 20px;
  margin: 5px 2px;
  border-radius: 3px;
  background-color: rgba(128, 128, 128, .7);
  transition: .5s;
}

.timePoint.active {
  background-color: #fff;
  /* box-shadow: rgba(255, 255, 255, .5) 1px 1px 1px; */
}
</style>