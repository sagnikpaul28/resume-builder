<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Layout v-if="showLayout" />
    <ThemeColors v-if="showThemeColors" />
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from '@/components/Layout.vue';
import ThemeColors from '@/components/ThemeColors.vue';

export default {
  name: 'home',
  components: {
    Layout,
    ThemeColors
  },
  data() {
    return {
      showLayout: false,
      showThemeColors: true
    }
  }
}
</script>
