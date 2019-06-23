<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
  min-height: 100vh;
  background: #303d46;
  color: #1886d1;
  padding: 0 1em;
  display: flex;
  justify-content: center;
  align-items: center;
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
