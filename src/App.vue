<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    fetch("http://localhost:4000/fetch-user?email=" + "sagnikpaul2882@gmail.com").then(res => res.json()).then(res => {
      this.$store.dispatch('saveLoadedData', res);
    })
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  max-width: 800px;
}

body {
  margin: 0 auto;
  min-height: calc(100vh - 4em);
  background: #303d46;
  color: #1886d1;
  padding: 2em 1em;
  display: flex;
  justify-content: center;
}

.row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 -10px;

    .col {
        flex: 1;
    }
}
</style>
