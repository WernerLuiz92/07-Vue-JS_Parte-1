<template>
  <div id="app">
    <img src="./assets/logo.png" height="200px">
    <h1>{{ msg }}</h1>
    <h2>Entre em contato comigo:</h2>
    <ul>
      <li><a href="https://github.com/WernerLuiz92" target="_blank">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/werner-gottschalt/" target="_blank">LinkedIn</a></li>
      <li><a href="https://www.facebook.com/werner.gottschalt" target="_blank">Facebook</a></li>
      <li><a href="https://www.instagram.com/werner_luiz/" target="_blank">Instagram</a></li>
    </ul>
    <br>
    <h2>Minhas habilidades</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">Vue</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">PHP</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">MySQL</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">Docker</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Werner Gottschalt'
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
