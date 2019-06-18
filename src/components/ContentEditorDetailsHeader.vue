<template>
    <div>
        <div class="input-containers">
            <label>Title: </label>
            <input type="text" v-model="data.intro.title" />
        </div>
        <div class="input-containers">
            <label>Summary: </label>
            <textarea rows="3" v-model="data.intro.summary" />
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsHeader",
    computed: {
        data() {
            return this.$store.state.data
        }
    }
}
</script>

<style>

</style>
