<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Layout v-if="showLayout" />
    <ThemeColors v-if="showThemeColors" />
    <FontSelector v-if="showFontSelector" />
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from '@/components/Layout.vue';
import ThemeColors from '@/components/ThemeColors.vue';
import FontSelector from '@/components/FontSelector.vue';

export default {
  name: 'home',
  components: {
    Layout,
    ThemeColors,
    FontSelector
  },
  data() {
    return {
      showLayout: false,
      showThemeColors: false,
      showFontSelector: true
    }
  }
}
</script>
