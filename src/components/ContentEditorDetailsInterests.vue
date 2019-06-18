<template>
    <div>
        <div class="items" v-for="item in data.interests" :key="item.name">
            {{ item.name }}
            <span class="close">x</span>
        </div>
        <div class="input-containers">
            <label>Add Interests: </label>
            <input type="text" v-model="newFields.interests" class="add-item" />
            <button type="button" @click="onFieldSubmit('interests')">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsInterests",
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
