<template>
    <div>
        <div class="input-containers">
            <label>Name: </label>
            <input type="text" v-model="data.name" />
        </div>
        <div class="input-containers">
            <label>Email: </label>
            <input type="text" v-model="data.email" />
        </div>
        <div class="input-containers">
            <label>Number: </label>
            <input type="text" v-model="data.number" />
        </div>
        <div class="input-containers">
            <label>Country: </label>
            <input type="text" v-model="data.country" />
        </div>
        <div class="input-containers">
            <label>City: </label>
            <input type="text" v-model="data.city" />
        </div>
        <div class="input-containers">
            <label>Address: </label>
            <textarea rows="3" v-model="data.address" />
        </div>
        <div class="input-containers">
            <label>Website: </label>
            <input type="text" v-model="data.website" />
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsBasics",
    computed: {
        data() {
            return this.$store.state.data
        }
    }
}
</script>

<style>

</style>
