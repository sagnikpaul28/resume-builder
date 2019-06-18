<template>
    <div class="editor">
        <Navbar />
        
        <Layout v-if="showLayout" />
        <ThemeColors v-if="showThemeColors" />
        <FontSelector v-if="showFontSelector" />
        <ContentEditor v-if="showContentEditor" />

    </div>
</template>

<script>
import Layout from '@/components/Layout.vue';
import ThemeColors from '@/components/ThemeColors.vue';
import FontSelector from '@/components/FontSelector.vue';
import ContentEditor from '@/components/ContentEditor.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    name: "Editor",
    components: {
        Layout,
        ThemeColors,
        FontSelector,
        ContentEditor,
        Navbar
    },
    computed: {
        showLayout() {
            return this.$store.state.showLayout
        },
        showThemeColors() {
            return this.$store.state.showThemeColors
        },
        showFontSelector() {
            return this.$store.state.showFontSelector
        },
        showContentEditor() {
            return this.$store.state.showContentEditor
        }
    }
}
</script>

<style lang="scss">
.editor {
    background: #303d46;
    margin-top: 50px;

    .resume {


        .edit-icon {
            
        }
    }
}
</style>
