<template>
    <div>
        <div class="items accordion" v-for="item in data.publications" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('publications', item._id)">{{item.title}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Title:</label>
                    <input type="text" v-model="editFields.publications.title" />
                </div>
                <div class="input-containers">
                    <label>Authors:</label>
                    <input type="text" v-model="editFields.publications.instituteName" />
                </div>
                <div class="input-containers">
                    <label>Date:</label>
                    <input type="text" v-model="editFields.publications.date" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="editFields.publications.description" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add Publications
            <div class="input-containers">
                <label>Title:</label>
                <input type="text" v-model="newFields.publications.title" />
            </div>
            <div class="input-containers">
                <label>Authors:</label>
                <input type="text" v-model="newFields.publications.authors" />
            </div>
            <div class="input-containers">
                <label>Date:</label>
                <input type="text" v-model="newFields.publications.date" />
            </div>
            <div class="input-containers">
                <label>Description: </label>
                <textarea rows="4" v-model="newFields.publications.description" />
            </div>
            <button class="save" @click="onFieldSubmit()">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsPublications",
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
