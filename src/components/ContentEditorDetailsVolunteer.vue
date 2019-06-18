<template>
    <div>
        <div class="items accordion" v-for="item in data.volunteer" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('volunteer', item._id)">{{item.title}}, {{item.companyName}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Title:</label>
                    <input type="text" v-model="editFields.volunteer.title" />
                </div>
                <div class="input-containers">
                    <label>Company:</label>
                    <input type="text" v-model="editFields.volunteer.companyName" />
                </div>
                <div class="input-containers">
                    <label>Location:</label>
                    <input type="text" v-model="editFields.volunteer.location" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="editFields.volunteer.description" />
                </div>
                <div class="input-containers">
                    <label>Date From:</label>
                    <input type="text" v-model="editFields.volunteer.dateFrom" />
                </div>
                <div class="input-containers">
                    <label>Date To:</label>
                    <input type="text" v-model="editFields.volunteer.dateTo" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add Volunteer Experience
            <div class="input-containers">
                <label>Title:</label>
                <input type="text" v-model="newFields.volunteer.title" />
            </div>
            <div class="input-containers">
                <label>Company:</label>
                <input type="text" v-model="newFields.volunteer.companyName" />
            </div>
            <div class="input-containers">
                <label>Location:</label>
                <input type="text" v-model="newFields.volunteer.location" />
            </div>
            <div class="input-containers">
                <label>Description: </label>
                <textarea rows="4" v-model="newFields.volunteer.description" />
            </div>
            <div class="input-containers">
                <label>Date From:</label>
                <input type="text" v-model="newFields.volunteer.dateFrom" />
            </div>
            <div class="input-containers">
                <label>Date To:</label>
                <input type="text" v-model="newFields.volunteer.dateTo" />
            </div>
            <button class="save" @click="onFieldSubmit()">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsVolunteer",
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
