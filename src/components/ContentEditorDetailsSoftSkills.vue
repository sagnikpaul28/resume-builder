<template>
    <div>
        <div class="items" v-for="item in data.softSkills" :key="item.name">
            {{ item.name }}
            <span class="close">x</span>
        </div>
        <div class="input-containers">
            <label>Add Soft Skills: </label>
            <input type="text" v-model="newFields.softSkills" class="add-item" />
            <button type="button" @click="onFieldSubmit('softSkills')">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorSoftSkills",
    computed: {
        data() {
            return this.$store.state.data
        },
    },
    methods: {
        onFieldSubmit() {
            //call action store with params 'courses'
        },
        newFields() {
            return this.$store.state.newFields
        }
    }
}
</script>

<style>

</style>
