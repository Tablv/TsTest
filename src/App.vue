<template>
  <div id="app">
    <my-input
      ref="myInput"
      type="text"
      v-model="message"
      :clearable="true"
      placeholder="请输入内容"
      >
      <div slot="prepend">搜索</div>
      <div slot="append" @click="handleClick">点击</div>
      </my-input>
      <!-- :disabled="true" -->
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
import MyInput from './components/MyInput'
export default {
  components: {
    MyInput
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    handleClick() {
      alert(this.message)
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
