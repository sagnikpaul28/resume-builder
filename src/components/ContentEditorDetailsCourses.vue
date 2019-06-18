<template>
    <div>
        <div class="items accordion" v-for="item in data.courses" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('courses', item._id)">{{item.name}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Name:</label>
                    <input type="text" v-model="editFields.courses.name" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="editFields.courses.description" />
                </div>
                <div class="input-containers">
                    <label>Date From:</label>
                    <input type="text" v-model="editFields.courses.dateFrom" />
                </div>
                <div class="input-containers">
                    <label>Date To:</label>
                    <input type="text" v-model="editFields.courses.dateTo" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add Courses
            <div class="input-containers">
                <label>Name:</label>
                <input type="text" v-model="newFields.courses.name" />
            </div>
            <div class="input-containers">
                <label>Description: </label>
                <textarea rows="4" v-model="newFields.courses.description" />
            </div>
            <div class="input-containers">
                <label>Date From:</label>
                <input type="text" v-model="newFields.courses.dateFrom" />
            </div>
            <div class="input-containers">
                <label>Date To:</label>
                <input type="text" v-model="newFields.courses.dateTo" />
            </div>
            <button class="save" @click="onFieldSubmit()">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsCourses",
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