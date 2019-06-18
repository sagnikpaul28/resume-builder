<template>
    <div>
        <div class="items accordion" v-for="item in data.conferences" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('conferences', item._id)">{{item.name}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Name:</label>
                    <input type="text" v-model="editFields.conferences.name" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="editFields.conferences.description" />
                </div>
                <div class="input-containers">
                    <label>Date From:</label>
                    <input type="text" v-model="editFields.conferences.dateFrom" />
                </div>
                <div class="input-containers">
                    <label>Date To:</label>
                    <input type="text" v-model="editFields.conferences.dateTo" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add Conferences
            <div class="input-containers">
                <label>Name:</label>
                <input type="text" v-model="newFields.conferences.name" />
            </div>
            <div class="input-containers">
                <label>Description: </label>
                <textarea rows="4" v-model="newFields.conferences.description" />
            </div>
            <div class="input-containers">
                <label>Date From:</label>
                <input type="text" v-model="newFields.conferences.dateFrom" />
            </div>
            <div class="input-containers">
                <label>Date To:</label>
                <input type="text" v-model="newFields.conferences.dateTo" />
            </div>
            <button class="save" @click="onFieldSubmit('conferences')">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsConferences",
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
            //A
        },
        expandAccordion(field, id) {
            this.$store.dispatch('expandAccordion', {field, id});
        }
    }
}
</script>
