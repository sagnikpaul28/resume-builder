<template>
  <div class="home">
    <p class="title">The Online Resume Builder you deserve</p>
    <p class="subtitle">Creating a professional resume has never been so easy</p>
    <button type="button" class="build-your-resume" @click="goToNextState()">Build Your Resume</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    goToNextState() {
      this.$router.push('basics');
    }
  }
}
</script>

<style lang="scss">
.home {
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  .title {
    font-size: 2em;
    font-weight: 900;
    margin: 0;
  }

  .subtitle {
    font-size: 1.75em;
    font-weight: 900;
    margin: 5px;
  }

  .build-your-resume {
    background: transparent;
    border: 3px solid #1886d1;
    color: #1886d1;
    font-size: 1.5em;
    padding: 15px 30px;
    font-weight: bold;
    margin: 20px 0 0;
  }
}
</style>
