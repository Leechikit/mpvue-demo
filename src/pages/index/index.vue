<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
    <!-- 创建 3个 click-counter 组件 -->
    <click-counter :init-num="10" @clicknum="handleClickNum" />
    <click-counter :init-num="20" @clicknum="handleClickNum" />
    <click-counter :init-num="30" @clicknum="handleClickNum">
      <!-- 填坑用... -->
      <input type="checkbox" /> 禁用
    </click-counter>
  </div>
</template>

<script>
// 导入 click-counter 组件
import ClickCounter from '@/components/click-counter'

export default {
  // 声明在当前组件下使用 counter-click 组件
  components: { ClickCounter },

  data() {
    return {
      msg: 'Hello'
    }
  },

  methods: {
    clickHandle() {
      this.msg = 'Clicked!!!!!!'
    },
    handleClickNum(data) {
      console.log('>>>>>>', data.num)
    }
  }
}
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>