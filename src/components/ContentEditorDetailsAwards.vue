<template>
    <div>
        <div class="items accordion" v-for="item in data.awards" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('awards', item._id)">{{item.name}}, {{item.instituteName}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Name:</label>
                    <input type="text" v-model="editFields.awards.name" />
                </div>
                <div class="input-containers">
                    <label>Institute Name:</label>
                    <input type="text" v-model="editFields.awards.instituteName" />
                </div>
                <div class="input-containers">
                    <label>Date:</label>
                    <input type="text" v-model="editFields.awards.date" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="editFields.awards.description" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add Awards
            <div class="input-containers">
                <label>Name:</label>
                <input type="text" v-model="newFields.awards.name" />
            </div>
            <div class="input-containers">
                <label>Institute Name:</label>
                <input type="text" v-model="newFields.awards.instituteName" />
            </div>
            <div class="input-containers">
                <label>Date:</label>
                <input type="text" v-model="newFields.awards.date" />
            </div>
            <div class="input-containers">
                <label>Description: </label>
                <textarea rows="4" v-model="newFields.awards.description" />
            </div>
            <button class="save" @click="onFieldSubmit()">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsAwards",
    computed: {
        data() {
            return this.$store.state.data
        },
        editFields() {
            return this.$store.state.editFields
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
