<template>
    <div>
        <div class="items" v-for="item in data.skills" :key="item.name">
            {{ item.name }}
            <span class="close">x</span>
        </div>
        <div class="input-containers">
            <label>Add Skills: </label>
            <input type="text" v-model="newFields.skills" class="add-item" />
            <button type="button" @click="onFieldSubmit()">Add</button>
        </div>
    </div>
</template>

<script>
export default {
name: "ContentEditorDetailsSkills",
    computed: {
        data() {
            return this.$store.state.data
        },
        newFields() {
            return this.$store.state.newFields
        }
    },
    methods: {
        onFieldSubmit() {
            //call action store with params 'skills'
        }
    }
}
</script>

<style>

</style>
