<template>
  <div id="about">
    <h1 class="column-heading">ABOUT ME</h1>
    <div class="about-box">
      <div class="skillBox">
        <span>Html5</span>
        <span>CSS3</span>
        <span>Less</span>
        <span>JavaScript</span>
        <span>Vue2/3</span>
        <span>Vite</span>
        <span>React</span>
      </div>
      <div class="photo">
        <img src="https://www.hecongcong.com/image/my-photo.png" alt="">
      </div>
      <div class="about-me">
        <p class="about-me-content">
          Hi 你好<br />
          我叫何聪聪 <br />
          来自<a target="_blank"
            href="https://baike.baidu.com/item/%E6%B3%89%E5%B7%9E%E5%B8%82/607673?fromtitle=%E7%A6%8F%E5%BB%BA%E7%9C%81%E6%B3%89%E5%B7%9E%E5%B8%82&fromid=1025101&fr=aladdin">福建省泉州市</a>
          <br />
          会讲全国难度第二的方言<a target="_blank"
            href="https://baike.baidu.com/item/%E9%97%BD%E5%8D%97%E8%AF%AD/619140?fr=aladdin">闽南语</a><br />
          于2021年毕业于统战部直属<a target="_blank"
            href="https://baike.baidu.com/item/%E5%8D%8E%E4%BE%A8%E5%A4%A7%E5%AD%A6/221441?fr=aladdin">国立华侨大学</a> <br />
          目前的职业是程序员, 具体方向是<a target="_blank"
            href="https://baike.baidu.com/item/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/10009024?fr=aladdin">Web前端开发</a>
          <br />
          …… <br />
        </p>

        <a class="resume" href="/前端开发_何聪聪_1515-9892-574.pdf" target="_blank">
          <button>Download CV</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
#about {
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 50px;
  }

  .about-box {
    // border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    .skillBox {
      // position: absolute;
      display: flex;
      flex-direction: column;
      // top: 50%;
      // transform: translateY(-50%);
      // right: 0;

      span {
        margin: 10px;
        border: 2px solid var(--theme-color);
        border-radius: 5px;
        padding: 5px 10px;
        text-align: center;
        cursor: pointer;

        &:hover {
          background-color: var(--theme-color);
        }
      }
    }

    .photo {
      border: 2px solid var(--theme-color);
      margin-left: 50px;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      background-color: var(--theme-color-dark);

      img {
        height: 100%;
        scale: 1.1;
      }
    }

    .about-me {
      margin-left: 50px;

      .about-me-content {
        line-height: 48px;

        a {
          color: var(--theme-color);
          margin: 0 1px;
        }
      }

      .resume {
        button {
          color: #fff;
          cursor: pointer;
          font-weight: bold;
          font-size: 16px;
          padding: 7px 30px;
          border-radius: 5px;
          border: 3px solid rgba(255, 255, 255, .5);
          background-color: transparent;

          &:hover {
            background-color: var(--theme-color-dark);
            border-color: var(--theme-color-dark);
          }
        }
      }
    }
  }
}
</style>