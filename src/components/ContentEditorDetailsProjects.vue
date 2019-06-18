<template>
    <div>
        <div class="items accordion" v-for="item in data.projects" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('projects', item._id)">{{item.name}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Name:</label>
                    <input type="text" v-model="editFields.projects.name" />
                </div>
                <div class="input-containers">
                    <label>Link:</label>
                    <input type="text" v-model="editFields.projects.link" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="editFields.projects.description" />
                </div>
                <div class="input-containers">
                    <label>Date From:</label>
                    <input type="text" v-model="editFields.projects.dateFrom" />
                </div>
                <div class="input-containers">
                    <label>Date To:</label>
                    <input type="text" v-model="editFields.projects.dateTo" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add Project
            <div class="input-containers">
                <label>Name:</label>
                <input type="text" v-model="newFields.projects.name" />
            </div>
            <div class="input-containers">
                <label>Link:</label>
                <input type="text" v-model="newFields.projects.link" />
            </div>
            <div class="input-containers">
                <label>Description: </label>
                <textarea rows="4" v-model="newFields.projects.description" />
            </div>
            <div class="input-containers">
                <label>Date From:</label>
                <input type="text" v-model="newFields.projects.dateFrom" />
            </div>
            <div class="input-containers">
                <label>Date To:</label>
                <input type="text" v-model="newFields.projects.dateTo" />
            </div>
            <button class="save" @click="onFieldSubmit('projects')">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsProjects",
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
