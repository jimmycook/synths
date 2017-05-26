<template>
  <div id="app">
    <header>
      <router-link to="/">Mono</router-link>
      <router-link to="/poly">Poly</router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}

</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  background-color: #4fc08d;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

header a {
  font-size: 20px;  
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  color: white;
  text-decoration: none;
  flex-grow: 1;  
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*border-bottom: 1px solid #2c3e50;*/
}

header a:hover, .router-link-exact-active {
  text-decoration: underline;
}
</style>
