<template>
    <div>
        <div class="items" v-for="item in data.languages" :key="item.name">
            {{ item.name }}
            <span class="close">x</span>
        </div>
        <div class="input-containers">
            <label>Add Languages: </label>
            <input type="text" v-model="newFields.languages" class="add-item" />
            <button type="button" @click="onFieldSubmit('languages')">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsLanguages",
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
            //call action store with params 'courses'
        },
        expandAccordion(field, id) {
            this.$store.dispatch('expandAccordion', {field, id});
        }
    }
}
</script>

<style>

</style>
