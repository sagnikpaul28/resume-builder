<template>
    <div>
        <div class="input-containers">
            <label>Name: </label>
            <input type="text" v-model="data.basics.name" />
        </div>
        <div class="input-containers">
            <label>Email: </label>
            <input type="text" v-model="data.basics.email" />
        </div>
        <div class="input-containers">
            <label>Number: </label>
            <input type="text" v-model="data.basics.number" />
        </div>
        <div class="input-containers">
            <label>Country: </label>
            <input type="text" v-model="data.basics.country" />
        </div>
        <div class="input-containers">
            <label>City: </label>
            <input type="text" v-model="data.basics.city" />
        </div>
        <div class="input-containers">
            <label>Address: </label>
            <textarea rows="3" v-model="data.basics.address" />
        </div>
        <div class="input-containers">
            <label>Website: </label>
            <input type="text" v-model="data.basics.website" />
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
