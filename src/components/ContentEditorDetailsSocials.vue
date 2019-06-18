<template>
    <div>
        <div class="input-containers">
            <label>Facebook: </label>
            <input type="text" v-model="data.social.facebook" />
        </div>
        <div class="input-containers">
            <label>Twitter: </label>
            <input type="text" v-model="data.social.twitter" />
        </div>
        <div class="input-containers">
            <label>LinkedIn: </label>
            <input type="text" v-model="data.social.linkedin" />
        </div>
        <div class="input-containers">
            <label>Github: </label>
            <input type="text" v-model="data.social.github" />
        </div>
        <div class="input-containers">
            <label>Stack Overflow: </label>
            <input type="text" v-model="data.social.stackoverflow" />
        </div>
        <div class="input-containers">
            <label>Instagram: </label>
            <textarea rows="3" v-model="data.social.instagram" />
        </div>
        <div class="input-containers">
            <label>Medium: </label>
            <input type="text" v-model="data.social.medium" />
        </div>
        <div class="input-containers">
            <label>Quora: </label>
            <input type="text" v-model="data.social.quora" />
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsSocials",
    computed: {
        data() {
            return this.$store.state.data
        }
    }
}
</script>

<style>

</style>
