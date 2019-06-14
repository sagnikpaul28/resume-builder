<template>
    <div class="editor">
        <Navbar />
        
        <Layout v-if="showLayout" />
        <ThemeColors v-if="showThemeColors" />
        <FontSelector v-if="showFontSelector" />

    </div>
</template>

<script>
import Layout from '@/components/Layout.vue';
import ThemeColors from '@/components/ThemeColors.vue';
import FontSelector from '@/components/FontSelector.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    name: "Editor",
    components: {
        Layout,
        ThemeColors,
        FontSelector,
        Navbar
    },
    data() {
        return {
            showLayout: false,
            showThemeColors: false,
            showFontSelector: false
        }
    }
}
</script>

<style>

</style>
