<template>
  <div id="works">
    <h1 class="column-heading">WORKS</h1>
    <div class="project-box">
      <div class="project-item" v-for="i in 3">
        <div class="project-img">
          <img src="https://www.hecongcong.com/image/project.jpg">
        </div>
        <div class="project-title">
          <h3 class="project-name">项目名称</h3>
          <div class="project-des">项目描述</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
#works {
  min-height: calc(100vh - 180px);
  text-align: center;
  // padding: 70px 0 50px;
  // background-color: rgb(40, 40, 40);

  h1 {
    margin-bottom: 50px;
  }


  .project-box {
    padding: 0 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);


    .project-item {
      // border: 1px solid #fff;
      width: 300px;
      height: 200px;
      margin: 20px;
      border-radius: 15px;
      overflow: hidden;
      transition: top 1s ease-in-out;
      background-color: rgb(40, 40, 40);
      cursor: pointer;
      position: relative;

      img {
        width: 100%;
        // height: 100%;
      }

      &:hover {
        box-shadow: rgba(255, 255, 255, 0.5) 0 5px 5px;

        .project-title {
          top: 50%;
          transform: translateY(-50%);
        }
      }

      .project-title {
        position: absolute;
        top: 100%;
        // top: 50%;
        width: 100%;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.7);
        padding: 20px 0;
        transition: all .25s ease-in-out;

        .project-name {
          color: #000;
          margin: 5px 0;
        }

        .project-des {
          font-size: 12px;
          color: gray;
        }
      }

    }
  }

}
</style>