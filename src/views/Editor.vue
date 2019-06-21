<template>
    <div class="editor">
        <Navbar />
        
        <Layout v-if="showLayout" />
        <ThemeColors v-if="showThemeColors" />
        <FontSelector v-if="showFontSelector" />
        <ContentEditor v-if="showContentEditor" />

        <ContentEditorDetails v-if="showEditDetails" />

    </div>
</template>

<script>
import Layout from '@/components/Layout.vue';
import ThemeColors from '@/components/ThemeColors.vue';
import FontSelector from '@/components/FontSelector.vue';
import ContentEditor from '@/components/ContentEditor.vue';
import Navbar from '@/components/Navbar.vue';
import ContentEditorDetails from '@/components/ContentEditorDetails.vue';

export default {
    name: "Editor",
    components: {
        Layout,
        ThemeColors,
        FontSelector,
        ContentEditor,
        Navbar,
        ContentEditorDetails
    },
    computed: {
        showEditDetails() {
            return this.$store.state.showEditDetails
        },
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
